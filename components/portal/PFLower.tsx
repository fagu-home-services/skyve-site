import { FileText, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { PORTAL_SELECTIONS, PORTAL_BUDGET, PORTAL_DOCUMENTS } from "@/lib/portal-data";

export function PFLower() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {/* Selections Summary */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">{PORTAL_SELECTIONS.title}</h3>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View Selections <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {PORTAL_SELECTIONS.items.map((it) => (
            <div key={it.label} className="text-center">
              <Photo src={it.image} seed={it.label} alt={it.label} className="aspect-square w-full rounded-lg" />
              <p className="mt-1.5 text-[11px] font-bold text-horizon">{it.label}</p>
              <p className="text-[9px] leading-snug text-ink-50">{it.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-mist-soft/50 p-3">
          <div>
            <p className="text-xs font-bold text-horizon">{PORTAL_SELECTIONS.changeNote}</p>
            <p className="text-[10px] text-ink-50">{PORTAL_SELECTIONS.changeSub}</p>
          </div>
          <button type="button" className="shrink-0 rounded-lg border border-ridge px-3 py-1.5 text-[11px] font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            Request Change
          </button>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">{PORTAL_BUDGET.title}</h3>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View Budget <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        <div className="mt-4 flex items-center gap-5">
          <div
            className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(var(--color-ridge) 0% ${PORTAL_BUDGET.spentPct}%, var(--color-mist) ${PORTAL_BUDGET.spentPct}% 100%)` }}
          >
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-xl font-bold text-horizon">{PORTAL_BUDGET.spentPct}%</span>
              <span className="text-[9px] text-ink-50">Spent</span>
            </div>
          </div>
          <ul className="flex-1 space-y-2">
            {PORTAL_BUDGET.rows.map((r) => (
              <li key={r.label} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-ink-70">
                  <span className={`h-2 w-2 rounded-full ${r.tone}`} /> {r.label}
                </span>
                <span className="font-bold text-horizon">{r.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-right text-[10px] text-ink-50">{PORTAL_BUDGET.note}</p>
      </div>

      {/* Documents */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">{PORTAL_DOCUMENTS.title}</h3>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        <ul className="mt-4 space-y-2.5">
          {PORTAL_DOCUMENTS.items.map((d) => (
            <li key={d.name} className="flex items-center gap-3 rounded-lg border border-mist px-3 py-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-danger/10">
                <FileText className="h-4 w-4 text-danger" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-horizon">{d.name}</p>
                <p className="text-[10px] text-ink-50">{d.date}</p>
              </div>
              <span className="shrink-0 rounded bg-danger/10 px-1.5 py-0.5 text-[9px] font-bold text-danger">PDF</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
