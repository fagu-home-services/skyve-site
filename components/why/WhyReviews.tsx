import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { WHY_REVIEWS } from "@/lib/why-data";

export function WhyReviews() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-horizon sm:text-4xl">
              What Homeowners Are Saying
            </h2>
            <p className="mt-2 text-sm text-ink-50">
              Real feedback from real homeowners.
            </p>
          </div>
          <Link
            href="/reviews"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            View All Reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHY_REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-xl border border-mist bg-mist-soft/60 p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ridge text-sm font-bold text-clear">
                  {r.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{r.name}</p>
                  <p className="text-xs text-ink-50">{r.city}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-ink-70">
                {r.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
