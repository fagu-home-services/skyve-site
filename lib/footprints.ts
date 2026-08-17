/* Building-footprint lookup for the instant estimator.
 *
 * Google Solar's findClosest measures only ONE building (the main house). Real
 * roof reports include every structure on the lot (house + shed + garage), so
 * we detect the other footprints and add them.
 *
 * PRIMARY source: our own hosted Microsoft Building Footprints (WA service-area
 * subset) in Supabase/PostGIS — reliable, free data, no rate limits. Queried
 * through the `buildings_near` RPC (see db/footprints.sql). Configured with:
 *   SUPABASE_URL        e.g. https://xxxx.supabase.co
 *   SUPABASE_ANON_KEY   the project's anon (public) key
 *
 * FALLBACK: the public OpenStreetMap Overpass API — used only when the DB isn't
 * configured. Overpass rate-limits hard and returns HTML errors under any real
 * load, so it's a stopgap, not production. Both fail soft → [] and the estimate
 * falls back to Solar-only. */

export type Footprint = {
  areaM2: number;
  centroid: [number, number]; // [lat, lng]
  geojson?: string; // polygon GeoJSON (from the DB) for drawing on the map
};

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "";

/** Distance in metres between two [lat,lng] points. */
export function distMeters(a: [number, number], b: [number, number]): number {
  const la = ((a[0] + b[0]) / 2) * (Math.PI / 180);
  const dy = (a[0] - b[0]) * 111320;
  const dx = (a[1] - b[1]) * 111320 * Math.cos(la);
  return Math.hypot(dx, dy);
}

/** All building footprints within `radiusM` of the point. */
export async function buildingsNear(lat: number, lng: number, radiusM = 30): Promise<Footprint[]> {
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    const fromDb = await buildingsNearDb(lat, lng, radiusM);
    if (fromDb) return fromDb; // includes the empty case — DB is authoritative
  }
  return buildingsNearOverpass(lat, lng, radiusM);
}

/** Hosted PostGIS lookup via the Supabase RPC. Returns null on transport error
 *  (so the caller can fall back); [] is a valid "no buildings here" answer. */
async function buildingsNearDb(lat: number, lng: number, radiusM: number): Promise<Footprint[] | null> {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/buildings_near`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ q_lat: lat, q_lng: lng, radius_m: radiusM }),
      signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) return null;
    const rows = (await r.json()) as { area_m2: number; lat: number; lng: number; geojson: string }[];
    return rows.map((b) => ({ areaM2: b.area_m2, centroid: [b.lat, b.lng] as [number, number], geojson: b.geojson }));
  } catch {
    return null;
  }
}

// ── Overpass fallback (only when the DB isn't configured) ──────────────────────

type OverpassNode = { lat: number; lon: number };

/** Planar (equirectangular) shoelace area in m² — fine at building scale. */
function polyAreaM2(geom: OverpassNode[]): number {
  if (!geom || geom.length < 3) return 0;
  const lat0 = geom.reduce((s, p) => s + p.lat, 0) / geom.length;
  const mLat = 111320;
  const mLon = 111320 * Math.cos((lat0 * Math.PI) / 180);
  const pts = geom.map((p) => [p.lon * mLon, p.lat * mLat] as [number, number]);
  let s = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % pts.length];
    s += x1 * y2 - x2 * y1;
  }
  return Math.abs(s) / 2;
}

function centroidOf(geom: OverpassNode[]): [number, number] {
  const la = geom.reduce((s, p) => s + p.lat, 0) / geom.length;
  const lo = geom.reduce((s, p) => s + p.lon, 0) / geom.length;
  return [la, lo];
}

const HOSTS = ["https://overpass-api.de/api/interpreter", "https://overpass.kumi.systems/api/interpreter"];

async function buildingsNearOverpass(lat: number, lng: number, radiusM: number): Promise<Footprint[]> {
  const q = `[out:json][timeout:20];way(around:${radiusM},${lat},${lng})["building"];out geom;`;
  for (const host of HOSTS) {
    try {
      const r = await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "SkyveRoofEstimator/1.0 (fabricio@skyvewa.com)",
        },
        body: `data=${encodeURIComponent(q)}`,
        signal: AbortSignal.timeout(9000),
      });
      if (!r.ok) continue;
      const d = (await r.json()) as { elements?: { geometry?: OverpassNode[] }[] };
      const out: Footprint[] = [];
      for (const el of d.elements || []) {
        const g = el.geometry;
        if (!g || g.length < 3) continue;
        const areaM2 = polyAreaM2(g);
        if (areaM2 > 8) out.push({ areaM2, centroid: centroidOf(g) });
      }
      if (out.length) return out;
    } catch {
      /* try next host */
    }
  }
  return [];
}
