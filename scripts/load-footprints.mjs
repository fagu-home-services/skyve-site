// Skyve — load the filtered footprints CSV into Supabase/PostGIS.
//
// One command, cross-platform (needs Node + `npm i -D pg pg-copy-streams`).
// No psql required. Streams the CSV in with COPY, then builds the geography rows.
//
// Setup once:
//   1. Create the Supabase project, run db/footprints.sql in the SQL editor.
//   2. Get the DB connection string:  Supabase → Project Settings → Database →
//      "Connection string" → URI (the direct one, port 5432). It contains the
//      password — keep it secret.
//   3. Run (PowerShell):
//        $env:SUPABASE_DB_URL = "postgresql://postgres:....@db.xxxx.supabase.co:5432/postgres"
//        node scripts/load-footprints.mjs "E:\Claude Code\skyve-footprints-data\king_footprints.csv"
//
// Safe to re-run: it truncates staging + buildings first.

import fs from "node:fs";
import pg from "pg";
import { from as copyFrom } from "pg-copy-streams";
import { pipeline } from "node:stream/promises";

const url = process.env.SUPABASE_DB_URL;
const csv = process.argv[2];
if (!url || !csv) {
  console.error('Set SUPABASE_DB_URL and pass the CSV path.\n  node scripts/load-footprints.mjs <king_footprints.csv>');
  process.exit(1);
}

const client = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } });

async function main() {
  await client.connect();
  console.log("connected. resetting tables…");
  await client.query("truncate buildings_staging;");
  await client.query("truncate buildings;");

  console.log(`COPY-ing ${csv} into buildings_staging…`);
  const ingest = client.query(copyFrom("copy buildings_staging(wkt) from stdin with (format csv)"));
  await pipeline(fs.createReadStream(csv), ingest);

  const staged = await client.query("select count(*)::int n from buildings_staging;");
  console.log(`staged ${staged.rows[0].n.toLocaleString()} rows. building geography + area…`);

  await client.query(`
    insert into buildings (geog, area_m2)
    select g::geography, ST_Area(g::geography)
    from (
      select ST_MakeValid(ST_GeomFromText('SRID=4326;' || wkt)) as g
      from buildings_staging
    ) t
    where GeometryType(g) = 'POLYGON'
      and ST_Area(g::geography) between 8 and 5000;
  `);

  await client.query("truncate buildings_staging;");
  await client.query("analyze buildings;");
  const done = await client.query("select count(*)::int n from buildings;");
  console.log(`\nDONE — ${done.rows[0].n.toLocaleString()} footprints loaded into buildings.`);
  await client.end();
}

main().catch(async (e) => {
  console.error("LOAD FAILED:", e.message);
  try { await client.end(); } catch {}
  process.exit(1);
});
