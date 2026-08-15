import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { WC_CTA } from "@/lib/warranty-data";

export function WCCTA() {
  return (
    <section className="bg-clear py-8 lg:py-10">
      <div className="container-skyve">
        <div className="grid items-center gap-6 overflow-hidden rounded-2xl bg-horizon-deep p-6 text-clear lg:grid-cols-[200px_1.4fr_1fr_auto] lg:p-0">
          <Photo src={WC_CTA.image} alt="" seed="warranty-cta" className="hidden h-full min-h-44 w-full lg:block" />
          <div className="lg:py-8">
            <h2 className="font-serif text-xl font-bold sm:text-2xl">{WC_CTA.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{WC_CTA.desc}</p>
          </div>
          <ul className="space-y-2.5 lg:py-8">
            {WC_CTA.points.map((p) => (
              <li key={p.label} className="flex items-center gap-2.5 text-sm text-clear">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-clear/10">
                  <Icon name={p.icon} className="h-4 w-4 text-sky" />
                </span>
                {p.label}
              </li>
            ))}
          </ul>
          <div className="text-center lg:py-8 lg:pr-8">
            <Link
              href={WC_CTA.button.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              {WC_CTA.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-xs text-mist-soft/70">or call {WC_CTA.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
