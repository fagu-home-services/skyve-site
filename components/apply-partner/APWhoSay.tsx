import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { AP_WHO, AP_TESTIMONIALS } from "@/lib/apply-partner-data";

export function APWhoSay() {
  return (
    <section className="bg-clear py-12 lg:py-14">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Who we partner with */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">Who We Partner With</h2>
          <p className="mt-1 text-sm text-ink-50">We&apos;re looking for professional roofing contractors who:</p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {AP_WHO.map((w) => (
              <div key={w.label} className="rounded-xl border border-mist bg-clear p-4 text-center shadow-card">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft">
                  <Icon name={w.icon} className="h-5 w-5 text-ridge" />
                </span>
                <p className="mt-2.5 text-[11px] font-semibold leading-snug text-horizon">{w.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">What Our Partners Say</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {AP_TESTIMONIALS.map((t) => (
              <figure key={t.name} className="relative rounded-2xl border border-mist bg-clear p-6 shadow-card">
                <Quote className="absolute right-5 top-5 h-6 w-6 text-mist" />
                <blockquote className="text-sm leading-relaxed text-ink-70">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <AvatarPlaceholder initials={t.initials} className="h-9 w-9 rounded-full" />
                  <div>
                    <p className="text-sm font-bold text-horizon">— {t.name}</p>
                    <p className="text-[11px] text-ink-50">{t.role}</p>
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
          <div className="mt-5 text-center">
            <Link href="/reviews" className="inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
              See More Partner Stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
