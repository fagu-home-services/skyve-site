import { ChevronsLeftRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { LEAK_BEFORE_AFTER } from "@/lib/leak-data";

export function LeakBeforeAfter() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Leak Repair Before &amp; After
        </h2>
        <p className="mt-2 text-sm text-ink-50">
          We don&apos;t just patch leaks. We fix the root cause.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LEAK_BEFORE_AFTER.map((ba) => (
            <div key={ba.label}>
              <div className="relative overflow-hidden rounded-xl shadow-card">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <Photo src={ba.before} alt={`${ba.label} before`} className="aspect-[4/3]" />
                    <span className="absolute bottom-2 left-2 rounded bg-horizon-deep/80 px-1.5 py-0.5 text-[9px] font-bold uppercase text-clear">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <Photo src={ba.after} alt={`${ba.label} after`} className="aspect-[4/3]" />
                    <span className="absolute bottom-2 right-2 rounded bg-ridge px-1.5 py-0.5 text-[9px] font-bold uppercase text-clear">
                      After
                    </span>
                  </div>
                </div>
                <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-clear/80" />
                <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-clear text-ridge shadow-card">
                  <ChevronsLeftRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <p className="mt-2 text-center text-xs font-semibold text-horizon">{ba.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
