import { ArrowRight, ArrowUp, ChevronRight, TrendingUp } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { VerascorMark } from "@/components/portal/roofscore/VerascorMark";
import { RS_TREND, RS_BREAKDOWN, RS_IMPACTS, RS_RECOMMENDATIONS, RS_FAQS } from "@/lib/portal-roofscore-data";

function trendPoints() {
  const pts = RS_TREND.points;
  const w = 260;
  const h = 90;
  const max = 100;
  return pts
    .map((v, i) => {
      const x = (i / (pts.length - 1)) * w;
      const y = h - (v / max) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function RSSidebar() {
  const pts = trendPoints();
  const last = pts.split(" ").slice(-1)[0].split(",");

  return (
    <aside className="space-y-5">
      {/* Score Trend */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{RS_TREND.title}</h3>
        <svg viewBox="0 0 260 100" className="mt-4 h-28 w-full" preserveAspectRatio="none">
          {[0, 25, 50, 75, 100].map((g) => (
            <line key={g} x1="0" x2="260" y1={90 - (g / 100) * 90} y2={90 - (g / 100) * 90} stroke="var(--color-mist)" strokeWidth="0.5" />
          ))}
          <polyline points={pts} fill="none" stroke="var(--color-success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={last[0]} cy={last[1]} r="4" fill="var(--color-success)" />
        </svg>
        <div className="mt-2 flex items-center justify-between rounded-lg bg-success/8 px-3 py-2">
          <span className="flex items-center gap-1.5 text-xs text-ink-70">
            <TrendingUp className="h-3.5 w-3.5 text-success" /> Your roof score is up
          </span>
          <span className="text-right">
            <span className="flex items-center gap-1 text-sm font-bold text-success"><ArrowUp className="h-3 w-3" />{RS_TREND.up}</span>
            <span className="text-[10px] text-ink-50">{RS_TREND.upNote}</span>
          </span>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{RS_BREAKDOWN.title}</h3>
        <ul className="mt-4 space-y-3">
          {RS_BREAKDOWN.rows.map((r) => (
            <li key={r.label}>
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-70">{r.label}</span>
                <span className="font-semibold text-horizon">{r.value}/100</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-mist">
                <div className="h-full rounded-full bg-success" style={{ width: `${r.value}%` }} />
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View Breakdown Details <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* What impacts */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{RS_IMPACTS.title}</h3>
        <ul className="mt-3 space-y-3">
          {RS_IMPACTS.items.map((it) => (
            <li key={it.title} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={it.icon} className="h-4 w-4 text-ridge" />
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{it.title}</p>
                <p className="text-[11px] leading-snug text-ink-50">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          <VerascorMark className="scale-90" /> <span className="ml-1">Learn More About Roof Score</span> <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Recommendations */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{RS_RECOMMENDATIONS.title}</h3>
        <ul className="mt-3 space-y-3">
          {RS_RECOMMENDATIONS.items.map((r) => (
            <li key={r.title} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={r.icon} className="h-4 w-4 text-ridge" />
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{r.title}</p>
                <p className="text-[11px] leading-snug text-ink-50">{r.desc}</p>
                <span className={`mt-1 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold ${r.tagTone}`}>{r.tag}</span>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View All Recommendations <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* FAQs */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{RS_FAQS.title}</h3>
        <ul className="mt-3 divide-y divide-mist">
          {RS_FAQS.items.map((q) => (
            <li key={q}>
              <a href="#" className="flex items-center justify-between gap-2 py-2.5 text-sm text-ink-70 hover:text-ridge">
                <span className="flex items-center gap-2">
                  <Icon name="help" className="h-4 w-4 text-ridge" /> {q}
                </span>
                <ChevronRight className="h-4 w-4 text-ink-50" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View All FAQs <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}
