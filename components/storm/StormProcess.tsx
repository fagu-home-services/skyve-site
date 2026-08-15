import { STORM_PROCESS } from "@/lib/storm-data";

export function StormProcess() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Our Storm Damage Repair Process
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {STORM_PROCESS.map((step) => (
            <div key={step.title} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-ridge text-sm font-bold text-clear">
                {step.n}
              </span>
              <h3 className="mt-3 text-sm font-bold text-horizon">{step.title}</h3>
              <p className="mt-1 text-xs leading-snug text-ink-50">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
