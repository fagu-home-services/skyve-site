import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { liveHref } from "@/lib/launch-phase";

export function EstimateCTA() {
  return (
    <section className="bg-clear pb-16 lg:pb-20">
      <div className="container-skyve">
        <div className="relative overflow-hidden rounded-2xl bg-horizon-deep px-8 py-12 lg:px-12">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ridge/25 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="text-clear">
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-2 max-w-md text-sm text-sky-soft/80">
                Join thousands of homeowners who trust Skyve for accurate,
                transparent roofing estimates.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
              >
                Get Your Estimate Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={liveHref("/services/roof-inspection", "/contact")}
                className="inline-flex items-center gap-2 rounded-lg border border-clear/40 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
              >
                Schedule Inspection <CalendarDays className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
