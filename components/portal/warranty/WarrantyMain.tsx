"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PW_TABS, PW_SUMMARY, PW_WARRANTIES, PW_RESOURCES } from "@/lib/portal-warranty-data";

export function WarrantyMain() {
  const [tab, setTab] = useState("All Warranties");

  const warranties = PW_WARRANTIES.filter((w) => {
    if (tab === "Manufacturer Warranties") return w.type === "Manufacturer";
    if (tab === "Workmanship Warranty") return w.type === "Workmanship";
    return true; // All Warranties + Transfer & Claims
  });

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {PW_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`shrink-0 whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors ${
              tab === t ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-sm font-bold text-horizon">{PW_SUMMARY.title}</h2>
        <p className="text-xs text-ink-50">{PW_SUMMARY.subtitle}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {PW_SUMMARY.cards.map((c) => (
            <div key={c.label} className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
              <div className="flex items-start gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${c.bg}`}>
                  <Icon name={c.icon} className={`h-4 w-4 ${c.tone}`} />
                </span>
                <div>
                  <p className="text-[11px] text-ink-50">{c.label}</p>
                  <p className="font-serif text-2xl font-bold text-horizon">{c.value}</p>
                  <p className="text-[11px] text-ink-50">{c.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Warranties */}
      <div>
        <h2 className="text-sm font-bold text-horizon">Your Warranties</h2>
        <p className="text-xs text-ink-50">Detailed coverage information for your project.</p>
        <div className="mt-4 divide-y divide-mist rounded-2xl border border-mist bg-clear shadow-card">
          {warranties.map((w) => (
            <article key={w.title} className="grid gap-4 p-5 sm:grid-cols-[1fr_auto_auto] sm:items-center">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                  <Icon name={w.icon} className="h-5 w-5 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{w.title}</p>
                  <p className="text-xs font-semibold text-ridge">{w.provider}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{w.desc}</p>
                </div>
              </div>

              <div className="sm:text-center">
                <p className="text-[10px] uppercase tracking-wide text-ink-50">Coverage</p>
                <p className="text-sm font-bold text-horizon">{w.coverage}</p>
                <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-success/12 px-2 py-0.5 text-[10px] font-semibold text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" /> Active
                </span>
              </div>

              <div className="sm:text-right">
                <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-ridge px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
                  View Details <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <p className="mt-2 text-[11px] text-ink-50">Start: {w.start}</p>
                <p className="text-[11px] text-ink-50">{w.end === "Lifetime" ? "Lifetime" : `End: ${w.end}`}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="rounded-2xl border border-mist bg-mist-soft/40 p-6">
        <h2 className="text-sm font-bold text-horizon">{PW_RESOURCES.title}</h2>
        <p className="text-xs text-ink-50">{PW_RESOURCES.subtitle}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PW_RESOURCES.items.map((r) => (
            <div key={r.title} className="rounded-xl border border-mist bg-clear p-4 shadow-card">
              <Icon name={r.icon} className="h-6 w-6 text-ridge" />
              <p className="mt-2.5 text-xs font-bold text-horizon">{r.title}</p>
              <p className="mt-1 text-[11px] leading-snug text-ink-50">{r.desc}</p>
              <a href="#" className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-ridge hover:text-accent">
                {r.link} <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
