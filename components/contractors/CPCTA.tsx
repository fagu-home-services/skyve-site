import { Check, Handshake, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { CP_CTA } from "@/lib/contractors-data";

export function CPCTA() {
  return (
    <section id="join" className="bg-clear pb-14">
      <div className="container-skyve">
        <div className="relative grid items-center gap-6 overflow-hidden rounded-2xl bg-horizon-deep p-8 text-clear lg:grid-cols-[1.3fr_1fr_auto] lg:p-10">
          <div className="flex items-start gap-4">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full ring-1 ring-clear/20 sm:flex">
              <Handshake className="h-7 w-7 text-accent" />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">{CP_CTA.title}</h2>
              <p className="mt-2 max-w-md text-sm text-mist-soft/80">{CP_CTA.desc}</p>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-2.5">
            {CP_CTA.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>

          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
            {CP_CTA.button} <ArrowRight className="h-4 w-4" />
          </a>

          <Photo src={CP_CTA.image} alt="" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 opacity-15 lg:block" />
        </div>
      </div>
    </section>
  );
}
