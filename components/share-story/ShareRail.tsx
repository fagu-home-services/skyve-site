import { Star, StarHalf, Phone, Mail } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { SHARE_TIPS, SHARE_REVIEWS, SHARE_QUESTIONS } from "@/lib/share-story-data";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="flex">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-accent text-accent" />}
    </span>
  );
}

export function ShareRail() {
  return (
    <div className="space-y-6">
      {/* Tips */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="font-serif text-base font-bold text-horizon">Tips for a Great Story</h2>
        <ul className="mt-4 space-y-4">
          {SHARE_TIPS.map((t) => (
            <li key={t.text} className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={t.icon} className="h-4 w-4 text-ridge" />
              </span>
              <p className="text-sm leading-snug text-ink-70">{t.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Reviews */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="font-serif text-base font-bold text-horizon">What Homeowners Are Saying</h2>
        <div className="mt-4 space-y-5">
          {SHARE_REVIEWS.map((r) => (
            <figure key={r.name} className="border-b border-mist pb-5 last:border-0 last:pb-0">
              <Stars rating={r.rating} />
              <blockquote className="mt-2 text-sm leading-relaxed text-ink-70">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-2.5">
                <AvatarPlaceholder initials={r.initials} className="h-9 w-9 rounded-full" />
                <div>
                  <p className="text-sm font-bold text-horizon">{r.name}</p>
                  <p className="text-xs text-ink-50">{r.city}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Questions */}
      <section className="rounded-2xl bg-horizon-deep p-5 text-clear shadow-card">
        <h2 className="font-serif text-base font-bold">{SHARE_QUESTIONS.title}</h2>
        <p className="mt-1 text-sm text-mist-soft/70">{SHARE_QUESTIONS.desc}</p>
        <div className="mt-4 space-y-2.5 text-sm">
          <a href={SHARE_QUESTIONS.phoneHref} className="flex items-center gap-2.5 text-sky hover:text-clear">
            <Phone className="h-4 w-4" /> {SHARE_QUESTIONS.phone}
          </a>
          <a href={`mailto:${SHARE_QUESTIONS.email}`} className="flex items-center gap-2.5 text-sky hover:text-clear">
            <Mail className="h-4 w-4" /> {SHARE_QUESTIONS.email}
          </a>
        </div>
      </section>
    </div>
  );
}
