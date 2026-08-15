import { Icon } from "@/components/shared/Icon";
import { INSPECTION_BENEFITS } from "@/lib/inspection-data";

export function InspectionBenefits() {
  return (
    <section className="bg-clear py-14 lg:py-16">
      <div className="container-skyve grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {INSPECTION_BENEFITS.map((b) => (
          <div key={b.title} className="text-center">
            <Icon name={b.icon} className="mx-auto h-8 w-8 text-ridge" />
            <h3 className="mt-3 text-sm font-bold text-horizon">{b.title}</h3>
            <p className="mt-1.5 text-xs leading-snug text-ink-50">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
