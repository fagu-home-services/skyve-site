import { STORY_DETAIL } from "@/lib/story-detail-data";

const anchor = (t: string) =>
  "#" + t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function SDTabs() {
  return (
    <div className="border-b border-mist bg-clear">
      <div className="container-skyve flex gap-1 overflow-x-auto">
        {STORY_DETAIL.tabs.map((t, i) => (
          <a
            key={t}
            href={anchor(t)}
            className={`whitespace-nowrap border-b-2 px-4 py-3.5 text-sm font-semibold transition-colors ${
              i === 0 ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-ridge"
            }`}
          >
            {t}
          </a>
        ))}
      </div>
    </div>
  );
}
