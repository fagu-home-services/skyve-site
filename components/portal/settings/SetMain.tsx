"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { SET_TABS, SET_GENERAL, SET_PREFERENCES, SET_REGIONAL } from "@/lib/portal-settings-data";

function Select({ label, value, options }: { label: string; value: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-horizon">{label}</span>
      <div className="relative mt-1.5">
        <select defaultValue={value} className="w-full appearance-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge">
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
      </div>
    </label>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span className={`flex h-6 w-11 shrink-0 items-center rounded-full px-0.5 transition-colors ${on ? "justify-end bg-ridge" : "justify-start bg-mist"}`}>
      <span className="h-5 w-5 rounded-full bg-clear shadow" />
    </span>
  );
}

export function SetMain() {
  const [tab, setTab] = useState("General");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {SET_TABS.map((t) => (
          <button key={t} type="button" onClick={() => setTab(t)} className={`shrink-0 whitespace-nowrap border-b-2 px-3.5 py-2.5 text-sm font-semibold transition-colors ${tab === t ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"}`}>
            {t}
          </button>
        ))}
      </div>

      {/* General Settings */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{SET_GENERAL.title}</h2>
        <p className="text-xs text-ink-50">{SET_GENERAL.subtitle}</p>
        <div className="mt-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label={SET_GENERAL.language.label} value={SET_GENERAL.language.value} options={SET_GENERAL.language.options} />
            <Select label={SET_GENERAL.dateFormat.label} value={SET_GENERAL.dateFormat.value} options={SET_GENERAL.dateFormat.options} />
          </div>
          <Select label={SET_GENERAL.timeZone.label} value={SET_GENERAL.timeZone.value} options={SET_GENERAL.timeZone.options} />
        </div>
      </div>

      {/* Portal Preferences */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{SET_PREFERENCES.title}</h2>
        <p className="text-xs text-ink-50">{SET_PREFERENCES.subtitle}</p>
        <ul className="mt-4 divide-y divide-mist">
          {SET_PREFERENCES.items.map((it) => (
            <li key={it.title} className="flex items-center gap-4 py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={it.icon} className="h-4 w-4 text-ridge" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{it.title}</p>
                <p className="text-[11px] text-ink-50">{it.desc}</p>
              </div>
              {it.type === "select" ? (
                <div className="relative w-36 shrink-0">
                  <select defaultValue={it.value} className="w-full appearance-none rounded-lg border border-mist bg-clear px-3 py-1.5 text-xs text-ink-70 outline-none focus:border-ridge">
                    {it.options?.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-50" />
                </div>
              ) : (
                <Toggle on={!!it.on} />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Regional Settings */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{SET_REGIONAL.title}</h2>
        <p className="text-xs text-ink-50">{SET_REGIONAL.subtitle}</p>
        <div className="mt-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label={SET_REGIONAL.measurement.label} value={SET_REGIONAL.measurement.value} options={SET_REGIONAL.measurement.options} />
            <Select label={SET_REGIONAL.temperature.label} value={SET_REGIONAL.temperature.value} options={SET_REGIONAL.temperature.options} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Select label={SET_REGIONAL.numberFormat.label} value={SET_REGIONAL.numberFormat.value} options={SET_REGIONAL.numberFormat.options} />
          </div>
          <div className="flex justify-end">
            <button type="button" className="rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
              {SET_REGIONAL.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
