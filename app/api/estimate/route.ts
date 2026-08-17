import { NextResponse } from "next/server";
import { computeEstimate, pitchToSlope, type SlopeKey } from "@/lib/estimate-config";

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

type Body = { address?: string; lat?: number; lng?: number; slope?: SlopeKey };

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

type SolarSegment = { pitchDegrees?: number; stats?: { areaMeters2?: number } };
type SolarResponse = {
  solarPotential?: {
    wholeRoofStats?: { areaMeters2?: number };
    roofSegmentStats?: SolarSegment[];
  };
};

async function solar(lat: number, lng: number): Promise<{ areaMeters2: number; avgPitch: number; facets: number } | null> {
  const url =
    `https://solar.googleapis.com/v1/buildingInsights:findClosest` +
    `?location.latitude=${lat}&location.longitude=${lng}&requiredQuality=LOW&key=${KEY}`;
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
  for (const s of segs) {
    const a = s.stats?.areaMeters2 || 0;
    const p = s.pitchDegrees ?? 0;
    wSum += a;
    pSum += a * p;
  }
  const avgPitch = wSum > 0 ? pSum / wSum : 22; // fallback ~medium
  return { areaMeters2: area, avgPitch, facets: segs.length || 1 };
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
    const est = computeEstimate(areaM2, slope, 6); // sample: 6 facets = complex
    return NextResponse.json({
      ok: true,
      mock: true,
      coverage: true,
      address: address || "123 Sample St, Bothell, WA",
      lat: 47.76,
      lng: -122.2,
      suggestedSlope: suggested,
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
      return NextResponse.json({ ok: true, coverage: false, address: formatted, lat, lng });
    }

    const suggested = pitchToSlope(roof.avgPitch);
    const slope = slopeOverride || suggested;
    const est = computeEstimate(roof.areaMeters2, slope, roof.facets);
    return NextResponse.json({
      ok: true,
      coverage: true,
      address: formatted,
      lat,
      lng,
      suggestedSlope: suggested,
      ...est,
    });
  } catch (e) {
    console.error("[estimate] error", (e as Error).message);
    return NextResponse.json({ ok: false, error: "Estimate service unavailable. Please try again." }, { status: 502 });
  }
}
