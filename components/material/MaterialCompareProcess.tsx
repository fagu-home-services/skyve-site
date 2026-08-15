import { Icon } from "@/components/shared/Icon";
import type { MaterialPage } from "@/lib/material-pages";

export function MaterialCompareProcess({ data }: { data: MaterialPage }) {
  const { comparison } = data;
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Comparison table */}
        <div className="overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
          <h2 className="border-b border-mist px-6 py-4 font-serif text-lg font-bold text-horizon">
            {comparison.title}
          </h2>
          <div
            className="grid text-[11px]"
            style={{ gridTemplateColumns: `1.2fr repeat(${comparison.columns.length}, 1fr)` }}
          >
            <div className="bg-mist-soft px-3 py-2.5 font-bold uppercase tracking-wide text-ink-50">
              Feature
            </div>
            {comparison.columns.map((col, i) => (
              <div
                key={col}
                className={`px-2 py-2.5 text-center font-bold uppercase tracking-wide ${
                  i === 0 ? "bg-ridge text-clear" : "bg-mist-soft text-ink-50"
                }`}
              >
                {col}
              </div>
            ))}
            {comparison.rows.map((r) => (
              <div key={r.feature} className="contents">
                <div className="flex items-center gap-2 border-t border-mist px-3 py-3 text-ink-70">
                  <Icon name={r.icon} className="h-4 w-4 shrink-0 text-ridge" /> {r.feature}
                </div>
                {r.values.map((v, i) => (
                  <div
                    key={i}
                    className={`border-t border-mist px-2 py-3 text-center ${
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

        {/* Process */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon sm:text-2xl">
            {data.processTitle}
          </h2>
          <p className="mt-2 text-sm text-ink-50">{data.processIntro}</p>
          <div
            className={`mt-8 grid grid-cols-3 gap-6 ${
              data.process.length >= 7 ? "sm:grid-cols-4 lg:grid-cols-7" : "sm:grid-cols-6"
            }`}
          >
            {data.process.map((step) => (
              <div key={step.title} className="text-center">
                <div className="relative mx-auto w-fit">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-soft">
                    <Icon name={step.icon} className="h-5 w-5 text-ridge" />
                  </span>
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ridge text-[10px] font-bold text-clear">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-2 text-[11px] font-bold text-horizon">{step.title}</h3>
                <p className="mt-0.5 text-[10px] leading-snug text-ink-50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
