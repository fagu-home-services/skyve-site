import { CheckCircle2, Zap } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { CANT_WAIT_CHECKLIST, CANT_WAIT_FEATURES } from "@/lib/emergency-data";

export function EmergencyCantWait() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid items-start gap-10 lg:grid-cols-[0.9fr_1.3fr]">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <Zap className="h-5 w-5 text-clear" />
            </span>
            <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
              Roof Damage Can&apos;t Wait
            </h2>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-70">
            Even a small roof issue can quickly turn into major damage for your
            home. The sooner you call, the more we can save you.
          </p>
          <ul className="mt-5 space-y-2.5">
            {CANT_WAIT_CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-ink-70">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-ridge" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-5 rounded-2xl border border-mist bg-mist-soft/50 p-6 lg:grid-cols-4">
          {CANT_WAIT_FEATURES.map((f) => (
            <div key={f.title} className="text-center">
              <Icon name={f.icon} className="mx-auto h-7 w-7 text-ridge" />
              <h3 className="mt-3 text-sm font-bold text-horizon">{f.title}</h3>
              <p className="mt-1 text-xs leading-snug text-ink-50">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
