import { Icon } from "@/components/shared/Icon";
import { VENT_PROBLEMS } from "@/lib/ventilation-data";

export function VentilationProblems() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-ridge">
          Why Roof Ventilation Is Critical
        </p>
        <h2 className="mt-2 text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Poor Ventilation Causes Expensive Problems
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-mist">
          {VENT_PROBLEMS.map((p) => (
            <div key={p.title} className="px-2 text-center">
              <Icon name={p.icon} className="mx-auto h-7 w-7 text-ridge" />
              <h3 className="mt-3 text-sm font-bold text-horizon">{p.title}</h3>
              <p className="mt-1.5 text-xs leading-snug text-ink-50">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
