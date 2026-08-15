import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* Honest value band (replaces a financing band until a real lender partner
   is signed). Reinforces the no-pressure, documented-work positioning. */
export function PromiseBand() {
  return (
    <section className="bg-horizon-deep py-14 text-clear">
      <div className="container-skyve flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            No pressure. No hidden fees.{" "}
            <span className="text-accent">Ever.</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-sky-soft/85">
            Free inspection, an itemized estimate you can actually read, and
            every job documented photo-by-photo. If we can&apos;t do it right,
            we&apos;ll tell you straight.
          </p>
        </div>
        <Link
          href="/estimate/instant"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
        >
          Book My Free Inspection <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
