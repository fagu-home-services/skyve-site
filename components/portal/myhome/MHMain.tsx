"use client";

import { useState } from "react";
import { ArrowRight, Shield } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { MH_TABS, MH_SYSTEMS, MH_ACTIVITY, MH_PHOTOS, MH_BAND } from "@/lib/portal-myhome-data";

export function MHMain() {
  const [tab, setTab] = useState("Overview");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {MH_TABS.map((t) => (
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

      {/* Home Overview */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{MH_SYSTEMS.title}</h2>
        <p className="text-xs text-ink-50">{MH_SYSTEMS.subtitle}</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center">
          <Photo src="" seed="myhome-3d" alt="3D home model" className="h-56 w-full rounded-xl" />
          <ul className="space-y-2.5">
            {MH_SYSTEMS.items.map((s) => (
              <li key={s.label} className="flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-sm text-ink-70">
                  <Icon name={s.icon} className="h-4 w-4 text-ridge" /> {s.label}
                </span>
                <span className="text-sm font-semibold text-success">{s.status}</span>
              </li>
            ))}
            <li className="pt-1 text-right">
              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
                View All Systems <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Recent Activity + Recent Photos */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <h2 className="text-sm font-bold text-horizon">{MH_ACTIVITY.title}</h2>
          <p className="text-xs text-ink-50">{MH_ACTIVITY.subtitle}</p>
          <div className="mt-4 space-y-3">
            {MH_ACTIVITY.items.map((a) => (
              <div key={a.title} className="flex items-start gap-3">
                <Icon name={a.icon} className={`mt-0.5 h-4 w-4 shrink-0 ${a.tone}`} />
                <div>
                  <p className="text-sm font-bold text-horizon">{a.title}</p>
                  <p className="text-[11px] text-ink-50">{a.desc}</p>
                  <p className="text-[10px] text-ink-50">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-horizon">{MH_PHOTOS.title}</h2>
            <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
              View All Photos <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {MH_PHOTOS.items.map((p) => (
              <div key={p.label} className="overflow-hidden rounded-xl border border-mist">
                <Photo src="" seed={p.label} alt={p.label} className="aspect-[4/3] w-full" />
                <div className="p-2">
                  <p className="text-[11px] font-bold text-horizon">{p.label}</p>
                  <p className="text-[10px] text-ink-50">{p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Band */}
      <div className="relative overflow-hidden rounded-2xl bg-success/8 p-6">
        <div className="relative z-10 flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clear shadow-card">
            <Shield className="h-5 w-5 text-success" />
          </span>
          <div className="max-w-lg">
            <h2 className="font-serif text-lg font-bold text-horizon">{MH_BAND.title}</h2>
            <p className="mt-1 text-xs text-ink-70">{MH_BAND.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
