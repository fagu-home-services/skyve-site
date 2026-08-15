import { Icon } from "@/components/shared/Icon";
import { WHY_CARDS } from "@/lib/site-data";

export function WhyChoose() {
  return (
    <section className="bg-clear py-16 lg:py-24">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          Why Homeowners Choose Skyve
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-mist bg-clear p-7 text-center shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky-soft">
                <Icon name={card.icon} className="h-6 w-6 text-ridge" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-horizon">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-50">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
