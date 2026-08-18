import Link from "next/link";
import { Star, Phone, ArrowRight } from "lucide-react";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { COMPANY } from "@/lib/company";
import { STORY_DETAIL } from "@/lib/story-detail-data";

const d = STORY_DETAIL;

export function SDRail() {
  return (
    <div className="space-y-6">
      {/* Project summary */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="font-serif text-base font-bold text-horizon">Project Summary</h2>
        <dl className="mt-4 divide-y divide-mist text-sm">
          {d.summary.map((s) => (
            <div key={s.label} className="flex items-start justify-between gap-4 py-2.5">
              <dt className="text-ink-50">{s.label}</dt>
              <dd className="text-right font-medium text-horizon">
                {s.value}
                {s.sub && <span className="block text-xs font-normal text-ink-50">{s.sub}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Customer review */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="font-serif text-base font-bold text-horizon">Customer Review</h2>
        <div className="mt-3 flex items-center gap-1">
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </span>
          <span className="ml-1 text-sm font-bold text-horizon">{d.rating}</span>
        </div>
        <blockquote className="mt-3 text-sm leading-relaxed text-ink-70">
          &ldquo;{d.quote}&rdquo;
        </blockquote>
        <div className="mt-4 flex items-center gap-3 border-t border-mist pt-4">
          <AvatarPlaceholder initials={d.customer.initials} className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-sm font-bold text-horizon">{d.customer.name}</p>
            <p className="text-xs text-ink-50">{d.city}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
        <h2 className="font-serif text-lg font-bold leading-snug">
          Ready for Your Own Success Story?
        </h2>
        <p className="mt-2 text-sm text-mist-soft/80">
          Let our team deliver the same quality and peace of mind to your home.
        </p>
        <Link
          href="/instant-estimate/"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
        >
          Get Your Free Estimate <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-mist-soft/80">
          or call
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-1 font-semibold text-sky hover:text-clear">
            <Phone className="h-3.5 w-3.5" /> {COMPANY.phone}
          </a>
        </p>
      </section>
    </div>
  );
}
