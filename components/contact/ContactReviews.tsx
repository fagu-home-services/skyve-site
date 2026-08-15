import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { CONTACT_REVIEWS } from "@/lib/contact-data";
import { RATING } from "@/lib/why-data";

export function ContactReviews() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[300px_1fr]">
        {/* Google summary */}
        <div className="flex flex-col justify-center rounded-2xl border border-mist bg-clear p-7 shadow-card">
          <h2 className="font-serif text-xl font-bold text-horizon">
            What Homeowners Are Saying
          </h2>
          <div className="mt-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist font-serif text-lg font-bold text-ridge">
              G
            </span>
            <span className="font-serif text-4xl font-extrabold text-horizon">
              {RATING.score}
            </span>
          </div>
          <div className="mt-2 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-horizon">{RATING.reviews}</p>
          <Link
            href="#"
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent"
          >
            View All Reviews on Google <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Reviews */}
        <div className="grid gap-5 sm:grid-cols-3">
          {CONTACT_REVIEWS.map((r) => (
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
    </section>
  );
}
