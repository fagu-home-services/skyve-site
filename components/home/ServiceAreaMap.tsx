import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MAP_CITIES } from "@/lib/site-data";

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

        {/* Stylized map */}
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-mist bg-sky-soft/30 shadow-card">
          {/* Puget Sound water */}
          <div className="absolute -left-10 top-0 h-full w-2/5 -skew-x-12 bg-ridge/15" />
          {/* county tints */}
          <div className="absolute right-6 top-6 h-2/3 w-3/5 rounded-[40%] bg-ridge/10 blur-2xl" />
          <div className="absolute bottom-6 left-1/4 h-2/3 w-3/5 rounded-[40%] bg-accent/10 blur-2xl" />

          {/* Legend */}
          <div className="absolute right-4 top-4 z-10 rounded-lg border border-mist bg-clear/90 p-3 text-xs shadow-card backdrop-blur-sm">
            <p className="flex items-center gap-2 text-ink-70">
              <span className="h-2.5 w-2.5 rounded-full bg-ridge" /> King County
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-ink-70">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" /> Snohomish County
            </p>
          </div>

          {/* City dots */}
          {MAP_CITIES.map((c) => (
            <div
              key={c.name}
              className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ring-2 ring-clear ${
                  c.county === "king" ? "bg-ridge" : "bg-accent"
                }`}
              />
              <span className="mt-1 whitespace-nowrap text-[10px] font-medium text-horizon/80">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
