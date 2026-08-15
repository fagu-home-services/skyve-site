import { ShieldCheck, Check } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import {
  SKYLIGHT_REPLACEMENT,
  SKYLIGHT_REPLACEMENT_WARRANTY,
  SKYLIGHT_REPLACEMENT_ENERGY,
} from "@/lib/skylight-replacement-data";

const comparison = SKYLIGHT_REPLACEMENT.comparison;
const warranty = SKYLIGHT_REPLACEMENT_WARRANTY;
const energy = SKYLIGHT_REPLACEMENT_ENERGY;

export function SkylightCompareEnergy() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.3fr_1fr_1.2fr]">
        {/* Old vs New comparison */}
        <div className="overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
          <h2 className="border-b border-mist px-5 py-3.5 font-serif text-base font-bold text-horizon">
            {comparison.title}
          </h2>
          <div className="grid grid-cols-[1.3fr_1fr_1fr] text-[11px]">
            <div className="bg-mist-soft px-3 py-2 font-bold uppercase tracking-wide text-ink-50">
              Feature
            </div>
            {comparison.columns.map((col, i) => (
              <div
                key={col}
                className={`px-2 py-2 text-center font-bold uppercase tracking-wide ${
                  i === 1 ? "bg-ridge text-clear" : "bg-mist-soft text-ink-50"
                }`}
              >
                {col}
              </div>
            ))}
            {comparison.rows.map((r) => (
              <div key={r.feature} className="contents">
                <div className="flex items-center gap-1.5 border-t border-mist px-3 py-2.5 text-ink-70">
                  <Icon name={r.icon} className="h-3.5 w-3.5 shrink-0 text-ridge" /> {r.feature}
                </div>
                {r.values.map((v, i) => (
                  <div
                    key={i}
                    className={`border-t border-mist px-2 py-2.5 text-center ${
                      i === 1 ? "bg-ridge/5 font-semibold text-ridge" : "text-ink-50"
                    }`}
                  >
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Warranty card */}
        <div className="rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 shrink-0 text-sky" />
            <div>
              <h3 className="font-serif text-lg font-bold">{warranty.title}</h3>
              <p className="mt-1 text-xs text-sky-soft/70">{warranty.text}</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2.5">
            {warranty.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-accent" /> {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-clear/10 pt-4 text-xs text-sky-soft/70">
            {warranty.footer}
          </p>
        </div>

        {/* Energy Savings & Comfort */}
        <div className="grid gap-5 rounded-2xl border border-mist bg-mist-soft/40 p-6 shadow-card sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-lg font-bold text-horizon">{energy.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-50">{energy.text}</p>
            <ul className="mt-4 space-y-3">
              {energy.stats.map((s) => (
                <li key={s.label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-soft">
                    <Icon name={s.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-bold text-horizon">{s.value}</span>
                    <span className="block text-[11px] text-ink-50">{s.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Photo src={energy.image} alt="Bright interior with new skylight" className="h-full min-h-40 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
