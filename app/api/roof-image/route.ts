/**
 * Satellite thumbnail proxy for the instant estimate. Fetches Google Static
 * Maps server-side so the API key never reaches the browser.
 * GET /api/roof-image?lat=..&lng=..&poly=lat,lng;lat,lng;…
 *
 * Each `poly` (repeatable) is a closed ring of "lat,lng" points; it's drawn as
 * a highlighted outline on the satellite image — the roof, RoofingInsights-style.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KEY = process.env.GOOGLE_MAPS_API_KEY || "";

// Teal highlight: translucent fill + solid outline (reads well on satellite).
const PATH_STYLE = "fillcolor:0x14b8a64D|color:0x0f766eff|weight:3";

/** "lat,lng;lat,lng;…" → a Static Maps `path=` value, or null if unusable. */
function polyToPath(poly: string): string | null {
  const pts = poly
    .split(";")
    .map((p) => p.trim())
    .filter(Boolean)
    .filter((p) => {
      const [a, b] = p.split(",").map(Number);
      return isFinite(a) && isFinite(b);
    });
  if (pts.length < 3) return null;
  return `${PATH_STYLE}|${pts.join("|")}`;
}

export async function GET(req: Request) {
  if (!KEY) return new Response("Not configured", { status: 404 });
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  if (!isFinite(lat) || !isFinite(lng)) return new Response("Bad request", { status: 400 });

  const paths = searchParams
    .getAll("poly")
    .map(polyToPath)
    .filter((p): p is string => p !== null)
    .map((p) => `&path=${encodeURIComponent(p)}`)
    .join("");

  const url =
    `https://maps.googleapis.com/maps/api/staticmap` +
    `?center=${lat},${lng}&zoom=20&size=640x420&scale=2&maptype=satellite${paths}&key=${KEY}`;

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
