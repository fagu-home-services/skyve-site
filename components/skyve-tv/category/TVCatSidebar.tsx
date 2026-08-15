import { Search } from "lucide-react";
import { TV_REFINE } from "@/lib/skyve-tv-category-data";

function CheckGroup({
  heading,
  options,
  checked,
}: {
  heading: string;
  options: string[];
  checked: string[];
}) {
  return (
    <div>
      <p className="text-sm font-bold text-horizon">{heading}</p>
      <div className="mt-3 space-y-2.5">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-70">
            <input
              type="checkbox"
              defaultChecked={checked.includes(o)}
              className="h-4 w-4 rounded border-mist accent-ridge"
            />
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

export function TVCatSidebar() {
  const { videoType, duration, location, sortBy } = TV_REFINE;
  return (
    <aside className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <h2 className="font-serif text-base font-bold text-horizon">Refine Results</h2>

      <div className="mt-5 space-y-6">
        <CheckGroup {...videoType} />
        <CheckGroup {...duration} />

        {/* Location */}
        <div>
          <p className="text-sm font-bold text-horizon">{location.heading}</p>
          <div className="relative mt-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              type="text"
              placeholder="Search city..."
              className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-9 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
            />
          </div>
          <div className="mt-3 space-y-2.5">
            {location.options.map((o) => (
              <label key={o} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-70">
                <input
                  type="checkbox"
                  defaultChecked={location.checked.includes(o)}
                  className="h-4 w-4 rounded border-mist accent-ridge"
                />
                {o}
              </label>
            ))}
            <button type="button" className="text-sm font-semibold text-ridge hover:text-accent">
              View More
            </button>
          </div>
        </div>

        {/* Sort by (radio) */}
        <div>
          <p className="text-sm font-bold text-horizon">{sortBy.heading}</p>
          <div className="mt-3 space-y-2.5">
            {sortBy.options.map((o) => (
              <label key={o} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-70">
                <input
                  type="radio"
                  name="sort-by"
                  defaultChecked={o === sortBy.selected}
                  className="h-4 w-4 border-mist accent-ridge"
                />
                {o}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
