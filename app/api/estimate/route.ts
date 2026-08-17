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

/** GeoJSON polygon string → "lat,lng;lat,lng;…" for the roof-image overlay. */
function ringToPoly(geojson?: string): string | undefined {
  if (!geojson) return undefined;
  try {
    const coords = (JSON.parse(geojson) as { coordinates?: number[][][] })?.coordinates?.[0];
    if (!Array.isArray(coords) || coords.length < 3) return undefined;
    return coords.map((c) => `${c[1].toFixed(6)},${c[0].toFixed(6)}`).join(";"); // [lng,lat] → "lat,lng"
  } catch {
    return undefined;
  }
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
    const shedM2 = 22; // ~240 sq ft detached structure (offered, not summed)
    const est = computeEstimate(areaM2, slope, 6); // default = main roof only
    const M2FT = 10.7639;
    return NextResponse.json({
      ok: true,
      mock: true,
      coverage: true,
      address: address || "123 Sample St, Bothell, WA",
      lat: 47.76,
      lng: -122.2,
      areaMeters2: areaM2,
      suggestedSlope: suggested,
      structures: [
        { label: "Main roof", kind: "main", areaSqft: Math.round(areaM2 * M2FT), areaM2,
          polygon: "47.7601,-122.2003;47.7601,-122.1997;47.7599,-122.1997;47.7599,-122.2003;47.7601,-122.2003" },
        { label: "Detached structure", kind: "secondary", areaSqft: Math.round(shedM2 * M2FT), areaM2: shedM2,
          polygon: "47.75982,-122.19965;47.75982,-122.19955;47.75975,-122.19955;47.75975,-122.19965;47.75982,-122.19965" },
      ],
      mapUrl: `/api/roof-image/?lat=47.76&lng=-122.2`,
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
    const structures: { label: string; kind: "main" | "secondary"; areaSqft: number; areaM2: number; polygon?: string }[] = [
      { label: "Main roof", kind: "main", areaSqft: Math.round(roof.areaMeters2 * M2FT), areaM2: Math.round(roof.areaMeters2) },
    ];
    let totalSlopedM2 = roof.areaMeters2;
    const plat = lat;
    const plng = lng;
    let fpDebug: { areaM2: number; dQuery: number; dMain: number; added: boolean }[] | null = null;
    let mainFootprintM2 = 0;
    try {
      const buildings = await buildingsNear(plat, plng, 28);
      if (buildings.length >= 1) {
        const withDist = buildings
          .map((b) => ({ b, d: distMeters([plat, plng], b.centroid) }))
          .sort((a, z) => a.d - z.d);
        const mainFp = withDist[0].b;
        mainFootprintM2 = mainFp.areaM2;
        structures[0].polygon = ringToPoly(mainFp.geojson); // draw the house outline
        let detached = 0;
        fpDebug = [];
        for (let i = 0; i < withDist.length; i++) {
          const b = withDist[i].b;
          const dMain = distMeters(mainFp.centroid, b.centroid);
          // A same-lot outbuilding (close, smaller than the house). We OFFER it as
          // an optional add — NOT summed by default, because reports are usually
          // house-only and auto-adding overshoots (validated on 11 real reports).
          const isSecondary = i > 0 && dMain <= 14 && b.areaM2 < mainFp.areaM2 * 0.95;
          if (isSecondary) {
            detached += 1;
            const slopedM2 = b.areaM2 / cosPitch;
            structures.push({
              label: detached === 1 ? "Detached structure" : `Detached structure ${detached}`,
              kind: "secondary",
              areaSqft: Math.round(slopedM2 * M2FT),
              areaM2: Math.round(slopedM2),
              polygon: ringToPoly(b.geojson),
            });
          }
          fpDebug.push({ areaM2: Math.round(b.areaM2), dQuery: Math.round(withDist[i].d), dMain: Math.round(dMain), added: isSecondary });
        }
      }
    } catch {
      /* footprint lookup failed → main only */
    }

    // Low-confidence guard: when the building's real footprint is much larger than
    // the roof Solar could measure, the imagery is partial (heavy tree cover) or
    // it's a multi-unit building (the address is one unit of many). Either way the
    // number would mislead — send them to a free in-person measurement instead.
    // Calibrated on real reports: houses sit ~1.0-1.2; a condo block hit 3.5.
    const solarGroundM2 = roof.groundAreaMeters2;
    if (mainFootprintM2 && solarGroundM2 && mainFootprintM2 / solarGroundM2 > 1.5) {
      return NextResponse.json({ ok: true, coverage: false, reason: "partial_measure", address: formatted, lat, lng });
    }

    const suggested = pitchToSlope(roof.avgPitch);
    const slope = slopeOverride || suggested;
    const est = computeEstimate(totalSlopedM2, slope, roof.facets);
    const polyParams = structures
      .map((s) => s.polygon)
      .filter((p): p is string => !!p)
      .map((p) => `&poly=${encodeURIComponent(p)}`)
      .join("");
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
      mapUrl: `/api/roof-image/?lat=${lat}&lng=${lng}${polyParams}`,
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
