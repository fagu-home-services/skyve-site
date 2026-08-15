"use client";

import { useState } from "react";
import { Download, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { SEL_TABS, SEL_ROOFING, SEL_OTHER, SEL_NOTE, SEL_PREVIEW } from "@/lib/portal-selections-data";

export function SelMain() {
  const [tab, setTab] = useState("Roofing");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {SEL_TABS.map((t) => (
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

      {/* Roofing Selections */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-sm font-bold text-horizon">Roofing Selections</h2>
            <p className="text-xs text-ink-50">All materials and colors selected for your roof.</p>
          </div>
          <button type="button" className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-mist px-3.5 py-2 text-xs font-semibold text-ink-70 hover:border-ridge">
            <Download className="h-3.5 w-3.5" /> Download Selections
          </button>
        </div>

        <div className="mt-4 divide-y divide-mist">
          {SEL_ROOFING.map((s) => (
            <article key={s.category} className="grid gap-4 py-4 first:pt-0 sm:grid-cols-[1fr_auto_auto] sm:items-center">
              <div className="flex items-center gap-3">
                <span className="h-14 w-16 shrink-0 rounded-lg border border-mist" style={{ backgroundColor: s.swatch }} />
                <div>
                  <p className="text-sm font-bold text-horizon">{s.category}</p>
                  <p className="text-xs font-semibold text-ridge">{s.product}</p>
                  <p className="text-[11px] text-ink-50">{s.detail}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 justify-self-start rounded-full bg-success/12 px-2.5 py-1 text-[11px] font-semibold text-success sm:justify-self-end">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Selected
              </span>
              <button type="button" className="justify-self-start rounded-lg border border-ridge px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear sm:justify-self-end">
                Change
              </button>
            </article>
          ))}
        </div>

        {/* Other roofing details */}
        <h3 className="mt-6 text-sm font-bold text-horizon">{SEL_OTHER.title}</h3>
        <div className="mt-3 divide-y divide-mist rounded-xl border border-mist">
          {SEL_OTHER.items.map((it) => (
            <div key={it.label} className="flex items-center justify-between gap-4 px-4 py-3">
              <span className="text-sm font-semibold text-horizon">{it.label}</span>
              <span className="flex-1 text-sm text-ink-70">{it.value}</span>
              <span className="shrink-0 rounded-full bg-success/12 px-2.5 py-1 text-[11px] font-semibold text-success">Selected</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-4 flex flex-col items-start gap-4 rounded-xl border border-mist bg-sky-soft/40 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-ridge" />
            <div>
              <p className="text-sm font-bold text-horizon">{SEL_NOTE.title}</p>
              <p className="text-[11px] text-ink-70">{SEL_NOTE.desc}</p>
            </div>
          </div>
          <a href={SEL_NOTE.button.href} className="shrink-0 rounded-lg border border-ridge bg-clear px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            {SEL_NOTE.button.label}
          </a>
        </div>
      </div>

      {/* How It Will Look */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{SEL_PREVIEW.title}</h2>
        <p className="text-xs text-ink-50">{SEL_PREVIEW.subtitle}</p>
        <div className="relative mt-4 grid grid-cols-2 overflow-hidden rounded-xl">
          <div className="relative">
            <Photo src="" seed="sel-before" alt="Before" className="h-56 w-full" />
            <span className="absolute left-3 top-3 rounded-md bg-horizon-deep/80 px-2.5 py-1 text-[11px] font-semibold text-clear">Before</span>
          </div>
          <div className="relative">
            <Photo src="" seed="sel-after" alt="After" className="h-56 w-full" />
            <span className="absolute right-3 top-3 rounded-md bg-ridge px-2.5 py-1 text-[11px] font-semibold text-clear">After (Selected)</span>
          </div>
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clear shadow-elevated">
            <ChevronLeft className="h-3.5 w-3.5 text-ink-70" />
            <ChevronRight className="h-3.5 w-3.5 text-ink-70" />
          </span>
        </div>
        <p className="mt-3 text-[11px] italic text-ink-50">{SEL_PREVIEW.note}</p>
      </div>
    </div>
  );
}
