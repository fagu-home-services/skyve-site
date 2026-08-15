import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { TV_CATEGORIES, catSlug } from "@/lib/skyve-tv-data";

export function TVCatTabs({ activeSlug }: { activeSlug: string }) {
  return (
    <div className="border-t border-clear/10 bg-horizon-deep">
      <div className="container-skyve flex gap-2 overflow-x-auto py-3">
        <Link
          href="/skyve-tv"
          className="flex min-w-[92px] flex-col items-center gap-1.5 rounded-lg px-3 py-2.5 text-center text-mist-soft/70 transition-colors hover:text-clear"
        >
          <LayoutGrid className="h-5 w-5" />
          <span className="text-[11px] font-semibold">All Categories</span>
        </Link>

        {TV_CATEGORIES.map((c) => {
          const slug = catSlug(c.label);
          const active = slug === activeSlug;
          return (
            <Link
              key={c.label}
              href={`/skyve-tv/${slug}`}
              className={`flex min-w-[92px] flex-col items-center gap-1.5 rounded-lg px-3 py-2.5 text-center transition-colors ${
                active
                  ? "border-b-2 border-accent text-accent"
                  : "text-mist-soft/70 hover:text-clear"
              }`}
            >
              <Icon name={c.icon} className="h-5 w-5" />
              <span className="text-[11px] font-semibold">{c.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
