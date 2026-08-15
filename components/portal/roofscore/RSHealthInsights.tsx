import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { VerascorMark } from "@/components/portal/roofscore/VerascorMark";
import { RS_COMPONENTS, RS_INSIGHTS } from "@/lib/portal-roofscore-data";

function statusTone(s: string) {
  return s === "Excellent" ? "text-success" : "text-warning";
}

export function RSHealthInsights() {
  return (
    <>
      {/* Roof Health Overview */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">{RS_COMPONENTS.title}</h2>
        <p className="text-xs text-ink-50">{RS_COMPONENTS.subtitle}</p>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_260px] lg:items-center">
          <Photo src="" seed="roof-3d" alt="3D roof model" className="h-56 w-full rounded-xl" />
          <ul className="space-y-2.5">
            {RS_COMPONENTS.items.map((c) => (
              <li key={c.label} className="flex items-center justify-between">
                <span className="flex items-center gap-2.5 text-sm text-ink-70">
                  <Icon name={c.icon} className="h-4 w-4 text-ridge" /> {c.label}
                </span>
                <span className={`text-sm font-semibold ${statusTone(c.status)}`}>{c.status}</span>
              </li>
            ))}
            <li className="pt-1 text-right">
              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
                View All Components <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Verascor Insights */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center gap-2">
          <VerascorMark />
          <h2 className="text-sm font-bold text-horizon">Insights</h2>
        </div>
        <p className="text-xs text-ink-50">{RS_INSIGHTS.subtitle}</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RS_INSIGHTS.cards.map((c) => (
            <div key={c.label} className="rounded-xl border border-mist bg-clear p-4 shadow-card">
              <div className="flex items-center gap-2">
                <Icon name={c.icon} className={`h-4 w-4 ${c.tone}`} />
                <p className="text-[11px] font-semibold text-ink-70">{c.label}</p>
              </div>
              <p className={`mt-2 font-serif text-2xl font-bold ${c.tone}`}>{c.value}</p>
              <p className="mt-1 text-[11px] leading-snug text-ink-50">{c.desc}</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-ink-50">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
