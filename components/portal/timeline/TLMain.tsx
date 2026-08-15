"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, CalendarClock } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { TL_TABS, TL_GROUPS, TL_BAND } from "@/lib/portal-timeline-data";

export function TLMain() {
  const [tab, setTab] = useState("Timeline");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {TL_TABS.map((t) => (
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
            <h2 className="text-sm font-bold text-horizon">Your Home Timeline</h2>
            <p className="max-w-md text-xs text-ink-50">A chronological view of everything that has happened, is happening, and is planned for your home.</p>
          </div>
          <button type="button" className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-mist px-3.5 py-2 text-xs font-semibold text-ink-70 hover:border-ridge">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filter Timeline
          </button>
        </div>

        <div className="mt-5 space-y-5">
          {TL_GROUPS.map((g) => (
            <div key={g.phase}>
              <p className={`text-xs font-bold uppercase tracking-wide ${g.tone}`}>{g.phase}</p>
              <ul className="mt-2">
                {g.events.map((e, i) => (
                  <li key={e.title} className="flex gap-4">
                    {/* rail */}
                    <div className="flex flex-col items-center">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${g.iconBg}`}>
                        <Icon name={e.icon} className={`h-4 w-4 ${g.tone}`} />
                      </span>
                      {i < g.events.length - 1 && <span className={`mt-1 w-0.5 flex-1 ${g.line}`} />}
                    </div>
                    {/* card */}
                    <div className={`mb-3 flex-1 rounded-xl border p-4 ${g.phase === "CURRENT" ? "border-ridge/30 bg-sky-soft/40" : "border-mist bg-clear"}`}>
                      <div className="grid gap-2 sm:grid-cols-[1fr_auto_auto] sm:items-center">
                        <div>
                          <p className="text-sm font-bold text-horizon">{e.title}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{e.desc}</p>
                          <p className="mt-0.5 text-[11px] text-ink-50">{e.by}</p>
                        </div>
                        <p className="text-xs font-semibold text-horizon sm:text-right">{e.date}</p>
                        <div className="flex items-center gap-2 sm:justify-end">
                          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${g.badgeTone}`}>{e.badge}</span>
                          <button type="button" aria-label="Expand" className="flex h-7 w-7 items-center justify-center rounded-lg border border-mist text-ink-50 hover:border-ridge">
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Band */}
      <div className="flex flex-col items-start gap-5 rounded-2xl border border-mist bg-sky-soft/40 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clear shadow-card">
            <CalendarClock className="h-5 w-5 text-ridge" />
          </span>
          <div>
            <p className="text-sm font-bold text-horizon">{TL_BAND.title}</p>
            <p className="mt-0.5 max-w-md text-xs text-ink-70">{TL_BAND.desc}</p>
          </div>
        </div>
        <button type="button" className="shrink-0 rounded-lg border border-ridge bg-clear px-5 py-2.5 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {TL_BAND.button.label}
        </button>
      </div>
    </div>
  );
}
