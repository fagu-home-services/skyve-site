import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceAreaCanvas } from "@/components/home/ServiceAreaCanvas";

export function ServiceAreaMap() {
  return (
    <section className="bg-mist-soft py-16 lg:py-24">
      <div className="container-skyve grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Copy */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-horizon sm:text-4xl">
            Serving Washington Homeowners
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-70">
            Proudly serving King County and Snohomish County with local crews,
            fast response times, and unmatched quality.
          </p>
          <Link
            href="/service-area"
            className="mt-7 inline-flex items-center gap-2 rounded-lg border border-horizon/15 bg-clear px-6 py-3 text-sm font-semibold text-horizon shadow-card transition-colors hover:border-accent hover:text-accent"
          >
            Explore All Cities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Interactive map (falls back to the illustration until the key is set) */}
        <ServiceAreaCanvas />
      </div>
    </section>
  );
}
