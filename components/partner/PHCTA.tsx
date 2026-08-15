import { Check, ArrowRight, Handshake } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { PH_CTA } from "@/lib/partner-data";

export function PHCTA() {
  return (
    <section id="apply" className="bg-clear pb-14">
      <div className="container-skyve">
        <div className="relative grid items-center gap-6 overflow-hidden rounded-2xl bg-horizon-deep p-8 text-clear lg:grid-cols-[1.5fr_1fr_auto] lg:p-10">
          <div className="flex items-start gap-4">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full ring-1 ring-clear/20 sm:flex">
              <Handshake className="h-7 w-7 text-accent" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">{PH_CTA.title}</h2>
              <p className="mt-2 max-w-md text-sm text-mist-soft/80">{PH_CTA.desc}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
                {PH_CTA.button} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <ul className="space-y-2.5">
            {PH_CTA.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>

          <Photo src={PH_CTA.image} alt="" className="hidden h-full min-h-40 w-56 rounded-xl opacity-80 lg:block" />
        </div>
      </div>
    </section>
  );
}
