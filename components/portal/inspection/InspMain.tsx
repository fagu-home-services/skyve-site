"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { PI_TABS, PI_TYPE_TONE, PI_INSPECTIONS, PI_WHY } from "@/lib/portal-inspection-data";

const TAB_TYPE: Record<string, string> = {
  "Roof Inspections": "Roof",
  "Exterior Inspections": "Exterior",
  "Specialty Inspections": "Specialty",
  "Manufacturer Inspections": "Manufacturer",
};

export function InspMain() {
  const [tab, setTab] = useState("All Inspections");
  const [query, setQuery] = useState("");

  const filtered = PI_INSPECTIONS.filter((ins) => {
    const t = TAB_TYPE[tab];
    const matchTab = !t || ins.type === t;
    const matchQuery = ins.title.toLowerCase().includes(query.toLowerCase());
    return matchTab && matchQuery;
  });

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-mist bg-clear shadow-card">
        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto border-b border-mist px-4 pt-3">
          {PI_TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`shrink-0 whitespace-nowrap border-b-2 px-3 py-2.5 text-sm font-semibold transition-colors ${
                tab === t ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search inspections..."
              className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-9 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
            />
          </div>
          <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist px-4 py-2.5 text-sm font-semibold text-ink-70 hover:border-ridge">
            <SlidersHorizontal className="h-4 w-4" /> Filter
          </button>
          <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist px-4 py-2.5 text-sm font-semibold text-ink-70 hover:border-ridge">
            Sort by: Newest <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <p className="px-4 text-xs text-ink-50">Showing 1 to {filtered.length} of {PI_INSPECTIONS.length} inspections</p>

        {/* Rows */}
        <div className="mt-2 divide-y divide-mist">
          {filtered.map((ins) => (
            <article key={ins.title} className="grid gap-4 p-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
              <div className="flex items-start gap-3">
                <Photo src="" seed={ins.title} alt="" className="h-16 w-24 shrink-0 rounded-lg" />
                <div>
                  <p className="text-sm font-bold text-horizon">{ins.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{ins.desc}</p>
                  <span className={`mt-1.5 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold ${PI_TYPE_TONE[ins.type]}`}>{ins.type}</span>
                </div>
              </div>

              <div className="sm:text-center">
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${ins.status === "Completed" ? "bg-success/12 text-success" : "bg-warning/15 text-warning"}`}>
                  {ins.status}
                </span>
                <p className="mt-1.5 text-xs font-semibold text-horizon">{ins.date}</p>
                <p className="text-[11px] text-ink-50">by {ins.by}</p>
              </div>

              <div className="flex items-center gap-2 sm:justify-end">
                <button type="button" className="rounded-lg border border-ridge px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
                  View Report
                </button>
                <button type="button" aria-label="More" className="flex h-8 w-8 items-center justify-center rounded-lg border border-mist text-ink-50 hover:border-ridge">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-ink-50">No inspections match your search.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-mist p-4 sm:flex-row">
          <p className="flex items-center gap-2 text-xs text-ink-50">
            Show
            <span className="inline-flex items-center gap-1 rounded-lg border border-mist px-2 py-1 font-semibold text-ink-70">10 <ChevronDown className="h-3 w-3" /></span>
            per page
          </p>
          <div className="flex items-center gap-1.5">
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-lg border border-mist text-ink-50 hover:border-ridge">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button type="button" className="flex h-8 min-w-8 items-center justify-center rounded-lg bg-ridge px-2 text-sm font-semibold text-clear">1</button>
            <button type="button" className="flex h-8 w-8 items-center justify-center rounded-lg border border-mist text-ink-50 hover:border-ridge">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Why matter */}
      <div>
        <h2 className="text-sm font-bold text-horizon">{PI_WHY.title}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PI_WHY.items.map((w) => (
            <div key={w.title} className="rounded-xl border border-mist bg-clear p-4 shadow-card">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={w.icon} className="h-4 w-4 text-ridge" />
              </span>
              <p className="mt-2.5 text-xs font-bold text-horizon">{w.title}</p>
              <p className="mt-1 text-[11px] leading-snug text-ink-50">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
