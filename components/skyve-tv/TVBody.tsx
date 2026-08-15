import Link from "next/link";
import { Play, ChevronRight, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import {
  TV_STATS, TV_FEATURED, TV_CATEGORIES, TV_PLAYLISTS, TV_LATEST, catSlug, type Video,
} from "@/lib/skyve-tv-data";

function SectionHead({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-end justify-between">
      <h2 className="font-serif text-2xl font-bold text-clear">{title}</h2>
      {action && (
        <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-sky hover:text-clear">
          {action} <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function VideoThumb({ src, alt, duration, big = false }: { src: string; alt: string; duration: string; big?: boolean }) {
  return (
    <div className="relative">
      <Photo src={src} alt={alt} className={big ? "aspect-video" : "aspect-video"} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-horizon-deep/60 ring-1 ring-clear/40 backdrop-blur-sm">
          <Play className="ml-0.5 h-4 w-4 fill-clear text-clear" />
        </span>
      </div>
      <span className="absolute bottom-2 right-2 rounded bg-horizon-deep/85 px-1.5 py-0.5 text-[11px] font-semibold text-clear">
        {duration}
      </span>
    </div>
  );
}

function FeaturedCard({ v }: { v: Video }) {
  return (
    <article className="overflow-hidden rounded-xl bg-horizon/60 ring-1 ring-clear/10 transition-colors hover:ring-clear/25">
      <VideoThumb src={v.image} alt={v.title} duration={v.duration} />
      <div className="p-4">
        <h3 className="font-serif text-sm font-bold text-clear">{v.title}</h3>
        <p className="mt-1.5 text-xs leading-snug text-mist-soft/70">{v.desc}</p>
        <p className="mt-3 text-[11px] text-mist-soft/50">
          {v.views} • {v.when}
        </p>
      </div>
    </article>
  );
}

export function TVBody() {
  return (
    <div className="bg-horizon-deep pb-16 text-clear">
      {/* Stats */}
      <div className="border-y border-clear/10">
        <div className="container-skyve grid grid-cols-2 gap-6 py-6 sm:grid-cols-3 lg:grid-cols-5">
          {TV_STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-clear/10">
                <Icon name={s.icon} className="h-4 w-4 text-sky" />
              </span>
              <div>
                <p className="font-serif text-xl font-bold text-clear">{s.value}</p>
                <p className="text-[11px] text-mist-soft/60">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-skyve space-y-14 pt-14">
        {/* Featured */}
        <section>
          <SectionHead title="Featured Videos" action="View All Videos" />
          <div className="relative mt-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TV_FEATURED.map((v) => (
                <FeaturedCard key={v.title} v={v} />
              ))}
            </div>
            <button type="button" aria-label="Next" className="absolute -right-3 top-[28%] hidden h-8 w-8 items-center justify-center rounded-full bg-clear text-horizon shadow-elevated lg:flex">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Categories */}
        <section>
          <SectionHead title="Browse by Category" />
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {TV_CATEGORIES.map((c) => (
              <Link
                key={c.label}
                href={`/skyve-tv/${catSlug(c.label)}`}
                className="flex flex-col items-center gap-2 rounded-xl bg-horizon/60 p-5 text-center ring-1 ring-clear/10 transition-colors hover:ring-sky/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-clear/10">
                  <Icon name={c.icon} className="h-5 w-5 text-sky" />
                </span>
                <p className="text-xs font-bold text-clear">{c.label}</p>
                <p className="text-[10px] text-mist-soft/50">{c.count}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Playlists */}
        <section>
          <SectionHead title="Popular Playlists" action="View All Playlists" />
          <div className="relative mt-6">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {TV_PLAYLISTS.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-xl bg-horizon/60 ring-1 ring-clear/10 transition-colors hover:ring-clear/25">
                  <div className="relative">
                    <Photo src={p.image} alt={p.title} className="aspect-video" />
                    <div className="absolute inset-0 bg-horizon-deep/20" />
                    <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded bg-horizon-deep/85 px-1.5 py-0.5 text-[11px] font-semibold text-clear">
                      <Play className="h-3 w-3 fill-clear text-clear" /> {p.count}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-clear">{p.title}</h3>
                    <p className="mt-1 text-[11px] leading-snug text-mist-soft/60">{p.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <button type="button" aria-label="Next" className="absolute -right-3 top-[30%] hidden h-8 w-8 items-center justify-center rounded-full bg-clear text-horizon shadow-elevated lg:flex">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Latest */}
        <section>
          <SectionHead title="Latest Videos" action="View All Videos" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TV_LATEST.map((v) => (
              <article key={v.title} className="flex gap-3">
                <div className="w-32 shrink-0">
                  <VideoThumb src={v.image} alt={v.title} duration={v.duration} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold leading-tight text-clear">{v.title}</h3>
                  <p className="mt-1 text-[11px] leading-snug text-mist-soft/60">{v.desc}</p>
                  <p className="mt-2 text-[10px] text-mist-soft/50">{v.views} • {v.when}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
