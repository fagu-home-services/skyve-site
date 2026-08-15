import Link from "next/link";
import { Star, Quote, Check, ShieldCheck, ArrowRight } from "lucide-react";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { CP_TESTIMONIALS, CP_TIERS } from "@/lib/contractors-data";

export function CPTiers() {
  return (
    <section className="bg-clear py-12 lg:py-14">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Testimonials */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">What Our Contractors Say</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {CP_TESTIMONIALS.map((t) => (
              <figure key={t.name} className="relative rounded-2xl border border-mist bg-clear p-6 shadow-card">
                <Quote className="absolute right-5 top-5 h-7 w-7 text-mist" />
                <blockquote className="text-sm leading-relaxed text-ink-70">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-3 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <figcaption className="mt-3 flex items-center gap-3">
                  <AvatarPlaceholder initials={t.initials} className="h-9 w-9 rounded-full" />
                  <div>
                    <p className="text-sm font-bold text-horizon">{t.name}</p>
                    <p className="text-[11px] text-ink-50">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/reviews" className="inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
              View More Testimonials <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Tiers */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">Partner Program Tiers</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {CP_TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-2xl p-5 shadow-card ${
                  t.popular ? "bg-horizon-deep text-clear" : "border border-mist bg-clear"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-2 right-4 rounded-full bg-accent px-2.5 py-0.5 text-[9px] font-bold uppercase text-clear">Popular</span>
                )}
                <ShieldCheck className={`h-7 w-7 ${t.popular ? "text-accent" : "text-ridge"}`} />
                <p className={`mt-3 font-serif text-base font-bold ${t.popular ? "text-clear" : "text-horizon"}`}>{t.name}</p>
                <p className={`mt-1 text-[11px] leading-snug ${t.popular ? "text-mist-soft/70" : "text-ink-50"}`}>{t.desc}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-xs ${t.popular ? "text-mist-soft/90" : "text-ink-70"}`}>
                      <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${t.popular ? "text-accent" : "text-success"}`} /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#join" className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${t.popular ? "text-sky hover:text-clear" : "text-ridge hover:text-accent"}`}>
                  {t.price} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
