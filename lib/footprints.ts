/* Building-footprint lookup for the instant estimator.
 *
 * Google Solar's findClosest measures only ONE building (the main house). Real
 * roof reports include every structure on the lot (house + shed + garage), so
 * we detect the other footprints and add them.
 *
 * Source: OpenStreetMap via the public Overpass API (free, real-time). Good
 * enough at launch volume; migrate to a hosted Microsoft Building Footprints
 * dataset when volume grows (Overpass rate-limits). Fails soft → [] so the
 * estimate falls back to Solar-only. */

export type Footprint = {
  areaM2: number;
  centroid: [number, number]; // [lat, lng]
};

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

/** Distance in metres between two [lat,lng] points. */
export function distMeters(a: [number, number], b: [number, number]): number {
  const la = ((a[0] + b[0]) / 2) * (Math.PI / 180);
  const dy = (a[0] - b[0]) * 111320;
  const dx = (a[1] - b[1]) * 111320 * Math.cos(la);
  return Math.hypot(dx, dy);
}

const HOSTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];

/** All building footprints within `radiusM` of the point. */
export async function buildingsNear(lat: number, lng: number, radiusM = 28): Promise<Footprint[]> {
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
