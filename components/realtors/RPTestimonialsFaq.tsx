import Link from "next/link";
import { Star, Quote, Plus, ArrowRight } from "lucide-react";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { RP_TESTIMONIALS, RP_FAQ } from "@/lib/realtors-data";

export function RPTestimonialsFaq() {
  return (
    <section className="bg-clear py-12 lg:py-14">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Testimonials */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">What Realtors Are Saying</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {RP_TESTIMONIALS.map((t) => (
              <figure key={t.name} className="relative rounded-2xl border border-mist bg-clear p-6 shadow-card">
                <Quote className="absolute right-5 top-5 h-7 w-7 text-mist" />
                <blockquote className="text-sm leading-relaxed text-ink-70">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <AvatarPlaceholder initials={t.initials} className="h-9 w-9 rounded-full" />
                  <div>
                    <p className="text-sm font-bold text-horizon">{t.name}</p>
                    <p className="text-[11px] text-ink-50">{t.role}, {t.city}</p>
                  </div>
                </figcaption>
                <div className="mt-3 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/reviews" className="inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
              View More Testimonials <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">Frequently Asked Questions</h2>
          <div className="mt-5 space-y-3">
            {RP_FAQ.map((f) => (
              <details key={f.q} className="group rounded-xl border border-mist bg-clear px-4 shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3.5 text-sm font-semibold text-horizon">
                  {f.q}
                  <Plus className="h-4 w-4 shrink-0 text-ridge transition-transform group-open:rotate-45" />
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-ink-70">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/learn" className="inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
              View All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
