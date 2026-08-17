import { NextResponse } from "next/server";

/**
 * Address autocomplete proxy (server-side, key stays secret).
 * GET /api/places?q=partial address  → { predictions: [{ description }] }
 * Requires the "Places API" to be enabled in Google Cloud.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KEY = process.env.GOOGLE_MAPS_API_KEY || "";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();
  if (!KEY || q.length < 3) return NextResponse.json({ predictions: [] });

  const url =
    `https://maps.googleapis.com/maps/api/place/autocomplete/json` +
    `?input=${encodeURIComponent(q)}&types=address&components=country:us&key=${KEY}`;

  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(6000) });
    const data = (await r.json()) as { status?: string; predictions?: { description: string }[] };
    if (data.status && data.status !== "OK" && data.status !== "ZERO_RESULTS") {
      // e.g. REQUEST_DENIED when Places API isn't enabled — fail soft (plain input still works)
      return NextResponse.json({ predictions: [], status: data.status });
    }
    return NextResponse.json({
      predictions: (data.predictions || []).slice(0, 5).map((p) => ({ description: p.description })),
    });
  } catch {
    return NextResponse.json({ predictions: [] });
  }
}
