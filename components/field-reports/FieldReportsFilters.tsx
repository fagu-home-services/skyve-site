import { Star, Calendar } from "lucide-react";
import { FR_FILTERS, FR_RATING_FILTER } from "@/lib/field-reports-data";

function Checkbox({ label, checked }: { label: string; checked: boolean }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-70">
      <input
        type="checkbox"
        defaultChecked={checked}
        className="h-4 w-4 rounded border-mist text-ridge accent-ridge"
      />
      {label}
    </label>
  );
}

export function FieldReportsFilters() {
  return (
    <aside className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-base font-bold text-horizon">Filters</h3>
        <button type="button" className="text-xs font-semibold text-ridge hover:text-accent">
          Clear Filters
        </button>
      </div>

      <div className="mt-5 space-y-6">
        {FR_FILTERS.map((group) => (
          <div key={group.heading}>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-50">
              {group.heading}
            </p>
            <div className="mt-3 space-y-2.5">
              {group.options.map((opt) => (
                <Checkbox key={opt} label={opt} checked={group.checked.includes(opt)} />
              ))}
              {group.heading === "Period" && (
                <label className="flex items-center gap-2 rounded-lg border border-mist px-2.5 py-2 text-xs text-ink-50">
                  <Calendar className="h-3.5 w-3.5 text-ink-50" /> Custom range
                </label>
              )}
            </div>
          </div>
        ))}

        {/* Rating */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-ink-50">
            {FR_RATING_FILTER.heading}
          </p>
          <div className="mt-3 space-y-2.5">
            {FR_RATING_FILTER.options.map((opt) => (
              <label
                key={opt.label}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-70"
              >
                <input
                  type="checkbox"
                  defaultChecked={FR_RATING_FILTER.checked.includes(opt.label)}
                  className="h-4 w-4 rounded border-mist text-ridge accent-ridge"
                />
                {opt.stars > 0 ? (
                  <span className="flex items-center gap-1">
                    <span className="flex">
                      {Array.from({ length: opt.stars }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </span>
                    <span className="text-xs text-ink-50">{opt.label}</span>
                  </span>
                ) : (
                  opt.label
                )}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
