import { Search, ChevronDown, Play, Star, ArrowDown, Bell } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { TV_CATEGORY_VIDEOS, type CatVideo } from "@/lib/skyve-tv-category-data";

function VideoCard({ v }: { v: CatVideo }) {
  return (
    <article className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated">
      <div className="relative">
        <Photo src={v.image} alt={v.title} className="aspect-video" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-horizon-deep/55 ring-1 ring-clear/50 backdrop-blur-sm">
            <Play className="ml-0.5 h-4 w-4 fill-clear text-clear" />
          </span>
        </div>
        <span className="absolute bottom-2 right-2 rounded bg-horizon-deep/85 px-1.5 py-0.5 text-[11px] font-semibold text-clear">
          {v.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-horizon">{v.title}</h3>
        <p className="mt-1 text-[11px] font-medium text-ridge">
          {v.city} <span className="text-ink-50">•</span> {v.type}
        </p>
        <p className="mt-2 text-xs leading-snug text-ink-50">{v.desc}</p>
        <div className="mt-3 flex items-center justify-between border-t border-mist pt-2.5">
          <span className="flex items-center gap-1 text-xs font-bold text-horizon">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {v.rating}
          </span>
          <span className="text-[11px] text-ink-50">{v.views} • {v.when}</span>
        </div>
      </div>
    </article>
  );
}

export function TVCatGrid({ label, count }: { label: string; count: string }) {
  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-serif text-xl font-bold text-horizon">
          {label} Videos <span className="text-ink-50">({count})</span>
        </h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              type="text"
              placeholder="Search videos in this category..."
              className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-9 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge sm:w-64"
            />
          </div>
          <div className="relative">
            <select className="appearance-none rounded-lg border border-mist bg-clear py-2.5 pl-3 pr-8 text-sm text-ink-70 outline-none focus:border-ridge">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Highest Rated</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TV_CATEGORY_VIDEOS.map((v) => (
          <VideoCard key={v.title} v={v} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
        >
          Load More Videos <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function TVCatCTA() {
  return (
    <section className="bg-clear pb-16 pt-4">
      <div className="container-skyve">
        <div className="grid gap-6 rounded-2xl bg-horizon-deep p-8 text-clear lg:grid-cols-2 lg:p-10">
          <div className="flex items-center gap-5 lg:border-r lg:border-clear/10 lg:pr-8">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-clear/10 ring-1 ring-accent/40">
              <Play className="ml-0.5 h-7 w-7 fill-accent text-accent" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold">Enjoying Skyve TV?</h2>
              <p className="mt-1 text-sm text-mist-soft/70">
                Subscribe to our YouTube channel for weekly videos, project showcases, and expert tips.
              </p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
                Subscribe on YouTube →
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 lg:pl-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-clear/10 ring-1 ring-accent/40">
              <Bell className="h-7 w-7 text-accent" />
            </span>
            <div>
              <h2 className="font-serif text-xl font-bold">Never Miss a Video</h2>
              <p className="mt-1 text-sm text-mist-soft/70">
                Get notified when we release new content, project walkthroughs, and how-to guides.
              </p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-clear/25 px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-clear/10">
                Turn On Notifications →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
