-- Skyve Instant Estimate — building footprints (Microsoft USBuildings, WA subset).
-- Run this ONCE in the Supabase SQL editor for the Skyve project, before loading data.
--
-- Source: Microsoft US Building Footprints v2, Washington (ODbL). We host a
-- bounding-box subset of the Skyve service area so the estimator can add
-- secondary structures (shed/garage) that Google Solar's findClosest misses,
-- reliably — the public OSM Overpass API rate-limits and can't be trusted in prod.
--
-- One geography column does everything we need:
--   • ST_Area(geog)         -> footprint area in m² (accurate, no projection math)
--   • ST_DWithin(geog, ...)  -> radius search, uses the GiST index
--   • geog::geometry         -> polygon coordinates for drawing on the map

create extension if not exists postgis;

create table if not exists buildings (
  id       bigint generated always as identity primary key,
  geog     geography(Polygon, 4326) not null,
  area_m2  double precision not null
);

create index if not exists buildings_geog_gix on buildings using gist (geog);

-- Staging table for the CSV load (WKT text → geography). Truncate + reuse on re-loads.
create table if not exists buildings_staging (
  wkt text not null
);

-- After \copy into buildings_staging, run this to populate `buildings`:
--
--   insert into buildings (geog, area_m2)
--   select g, ST_Area(g)
--   from (select ST_GeogFromText('SRID=4326;' || wkt) as g from buildings_staging) s
--   where ST_Area(g) between 8 and 5000;   -- drop slivers and giant non-buildings
--   truncate buildings_staging;

-- Read-only RPC exposed to the anon key. Returns every footprint within
-- `radius_m` of the point, with its area and polygon (GeoJSON) for drawing.
create or replace function buildings_near(
  q_lat    double precision,
  q_lng    double precision,
  radius_m double precision default 30
)
returns table (
  area_m2 double precision,
  lat     double precision,
  lng     double precision,
  geojson text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    b.area_m2,
    ST_Y(ST_Centroid(b.geog::geometry)) as lat,
    ST_X(ST_Centroid(b.geog::geometry)) as lng,
    ST_AsGeoJSON(b.geog::geometry)        as geojson
  from buildings b
  where ST_DWithin(b.geog, ST_MakePoint(q_lng, q_lat)::geography, radius_m)
  order by ST_Distance(b.geog, ST_MakePoint(q_lng, q_lat)::geography)
  limit 40;
$$;

-- Let the public (anon) key call the lookup, but nothing else.
revoke all on function buildings_near(double precision, double precision, double precision) from public;
grant execute on function buildings_near(double precision, double precision, double precision) to anon, authenticated;
