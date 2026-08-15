import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { RATING } from "@/lib/why-data";

type Review = { name: string; city: string; initials: string; quote: string };

export function GoogleReviews({
  title = "What Homeowners Are Saying",
  reviews,
  viewAllHref = "/reviews",
}: {
  title?: string;
  reviews: Review[];
  viewAllHref?: string;
}) {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            {title}
          </h2>
          <Link
            href={viewAllHref}
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
          >
            View All Reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[200px_1fr]">
          <div className="flex flex-col items-center justify-center rounded-xl border border-mist bg-mist-soft/60 p-6 text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist font-serif text-lg font-bold text-ridge">
              G
            </span>
            <p className="mt-2 font-serif text-3xl font-extrabold text-horizon">
              {RATING.score}
            </p>
            <div className="mt-1 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-50">{RATING.reviews}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-xl border border-mist bg-clear p-5 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ridge text-sm font-bold text-clear">
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
      </div>
    </section>
  );
}
