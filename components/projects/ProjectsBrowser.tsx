"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, LayoutGrid, List, ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { PRJ_TABS, PRJ_FILTERS, PRJ_PROJECTS } from "@/lib/projects-data";

function FilterSelect({ options }: { options: string[] }) {
  return (
    <div className="relative">
      <select className="w-full appearance-none rounded-lg border border-mist bg-clear py-2.5 pl-3.5 pr-9 text-sm text-ink-70 outline-none focus:border-ridge sm:w-40">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
    </div>
  );
}

export function ProjectsBrowser() {
  const [tab, setTab] = useState("All Projects");
  const [query, setQuery] = useState("");
  const [grid, setGrid] = useState(true);

  const projects = PRJ_PROJECTS.filter((p) => {
    const matchTab = tab === "All Projects" || p.tab === tab;
    const q = query.toLowerCase();
    const matchQuery = p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.material.toLowerCase().includes(q);
    return matchTab && matchQuery;
  });

  return (
    <section className="bg-clear py-10 lg:py-14">
      <div className="container-skyve">
        {/* Toolbar */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects by type, location, or materials..." className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-10 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
          </div>
          <FilterSelect options={PRJ_FILTERS.services} />
          <FilterSelect options={PRJ_FILTERS.locations} />
          <FilterSelect options={PRJ_FILTERS.materials} />
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border border-mist px-4 py-2.5 text-sm font-semibold text-ink-70 hover:border-ridge">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>

        {/* Tabs + view toggle */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {PRJ_TABS.map((t) => (
              <button key={t} type="button" onClick={() => setTab(t)} className={`rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors ${tab === t ? "border-ridge bg-ridge text-clear" : "border-mist bg-clear text-ink-70 hover:border-ridge"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setGrid(true)} className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold ${grid ? "bg-ridge text-clear" : "border border-mist text-ink-70 hover:border-ridge"}`}>
              <LayoutGrid className="h-4 w-4" /> Grid
            </button>
            <button type="button" onClick={() => setGrid(false)} className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold ${!grid ? "bg-ridge text-clear" : "border border-mist text-ink-70 hover:border-ridge"}`}>
              <List className="h-4 w-4" /> List
            </button>
          </div>
        </div>

        {/* Grid view */}
        {grid ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
                <div className="relative grid grid-cols-2">
                  <div className="relative">
                    <Photo src="" seed={`${p.title}-before`} alt="Before" className="h-48 w-full" />
                    <span className="absolute left-3 top-3 rounded-md bg-horizon-deep/80 px-2 py-0.5 text-[10px] font-semibold text-clear">{p.category}</span>
                    <span className="absolute bottom-3 left-3 rounded-md bg-horizon-deep/70 px-2 py-0.5 text-[10px] font-semibold text-clear">Before</span>
                  </div>
                  <div className="relative">
                    <Photo src="" seed={`${p.title}-after`} alt="After" className="h-48 w-full" />
                    <span className="absolute bottom-3 right-3 rounded-md bg-ridge px-2 py-0.5 text-[10px] font-semibold text-clear">After</span>
                  </div>
                  <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clear shadow-elevated">
                    <ChevronLeft className="h-3 w-3 text-ink-70" /><ChevronRight className="h-3 w-3 text-ink-70" />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-sm font-bold text-horizon">{p.title}</p>
                    <p className="flex items-center gap-1 text-[11px] text-ink-50"><MapPin className="h-3 w-3" /> {p.location}</p>
                  </div>
                  <a href="#" className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">View Project <ArrowRight className="h-3.5 w-3.5" /></a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* List view */
          <div className="mt-6 space-y-4">
            {projects.map((p) => (
              <article key={p.title} className="grid gap-4 rounded-2xl border border-mist bg-clear p-4 shadow-card sm:grid-cols-[160px_1fr_auto] sm:items-center">
                <Photo src="" seed={p.title} alt={p.title} className="h-32 w-full rounded-xl sm:h-24" />
                <div>
                  <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold ${p.tone}`}>{p.category}</span>
                  <h3 className="mt-1.5 text-sm font-bold text-horizon">{p.title}</h3>
                  <p className="flex items-center gap-1 text-[11px] text-ink-50"><MapPin className="h-3 w-3" /> {p.location}</p>
                  <p className="mt-1.5 text-xs leading-snug text-ink-70">{p.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-[11px] text-ink-50">
                    <span><span className="text-ink-50">Material</span> <span className="font-semibold text-horizon">{p.material}</span></span>
                    {p.size && <span><span className="text-ink-50">Size</span> <span className="font-semibold text-horizon">{p.size}</span></span>}
                    <span><span className="text-ink-50">Completed</span> <span className="font-semibold text-horizon">{p.completed}</span></span>
                  </div>
                </div>
                <a href="#" className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-ridge px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
                  View Project <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        )}

        {projects.length === 0 && <p className="mt-8 text-center text-sm text-ink-50">No projects match your search.</p>}

        {projects.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-ridge px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
              Load More Projects <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
