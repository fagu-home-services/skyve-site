import { Icon } from "@/components/shared/Icon";
import { FINANCING_BENEFITS } from "@/lib/financing-data";

export function FinancingBenefits() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          Financing That Works For You
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FINANCING_BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-xl bg-mist-soft/60 p-7 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clear shadow-card ring-1 ring-mist">
                <Icon name={b.icon} className="h-6 w-6 text-ridge" />
              </div>
              <h3 className="mt-5 text-base font-bold text-horizon">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-50">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
