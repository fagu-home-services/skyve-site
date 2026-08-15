"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { PP_TABS, PP_TOTAL, PP_GROUPS } from "@/lib/portal-photos-data";

export function PhotosGallery() {
  const [tab, setTab] = useState("All Photos");
  const [query, setQuery] = useState("");

  const groups = PP_GROUPS.map((g) => ({
    ...g,
    cards: g.cards.filter((c) => c.label.toLowerCase().includes(query.toLowerCase())),
  })).filter((g) => g.cards.length > 0);

  const shown = groups.reduce((n, g) => n + g.cards.length, 0);

  return (
    <div className="rounded-2xl border border-mist bg-clear shadow-card">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist px-4 pt-3">
        {PP_TABS.map((t) => (
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
            placeholder="Search photos..."
            className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-9 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
          />
        </div>
        <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist px-4 py-2.5 text-sm font-semibold text-ink-70 hover:border-ridge">
          <SlidersHorizontal className="h-4 w-4" /> Filter
        </button>
        <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist px-4 py-2.5 text-sm font-semibold text-ink-70 hover:border-ridge">
          Sort: Newest <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <p className="px-4 text-xs text-ink-50">Showing 1 to {shown} of {PP_TOTAL} photos</p>

      {/* Groups */}
      <div className="space-y-6 p-4">
        {groups.map((g) => (
          <div key={g.date}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-horizon">
                {g.date} <span className="font-normal text-ink-50">({g.total} photos)</span>
              </p>
              <a href="#" className="text-xs font-semibold text-ridge hover:text-accent">View All</a>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {g.cards.map((c) => (
                <div key={c.label} className="group overflow-hidden rounded-xl border border-mist">
                  <Photo src="" seed={c.label} alt={c.label} className="aspect-[4/3] w-full" />
                  <div className="flex items-center justify-between gap-2 p-2.5">
                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-horizon">{c.label}</p>
                      <p className="text-[10px] text-ink-50">{c.count} photos</p>
                    </div>
                    <button type="button" aria-label="Download" className="shrink-0 text-ridge hover:text-accent">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {groups.length === 0 && (
          <p className="py-10 text-center text-sm text-ink-50">No photos match your search.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1.5 border-t border-mist p-4">
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-lg border border-mist text-ink-50 hover:border-ridge">
          <ChevronLeft className="h-4 w-4" />
        </button>
        {["1", "2", "3", "...", "15"].map((n, i) => (
          <button
            key={`${n}-${i}`}
            type="button"
            className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-sm font-semibold ${
              n === "1" ? "bg-ridge text-clear" : "border border-mist text-ink-70 hover:border-ridge"
            } ${n === "..." ? "pointer-events-none border-0" : ""}`}
          >
            {n}
          </button>
        ))}
        <button type="button" className="flex h-8 w-8 items-center justify-center rounded-lg border border-mist text-ink-50 hover:border-ridge">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
