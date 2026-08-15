import { Check, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { SP_ACTION, SP_PROTOCOLS } from "@/lib/safety-data";

export function SPProtocols() {
  return (
    <section className="bg-clear py-10 lg:py-14">
      <div className="container-skyve">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Safety in Action */}
          <div>
            <h2 className="font-serif text-xl font-bold text-horizon">{SP_ACTION.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-70">{SP_ACTION.desc}</p>

            <div className="mt-5 grid items-start gap-5 sm:grid-cols-[1fr_180px]">
              <ul className="space-y-3">
                {SP_ACTION.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink-70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {p}
                  </li>
                ))}
              </ul>
              <Photo src={SP_ACTION.image} seed="safety-action" alt="Skyve installer on the roof" className="h-40 w-full rounded-xl sm:h-44" />
            </div>
          </div>

          {/* Protocols */}
          <div>
            <h2 className="font-serif text-xl font-bold text-horizon">{SP_PROTOCOLS.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-70">{SP_PROTOCOLS.desc}</p>

            <div className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {SP_PROTOCOLS.items.map((it) => (
                <div key={it.title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={it.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-horizon">{it.title}</p>
                    <p className="text-[11px] leading-snug text-ink-50">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={SP_PROTOCOLS.button.href}
            className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-6 py-3 text-sm font-semibold text-horizon transition-colors hover:border-ridge hover:text-ridge"
          >
            {SP_PROTOCOLS.button.label} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
