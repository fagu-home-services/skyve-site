import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { SERVICES_HERO_IMAGE } from "@/lib/services-data";
import { liveHref } from "@/lib/launch-phase";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SERVICES_HERO_IMAGE}
        alt="Complete roofing and exterior solutions in Washington"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-xl text-clear">
          <p className="eyebrow text-sky">Our Services</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.06] sm:text-5xl">
            Complete Roofing &amp; Exterior Solutions
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            From roof replacement to exterior upgrades, we provide end-to-end
            solutions with expert craftsmanship, premium materials, and unmatched
            customer care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/estimate/instant"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={liveHref("/services/roof-inspection", "/contact")}
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              Schedule Inspection <CalendarDays className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
