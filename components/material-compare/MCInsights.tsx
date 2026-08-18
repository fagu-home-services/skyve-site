import Link from "next/link";
import { Check, ArrowRight, Phone, Download } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { COMPANY } from "@/lib/company";
import { MC_INSIGHTS, MC_RECOMMENDATION, MC_REPORT } from "@/lib/material-compare-data";

export function MCInsights() {
  return (
    <section className="bg-clear pb-14 pt-6">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* Key insights */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Key Insights</h2>
          <ul className="mt-4 space-y-3">
            {MC_INSIGHTS.map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-snug text-ink-70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {i}
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendation */}
        <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wide text-mist-soft/60">{MC_RECOMMENDATION.title}</h2>
            <span className="rounded-full bg-success/15 px-2.5 py-0.5 text-[10px] font-bold uppercase text-success">{MC_RECOMMENDATION.badge}</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-mist-soft/85">{MC_RECOMMENDATION.desc}</p>
          <ul className="mt-4 space-y-2">
            {MC_RECOMMENDATION.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>
          <Link href="/instant-estimate/" className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
            Get Free Estimate <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={COMPANY.phoneHref} className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-sky hover:text-clear">
            <Phone className="h-4 w-4" /> {COMPANY.phone}
          </a>
        </div>

        {/* Report */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">What&apos;s Included in Your Report</h2>
          <ul className="mt-4 space-y-3">
            {MC_REPORT.map((r) => (
              <li key={r.label} className="flex items-center gap-3 text-sm text-ink-70">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={r.icon} className="h-4 w-4 text-ridge" />
                </span>
                {r.label}
              </li>
            ))}
          </ul>
          <button type="button" className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-ridge/30 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft">
            Download Comparison Report <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
