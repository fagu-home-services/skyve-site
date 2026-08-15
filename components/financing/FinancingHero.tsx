import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import {
  FINANCING_HERO_IMAGE,
  FINANCING_HERO_FEATURES,
} from "@/lib/financing-data";

export function FinancingHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={FINANCING_HERO_IMAGE}
        alt="Washington home at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative pt-24 pb-14 lg:pt-28">
        <div className="pb-6">
          <Breadcrumb
            variant="light"
            items={[{ label: "Home", href: "/" }, { label: "Financing" }]}
          />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_minmax(320px,380px)]">
          {/* Left */}
          <div className="text-clear">
            <p className="eyebrow text-sky">Financing Solutions</p>
            <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
              Quality Roofing.
              <br />
              Flexible Payments.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
              Don&apos;t let budget stand in the way of protecting your home. We
              offer flexible financing options to fit your needs.
            </p>

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
              {FINANCING_HERO_FEATURES.map((f) => (
                <div key={f.title} className="text-center sm:text-left">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-clear/10 sm:mx-0">
                    <Icon name={f.icon} className="h-5 w-5 text-sky" />
                  </span>
                  <p className="mt-3 text-sm font-semibold leading-snug text-clear">
                    {f.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment card */}
          <div className="rounded-2xl bg-clear p-7 shadow-elevated">
            <h2 className="font-serif text-xl font-bold text-horizon">
              See Your Payment
            </h2>
            <p className="mt-1 text-sm text-ink-50">
              It only takes a few seconds.
            </p>

            <label className="mt-5 block text-xs font-semibold text-ink-70">
              Project Type
            </label>
            <div className="relative mt-1.5">
              <select className="w-full appearance-none rounded-lg border border-mist bg-mist-soft px-3.5 py-2.5 text-sm text-ink-90 outline-none focus:border-ridge">
                <option>Roof Replacement</option>
                <option>Roof Repair</option>
                <option>Metal Roofing</option>
                <option>Siding</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold text-ink-70">Project Cost</label>
              <div className="mt-1.5 rounded-lg border border-mist bg-mist-soft px-3.5 py-2.5 text-sm text-ink-90">
                $20,000
              </div>
              <input
                type="range"
                min={5000}
                max={50000}
                defaultValue={20000}
                className="mt-3 w-full accent-ridge"
              />
              <div className="mt-1 flex justify-between text-[11px] text-ink-50">
                <span>$5,000</span>
                <span>$50,000+</span>
              </div>
            </div>

            <div className="mt-3">
              <label className="text-xs font-semibold text-ink-70">Down Payment</label>
              <div className="mt-1.5 rounded-lg border border-mist bg-mist-soft px-3.5 py-2.5 text-sm text-ink-90">
                $2,000 (10%)
              </div>
              <input
                type="range"
                min={0}
                max={30}
                defaultValue={10}
                className="mt-3 w-full accent-ridge"
              />
              <div className="mt-1 flex justify-between text-[11px] text-ink-50">
                <span>0%</span>
                <span>30%</span>
              </div>
            </div>

            <div className="mt-5 text-center">
              <p className="text-xs text-ink-50">Estimated Monthly Payment</p>
              <p className="font-mono text-4xl font-extrabold text-ridge">
                $287 <span className="text-lg font-bold">/mo*</span>
              </p>
            </div>

            <button className="mt-4 w-full rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover">
              Calculate My Payment
            </button>
            <p className="mt-3 text-center text-[11px] text-ink-50">
              *Example only. Rates and terms may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
