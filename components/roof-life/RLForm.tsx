import { ChevronDown, Check, Info, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { RL_DETAILS, RL_CONDITION, RL_ENVIRONMENT } from "@/lib/roof-life-data";

type F = { label: string; value: string; options?: string[]; unit?: string };

function Field({ f }: { f: F }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-horizon">{f.label}</span>
      {f.options ? (
        <div className="relative mt-1.5">
          <select defaultValue={f.value} className="w-full appearance-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge">
            {f.options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
        </div>
      ) : (
        <div className="relative mt-1.5">
          <input type="text" defaultValue={f.value} className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-3.5 pr-14 text-sm text-ink-90 outline-none focus:border-ridge" />
          {f.unit && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-50">{f.unit}</span>}
        </div>
      )}
    </label>
  );
}

function Slider({ label, labels, active }: { label: string; labels: string[]; active: number }) {
  const pct = (active / (labels.length - 1)) * 100;
  return (
    <div>
      <span className="flex items-center gap-1 text-xs font-semibold text-horizon">
        {label} <Info className="h-3 w-3 text-ink-50" />
      </span>
      <div className="relative mt-4 h-1.5 rounded-full bg-mist">
        <div className="absolute inset-y-0 left-0 rounded-full bg-ridge" style={{ width: `${pct}%` }} />
        <span className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ridge bg-clear shadow-card" style={{ left: `${pct}%` }} />
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-ink-50">
        {labels.map((l, i) => (
          <span key={l} className={i === active ? "font-bold text-ridge" : ""}>{l}</span>
        ))}
      </div>
    </div>
  );
}

export function RLForm() {
  return (
    <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-7">
      {/* Section 1 */}
      <h2 className="text-sm font-bold uppercase tracking-wide text-ridge">1. Roof Details</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {RL_DETAILS.row1.map((f) => <Field key={f.label} f={f} />)}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {RL_DETAILS.row2.map((f) => <Field key={f.label} f={f} />)}
      </div>
      <div className="mt-4">
        <span className="text-xs font-semibold text-horizon">Roof Exposure</span>
        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {RL_DETAILS.exposure.map((c, i) => (
            <button key={c.label} type="button" className={`relative rounded-xl border p-3 text-center transition-colors ${i === 1 ? "border-ridge bg-ridge/5 ring-1 ring-ridge" : "border-mist hover:border-ridge/50"}`}>
              {i === 1 && <Check className="absolute right-2 top-2 h-3.5 w-3.5 text-ridge" />}
              <Icon name={c.icon} className={`mx-auto h-5 w-5 ${i === 1 ? "text-ridge" : "text-ink-50"}`} />
              <p className="mt-1.5 text-[11px] font-bold text-horizon">{c.label}</p>
              <p className="text-[10px] leading-snug text-ink-50">{c.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Section 2 */}
      <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-ridge">2. Condition & Maintenance</h2>
      <div className="mt-4 grid gap-8 sm:grid-cols-2">
        {RL_CONDITION.sliders.map((s) => (
          <Slider key={s.label} label={s.label} labels={s.labels} active={s.active} />
        ))}
      </div>
      <div className="mt-5">
        <span className="flex items-center gap-1 text-xs font-semibold text-horizon">
          Recent Maintenance Performed <Info className="h-3 w-3 text-ink-50" />
        </span>
        <div className="mt-2 flex flex-wrap gap-2">
          {RL_CONDITION.chips.map((c) => (
            <button key={c.label} type="button" className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${c.on ? "border-ridge bg-ridge/5 text-ridge" : "border-mist text-ink-70 hover:border-ridge/40"}`}>
              {c.on && <Check className="h-3 w-3" />} {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-ridge">3. Environment Factors</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {RL_ENVIRONMENT.map((f) => <Field key={f.label} f={f} />)}
      </div>

      <button type="button" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover">
        Calculate Roof Life Expectancy <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
