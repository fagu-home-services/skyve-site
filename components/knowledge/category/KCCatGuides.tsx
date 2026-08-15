import { Clock, Eye, Bookmark, ArrowDown, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import type { KCCategory, KCArticle } from "@/lib/kc-category-data";

function GuideCard({
  g,
  featured = false,
  badge,
  accent = false,
}: {
  g: KCArticle;
  featured?: boolean;
  badge?: string;
  accent?: boolean;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated">
      <div className="relative">
        <Photo src={g.image} alt={g.title} className="aspect-[16/10]" />
        <span
          className={`absolute left-2 top-2 rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-clear ${
            featured && accent ? "bg-accent" : "bg-ridge"
          }`}
        >
          {badge ?? g.tag}
        </span>
        <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-clear/90 text-ridge shadow-card">
          <Bookmark className="h-3 w-3" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="flex-1 text-sm font-bold leading-snug text-horizon">{g.title}</h3>
        <div className="mt-3 flex items-center gap-3 border-t border-mist pt-2.5 text-[11px] text-ink-50">
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {g.read}</span>
          <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {g.views}</span>
        </div>
      </div>
    </article>
  );
}

export function KCCatGuides({ cat }: { cat: KCCategory }) {
  return (
    <div>
      {/* Featured */}
      <div className="flex items-end justify-between">
        <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">{cat.featuredHeading}</h2>
        <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View All Featured <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cat.featured.map((g) => (
          <GuideCard
            key={g.title}
            g={g}
            featured
            badge={cat.featuredLabel ?? g.tag}
            accent={cat.featuredAccent ?? true}
          />
        ))}
      </div>

      {/* All guides */}
      <h2 className="mt-12 text-sm font-bold uppercase tracking-wider text-horizon">{cat.allHeading}</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cat.all.map((g) => (
          <GuideCard key={g.title} g={g} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-ridge/30 px-6 py-3 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
        >
          Load More Articles <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
