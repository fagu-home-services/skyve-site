import Link from "next/link";
import { ChevronDown, Star, ArrowRight } from "lucide-react";
import {
  Sparkles, Home, Wrench, Layers, Droplets, Paintbrush, Grid3x3, Sun, Frame, Building2,
} from "lucide-react";
import { STORY_CITIES, STORY_YEARS } from "@/lib/customer-stories-data";

const CATEGORIES = [
  { label: "All Stories", icon: Sparkles, active: true },
  { label: "Roof Replacement", icon: Home },
  { label: "Roof Repair", icon: Wrench },
  { label: "Metal Roofing", icon: Layers },
  { label: "Gutter Installation", icon: Droplets },
  { label: "Exterior Painting", icon: Paintbrush },
  { label: "Siding", icon: Grid3x3 },
  { label: "Skylights", icon: Sun },
  { label: "Decks", icon: Frame },
  { label: "Commercial", icon: Building2 },
];

const RATINGS = [
  { label: "All Ratings", stars: 0, count: "" },
  { label: "5", stars: 5, count: "(5)" },
  { label: "4", stars: 4, count: "(4)" },
  { label: "3", stars: 3, count: "(3)" },
  { label: "2", stars: 2, count: "(2)" },
  { label: "1", stars: 1, count: "(1)" },
];

function Dropdown({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-ink-70">{label}</span>
      <div className="relative mt-1.5">
        <select className="w-full appearance-none rounded-lg border border-mist bg-clear px-3 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
      </div>
    </label>
  );
}

export function StoriesSidebar() {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <nav className="rounded-2xl border border-mist bg-clear p-3 shadow-card">
        {CATEGORIES.map((c) => (
          <button
            key={c.label}
            type="button"
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              c.active ? "bg-ridge/10 text-ridge" : "text-ink-70 hover:bg-mist-soft hover:text-ridge"
            }`}
          >
            <c.icon className="h-4 w-4 shrink-0" /> {c.label}
          </button>
        ))}
      </nav>

      {/* Filters */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <p className="font-serif text-base font-bold text-horizon">Filter by</p>
        <div className="mt-4 space-y-5">
          <Dropdown label="City" options={STORY_CITIES} />

          <div>
            <p className="text-xs font-semibold text-ink-70">Rating</p>
            <div className="mt-2.5 space-y-2">
              {RATINGS.map((r) => (
                <label key={r.label} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-70">
                  <input
                    type="checkbox"
                    defaultChecked={r.stars === 0}
                    className="h-4 w-4 rounded border-mist accent-ridge"
                  />
                  {r.stars > 0 ? (
                    <span className="flex items-center gap-1.5">
                      <span className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${i < r.stars ? "fill-accent text-accent" : "text-mist"}`}
                          />
                        ))}
                      </span>
                      <span className="text-xs text-ink-50">{r.count}</span>
                    </span>
                  ) : (
                    r.label
                  )}
                </label>
              ))}
            </div>
          </div>

          <Dropdown label="Project Year" options={STORY_YEARS} />

          <button
            type="button"
            className="w-full rounded-lg border border-ridge/30 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Share your story */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5 shadow-card">
        <p className="text-sm font-bold text-horizon">Share Your Story</p>
        <p className="mt-1.5 text-xs text-ink-50">
          We&apos;d love to feature your experience working with Skyve Roofing &amp; Exteriors.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
        >
          Share Your Story <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
