import Link from "next/link";
import { Star, ArrowRight, ChevronDown } from "lucide-react";
import { RATING } from "@/lib/why-data";
import { VENT_REVIEWS, VENT_FAQ } from "@/lib/ventilation-data";

export function VentilationReviewsFAQ() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1.7fr_1fr]">
        {/* Reviews */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            What Homeowners Say
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-[170px_1fr]">
            <div className="flex flex-col items-center justify-center rounded-xl border border-mist bg-mist-soft/60 p-5 text-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-mist font-serif text-base font-bold text-ridge">
                G
              </span>
              <p className="mt-2 font-serif text-3xl font-extrabold text-horizon">{RATING.score}</p>
              <div className="mt-1 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-2 text-xs text-ink-50">{RATING.reviews}</p>
              <Link href="#" className="mt-2 text-xs font-semibold text-ridge hover:text-accent">
                View All Reviews on Google →
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {VENT_REVIEWS.map((r) => (
                <figure key={r.name} className="flex flex-col rounded-xl border border-mist bg-clear p-4 shadow-card">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ridge text-xs font-bold text-clear">
                      {r.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-horizon">{r.name}</p>
                      <p className="text-[11px] text-ink-50">{r.city}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-2 flex-1 text-xs leading-relaxed text-ink-70">
                    {r.quote}
                  </blockquote>
                  <span className="mt-3 w-fit rounded-full bg-success/10 px-2.5 py-1 text-[10px] font-bold text-success">
                    {r.badge}
                  </span>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-2">
            {VENT_FAQ.map((item) => (
              <details key={item.q} className="group rounded-lg border border-mist bg-clear px-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-medium text-horizon marker:hidden">
                  {item.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-ridge transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-3 text-xs leading-relaxed text-ink-70">{item.a}</p>
              </details>
            ))}
          </div>
          <Link
            href="#"
            className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge/30 px-4 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            View All FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
