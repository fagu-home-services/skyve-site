import { Star, ChevronDown } from "lucide-react";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { RH_REVIEWS, RH_SERVICE_FILTER, RH_LOCATION_FILTER } from "@/lib/reviews-hub-data";

function FilterSelect({ options }: { options: string[] }) {
  return (
    <div className="relative">
      <select className="w-full appearance-none rounded-lg border border-mist bg-clear px-3.5 py-2 pr-9 text-sm text-ink-70 outline-none focus:border-ridge sm:w-44">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
    </div>
  );
}

export function RHReviews() {
  return (
    <section className="bg-clear py-10 lg:py-14">
      <div className="container-skyve">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-horizon">What Our Customers Say</h2>
          <div className="flex flex-wrap gap-3">
            <FilterSelect options={RH_SERVICE_FILTER} />
            <FilterSelect options={RH_LOCATION_FILTER} />
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RH_REVIEWS.map((r) => (
            <article key={r.title} className="flex flex-col rounded-2xl border border-mist bg-clear p-6 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < r.rating ? "fill-accent text-accent" : "fill-mist text-mist"}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-ink-50">{r.date}</span>
              </div>

              <h3 className="mt-3 text-sm font-bold text-horizon">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-70">{r.body}</p>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-mist pt-4">
                <div className="flex items-center gap-3">
                  <AvatarPlaceholder initials={r.initials} className="h-9 w-9 rounded-full" />
                  <div>
                    <p className="text-xs font-bold text-horizon">{r.name}</p>
                    <p className="text-[11px] text-ink-50">{r.location}</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-md bg-sky-soft px-2.5 py-1 text-[10px] font-semibold text-ridge">
                  {r.service}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-6 py-3 text-sm font-semibold text-horizon transition-colors hover:border-ridge hover:text-ridge"
          >
            Load More Reviews <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
