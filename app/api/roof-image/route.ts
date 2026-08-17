/**
 * Satellite thumbnail proxy for the instant estimate. Fetches Google Static
 * Maps server-side so the API key never reaches the browser.
 * GET /api/roof-image?lat=..&lng=..
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KEY = process.env.GOOGLE_MAPS_API_KEY || "";

export async function GET(req: Request) {
  if (!KEY) return new Response("Not configured", { status: 404 });
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  if (!isFinite(lat) || !isFinite(lng)) return new Response("Bad request", { status: 400 });

  const url =
    `https://maps.googleapis.com/maps/api/staticmap` +
    `?center=${lat},${lng}&zoom=20&size=640x420&scale=2&maptype=satellite&key=${KEY}`;

  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!r.ok) return new Response("Upstream error", { status: 502 });
    const buf = await r.arrayBuffer();
    return new Response(buf, {
      status: 200,
      headers: {
        "Content-Type": r.headers.get("content-type") || "image/png",
        "Cache-Control": "public, max-age=86400", // cache a day (roofs don't move)
      },
    });
  } catch {
    return new Response("Timeout", { status: 504 });
  }
}
