import { NextResponse } from "next/server";
import { computeEstimate, pitchToSlope, type SlopeKey } from "@/lib/estimate-config";
import { buildingsNear, distMeters } from "@/lib/footprints";

/**
 * Instant Estimate — measure a roof and compute an APPROXIMATE price.
 *
 * Flow: address → Google Geocoding → Google Solar (Building Insights) →
 * roof area + average pitch → Skyve pricing (lib/estimate-config).
 *
 * Env (server, secret — set in Vercel):
 *   GOOGLE_MAPS_API_KEY   a Maps Platform key with Geocoding API + Solar API enabled.
 * Without it, the route runs in MOCK mode so the UI can be built/tested.
 *
 * Never an official quote — always "approximate, subject to inspection".
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KEY = process.env.GOOGLE_MAPS_API_KEY || "";

type Body = { address?: string; lat?: number; lng?: number; slope?: SlopeKey; debug?: boolean };

async function geocode(address: string): Promise<{ lat: number; lng: number; formatted: string } | null> {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${KEY}`;
  const r = await fetch(url, { signal: AbortSignal.timeout(10000) });
  const data = (await r.json()) as {
    status: string;
    results?: { geometry: { location: { lat: number; lng: number } }; formatted_address: string }[];
  };
  const hit = data.results?.[0];
  if (!hit) return null;
  return { lat: hit.geometry.location.lat, lng: hit.geometry.location.lng, formatted: hit.formatted_address };
}

type SolarSegment = { pitchDegrees?: number; stats?: { areaMeters2?: number; groundAreaMeters2?: number } };
type SolarResponse = {
  imageryQuality?: string;
  solarPotential?: {
    wholeRoofStats?: { areaMeters2?: number; groundAreaMeters2?: number };
    roofSegmentStats?: SolarSegment[];
  };
};

type SolarOut = {
  areaMeters2: number;
  groundAreaMeters2: number;
  avgPitch: number;
  facets: number;
  imageryQuality: string;
  segments: { pitch: number; area: number }[];
};

async function solar(lat: number, lng: number): Promise<SolarOut | null> {
  // requiredQuality=MEDIUM: skip poor imagery (heavy tree cover / shadows), which
  // is where Solar under-measures. Those return 404 → routed to the manual form.
  const url =
    `https://solar.googleapis.com/v1/buildingInsights:findClosest` +
    `?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=MEDIUM&key=${KEY}`;
  const r = await fetch(url, { signal: AbortSignal.timeout(12000) });
  if (!r.ok) return null; // 404 = no coverage for this building
  const data = (await r.json()) as SolarResponse;
  const sp = data.solarPotential;
  const area = sp?.wholeRoofStats?.areaMeters2;
  const segs = sp?.roofSegmentStats || [];
  if (!area || area <= 0) return null;
  // Area-weighted average pitch across roof segments.
  let wSum = 0;
  let pSum = 0;
  let groundSum = 0;
  const segments: { pitch: number; area: number }[] = [];
  for (const s of segs) {
    const a = s.stats?.areaMeters2 || 0;
    const p = s.pitchDegrees ?? 0;
    wSum += a;
    pSum += a * p;
    groundSum += s.stats?.groundAreaMeters2 || 0;
    segments.push({ pitch: Math.round(p * 10) / 10, area: Math.round(a) });
  }
  const avgPitch = wSum > 0 ? pSum / wSum : 22; // fallback ~medium
  return {
    areaMeters2: area,
    groundAreaMeters2: sp?.wholeRoofStats?.groundAreaMeters2 || groundSum,
    avgPitch,
    facets: segs.length || 1,
    imageryQuality: data.imageryQuality || "?",
    segments,
  };
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const address = (body.address || "").trim();
  const slopeOverride = body.slope;

  // ── MOCK mode (no key yet) — lets us build/test the UX. ──
  if (!KEY) {
    const areaM2 = 210; // ~2,260 sqft sample home
    const suggested: SlopeKey = "medium";
    const slope = slopeOverride || suggested;
    const shedM2 = 22; // ~240 sq ft detached structure
    const est = computeEstimate(areaM2 + shedM2, slope, 6); // sample: 6 facets = complex
    const M2FT = 10.7639;
    return NextResponse.json({
      ok: true,
      mock: true,
      coverage: true,
      address: address || "123 Sample St, Bothell, WA",
      lat: 47.76,
      lng: -122.2,
      areaMeters2: areaM2 + shedM2,
      suggestedSlope: suggested,
      mapUrl: null,
      structures: [
        { label: "Main roof", kind: "main", areaSqft: Math.round(areaM2 * M2FT), areaM2 },
        { label: "Structure 2", kind: "secondary", areaSqft: Math.round(shedM2 * M2FT), areaM2: shedM2 },
      ],
      ...est,
    });
  }

  // ── Live mode ──
  let lat = body.lat;
  let lng = body.lng;
  let formatted = address;
  try {
    if ((lat == null || lng == null) && address) {
      const geo = await geocode(address);
      if (!geo) {
        return NextResponse.json({ ok: false, error: "We couldn't find that address." }, { status: 404 });
      }
      lat = geo.lat;
      lng = geo.lng;
      formatted = geo.formatted;
    }
    if (lat == null || lng == null) {
      return NextResponse.json({ ok: false, error: "Please enter your address." }, { status: 400 });
    }

    const roof = await solar(lat, lng);
    if (!roof) {
      // No Solar coverage for this building → tell the UI to offer a manual estimate.
      return NextResponse.json({ ok: true, coverage: false, reason: "no_coverage", address: formatted, lat, lng });
    }

    // Low-confidence guard: an implausibly small roof means Solar only captured a
    // fragment (trees / partial imagery). Route to the manual form instead of
    // showing a wrong (too-low) number.
    const areaSqftGuard = roof.areaMeters2 * 10.7639;
    if (areaSqftGuard < 500) {
      return NextResponse.json({ ok: true, coverage: false, reason: "low_confidence", address: formatted, lat, lng });
    }

    // ── Add other structures on the lot (shed/garage) that Solar's findClosest
    //    missed. Footprint ÷ cos(pitch) ≈ sloped roof area for those. ──
    const cosPitch = Math.cos((roof.avgPitch * Math.PI) / 180) || 1;
    const M2FT = 10.7639;
    const structures: { label: string; kind: "main" | "secondary"; areaSqft: number; areaM2: number }[] = [
      { label: "Main roof", kind: "main", areaSqft: Math.round(roof.areaMeters2 * M2FT), areaM2: Math.round(roof.areaMeters2) },
    ];
    let totalSlopedM2 = roof.areaMeters2;
    const plat = lat;
    const plng = lng;
    let fpDebug: { areaM2: number; dQuery: number; dMain: number; added: boolean }[] | null = null;
    try {
      const buildings = await buildingsNear(plat, plng, 28);
      if (buildings.length >= 1) {
        const withDist = buildings
          .map((b) => ({ b, d: distMeters([plat, plng], b.centroid) }))
          .sort((a, z) => a.d - z.d);
        const mainFp = withDist[0].b;
        let n = 1;
        fpDebug = [];
        for (let i = 0; i < withDist.length; i++) {
          const b = withDist[i].b;
          const dMain = distMeters(mainFp.centroid, b.centroid);
          // outbuilding on the same lot: close to the main house, not a big neighbor
          const added = i > 0 && dMain <= 14 && b.areaM2 < mainFp.areaM2 * 0.95;
          if (added) {
            const slopedM2 = b.areaM2 / cosPitch;
            totalSlopedM2 += slopedM2;
            n += 1;
            structures.push({ label: `Structure ${n}`, kind: "secondary", areaSqft: Math.round(slopedM2 * M2FT), areaM2: Math.round(slopedM2) });
          }
          fpDebug.push({ areaM2: Math.round(b.areaM2), dQuery: Math.round(withDist[i].d), dMain: Math.round(dMain), added });
        }
      }
    } catch {
      /* footprint lookup failed → main only */
    }

    const suggested = pitchToSlope(roof.avgPitch);
    const slope = slopeOverride || suggested;
    const est = computeEstimate(totalSlopedM2, slope, roof.facets);
    return NextResponse.json({
      ok: true,
      coverage: true,
      address: formatted,
      lat,
      lng,
      areaMeters2: totalSlopedM2,
      suggestedSlope: suggested,
      imageryQuality: roof.imageryQuality,
      structures,
      mapUrl: `/api/roof-image/?lat=${lat}&lng=${lng}`,
      ...est,
      ...(body.debug
        ? {
            raw: {
              areaMeters2: Math.round(roof.areaMeters2),
              areaSqftSloped: Math.round(roof.areaMeters2 * 10.7639),
              groundAreaMeters2: Math.round(roof.groundAreaMeters2),
              groundSqft: Math.round(roof.groundAreaMeters2 * 10.7639),
              avgPitch: Math.round(roof.avgPitch * 10) / 10,
              facets: roof.facets,
              imageryQuality: roof.imageryQuality,
              segments: roof.segments,
              footprints: fpDebug, // null = DB not queried/reached; [] = none found
            },
          }
        : {}),
    });
  } catch (e) {
    console.error("[estimate] error", (e as Error).message);
    return NextResponse.json({ ok: false, error: "Estimate service unavailable. Please try again." }, { status: 502 });
  }
}
