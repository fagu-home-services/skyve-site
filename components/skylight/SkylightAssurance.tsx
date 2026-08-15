import { ShieldCheck, Check } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { SKYLIGHT_ASSURANCE } from "@/lib/skylight-data";

const { expect, warranty, energy } = SKYLIGHT_ASSURANCE;

export function SkylightAssurance() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.25fr_1fr_1.25fr]">
        {/* What To Expect */}
        <div className="grid gap-5 rounded-2xl border border-mist bg-mist-soft/40 p-6 shadow-card sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-lg font-bold text-horizon">{expect.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {expect.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <Photo src={expect.image} alt="Skylight installation" className="h-full min-h-40 rounded-xl" />
        </div>

        {/* Warranty */}
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

        {/* Energy Savings */}
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
          <Photo src={energy.image} alt="Bright interior with skylight" className="h-full min-h-40 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
