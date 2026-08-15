"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Camera } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { PRO_TABS, PRO_PERSONAL, PRO_CONTACT, PRO_SECURITY } from "@/lib/portal-profile-data";

function Field({ label, value, placeholder }: { label: string; value?: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-horizon">{label}</span>
      <input type="text" defaultValue={value} placeholder={placeholder} className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
    </label>
  );
}

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

function SaveBtn() {
  return (
    <div className="flex justify-end">
      <button type="button" className="rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">Save Changes</button>
    </div>
  );
}

export function ProfileMain() {
  const [tab, setTab] = useState("Personal Information");
  const p = PRO_PERSONAL;

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {PRO_TABS.map((t) => (
          <button key={t} type="button" onClick={() => setTab(t)} className={`shrink-0 whitespace-nowrap border-b-2 px-3.5 py-2.5 text-sm font-semibold transition-colors ${tab === t ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Personal Information */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{p.title}</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-[160px_1fr]">
          {/* Photo */}
          <div>
            <p className="text-xs font-semibold text-horizon">Profile Photo</p>
            <div className="mt-2 flex flex-col items-start gap-2">
              <AvatarPlaceholder initials={p.initials} className="h-24 w-24 rounded-full" />
              <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-ridge px-3 py-1.5 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
                <Camera className="h-3.5 w-3.5" /> Change Photo
              </button>
              <p className="text-[10px] text-ink-50">{p.photoNote}</p>
            </div>
          </div>
          {/* Fields */}
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {p.fields.map((f) => <Field key={f.label} label={f.label} value={f.value} />)}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={p.dob.label} value={p.dob.value} />
              <Select label={p.language.label} value={p.language.value} options={p.language.options} />
            </div>
            <Select label={p.hear.label} value={p.hear.value} options={p.hear.options} />
            <SaveBtn />
          </div>
        </div>
      </div>

      {/* Contact & Address */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{PRO_CONTACT.title}</h2>
        <div className="mt-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={PRO_CONTACT.street.label} value={PRO_CONTACT.street.value} />
            <Field label={PRO_CONTACT.apt.label} placeholder="" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label={PRO_CONTACT.city.label} value={PRO_CONTACT.city.value} />
            <Select label={PRO_CONTACT.state.label} value={PRO_CONTACT.state.value} options={PRO_CONTACT.state.options} />
            <Field label={PRO_CONTACT.zip.label} value={PRO_CONTACT.zip.value} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={PRO_CONTACT.primaryPhone.label} value={PRO_CONTACT.primaryPhone.value} />
            <Field label={PRO_CONTACT.altPhone.label} value={PRO_CONTACT.altPhone.value} />
          </div>
          <SaveBtn />
        </div>
      </div>

      {/* Security */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{PRO_SECURITY.title}</h2>
        <ul className="mt-3 divide-y divide-mist">
          {PRO_SECURITY.items.map((s) => (
            <li key={s.label} className="flex items-center gap-4 py-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={s.icon} className="h-4 w-4 text-ridge" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{s.label}</p>
                {s.desc && <p className="text-[11px] text-ink-50">{s.desc}</p>}
                {s.value && <p className="font-mono text-xs text-ink-50">{s.value}</p>}
              </div>
              {s.action ? (
                <a href="#" className="shrink-0 text-xs font-semibold text-ridge hover:text-accent">{s.action}</a>
              ) : s.status ? (
                <span className="flex shrink-0 items-center gap-2">
                  <span className="rounded-full bg-success/12 px-2.5 py-0.5 text-[11px] font-semibold text-success">{s.status}</span>
                  <ChevronRight className="h-4 w-4 text-ink-50" />
                </span>
              ) : (
                <ChevronRight className="h-4 w-4 shrink-0 text-ink-50" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
