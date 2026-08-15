import { Check, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { AP_CTA } from "@/lib/apply-partner-data";

export function APCTA() {
  return (
    <section className="bg-clear pb-14">
      <div className="container-skyve">
        <div className="relative grid items-center gap-6 overflow-hidden rounded-2xl bg-horizon-deep p-8 text-clear lg:grid-cols-[220px_1.2fr_1fr_auto] lg:p-0">
          <Photo src={AP_CTA.image} alt="" className="hidden h-full min-h-44 w-full lg:block" />
          <div className="lg:py-8">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">{AP_CTA.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{AP_CTA.desc}</p>
          </div>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 lg:py-8">
            {AP_CTA.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>
          <div className="lg:py-8 lg:pr-8">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
              {AP_CTA.button} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
