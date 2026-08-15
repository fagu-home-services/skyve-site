import { Icon } from "@/components/shared/Icon";
import { DETAILED_INCLUDED } from "@/lib/estimate-data";

export function DetailedIncluded() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          What&apos;s Included In Your Detailed Estimate
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DETAILED_INCLUDED.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-mist bg-clear p-7 text-center shadow-card"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-soft">
                <Icon name={item.icon} className="h-6 w-6 text-ridge" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-horizon">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-50">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
