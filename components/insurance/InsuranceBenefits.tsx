import { Icon } from "@/components/shared/Icon";
import { INSURANCE_BENEFITS } from "@/lib/insurance-data";

export function InsuranceBenefits() {
  return (
    <section className="bg-clear py-14 lg:py-16">
      <div className="container-skyve grid gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-mist">
        {INSURANCE_BENEFITS.map((b) => (
          <div key={b.title} className="px-2 text-center">
            <Icon name={b.icon} className="mx-auto h-7 w-7 text-ridge" />
            <h3 className="mt-3 text-sm font-bold text-horizon">{b.title}</h3>
            <p className="mt-1.5 text-xs leading-snug text-ink-50">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
