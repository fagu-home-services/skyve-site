import { Icon } from "@/components/shared/Icon";
import { IMPACT_STATS } from "@/lib/about-data";

export function ImpactStats() {
  return (
    <section className="bg-horizon-deep py-14">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-clear sm:text-3xl">
          Our Impact in Washington
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-clear/10">
          {IMPACT_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <Icon name={s.icon} className="mx-auto h-7 w-7 text-sky" />
              <p className="mt-3 font-serif text-3xl font-extrabold text-clear">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-sky-soft/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
