import { Star, Quote, Crown } from "lucide-react";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { AMB_TESTIMONIALS, AMB_TOP } from "@/lib/ambassadors-data";

export function AmbTestimonials() {
  return (
    <section className="bg-mist-soft/40 py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          What Our <span className="text-ridge">Ambassadors</span> Say
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_1fr_340px]">
          {AMB_TESTIMONIALS.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-mist bg-clear p-6 shadow-card">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-mist" />
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-ink-70">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 flex items-center gap-2.5">
                <AvatarPlaceholder initials={t.initials} className="h-9 w-9 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-horizon">{t.name}</p>
                  <p className="text-xs text-ink-50">{t.city}</p>
                </div>
              </figcaption>
            </figure>
          ))}

          {/* Top ambassador */}
          <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-elevated">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
              <Crown className="h-4 w-4" /> Top Ambassador
            </p>
            <p className="text-xs font-semibold uppercase tracking-wide text-mist-soft/60">Of the Month</p>
            <div className="mt-5 flex items-center gap-4">
              <AvatarPlaceholder initials={AMB_TOP.initials} className="h-16 w-16 rounded-full ring-2 ring-accent" />
              <div>
                <p className="font-serif text-lg font-bold">{AMB_TOP.name}</p>
                <p className="text-xs font-medium text-sky">{AMB_TOP.referrals}</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-snug text-mist-soft/70">{AMB_TOP.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
