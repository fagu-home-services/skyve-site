import Link from "next/link";
import { Phone, CalendarDays } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { LEAK_CTA_IMAGE } from "@/lib/leak-data";

export function LeakCTA() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LEAK_CTA_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep to-horizon-deep/60" />
      <div className="container-skyve relative flex flex-col items-start justify-between gap-6 py-12 lg:flex-row lg:items-center">
        <div className="text-clear">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Don&apos;t Let a Small Leak Become a Big Problem.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-sky-soft/80">
            Get fast, reliable leak repair from the roofing experts you can trust.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
          >
            <Phone className="h-4 w-4" /> Call Now: {COMPANY.phone}
          </a>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-clear/40 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
          >
            Schedule Leak Inspection <CalendarDays className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
