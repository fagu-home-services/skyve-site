"use client";

import { useState } from "react";
import { Search, ChevronDown, ArrowRight, Lightbulb } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { RES_CATEGORIES, RES_POPULAR, RES_TYPE_TONE, RES_BAND } from "@/lib/portal-resources-data";

export function ResMain() {
  const [query, setQuery] = useState("");
  const popular = RES_POPULAR.items.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-6">
      {/* Search + browse */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-9 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
          />
        </div>
        <button type="button" className="inline-flex items-center justify-between gap-2 rounded-lg border border-mist px-4 py-2.5 text-sm font-semibold text-ink-70 hover:border-ridge sm:w-52">
          Browse by Category <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-sm font-bold text-horizon">{RES_CATEGORIES.title}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RES_CATEGORIES.items.map((c) => (
            <button key={c.label} type="button" className="rounded-2xl border border-mist bg-clear p-5 text-left shadow-card transition-colors hover:border-ridge">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg}`}>
                <Icon name={c.icon} className={`h-5 w-5 ${c.tone}`} />
              </span>
              <p className="mt-3 text-sm font-bold text-horizon">{c.label}</p>
              <p className="mt-1 text-[11px] leading-snug text-ink-50">{c.desc}</p>
              <p className="mt-2 text-[11px] font-semibold text-ridge">{c.count}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Resources */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-horizon">{RES_POPULAR.title}</h2>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All Resources <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-4 divide-y divide-mist">
          {popular.map((p) => (
            <article key={p.title} className="flex items-center gap-4 py-3 first:pt-0">
              <Photo src="" seed={p.title} alt="" className="h-14 w-20 shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{p.title}</p>
                <p className="text-[11px] leading-snug text-ink-50">{p.desc}</p>
              </div>
              <span className={`hidden shrink-0 rounded-md px-2.5 py-1 text-[10px] font-semibold sm:inline ${RES_TYPE_TONE[p.type]}`}>{p.type}</span>
              <span className="hidden shrink-0 text-[11px] text-ink-50 sm:block">{p.date}</span>
            </article>
          ))}
          {popular.length === 0 && <p className="py-8 text-center text-sm text-ink-50">No resources match your search.</p>}
        </div>
      </div>

      {/* Band */}
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-mist bg-sky-soft/40 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clear shadow-card">
            <Lightbulb className="h-5 w-5 text-ridge" />
          </span>
          <div>
            <p className="text-sm font-bold text-horizon">{RES_BAND.title}</p>
            <p className="text-[11px] text-ink-70">{RES_BAND.desc}</p>
          </div>
        </div>
        <a href={RES_BAND.button.href} className="shrink-0 rounded-lg border border-ridge bg-clear px-5 py-2.5 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {RES_BAND.button.label}
        </a>
      </div>
    </div>
  );
}
