import { ChevronDown, Check, Info, ArrowRight, Lock, Calendar } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { FC_PROJECT_TYPES, FC_FINANCING, FC_OPTIONS } from "@/lib/financing-calc-data";

type Sel = { label: string; value: string; options: string[] };

function Select({ f }: { f: Sel }) {
  return (
    <label className="block">
      <span className="flex items-center gap-1 text-xs font-semibold text-horizon">{f.label} <Info className="h-3 w-3 text-ink-50" /></span>
      <div className="relative mt-1.5">
        <select defaultValue={f.value} className="w-full appearance-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge">
          {f.options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
      </div>
    </label>
  );
}

function Range({ left, right, pct }: { left: string; right: string; pct: number }) {
  return (
    <div>
      <div className="relative mt-2 h-1.5 rounded-full bg-mist">
        <div className="absolute inset-y-0 left-0 rounded-full bg-ridge" style={{ width: `${pct}%` }} />
        <span className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ridge bg-clear shadow-card" style={{ left: `${pct}%` }} />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-ink-50">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </div>
  );
}

export function FCForm() {
  return (
    <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-7">
      {/* 1. Project info */}
      <h2 className="text-sm font-bold uppercase tracking-wide text-ridge">1. Project Information</h2>
      <label className="mt-4 block">
        <span className="text-xs font-semibold text-horizon">Project Cost</span>
        <p className="mt-1 text-[11px] text-ink-50">Total Project Cost</p>
        <input type="text" defaultValue="$24,800" className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm font-semibold text-ink-90 outline-none focus:border-ridge" />
        <Range left="$5,000" right="$100,000+" pct={24} />
        <span className="mt-1 block text-[11px] text-ink-50">This is the total cost of your roofing project.</span>
      </label>

      <div className="mt-5">
        <span className="text-xs font-semibold text-horizon">Project Type</span>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {FC_PROJECT_TYPES.map((t, i) => (
            <button key={t.label} type="button" className={`relative rounded-xl border p-4 text-left transition-colors ${i === 0 ? "border-ridge bg-ridge/5 ring-1 ring-ridge" : "border-mist hover:border-ridge/50"}`}>
              {i === 0 && <Check className="absolute right-2 top-2 h-3.5 w-3.5 text-ridge" />}
              <Icon name={t.icon} className={`h-5 w-5 ${i === 0 ? "text-ridge" : "text-ink-50"}`} />
              <p className="mt-2 text-xs font-bold text-horizon">{t.label}</p>
              <p className="text-[10px] leading-snug text-ink-50">{t.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Financing options */}
      <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-ridge">2. Financing Options</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <Select f={FC_FINANCING.loanAmount} />
        <Select f={FC_FINANCING.loanTerm} />
        <Select f={FC_FINANCING.apr} />
      </div>
      <div className="mt-5">
        <span className="text-xs font-semibold text-horizon">Down Payment (Optional)</span>
        <input type="text" defaultValue="$0" className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none focus:border-ridge sm:max-w-xs" />
        <Range left="$0 · 0%" right="$12,400 · 50%" pct={12} />
      </div>
      <div className="mt-5">
        <span className="text-xs font-semibold text-horizon">Payment Frequency</span>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {FC_FINANCING.frequency.map((f, i) => (
            <button key={f.label} type="button" className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-left transition-colors ${i === 0 ? "border-ridge bg-ridge/5 text-ridge" : "border-mist text-ink-70 hover:border-ridge/40"}`}>
              <Calendar className="h-4 w-4 shrink-0" />
              <span>
                <span className="block text-xs font-bold">{f.label}</span>
                {f.sub && <span className="block text-[10px] text-ink-50">{f.sub}</span>}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Additional options */}
      <h2 className="mt-8 text-sm font-bold uppercase tracking-wide text-ridge">3. Additional Options</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {FC_OPTIONS.map((o) => (
          <label key={o.label} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-70">
            <input type="checkbox" defaultChecked={o.on} className="h-4 w-4 rounded border-mist accent-ridge" />
            {o.label}
          </label>
        ))}
      </div>

      <button type="button" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover">
        Calculate My Payment <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-ink-50">
        <Lock className="h-3 w-3" /> This will not affect your credit score
      </p>
    </div>
  );
}
