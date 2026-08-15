import Link from "next/link";
import { Star } from "lucide-react";
import { RATING } from "@/lib/why-data";
import { CERTS_REVIEWS } from "@/lib/certifications-data";

export function CertsProofReviews() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1fr_1.9fr]">
        {/* Dark card */}
        <div className="flex flex-col justify-center rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
          <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
            Trusted. Certified. Recommended.
          </h2>
          <p className="mt-3 text-sm text-sky-soft/80">
            Our certifications and commitment to quality earn the trust of
            homeowners every day.
          </p>
        </div>

        {/* Google + reviews */}
        <div className="grid gap-5 sm:grid-cols-[150px_1fr]">
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

          <div className="grid gap-4 sm:grid-cols-3">
            {CERTS_REVIEWS.map((r) => (
              <figure key={r.name} className="rounded-xl border border-mist bg-clear p-4 shadow-card">
                <p className="text-sm font-bold text-horizon">{r.name}</p>
                <p className="text-[11px] text-ink-50">{r.city}</p>
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-2 text-xs leading-relaxed text-ink-70">
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
