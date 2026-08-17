import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, Clock, Award } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/company";
import { INSPECTION_HERO_IMAGE, INSPECTION_RECOMMENDED } from "@/lib/inspection-data";

export function InspectionHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={INSPECTION_HERO_IMAGE}
        alt="Professional roof inspection with a tablet"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      {/* Recommended Annually card */}
      <div className="absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 rounded-2xl bg-horizon-deep/85 p-6 text-clear shadow-elevated backdrop-blur-sm lg:block">
        <CalendarDays className="h-7 w-7 text-sky" />
        <p className="mt-4 font-serif text-lg font-bold leading-tight">
          {INSPECTION_RECOMMENDED.title}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-sky-soft/70">
          {INSPECTION_RECOMMENDED.text}
        </p>
      </div>

      <div className="container-skyve relative pt-24 pb-12 lg:pt-28">
        <div className="pb-5">
          <Breadcrumb
            variant="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Roof Inspection" },
            ]}
          />
        </div>

        <div className="max-w-xl text-clear">
          <p className="eyebrow text-sky">Roof Inspection</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl">
            Know the Condition. Protect Your Home.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            A professional roof inspection gives you peace of mind and helps you
            catch small issues before they become expensive problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Schedule Your Inspection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/estimate/instant"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              Get a Free Estimate <CalendarDays className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-clear">
            <span className="flex items-center gap-1.5 rounded-md bg-clear/10 px-2.5 py-1.5">
              <Award className="h-3.5 w-3.5 text-success" /> 25-Year Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-sky" /> Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky" /> {COMPANY.yearsCombined} Years Combined
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
