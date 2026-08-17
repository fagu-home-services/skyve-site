// Skyve — filter Microsoft WA building footprints to the service area and emit
// a WKT CSV ready for `\copy buildings_staging(wkt) from ... (format csv)`.
//
// Usage:
//   node scripts/ingest-footprints.mjs <Washington.geojson> <out.csv>
//
// The WA file is a FeatureCollection with ONE Feature per line inside "features".
// We stream it line-by-line (927 MB — never loaded whole), keep only footprints
// whose first vertex falls in BBOX, and write one WKT POLYGON per output line.
//
// BBOX = Skyve service area (greater King County, WA — Seattle + Eastside + south
// King). Widen/narrow here and re-run; the CSV is cheap to regenerate.

import fs from "node:fs";
import readline from "node:readline";

const BBOX = {
  minLat: 47.15,
  maxLat: 47.80,
  minLng: -122.45,
  maxLng: -121.85,
};

const [, , inPath, outPath] = process.argv;
if (!inPath || !outPath) {
  console.error("usage: node scripts/ingest-footprints.mjs <Washington.geojson> <out.csv>");
  process.exit(1);
}

const rl = readline.createInterface({
  input: fs.createReadStream(inPath, { encoding: "utf8" }),
  crlfDelay: Infinity,
});
const out = fs.createWriteStream(outPath, { encoding: "utf8" });

let scanned = 0;
let kept = 0;

function ringToWkt(ring) {
  // ring: [[lng,lat], ...]  ->  "lng lat, lng lat, ..."
  return ring.map((p) => `${p[0]} ${p[1]}`).join(", ");
}

for await (const raw of rl) {
  const line = raw.trim();
  if (!line.startsWith('{"type":"Feature"')) continue;
  scanned++;
  if (scanned % 250000 === 0) {
    process.stderr.write(`  scanned ${scanned.toLocaleString()} … kept ${kept.toLocaleString()}\n`);
  }
  // strip a trailing comma so JSON.parse is happy on every line
  const json = line.endsWith(",") ? line.slice(0, -1) : line;
  let feat;
  try {
    feat = JSON.parse(json);
  } catch {
    continue;
  }
  const g = feat.geometry;
  if (!g || g.type !== "Polygon" || !g.coordinates || !g.coordinates[0]) continue;
  const ring = g.coordinates[0];
  const [lng0, lat0] = ring[0];
  if (lat0 < BBOX.minLat || lat0 > BBOX.maxLat || lng0 < BBOX.minLng || lng0 > BBOX.maxLng) continue;
  // WKT column, CSV-quoted (WKT has commas). Only the outer ring — footprints
  // have no holes.
  out.write(`"POLYGON((${ringToWkt(ring)}))"\n`);
  kept++;
}

out.end(() => {
  process.stderr.write(`\nDONE — scanned ${scanned.toLocaleString()} features, kept ${kept.toLocaleString()} in service area.\n`);
  process.stderr.write(`CSV: ${outPath}\n`);
});
