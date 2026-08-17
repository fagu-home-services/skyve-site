import { ShieldCheck } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { WHY_HERO_IMAGE, WHY_HERO_FEATURES, RATING } from "@/lib/why-data";
import { COMPANY } from "@/lib/company";

export function WhyHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={WHY_HERO_IMAGE}
        alt="Washington home at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative pt-24 pb-14 lg:pt-28">
        <div className="pb-6">
          <Breadcrumb
            variant="light"
            items={[{ label: "Home", href: "/" }, { label: "Why Skyve" }]}
          />
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_minmax(280px,340px)]">
          {/* Left */}
          <div className="text-clear">
            <p className="eyebrow text-sky">Why Homeowners Choose Skyve</p>
            <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl">
              Honest. Transparent. Built Around You.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-sky-soft/90">
              At Skyve, we believe a better roofing experience starts with
              transparency, proven expertise, and a commitment to doing what&apos;s
              right—every step of the way.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
              {WHY_HERO_FEATURES.map((f) => (
                <div key={f.title} className="flex max-w-[120px] flex-col gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clear/10">
                    <Icon name={f.icon} className="h-5 w-5 text-sky" />
                  </span>
                  <span className="text-xs font-semibold leading-snug text-clear">
                    {f.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust card (honest — company is new, no fabricated rating) */}
          <div className="rounded-2xl bg-clear p-6 shadow-elevated">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-soft">
                <ShieldCheck className="h-5 w-5 text-ridge" />
              </span>
              <span className="font-serif text-2xl font-extrabold text-horizon">
                {COMPANY.warrantyYears}-Year Warranty
              </span>
            </div>
            <p className="mt-3 text-sm font-semibold text-horizon">
              Licensed &amp; insured · {COMPANY.yearsCombined} years combined experience
            </p>
            <p className="text-xs text-ink-50">{RATING.area}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
