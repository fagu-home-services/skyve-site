"use client";

import { useState } from "react";
import { SlidersHorizontal, List, LayoutGrid, ChevronDown, Info, ArrowRight, Camera } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { PT_TABS, PT_GROUPS, PT_NOTE, PT_PROGRESS_PHOTOS } from "@/lib/portal-project-timeline-data";

export function PTMain() {
  const [tab, setTab] = useState("Timeline");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {PT_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`shrink-0 whitespace-nowrap border-b-2 px-3.5 py-2.5 text-sm font-semibold transition-colors ${
              tab === t ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-bold text-horizon">Project Timeline</h2>
            <p className="text-xs text-ink-50">A chronological view of your project progress and upcoming milestones.</p>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist px-3.5 py-2 text-xs font-semibold text-ink-70 hover:border-ridge">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filter
            </button>
            <div className="flex items-center overflow-hidden rounded-lg border border-mist">
              <button type="button" aria-label="List view" className="flex h-9 w-9 items-center justify-center bg-ridge text-clear"><List className="h-4 w-4" /></button>
              <button type="button" aria-label="Grid view" className="flex h-9 w-9 items-center justify-center text-ink-50 hover:text-ridge"><LayoutGrid className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-5">
          {PT_GROUPS.map((g) => (
            <div key={g.phase}>
              <p className={`text-xs font-bold uppercase tracking-wide ${g.tone}`}>{g.phase}</p>
              <ul className="mt-2">
                {g.events.map((e, i) => (
                  <li key={e.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${g.iconBg}`}>
                        <Icon name={e.icon} className={`h-4 w-4 ${g.tone}`} />
                      </span>
                      {i < g.events.length - 1 && <span className={`mt-1 w-0.5 flex-1 ${g.line}`} />}
                    </div>
                    <div className={`mb-3 flex-1 rounded-xl border p-4 ${e.badge?.label === "In Progress" ? "border-ridge/30 bg-sky-soft/40" : "border-mist bg-clear"}`}>
                      <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                        <div>
                          <p className="text-sm font-bold text-horizon">{e.title}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{e.desc}</p>
                        </div>
                        <p className="text-xs font-semibold text-horizon sm:text-right">{e.date}</p>
                        <div className="sm:justify-self-end">
                          {e.action ? (
                            <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-ridge px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
                              {e.action} <ChevronDown className="h-3.5 w-3.5" />
                            </button>
                          ) : e.badge ? (
                            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${e.badge.tone}`}>{e.badge.label}</span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-4 flex flex-col items-start gap-4 rounded-xl border border-mist bg-sky-soft/40 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-ridge" />
            <div>
              <p className="text-sm font-bold text-horizon">{PT_NOTE.title}</p>
              <p className="text-[11px] text-ink-70">{PT_NOTE.desc}</p>
            </div>
          </div>
          <button type="button" className="shrink-0 rounded-lg border border-ridge bg-clear px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            {PT_NOTE.button.label}
          </button>
        </div>
      </div>

      {/* Progress Photos */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-horizon">{PT_PROGRESS_PHOTOS.title}</h2>
            <p className="text-xs text-ink-50">{PT_PROGRESS_PHOTOS.subtitle}</p>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All Photos <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PT_PROGRESS_PHOTOS.items.map((p) => (
            <div key={p.label} className="overflow-hidden rounded-xl border border-mist">
              <Photo src="" seed={p.label} alt={p.label} className="aspect-[4/3] w-full" />
              <div className="p-2">
                <p className="text-[11px] font-bold text-horizon">{p.label}</p>
                <p className="text-[10px] text-ink-50">{p.date}</p>
              </div>
            </div>
          ))}
          <button type="button" className="flex aspect-[4/3] flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-mist bg-mist-soft/40 text-ink-50 hover:border-ridge hover:text-ridge">
            <Camera className="h-6 w-6" />
            <span className="text-xs font-bold">+{PT_PROGRESS_PHOTOS.more}</span>
            <span className="text-[10px]">More Photos</span>
          </button>
        </div>
      </div>
    </div>
  );
}
