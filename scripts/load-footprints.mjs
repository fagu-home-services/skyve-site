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
import pgCopyStreams from "pg-copy-streams";
import { pipeline } from "node:stream/promises";

const copyFrom = pgCopyStreams.from; // CJS default import → named fn (ESM-safe)

const url = process.env.SUPABASE_DB_URL;
const csv = process.argv[2];
if (!url || !csv) {
  console.error('Set SUPABASE_DB_URL and pass the CSV path.\n  node scripts/load-footprints.mjs <king_footprints.csv>');
  process.exit(1);
}

const client = new pg.Client({
  connectionString: url,
  password: process.env.PGPASSWORD || undefined, // keep the password out of the URL
  ssl: { rejectUnauthorized: false },
});

async function main() {
  await client.connect();
  await client.query("set search_path = public, extensions;"); // PostGIS ST_* live in extensions
  await client.query("set statement_timeout = 0;"); // the geography build is one big query
  console.log("connected.");
  await client.query("truncate buildings;");

  // Reuse a populated staging table (a prior run that failed on the build step
  // leaves it loaded), so retries don't re-COPY 136 MB.
  const pre = await client.query("select count(*)::int n from buildings_staging;");
  if (pre.rows[0].n > 0) {
    console.log(`staging already has ${pre.rows[0].n.toLocaleString()} rows — skipping COPY.`);
  } else {
    console.log(`COPY-ing ${csv} into buildings_staging…`);
    const ingest = client.query(copyFrom("copy buildings_staging(wkt) from stdin with (format csv)"));
    await pipeline(fs.createReadStream(csv), ingest);
    const staged = await client.query("select count(*)::int n from buildings_staging;");
    console.log(`staged ${staged.rows[0].n.toLocaleString()} rows.`);
  }

  // Bulk-load is far faster WITHOUT the spatial index live (no per-row index
  // maintenance). Drop it, insert, then rebuild — and the rebuild has a
  // progress view (pg_stat_progress_create_index) you can watch.
  console.log("dropping spatial index for fast bulk load…");
  await client.query("drop index if exists buildings_geog_gix;");

  console.log("building geography + area (1-3 min)…");
  await client.query(`
    insert into buildings (geog, area_m2)
    select g::geography, ST_Area(g::geography)
    from (select ST_GeomFromText('SRID=4326;' || wkt) as g from buildings_staging) t
    where g is not null
      and ST_IsValid(g)
      and ST_Area(g::geography) between 8 and 5000;
  `);
  const inserted = await client.query("select count(*)::int n from buildings;");
  console.log(`inserted ${inserted.rows[0].n.toLocaleString()} rows. rebuilding spatial index…`);

  await client.query("create index buildings_geog_gix on buildings using gist (geog);");
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
