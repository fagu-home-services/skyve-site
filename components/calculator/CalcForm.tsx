import { Search, MapPin, ChevronDown, Check, ArrowRight, Info, ClipboardCheck } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import type { CalcData, CalcField } from "@/lib/calculator-data";

function Field({ f }: { f: CalcField }) {
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
          <input type="text" defaultValue={f.value} className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-3.5 pr-12 text-sm text-ink-90 outline-none focus:border-ridge" />
          {f.unit && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-50">{f.unit}</span>}
        </div>
      )}
    </label>
  );
}

export function CalcForm({ data }: { data: CalcData }) {
  return (
    <div>
      <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-7">
        <h2 className="text-sm font-bold uppercase tracking-wide text-ridge">{data.formTitle}</h2>

        {/* Address */}
        <label className="mt-5 block">
          <span className="text-xs font-semibold text-horizon">{data.addressLabel}</span>
          <div className="relative mt-1.5">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input type="text" placeholder="Enter your address" className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-10 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
          </div>
          <span className="mt-1.5 flex items-center gap-1 text-[11px] text-ink-50">
            <MapPin className="h-3 w-3" /> We use your location for accurate local pricing
          </span>
        </label>

        {/* Top fields */}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {data.topFields.map((f) => (
            <Field key={f.label} f={f} />
          ))}
        </div>

        {/* Complexity */}
        <div className="mt-5">
          <span className="text-xs font-semibold text-horizon">Roof Complexity</span>
          <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.complexity.map((c, i) => (
              <button
                key={c.label}
                type="button"
                className={`relative rounded-xl border p-3 text-center transition-colors ${
                  i === 1 ? "border-ridge bg-ridge/5 ring-1 ring-ridge" : "border-mist hover:border-ridge/50"
                }`}
              >
                {i === 1 && <Check className="absolute right-2 top-2 h-3.5 w-3.5 text-ridge" />}
                <Icon name={c.icon} className={`mx-auto h-5 w-5 ${i === 1 ? "text-ridge" : "text-ink-50"}`} />
                <p className="mt-1.5 text-[11px] font-bold text-horizon">{c.label}</p>
                <p className="text-[10px] leading-snug text-ink-50">{c.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Mid fields */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {data.midFields.map((f) => (
            <Field key={f.label} f={f} />
          ))}
        </div>

        {/* Features */}
        <div className="mt-5">
          <span className="flex items-center gap-1 text-xs font-semibold text-horizon">
            {data.featuresLabel} <Info className="h-3 w-3 text-ink-50" />
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.features.map((f) => (
              <button
                key={f.label}
                type="button"
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                  f.on ? "border-ridge bg-ridge/5 text-ridge" : "border-mist text-ink-70 hover:border-ridge/40"
                }`}
              >
                {f.on && <Check className="h-3 w-3" />} {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-5 sm:max-w-xs">
          <Field f={data.timeline} />
        </div>

        <button type="button" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover">
          {data.nextButton} <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* How it works (only when there is no extras row) */}
      {!data.extrasRow && data.howItWorks && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-mist bg-mist-soft/40 p-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-clear ring-1 ring-mist">
            <ClipboardCheck className="h-4 w-4 text-ridge" />
          </span>
          <div>
            <p className="text-sm font-bold text-horizon">{data.howItWorks.title}</p>
            <p className="mt-1 text-xs leading-snug text-ink-50">{data.howItWorks.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
