"use client";

import { useState } from "react";
import { Info, Check, Clock, ArrowRight, Calendar } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { BP_TABS, BP_OVERVIEW, BP_BREAKDOWN, BP_SCHEDULE, BP_TRUST } from "@/lib/portal-budget-data";

function overviewGradient() {
  let acc = 0;
  const stops = BP_OVERVIEW.segments
    .map((s) => {
      const from = acc;
      acc += s.num;
      return `${s.color} ${from}% ${acc}%`;
    })
    .join(", ");
  return `conic-gradient(${stops})`;
}

export function BPMain() {
  const [tab, setTab] = useState("Overview");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {BP_TABS.map((t) => (
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

      {/* Budget Overview */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{BP_OVERVIEW.title}</h2>
        <div className="mt-4 flex flex-col items-center gap-8 sm:flex-row">
          <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full" style={{ background: overviewGradient() }}>
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-clear text-center">
              <span className="text-[10px] text-ink-50">Total Project Value</span>
              <span className="font-serif text-xl font-bold text-horizon">{BP_OVERVIEW.total}</span>
              <span className="text-[10px] text-ink-50">100%</span>
            </div>
          </div>
          <ul className="flex-1 space-y-3">
            {BP_OVERVIEW.segments.map((s) => (
              <li key={s.label} className="flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-sm text-ink-70">
                  <span className={`h-2.5 w-2.5 rounded-full ${s.tone}`} /> {s.label}
                </span>
                <span className="flex items-center gap-6">
                  <span className="text-sm font-bold text-horizon">{s.value}</span>
                  <span className="w-12 text-right text-xs text-ink-50">{s.pct}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 flex flex-col items-start gap-4 rounded-xl border border-mist bg-sky-soft/40 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-ridge" />
            <div>
              <p className="text-sm font-bold text-horizon">{BP_OVERVIEW.note}</p>
              <p className="text-[11px] text-ink-70">{BP_OVERVIEW.noteSub}</p>
            </div>
          </div>
          <button type="button" className="shrink-0 rounded-lg border border-ridge bg-clear px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            {BP_OVERVIEW.button.label}
          </button>
        </div>
      </div>

      {/* Budget Breakdown */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{BP_BREAKDOWN.title}</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-mist text-[11px] uppercase tracking-wide text-ink-50">
                <th className="py-2 pr-4 font-semibold">Item</th>
                <th className="py-2 pr-4 font-semibold">Description</th>
                <th className="py-2 text-right font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {BP_BREAKDOWN.rows.map((r) => (
                <tr key={r.item}>
                  <td className="py-3 pr-4">
                    <span className="flex items-center gap-2.5 font-semibold text-horizon">
                      <Icon name={r.icon} className="h-4 w-4 text-ridge" /> {r.item}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-ink-70">{r.desc}</td>
                  <td className="py-3 text-right font-bold text-horizon">{r.amount}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-mist">
                <td className="py-3 font-bold text-ridge" colSpan={2}>Total Project Value</td>
                <td className="py-3 text-right font-bold text-ridge">{BP_BREAKDOWN.total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{BP_SCHEDULE.title}</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_220px]">
          <div>
            <ul>
              {BP_SCHEDULE.steps.map((s, i) => (
                <li key={s.title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      s.state === "paid" ? "bg-success text-clear" : s.state === "current" ? "bg-ridge/12 text-ridge" : "border border-mist bg-clear text-ink-50"
                    }`}>
                      {s.state === "paid" ? <Check className="h-4 w-4" /> : s.state === "current" ? <Clock className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-mist" />}
                    </span>
                    {i < BP_SCHEDULE.steps.length - 1 && <span className="mt-1 w-0.5 flex-1 bg-mist" />}
                  </div>
                  <div className={`mb-3 flex flex-1 items-center justify-between gap-3 rounded-lg px-2 py-1 ${s.state === "current" ? "bg-sky-soft/50" : ""}`}>
                    <div>
                      <p className="text-sm font-bold text-horizon">{s.title}</p>
                      <p className={`text-[11px] ${s.state === "current" ? "font-semibold text-ridge" : "text-ink-50"}`}>{s.meta}</p>
                    </div>
                    <span className="text-sm font-bold text-horizon">{s.amount}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between border-t border-mist pt-3">
              <span className="text-sm font-bold text-horizon">Total</span>
              <span className="text-sm font-bold text-ridge">{BP_SCHEDULE.total}</span>
            </div>
          </div>

          {/* Next payment box */}
          <div className="self-start rounded-xl border border-mist bg-mist-soft/40 p-5 text-center">
            <p className="text-xs font-semibold text-ink-50">{BP_SCHEDULE.next.label}</p>
            <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-ink-70">
              <Calendar className="h-3.5 w-3.5 text-ridge" /> {BP_SCHEDULE.next.date}
            </p>
            <p className="mt-1 font-serif text-2xl font-bold text-horizon">{BP_SCHEDULE.next.amount}</p>
            <button type="button" className="mt-3 w-full rounded-lg bg-ridge px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
              {BP_SCHEDULE.next.button}
            </button>
            <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
              {BP_SCHEDULE.next.link} <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Trust band */}
      <div className="grid gap-4 sm:grid-cols-3">
        {BP_TRUST.map((t) => (
          <div key={t.title} className="flex items-start gap-3 rounded-2xl border border-mist bg-clear p-4 shadow-card">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-success/10">
              <Icon name={t.icon} className="h-4 w-4 text-success" />
            </span>
            <div>
              <p className="text-sm font-bold text-horizon">{t.title}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
