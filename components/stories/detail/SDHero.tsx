import { Star, BadgeCheck, ShieldCheck, Images, Quote } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { Icon } from "@/components/shared/Icon";
import { STORY_DETAIL } from "@/lib/story-detail-data";

const d = STORY_DETAIL;

export function SDHero() {
  return (
    <section className="bg-horizon-deep pb-10 text-clear">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Info */}
        <div>
          <span className="inline-flex items-center gap-1 rounded-md bg-success/90 px-2.5 py-1 text-[11px] font-semibold text-clear">
            <BadgeCheck className="h-3.5 w-3.5" /> Verified Review
          </span>
          <h1 className="mt-4 font-serif text-3xl font-extrabold sm:text-4xl">{d.title}</h1>
          <p className="mt-1 text-sm font-medium text-ridge">{d.city}</p>

          <div className="mt-2 flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </span>
              <span className="ml-1 font-bold">{d.rating}</span>
            </span>
            <span className="text-mist-soft/70">{d.date}</span>
          </div>

          <blockquote className="mt-5 flex gap-2 text-sm leading-relaxed text-mist-soft/90">
            <Quote className="h-5 w-5 shrink-0 text-accent" />
            <span>&ldquo;{d.quote}&rdquo;</span>
          </blockquote>

          <div className="mt-5 flex items-center gap-3">
            <AvatarPlaceholder initials={d.customer.initials} className="h-11 w-11 rounded-full" />
            <div>
              <p className="text-sm font-bold text-clear">{d.customer.name}</p>
              <p className="text-xs text-mist-soft/70">{d.customer.role}</p>
            </div>
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-clear/10 px-3 py-1 text-[11px] font-semibold text-sky">
              <ShieldCheck className="h-3.5 w-3.5" /> Verified Customer
            </span>
          </div>

          {/* Meta */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {d.meta.map((m) => (
              <div key={m.label}>
                <p className="flex items-center gap-1.5 text-[11px] text-mist-soft/60">
                  <Icon name={m.icon} className="h-3.5 w-3.5 text-sky" /> {m.label}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-clear">{m.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <div className="overflow-hidden rounded-2xl shadow-elevated">
            <Photo src={d.heroImage} alt={d.title} className="aspect-[16/10]" />
          </div>
          <div className="mt-3 grid grid-cols-6 gap-2">
            {d.gallery.map((g, i) => (
              <Photo key={i} src={g} alt={`Photo ${i + 1}`} className="aspect-[4/3] rounded-lg" />
            ))}
            <button
              type="button"
              className="flex flex-col items-center justify-center gap-1 rounded-lg bg-horizon/70 text-center text-[10px] font-semibold text-clear ring-1 ring-clear/15"
            >
              <Images className="h-4 w-4 text-sky" />
              View All
              <span className="text-mist-soft/70">{d.totalPhotos} Photos</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
