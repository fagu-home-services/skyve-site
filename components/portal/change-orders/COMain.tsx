"use client";

import { useState } from "react";
import { SlidersHorizontal, Plus, ArrowRight, Info } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { CO_TABS, CO_ORDERS, CO_NOTE, CO_HOW } from "@/lib/portal-change-orders-data";

export function COMain() {
  const [tab, setTab] = useState("Change Orders");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {CO_TABS.map((t) => (
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

      {/* All Change Orders */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-bold text-horizon">All Change Orders</h2>
            <p className="text-xs text-ink-50">Stay up to date on all changes requested for your project.</p>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist px-3.5 py-2 text-xs font-semibold text-ink-70 hover:border-ridge">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filter
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-ridge bg-clear px-3.5 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
              <Plus className="h-3.5 w-3.5" /> New Change Order
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {CO_ORDERS.map((o) => (
            <article key={o.title} className={`rounded-xl border border-l-4 border-mist ${o.bar} bg-clear p-4`}>
              <div className="grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${o.iconBg}`}>
                    <Icon name={o.icon} className={`h-5 w-5 ${o.iconTone}`} />
                  </span>
                  <span className={`text-[10px] font-semibold ${o.iconTone}`}>{o.status}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-horizon">{o.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{o.desc}</p>
                  <a href="#" className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
                    View Details <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
                <div className="text-right">
                  <p className="font-serif text-base font-bold text-horizon">{o.amount}</p>
                  <p className="text-[10px] text-ink-50">{o.meta}</p>
                  {o.by && <p className="text-[10px] text-ink-50">{o.by}</p>}
                  <button type="button" className={`mt-2 rounded-lg border px-4 py-1.5 text-xs font-semibold ${o.actionTone}`}>
                    {o.action}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <div className="mt-4 flex flex-col items-start gap-4 rounded-xl border border-mist bg-sky-soft/40 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-ridge" />
            <div>
              <p className="text-sm font-bold text-horizon">{CO_NOTE.title}</p>
              <p className="text-[11px] text-ink-70">{CO_NOTE.desc}</p>
            </div>
          </div>
          <a href={CO_NOTE.button.href} className="shrink-0 rounded-lg border border-ridge bg-clear px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            {CO_NOTE.button.label}
          </a>
        </div>
      </div>

      {/* How Change Orders Work */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{CO_HOW.title}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CO_HOW.steps.map((s, i) => (
            <div key={s.title} className="relative">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-soft">
                <Icon name={s.icon} className="h-5 w-5 text-ridge" />
              </span>
              <p className="mt-2.5 text-sm font-bold text-horizon">{s.title}</p>
              <p className="mt-1 text-[11px] leading-snug text-ink-50">{s.desc}</p>
              {i < CO_HOW.steps.length - 1 && (
                <ArrowRight className="absolute right-2 top-3 hidden h-4 w-4 text-mist lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
