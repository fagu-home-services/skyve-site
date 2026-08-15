"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, ExternalLink, Camera, Check } from "lucide-react";
import { SITE_ROUTES } from "@/lib/site-map";
import { isPhase2 } from "@/lib/launch-phase";

/* A route is hidden from the v1 launch if it's a Phase-2 prefix or the
   deferred /login (portal entry). Everything else is the v1 review surface. */
const isHidden = (path: string) => isPhase2(path) || path === "/login";

function groupOf(path: string): string {
  if (path.startsWith("/portal")) return "Customer Portal (Phase 2)";
  if (path.startsWith("/roofing-") || path === "/service-area") return "Service Area & Cities";
  if (path.startsWith("/services/")) return "Roofing Services";
  if (path.startsWith("/materials/")) return "Roofing Materials";
  if (path.startsWith("/exteriors/")) return "Exteriors";
  if (path.startsWith("/estimate")) return "Estimate / Conversion";
  if (path.startsWith("/legal")) return "Legal";
  if (path.startsWith("/warranty")) return "Warranty";
  if (["/testimonials", "/reviews", "/certifications", "/licenses-insurance", "/safety-program"].includes(path))
    return "Trust & Proof";
  if (path.startsWith("/learn")) return "Knowledge Center (Phase 2)";
  if (path.startsWith("/calculators")) return "Calculators (Phase 2)";
  if (path.startsWith("/field-reports") || path.startsWith("/skyve-tv") || path === "/share-your-story" || path === "/ambassadors-program")
    return "Stories & Content (Phase 2)";
  if (["/pro-partner", "/realtors-program", "/contractors-program", "/investors-program", "/apply-partner"].includes(path))
    return "Pro Partner (Phase 2)";
  if (path === "/services") return "Roofing Services";
  return "Core & Institutional";
}

const ORDER = [
  "Core & Institutional", "Estimate / Conversion", "Roofing Services", "Roofing Materials",
  "Exteriors", "Trust & Proof", "Warranty", "Legal", "Service Area & Cities",
  // Phase 2 groups sink to the bottom
  "Customer Portal (Phase 2)", "Knowledge Center (Phase 2)", "Calculators (Phase 2)",
  "Stories & Content (Phase 2)", "Pro Partner (Phase 2)",
];

type Phase = "v1" | "phase2" | "all";
const STORAGE_KEY = "skyve-reviewed-v1";

export function SiteMapHub() {
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState<Phase>("v1");
  const [reviewed, setReviewed] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  // Persist "reviewed" checklist in the browser (client hydrate).
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- localStorage hydrate on mount */
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setReviewed(new Set(JSON.parse(raw)));
    } catch {}
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);
  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify([...reviewed]));
  }, [reviewed, loaded]);

  const toggle = (path: string) =>
    setReviewed((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });

  const v1Total = useMemo(() => SITE_ROUTES.filter((r) => !isHidden(r.path)).length, []);
  const p2Total = SITE_ROUTES.length - v1Total;
  const reviewedV1 = useMemo(
    () => SITE_ROUTES.filter((r) => !isHidden(r.path) && reviewed.has(r.path)).length,
    [reviewed]
  );

  const filtered = useMemo(
    () =>
      SITE_ROUTES.filter((r) => {
        if (!r.path.includes(query.toLowerCase())) return false;
        if (phase === "v1") return !isHidden(r.path);
        if (phase === "phase2") return isHidden(r.path);
        return true;
      }),
    [query, phase]
  );

  const groups = useMemo(() => {
    const map = new Map<string, typeof SITE_ROUTES>();
    for (const r of filtered) {
      const g = groupOf(r.path);
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(r);
    }
    const ordered = ORDER.filter((g) => map.has(g)).map((g) => ({ heading: g, rows: map.get(g)! }));
    for (const [g, rows] of map) if (!ORDER.includes(g)) ordered.push({ heading: g, rows });
    return ordered;
  }, [filtered]);

  const pct = v1Total ? Math.round((reviewedV1 / v1Total) * 100) : 0;

  return (
    <div>
      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <p className="font-serif text-3xl font-bold text-horizon">{v1Total}<span className="text-base font-normal text-ink-50"> pages</span></p>
          <p className="text-xs text-ink-50">Launch v1 surface to review</p>
        </div>
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <p className="font-serif text-3xl font-bold text-horizon">{reviewedV1}<span className="text-base font-normal text-ink-50"> / {v1Total}</span></p>
          <p className="mt-1 text-xs text-ink-50">Reviewed ({pct}%)</p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-mist">
            <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <p className="font-serif text-3xl font-bold text-ink-50">{p2Total}<span className="text-base font-normal text-ink-50"> pages</span></p>
          <p className="text-xs text-ink-50">Deferred to Phase 2 (hidden)</p>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by path… (e.g. /services, roofing-, /legal)"
            className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-10 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
          />
        </div>
        <div className="inline-flex overflow-hidden rounded-lg border border-mist text-sm font-semibold">
          {(["v1", "phase2", "all"] as Phase[]).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPhase(p)}
              className={`px-4 py-2.5 transition-colors ${
                phase === p ? "bg-horizon text-clear" : "bg-clear text-ink-70 hover:bg-mist-soft"
              }`}
            >
              {p === "v1" ? "Launch v1" : p === "phase2" ? "Phase 2" : "All"}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 rounded-lg border border-sky-soft/60 bg-sky-soft/20 px-4 py-3 text-xs text-ink-70">
        Tip: the <span className="font-semibold text-ridge">32 city pages share one template</span> — review{" "}
        <span className="font-mono text-ridge">/roofing-seattle-wa</span> once and it applies to all cities. Same for
        service / material / exterior detail pages. Check off each page as you review its content; your progress is saved in this browser.
      </p>

      {/* Groups */}
      <div className="mt-8 space-y-8">
        {groups.map((group) => {
          const groupReviewed = group.rows.filter((r) => reviewed.has(r.path)).length;
          const isP2Group = group.heading.includes("Phase 2");
          return (
            <section key={group.heading}>
              <div className="flex items-baseline gap-3">
                <h2 className={`font-serif text-lg font-bold ${isP2Group ? "text-ink-50" : "text-horizon"}`}>{group.heading}</h2>
                <span className="rounded-full bg-sky-soft px-2.5 py-0.5 text-xs font-semibold text-ridge">
                  {groupReviewed}/{group.rows.length}
                </span>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {group.rows.map((r) => {
                  const hidden = isHidden(r.path);
                  const done = reviewed.has(r.path);
                  return (
                    <div
                      key={r.path}
                      className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 shadow-card transition-colors ${
                        done ? "border-success/40 bg-success/5" : "border-mist bg-clear"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(r.path)}
                        aria-label={done ? "Mark unreviewed" : "Mark reviewed"}
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          done ? "border-success bg-success text-clear" : "border-mist bg-clear hover:border-ridge"
                        }`}
                      >
                        {done && <Check className="h-3.5 w-3.5" />}
                      </button>
                      <a
                        href={r.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-w-0 flex-1 items-center justify-between gap-2"
                      >
                        <span className="min-w-0">
                          <span className={`block truncate font-mono text-xs ${done ? "text-ink-50 line-through" : "text-horizon group-hover:text-ridge"}`}>
                            {r.path}
                          </span>
                          {hidden && <span className="text-[10px] font-semibold uppercase text-ink-50">phase 2</span>}
                        </span>
                        <span className="flex shrink-0 items-center gap-2">
                          {r.photos > 0 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-accent/12 px-2 py-0.5 text-[11px] font-bold text-accent">
                              <Camera className="h-3 w-3" /> {r.photos}
                            </span>
                          )}
                          <ExternalLink className="h-4 w-4 text-ink-50 group-hover:text-accent" />
                        </span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
        {groups.length === 0 && <p className="py-10 text-center text-sm text-ink-50">No routes match your filter.</p>}
      </div>
    </div>
  );
}
