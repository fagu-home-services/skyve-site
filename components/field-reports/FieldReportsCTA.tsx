import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { FR_CTA } from "@/lib/field-reports-data";

export function FieldReportsCTA() {
  return (
    <section className="bg-horizon-deep py-16 text-clear lg:py-20">
      <div className="container-skyve">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">{FR_CTA.title}</h2>
            <p className="mt-2 max-w-xl text-sm text-mist-soft/80">{FR_CTA.desc}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/estimate/instant"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 px-6 py-3.5 text-sm font-semibold text-clear transition-colors hover:border-clear hover:bg-clear/10"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FR_CTA.features.map((f) => (
            <div key={f.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-clear/10">
                <Icon name={f.icon} className="h-6 w-6 text-sky" />
              </span>
              <h3 className="mt-3 text-sm font-bold text-clear">{f.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-mist-soft/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
