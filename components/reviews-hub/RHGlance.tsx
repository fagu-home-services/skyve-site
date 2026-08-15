import { Star } from "lucide-react";
import { RH_PLATFORMS } from "@/lib/reviews-hub-data";

function StarRow({ value }: { value: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.round(value);
        return (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${filled ? "fill-accent text-accent" : "fill-mist text-mist"}`}
          />
        );
      })}
    </div>
  );
}

export function RHGlance() {
  return (
    <section className="bg-mist-soft/40 py-10 lg:py-12">
      <div className="container-skyve">
        <h2 className="text-lg font-bold text-horizon">Our Reviews At A Glance</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {RH_PLATFORMS.map((p) => (
            <div key={p.name} className="rounded-xl border border-mist bg-clear p-5 shadow-card">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-bold ${p.tone} ${p.fg} ${
                    p.monogram.length > 1 ? "text-[10px]" : "text-lg"
                  }`}
                >
                  {p.monogram}
                </span>
                <span className="text-sm font-semibold text-horizon">{p.name}</span>
              </div>
              {p.rating ? (
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-bold text-horizon">{p.rating}</span>
                  <StarRow value={p.ratingValue ?? 0} />
                </div>
              ) : (
                <p className="mt-3 text-lg font-bold text-ridge">{p.badge}</p>
              )}
              <p className="mt-1.5 text-[11px] text-ink-50">{p.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
