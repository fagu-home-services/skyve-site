import Link from "next/link";
import { Play, Star, Check, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { RH_VIDEO, RH_SHARE, RH_WHY } from "@/lib/reviews-hub-data";

export function RHBottom() {
  return (
    <section className="bg-mist-soft/40 py-10 lg:py-14">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* Video testimonials */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h3 className="text-sm font-bold text-horizon">{RH_VIDEO.title}</h3>
          <div className="relative mt-4 overflow-hidden rounded-xl">
            <Photo src={RH_VIDEO.thumb} seed="reviews-video" alt="" className="h-40 w-full" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-clear/90 shadow-lg">
                <Play className="h-6 w-6 fill-horizon text-horizon" />
              </span>
            </span>
          </div>
          <p className="mt-3 text-xs text-ink-70">{RH_VIDEO.caption}</p>
          <Link
            href={RH_VIDEO.link.href}
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent"
          >
            {RH_VIDEO.link.label} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Share your experience */}
        <div id="share" className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h3 className="text-sm font-bold text-horizon">{RH_SHARE.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-70">{RH_SHARE.desc}</p>
          <div className="mt-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <button key={i} type="button" aria-label={`Rate ${i + 1} stars`}>
                <Star className="h-6 w-6 text-mist transition-colors hover:fill-accent hover:text-accent" />
              </button>
            ))}
          </div>
          <textarea
            rows={3}
            placeholder={RH_SHARE.placeholder}
            className="mt-3 w-full resize-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
          />
          <button
            type="button"
            className="mt-3 w-full rounded-lg bg-horizon px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-horizon-deep"
          >
            {RH_SHARE.button}
          </button>
        </div>

        {/* Why homeowners trust Skyve */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h3 className="text-sm font-bold text-horizon">{RH_WHY.title}</h3>
          <ul className="mt-4 space-y-2.5">
            {RH_WHY.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-xs text-ink-70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>
          <Link
            href={RH_WHY.link.href}
            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent"
          >
            {RH_WHY.link.label} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
