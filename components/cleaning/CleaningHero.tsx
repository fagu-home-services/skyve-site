import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, Leaf, ChevronsLeftRight, Award } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/company";
import {
  CLEANING_BEFORE,
  CLEANING_AFTER,
  CLEANING_HERO_STRIP,
} from "@/lib/cleaning-data";

export function CleaningHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      <div className="container-skyve relative grid items-center gap-10 pt-24 pb-0 lg:grid-cols-2 lg:pt-28">
        {/* Left */}
        <div className="pb-10 text-clear lg:pb-16">
          <div className="pb-5">
            <Breadcrumb
              variant="light"
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Roof Cleaning" },
              ]}
            />
          </div>
          <p className="eyebrow text-sky">Roof Cleaning</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            A Cleaner Roof.
            <br />
            A Better Home.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            Remove moss, algae, lichen, and debris to protect your roof, improve
            curb appeal, and extend its lifespan.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/estimate/instant"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              Schedule Roof Cleaning <CalendarDays className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-clear">
            <span className="flex items-center gap-1.5 rounded-md bg-clear/10 px-2.5 py-1.5">
              <Award className="h-3.5 w-3.5 text-success" /> 25-Year Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky" /> {COMPANY.yearsCombined} Years Combined
            </span>
            <span className="flex items-center gap-1.5">
              <Leaf className="h-4 w-4 text-sky" /> Safe &amp; Eco-Friendly Cleaning
            </span>
          </div>
        </div>

        {/* Before / after */}
        <div className="relative overflow-hidden rounded-2xl shadow-elevated lg:mb-16">
          <div className="grid grid-cols-2">
            <div className="relative">
              <Photo src={CLEANING_BEFORE} alt="Roof before cleaning" className="aspect-[4/3]" />
              <span className="absolute left-3 top-3 rounded-md bg-horizon-deep/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-clear backdrop-blur-sm">
                Before
              </span>
            </div>
            <div className="relative">
              <Photo src={CLEANING_AFTER} alt="Roof after cleaning" className="aspect-[4/3]" />
              <span className="absolute right-3 top-3 rounded-md bg-ridge px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-clear">
                After
              </span>
            </div>
          </div>
          <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-clear/80" />
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clear text-ridge shadow-elevated">
            <ChevronsLeftRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* Feature strip */}
      <div className="border-t border-clear/10 bg-horizon-deep/60">
        <div className="container-skyve grid grid-cols-2 gap-4 py-5 sm:grid-cols-4">
          {CLEANING_HERO_STRIP.map((f) => (
            <div key={f.title} className="flex items-center gap-3 text-clear">
              <Icon name={f.icon} className="h-5 w-5 shrink-0 text-sky" />
              <div className="leading-tight">
                <p className="text-xs font-semibold">{f.title}</p>
                <p className="text-[11px] text-sky-soft/60">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
