import { Icon } from "@/components/shared/Icon";
import { CLEANING_WHY } from "@/lib/cleaning-data";

export function WhyCleaning() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid items-center gap-10 lg:grid-cols-[0.9fr_1.6fr]">
        <div>
          <p className="eyebrow text-ridge">Why Roof Cleaning Matters</p>
          <h2 className="mt-3 font-serif text-2xl font-bold text-horizon sm:text-3xl">
            More Than Just a Clean Roof
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-70">
            Over time, moss, algae, lichen, and debris trap moisture against your
            shingles. This can lead to deterioration, leaks, and expensive repairs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-mist">
          {CLEANING_WHY.map((b) => (
            <div key={b.title} className="px-2 text-center">
              <Icon name={b.icon} className="mx-auto h-7 w-7 text-ridge" />
              <h3 className="mt-3 text-sm font-bold text-horizon">{b.title}</h3>
              <p className="mt-1.5 text-xs leading-snug text-ink-50">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
