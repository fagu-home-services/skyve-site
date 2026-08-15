import { ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PROCESS_STEPS } from "@/lib/site-data";

export function ProcessStrip() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          A Better Roofing Experience
        </h2>

        <div className="mt-12 flex flex-col items-stretch gap-6 md:flex-row md:items-start md:justify-center md:gap-2">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="flex items-center gap-4 md:flex-col md:gap-0">
              <div className="flex w-full flex-row items-center gap-4 md:w-44 md:flex-col md:gap-0 md:text-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-clear shadow-card ring-1 ring-mist md:mb-4">
                  <Icon name={step.icon} className="h-7 w-7 text-ridge" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-horizon">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-ink-50">
                    {step.desc}
                  </p>
                </div>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <ChevronRight className="hidden h-6 w-6 shrink-0 self-start text-mist md:mt-5 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
