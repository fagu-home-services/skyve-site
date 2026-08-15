import Link from "next/link";
import { Star } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { RATING } from "@/lib/why-data";
import { GUTTER_GUARDS, GUTTER_GUARDS_BEFORE_AFTER } from "@/lib/gutter-guards-data";

const { before, after } = GUTTER_GUARDS_BEFORE_AFTER;
const review = GUTTER_GUARDS.review;

export function GutterGuardBeforeAfter() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Before & After */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            Before &amp; After
          </h2>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {[before, after].map((b) => (
              <div key={b.label} className="relative overflow-hidden rounded-xl shadow-card">
                <Photo src={b.image} alt={b.label} className="aspect-[4/3]" />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-horizon-deep/80 px-3 py-1 text-[11px] font-semibold text-clear">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Review */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            What Homeowners Are Saying
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-[160px_1fr]">
            <div className="flex flex-col items-center justify-center rounded-xl border border-mist bg-mist-soft/60 p-4 text-center">
              <span className="font-serif text-base font-bold text-ridge">Google</span>
              <p className="mt-1 font-serif text-3xl font-extrabold text-horizon">{RATING.score}</p>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-ink-50">{RATING.reviews}</p>
              <Link href="#" className="mt-1.5 text-[11px] font-semibold text-ridge hover:text-accent">
                View All Reviews on Google →
              </Link>
            </div>
            <figure className="flex flex-col justify-center rounded-xl border border-mist bg-clear p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ridge text-sm font-bold text-clear">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{review.name}</p>
                  <p className="text-xs text-ink-50">{review.city}</p>
                </div>
              </div>
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-2 text-sm leading-relaxed text-ink-70">
                {review.quote}
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
