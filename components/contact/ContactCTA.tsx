import Link from "next/link";
import { Phone, ArrowRight, CalendarDays } from "lucide-react";
import { COMPANY } from "@/lib/company";
import { liveHref } from "@/lib/launch-phase";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ridge/25 blur-3xl" />
      <div className="container-skyve relative flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center">
        <div className="text-clear">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Ready To Get Answers About Your Roof?
          </h2>
          <p className="mt-2 max-w-lg text-sm text-sky-soft/80">
            Talk directly with a roofing professional and get the information you
            need.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg bg-ridge px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
          >
            Call Now <Phone className="h-4 w-4" />
          </a>
          <Link
            href="/instant-estimate/"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
          >
            Get Estimate <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={liveHref("/services/roof-inspection", "/contact")}
            className="inline-flex items-center gap-2 rounded-lg border border-clear/40 bg-clear/5 px-5 py-3 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
          >
            Schedule Inspection <CalendarDays className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
