import Link from "next/link";
import { Search, ChevronDown, Star, BadgeCheck, MapPin, ArrowDown } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { STORIES, storySlug, type Story } from "@/lib/customer-stories-data";
import { liveHref } from "@/lib/launch-phase";

function StoryCard({ s }: { s: Story }) {
  const href = liveHref(`/reviews/${storySlug(s.title)}`, "/reviews");
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated">
      <Link href={href} className="relative block">
        <Photo src={s.image} alt={s.title} className="aspect-[16/10]" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-success/90 px-2 py-1 text-[10px] font-semibold text-clear">
          <BadgeCheck className="h-3 w-3" /> Verified Review
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1">
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
            ))}
          </span>
          <span className="ml-1 text-xs font-bold text-horizon">{s.rating}</span>
        </div>

        <Link href={href}>
          <h3 className="mt-2 font-serif text-base font-bold text-horizon transition-colors hover:text-ridge">
            {s.title}
          </h3>
        </Link>
        <p className="flex items-center gap-1 text-xs text-ink-50">
          <MapPin className="h-3 w-3 text-ridge" /> {s.city}
        </p>

        <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-70">
          &ldquo;{s.quote}&rdquo;
        </blockquote>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-mist pt-3">
          <div className="flex items-center gap-2.5">
            <AvatarPlaceholder initials={s.initials} className="h-9 w-9 rounded-full" />
            <div className="leading-tight">
              <p className="text-xs font-bold text-horizon">{s.name}</p>
              <p className="text-[11px] text-ink-50">{s.date}</p>
            </div>
          </div>
          <span className="rounded-full bg-sky-soft px-2.5 py-1 text-[10px] font-semibold text-ridge">
            {s.tag}
          </span>
        </div>
      </div>
    </article>
  );
}

export function StoriesGrid() {
  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon">What Our Customers Are Saying</h2>
          <p className="text-sm text-ink-50">Real feedback from real homeowners.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              type="text"
              placeholder="Search stories by name, city or service..."
              className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-9 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge sm:w-64"
            />
          </div>
          <label className="flex items-center gap-2 text-xs text-ink-50">
            Sort by
            <div className="relative">
              <select className="appearance-none rounded-lg border border-mist bg-clear py-2.5 pl-3 pr-8 text-sm text-ink-70 outline-none focus:border-ridge">
                <option>Most Recent</option>
                <option>Highest Rated</option>
                <option>Oldest</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            </div>
          </label>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {STORIES.map((s) => (
          <StoryCard key={s.name + s.title} s={s} />
        ))}
      </div>

      {/* Load more */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
        >
          Load More Stories <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
