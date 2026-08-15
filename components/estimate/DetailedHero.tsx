import Link from "next/link";
import { Check } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import {
  DETAILED_HERO_IMAGE,
  DETAILED_HERO_FEATURES,
  DETAILED_PRICE,
  DETAILED_INCLUDES,
} from "@/lib/estimate-data";

export function DetailedHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* photo + overlays */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={DETAILED_HERO_IMAGE}
        alt="Washington home at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative pt-24 pb-16 lg:pt-28">
        <div className="pb-6">
          <Breadcrumb
            variant="light"
            items={[{ label: "Home", href: "/" }, { label: "Detailed Estimate" }]}
          />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_minmax(320px,380px)]">
          {/* Left */}
          <div className="text-clear">
            <p className="eyebrow text-sky">Detailed Roof Estimate</p>
            <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-6xl">
              The Most Accurate Estimate Possible.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-sky-soft/90">
              Our Detailed Estimate includes a drone inspection, precise
              measurements, material analysis, and a complete project plan so you
              know exactly what to expect.
            </p>

            <div className="mt-9 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {DETAILED_HERO_FEATURES.map((f) => (
                <div key={f.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clear/10">
                    <Icon name={f.icon} className="h-5 w-5 text-sky" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-clear">{f.title}</p>
                  <p className="mt-1 text-xs leading-snug text-sky-soft/70">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing card */}
          <div className="rounded-2xl bg-clear p-7 shadow-elevated">
            <p className="text-sm text-ink-50">Starting at</p>
            <p className="font-serif text-5xl font-extrabold text-horizon">
              <span className="align-super text-2xl">$</span>
              {DETAILED_PRICE}
            </p>
            <p className="text-sm text-ink-50">One-time fee</p>

            <ul className="mt-5 space-y-2.5 border-t border-mist pt-5">
              {DETAILED_INCLUDES.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink-70">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ridge/10">
                    <Check className="h-3 w-3 text-ridge" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="mt-6 flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover"
            >
              Get My Detailed Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
