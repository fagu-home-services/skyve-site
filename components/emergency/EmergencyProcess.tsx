import { Phone, Truck, ShieldCheck, Search, Hammer } from "lucide-react";
import { EMERGENCY_PROCESS } from "@/lib/emergency-data";

const ICON = { phone: Phone, truck: Truck, shield: ShieldCheck, search: Search, hammer: Hammer } as const;

export function EmergencyProcess() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Our Emergency Roof Repair Process
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {EMERGENCY_PROCESS.map((step) => {
            const I = ICON[step.icon as keyof typeof ICON];
            return (
              <div key={step.title} className="text-center">
                <div className="relative mx-auto w-fit">
                  <I className="h-9 w-9 text-ridge" />
                  <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-clear">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-bold text-horizon">{step.title}</h3>
                <p className="mt-1 text-xs leading-snug text-ink-50">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
