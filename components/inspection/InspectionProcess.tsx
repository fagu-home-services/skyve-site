import { Icon } from "@/components/shared/Icon";
import { INSPECTION_PROCESS } from "@/lib/inspection-data";

export function InspectionProcess() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Our Roof Inspection Process
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {INSPECTION_PROCESS.map((step) => (
            <div key={step.title} className="text-center">
              <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-ridge text-sm font-bold text-clear">
                {step.n}
              </span>
              <Icon name={step.icon} className="mx-auto mt-4 h-6 w-6 text-ridge" />
              <h3 className="mt-2 text-sm font-bold text-horizon">{step.title}</h3>
              <p className="mt-1 text-xs leading-snug text-ink-50">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
