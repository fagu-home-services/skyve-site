import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PH_STATS, PH_LEADS, PH_CHART, PH_NEWS } from "@/lib/partner-data";

const STATUS_COLOR: Record<string, string> = {
  New: "bg-ridge/10 text-ridge",
  Contacted: "bg-success/10 text-success",
  Qualified: "bg-warning/15 text-warning",
};

function LineChart() {
  const W = 320;
  const H = 140;
  const pad = 8;
  const all = [...PH_CHART.leads, ...PH_CHART.jobs];
  const max = Math.max(...all);
  const n = PH_CHART.leads.length;
  const x = (i: number) => pad + (i / (n - 1)) * (W - pad * 2);
  const y = (v: number) => H - pad - (v / max) * (H - pad * 2);
  const path = (arr: number[]) => arr.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full">
      {[0.25, 0.5, 0.75, 1].map((g) => (
        <line key={g} x1={pad} x2={W - pad} y1={H - pad - g * (H - pad * 2)} y2={H - pad - g * (H - pad * 2)} stroke="var(--color-mist)" strokeWidth="1" />
      ))}
      <path d={path(PH_CHART.leads)} fill="none" stroke="var(--color-ridge)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={path(PH_CHART.jobs)} fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {PH_CHART.leads.map((v, i) => <circle key={`l${i}`} cx={x(i)} cy={y(v)} r="2.5" fill="var(--color-ridge)" />)}
      {PH_CHART.jobs.map((v, i) => <circle key={`j${i}`} cx={x(i)} cy={y(v)} r="2.5" fill="var(--color-accent)" />)}
    </svg>
  );
}

export function PHDashboard() {
  return (
    <section className="bg-clear py-10">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-ink-50">Partner Dashboard Overview</h2>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PH_STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-mist bg-clear p-4 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={s.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <span className="text-[11px] font-bold text-success">{s.delta}</span>
                </div>
                <p className="mt-3 font-serif text-2xl font-bold text-horizon">{s.value}</p>
                <p className="text-[11px] text-ink-50">{s.label}</p>
                <p className="mt-0.5 text-[10px] text-ink-50">vs previous 30 days</p>
              </div>
            ))}
          </div>

          {/* Leads + chart */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-mist bg-clear p-5 shadow-card">
              <h3 className="text-xs font-bold uppercase tracking-wide text-horizon">Recent Leads</h3>
              <ul className="mt-3 divide-y divide-mist">
                {PH_LEADS.map((l) => (
                  <li key={l.type + l.time} className="flex items-center justify-between gap-3 py-2.5">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-horizon">{l.type}</p>
                      <p className="text-[11px] text-ink-50">{l.city}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${STATUS_COLOR[l.status]}`}>{l.status}</span>
                      <span className="text-[11px] text-ink-50">{l.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
                View All Leads <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="rounded-xl border border-mist bg-clear p-5 shadow-card">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wide text-horizon">Performance Trend</h3>
                <span className="flex items-center gap-3 text-[10px]">
                  <span className="flex items-center gap-1 text-ridge"><span className="h-1.5 w-3 rounded-full bg-ridge" /> Leads</span>
                  <span className="flex items-center gap-1 text-accent"><span className="h-1.5 w-3 rounded-full bg-accent" /> Jobs Won</span>
                </span>
              </div>
              <LineChart />
              <div className="mt-1 flex justify-between text-[9px] text-ink-50">
                {PH_CHART.labels.map((l) => <span key={l}>{l}</span>)}
              </div>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
                View Full Analytics <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* News rail */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-ink-50">Partner News & Updates</h2>
          <div className="mt-4 space-y-3">
            {PH_NEWS.map((nw) => (
              <a key={nw.title} href="#" className="flex items-start gap-3 rounded-xl border border-mist bg-clear p-4 shadow-card transition-colors hover:border-ridge">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <FileText className="h-4 w-4 text-ridge" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-horizon">{nw.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{nw.desc}</p>
                  <p className="mt-1 text-[10px] text-ink-50">{nw.date}</p>
                </div>
              </a>
            ))}
          </div>
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All Updates <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
