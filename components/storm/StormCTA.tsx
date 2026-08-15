import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { STORM_CTA_IMAGE } from "@/lib/storm-data";

export function StormCTA() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={STORM_CTA_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep to-horizon-deep/60" />
      <div className="container-skyve relative flex flex-col items-start justify-between gap-6 py-12 lg:flex-row lg:items-center">
        <div className="text-clear">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Don&apos;t Wait. Storm Damage Gets Worse.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-sky-soft/80">
            Call now for immediate assistance and protect your home.
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
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-clear/40 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
          >
            Request Emergency Service <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
