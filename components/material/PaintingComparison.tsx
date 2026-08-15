import { ShieldCheck } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import type { MaterialPage } from "@/lib/material-pages";

export function PaintingComparison({ data }: { data: MaterialPage }) {
  const { comparison, standBehind } = data;
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.2fr_0.9fr_1.2fr]">
        {/* Comparison table */}
        <div className="overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
          <h2 className="border-b border-mist px-5 py-3.5 font-serif text-base font-bold text-horizon">
            {comparison.title}
          </h2>
          <div
            className="grid text-[11px]"
            style={{ gridTemplateColumns: `1.1fr repeat(${comparison.columns.length}, 1fr)` }}
          >
            <div className="bg-mist-soft px-3 py-2 font-bold uppercase tracking-wide text-ink-50">
              Feature
            </div>
            {comparison.columns.map((col, i) => (
              <div
                key={col}
                className={`px-2 py-2 text-center font-bold uppercase tracking-wide ${
                  i === 0 ? "bg-ridge text-clear" : "bg-mist-soft text-ink-50"
                }`}
              >
                {col}
              </div>
            ))}
            {comparison.rows.map((r) => (
              <div key={r.feature} className="contents">
                <div className="flex items-center gap-1.5 border-t border-mist px-3 py-2.5 text-ink-70">
                  <Icon name={r.icon} className="h-3.5 w-3.5 shrink-0 text-ridge" /> {r.feature}
                </div>
                {r.values.map((v, i) => (
                  <div
                    key={i}
                    className={`border-t border-mist px-2 py-2.5 text-center ${
                      i === 0 ? "bg-ridge/5 font-semibold text-ridge" : "text-ink-50"
                    }`}
                  >
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Stand behind */}
        {standBehind && (
          <div className="flex flex-col justify-center rounded-2xl bg-horizon-deep p-7 text-clear shadow-card">
            <h3 className="font-serif text-xl font-bold">{standBehind.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-sky-soft/80">{standBehind.text}</p>
            <div className="mt-5 flex items-center gap-2 border-t border-clear/10 pt-4">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <span className="text-sm font-bold">{standBehind.badge}</span>
            </div>
          </div>
        )}

        {/* Paint brands */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card">
          <h3 className="font-serif text-lg font-bold text-horizon">Paint Brands We Trust</h3>
          <p className="mt-1 text-sm text-ink-50">
            We partner with the best paint brands to deliver beautiful, durable results.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {data.brands.map((b) => (
              <span key={b} className="font-serif text-base font-bold tracking-tight text-ink-50">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
