import { ShieldCheck, Info } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { RL_EXPECTANCY, RL_BREAKDOWN, RL_FACTORS, RL_SCORE } from "@/lib/roof-life-data";

function Gauge() {
  const pct = (RL_SCORE.value / RL_SCORE.max) * 100;
  return (
    <div className="relative mx-auto h-32 w-32">
      <div
        className="h-full w-full rounded-full"
        style={{ background: `conic-gradient(var(--color-success) ${pct}%, var(--color-mist) ${pct}% 100%)` }}
      />
      <div className="absolute inset-[16%] flex flex-col items-center justify-center rounded-full bg-clear text-center">
        <span className="font-serif text-3xl font-extrabold text-horizon">{RL_SCORE.value}</span>
        <span className="text-[10px] text-ink-50">/{RL_SCORE.max}</span>
      </div>
    </div>
  );
}

export function RLResults() {
  return (
    <div className="space-y-6">
      {/* Expectancy */}
      <section className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-mist-soft/60">Your Roof Life Expectancy</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-0.5 text-[10px] font-bold uppercase text-success">
            <ShieldCheck className="h-3 w-3" /> {RL_EXPECTANCY.condition}
          </span>
        </div>
        <p className="mt-2 font-serif text-3xl font-extrabold text-clear">{RL_EXPECTANCY.remaining}</p>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-mist-soft/70">Estimated range <Info className="h-3.5 w-3.5" /></p>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-clear/10 pt-4">
          {RL_EXPECTANCY.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-[10px] text-mist-soft/60">{m.label}</p>
              <p className="mt-0.5 text-sm font-bold text-clear">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Breakdown */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="font-serif text-base font-bold text-horizon">Life Expectancy Breakdown</h2>
        <ul className="mt-4 space-y-3">
          {RL_BREAKDOWN.bars.map((b) => (
            <li key={b.label} className="grid grid-cols-[1.3fr_1.4fr_auto] items-center gap-3 text-xs">
              <span className="text-ink-70">{b.label}</span>
              <span className="h-2 rounded-full bg-mist">
                <span className="block h-full rounded-full" style={{ width: `${b.pct}%`, background: b.color }} />
              </span>
              <span className="whitespace-nowrap text-right font-semibold text-horizon">{b.value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-mist pt-3">
          <span className="text-sm font-bold text-horizon">Estimated Remaining Life</span>
          <span className="text-sm font-bold text-ridge">{RL_BREAKDOWN.remaining}</span>
        </div>
      </section>

      {/* Factors + gauge */}
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <h2 className="flex items-center gap-1 font-serif text-base font-bold text-horizon">
            Factors That Impact Your Roof <Info className="h-3.5 w-3.5 text-ink-50" />
          </h2>
          <ul className="mt-4 space-y-3.5">
            {RL_FACTORS.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={f.icon} className="h-4 w-4 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{f.title}</p>
                  <p className="text-[11px] leading-snug text-ink-50">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-mist bg-clear p-5 text-center shadow-card">
          <h2 className="font-serif text-base font-bold text-horizon">Condition Score</h2>
          <div className="mt-4">
            <Gauge />
          </div>
          <p className="mt-3 text-sm font-bold text-success">{RL_SCORE.label}</p>
          <p className="mt-1 text-xs leading-snug text-ink-50">{RL_SCORE.desc}</p>
        </section>
      </div>
    </div>
  );
}
