import { Phone, ArrowRight, FileText } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { DOC_STORAGE, DOC_CATEGORIES, DOC_RECENTLY_UPLOADED, DOC_ACTIONS, DOC_HELP } from "@/lib/portal-docs-data";

export function DocsAside() {
  return (
    <aside className="space-y-5">
      {/* Storage Usage */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{DOC_STORAGE.title}</h3>
        <div className="mt-4 flex justify-center">
          <div
            className="relative flex h-32 w-32 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(var(--color-success) 0% ${DOC_STORAGE.usedPct}%, var(--color-mist) ${DOC_STORAGE.usedPct}% 100%)` }}
          >
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-lg font-bold text-horizon">{DOC_STORAGE.used}</span>
              <span className="text-[9px] text-ink-50">{DOC_STORAGE.of}</span>
              <span className="mt-0.5 text-[11px] font-bold text-success">{DOC_STORAGE.usedPct}% Used</span>
            </div>
          </div>
        </div>
        <button type="button" className="mt-3 w-full rounded-lg border border-ridge bg-clear py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          Manage Storage
        </button>
      </div>

      {/* Categories */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{DOC_CATEGORIES.title}</h3>
        <ul className="mt-3 space-y-0.5">
          {DOC_CATEGORIES.items.map((c) => (
            <li key={c.label}>
              <a href="#" className="flex items-center justify-between rounded-lg px-2 py-2 text-sm transition-colors hover:bg-mist-soft/60">
                <span className="flex items-center gap-2.5 text-ink-70">
                  <Icon name={c.icon} className={`h-4 w-4 ${c.tone}`} /> {c.label}
                </span>
                <span className="rounded-full bg-mist px-2 py-0.5 text-[11px] font-semibold text-ink-70">{c.count}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View All Categories <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Recently Uploaded */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{DOC_RECENTLY_UPLOADED.title}</h3>
        <ul className="mt-3 space-y-3">
          {DOC_RECENTLY_UPLOADED.items.map((r) => (
            <li key={r.name} className="flex items-center gap-3">
              <FileText className={`h-4 w-4 shrink-0 ${r.tone}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-horizon">{r.name}</p>
                <p className="text-[11px] text-ink-50">{r.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View All Recent <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Document Actions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{DOC_ACTIONS.title}</h3>
        <div className="mt-3 space-y-1">
          {DOC_ACTIONS.items.map((a) => (
            <button key={a.label} type="button" className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2.5 text-left text-sm font-medium text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge">
              <Icon name={a.icon} className="h-4 w-4 text-ridge" /> {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{DOC_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{DOC_HELP.desc}</p>
        <a href={DOC_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {DOC_HELP.button.label}
        </a>
        <a href={`tel:${DOC_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {DOC_HELP.phone}
        </a>
        <p className="mt-0.5 text-[11px] text-ink-50">{DOC_HELP.hours}</p>
      </div>
    </aside>
  );
}
