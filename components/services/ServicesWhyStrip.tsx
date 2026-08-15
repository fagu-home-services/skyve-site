import { Icon } from "@/components/shared/Icon";
import { SERVICES_WHY } from "@/lib/services-data";

export function ServicesWhyStrip() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-ridge">
          Why Choose Skyve
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          Built on Trust. Backed by Results.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-mist">
          {SERVICES_WHY.map((w) => (
            <div key={w.title} className="px-2 text-center">
              <Icon name={w.icon} className="mx-auto h-7 w-7 text-ridge" />
              <h3 className="mt-3 text-sm font-bold text-horizon">{w.title}</h3>
              <p className="mt-1.5 text-xs leading-snug text-ink-50">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
