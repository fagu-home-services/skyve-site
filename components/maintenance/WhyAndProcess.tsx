import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { WHY_CARDS, INCLUDED_9, PROCESS_7 } from "@/lib/maintenance-data";

export function WhyAndProcess() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-12 lg:grid-cols-[1.7fr_1fr]">
        {/* Left: Why + Included */}
        <div>
          <p className="text-center text-xs font-bold uppercase tracking-widest text-ridge">
            Why Maintenance Matters
          </p>
          <h2 className="mt-2 text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Why Most Roofing Problems Start Small
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CARDS.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-mist bg-clear p-5 text-center shadow-card"
              >
                <Icon name={c.icon} className="mx-auto h-7 w-7 text-ridge" />
                <h3 className="mt-3 text-sm font-bold text-horizon">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-snug text-ink-50">{c.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xs font-bold uppercase tracking-widest text-ridge">
            What&apos;s Included in a Maintenance Visit
          </p>
          <h3 className="mt-2 text-center font-serif text-xl font-bold text-horizon sm:text-2xl">
            Comprehensive. Thorough. Professional.
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_9.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-xl border border-mist bg-clear p-3 shadow-card"
              >
                <Photo
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 shrink-0 rounded-lg"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-soft">
                      <Icon name={item.icon} className="h-3 w-3 text-ridge" />
                    </span>
                    <h4 className="text-xs font-bold text-horizon">{item.title}</h4>
                  </div>
                  <p className="mt-1 text-[11px] leading-snug text-ink-50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 7-step process */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ridge">
            How Our Maintenance Program Works
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon sm:text-3xl">
            A Proven 7-Step Process
          </h2>

          <ol className="mt-6">
            {PROCESS_7.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                {i < PROCESS_7.length - 1 && (
                  <span className="absolute left-4 top-9 h-[calc(100%-1.25rem)] w-px bg-mist" />
                )}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ridge text-xs font-bold text-clear">
                  {step.n}
                </span>
                <div className="pt-0.5">
                  <div className="flex items-center gap-2">
                    <Icon name={step.icon} className="h-4 w-4 text-ridge" />
                    <h3 className="text-sm font-bold text-horizon">{step.title}</h3>
                  </div>
                  <p className="mt-0.5 text-xs leading-snug text-ink-50">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
