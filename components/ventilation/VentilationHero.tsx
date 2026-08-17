import Link from "next/link";
import { ArrowRight, Play, Clock, CheckCircle2, Award } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/company";
import { VENT_HERO_IMAGE, WHY_VENTILATION, TEMP_COMPARISON } from "@/lib/ventilation-data";

export function VentilationHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={VENT_HERO_IMAGE}
        alt="Roof ventilation solutions"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative grid items-center gap-10 pt-24 pb-14 lg:grid-cols-[1fr_minmax(320px,380px)] lg:pt-28">
        {/* Left */}
        <div className="text-clear">
          <div className="pb-5">
            <Breadcrumb
              variant="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Roof Ventilation" },
              ]}
            />
          </div>
          <p className="eyebrow text-sky">Roof Ventilation Solutions</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Better Ventilation.
            <br />
            Healthier Roof.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            Proper roof ventilation regulates temperature and moisture, extends
            roof life, lowers energy bills, and protects your home from costly
            damage.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Schedule Ventilation Inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              Learn How It Works <Play className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-clear">
            <span className="flex items-center gap-1.5 rounded-md bg-clear/10 px-2.5 py-1.5">
              <Award className="h-3.5 w-3.5 text-success" /> 25-Year Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky" /> {COMPANY.yearsCombined} Years Combined
            </span>
            <span className="text-sky-soft/80">Energy Efficient</span>
            <span className="text-sky-soft/80">Improved Roof Lifespan</span>
          </div>
        </div>

        {/* Why matters + temp comparison */}
        <div className="rounded-2xl bg-clear p-6 shadow-elevated">
          <p className="font-serif text-base font-bold text-horizon">
            {WHY_VENTILATION.title}
          </p>
          <ul className="mt-3 space-y-2">
            {WHY_VENTILATION.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-ink-70">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-ridge" /> {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 border-t border-mist pt-4">
            <p className="text-sm font-bold text-horizon">Roof Temperature Comparison</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-danger/5 p-3">
                <p className="text-[10px] text-ink-50">Poor Ventilation</p>
                <p className="font-serif text-2xl font-extrabold text-danger">
                  {TEMP_COMPARISON.poor}
                </p>
                <div className="mt-1.5 h-1.5 rounded-full bg-danger" />
              </div>
              <div className="rounded-lg bg-ridge/5 p-3">
                <p className="text-[10px] text-ink-50">Proper Ventilation</p>
                <p className="font-serif text-2xl font-extrabold text-ridge">
                  {TEMP_COMPARISON.proper}
                </p>
                <div className="mt-1.5 h-1.5 w-3/5 rounded-full bg-ridge" />
              </div>
            </div>
            <p className="mt-2 text-center text-[10px] text-ink-50">
              {TEMP_COMPARISON.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
