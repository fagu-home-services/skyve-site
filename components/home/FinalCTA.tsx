import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { liveHref } from "@/lib/launch-phase";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon to-ridge" />
      <div className="absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.7) 0 1px, transparent 1px 11px)",
        }}
      />

      <div className="container-skyve relative py-16 text-center lg:py-24">
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-extrabold text-clear sm:text-4xl lg:text-5xl">
          Ready To Know What Your Roof Really Needs?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-sky-soft/90">
          Get a professional estimate backed by real measurements and local
          market data.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/estimate/instant"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
          >
            Get Instant Estimate
          </Link>
          <Link
            href={liveHref("/services/roof-inspection", "/contact")}
            className="inline-flex items-center gap-2 rounded-lg border border-clear/40 bg-clear/5 px-7 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
          >
            Schedule Inspection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
