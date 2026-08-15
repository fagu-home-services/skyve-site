import { Search, ChevronDown } from "lucide-react";
import type { KCCategory } from "@/lib/kc-category-data";

const SOCIAL = [
  { label: "Facebook", path: "M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" },
  { label: "X", path: "M4 4l16 16M20 4L4 20", stroke: true },
  { label: "LinkedIn", path: "M6.5 8A1.5 1.5 0 116.5 5a1.5 1.5 0 010 3zM5 10h3v9H5v-9zm5 0h2.9v1.2h.04c.4-.75 1.4-1.55 2.86-1.55C18.5 9.65 19 11.5 19 14v5h-3v-4.4c0-1.05-.02-2.4-1.5-2.4-1.5 0-1.73 1.15-1.73 2.33V19h-3v-9z" },
  { label: "Email", path: "M3 6h18v12H3zM3 6l9 7 9-7", stroke: true },
];

export function KCCatToolbar({ cat }: { cat: KCCategory }) {
  return (
    <section className="border-y border-mist bg-clear py-5">
      <div className="container-skyve">
        {/* Search + share */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              type="text"
              placeholder={cat.searchPlaceholder}
              className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-11 pr-4 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wide text-ink-50">Share This Page</span>
            {SOCIAL.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="flex h-8 w-8 items-center justify-center rounded-full bg-horizon-deep text-clear transition-colors hover:bg-accent">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill={s.stroke ? "none" : "currentColor"} stroke={s.stroke ? "currentColor" : "none"} strokeWidth={s.stroke ? 2 : 0} strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Tabs + sort */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto">
            {cat.tabs.map((t, i) => (
              <button
                key={t}
                type="button"
                className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                  i === 0 ? "bg-horizon-deep text-clear" : "text-ink-70 hover:bg-mist-soft"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative shrink-0">
            <select className="appearance-none rounded-lg border border-mist bg-clear py-2 pl-3 pr-8 text-sm text-ink-70 outline-none focus:border-ridge">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Most Viewed</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
