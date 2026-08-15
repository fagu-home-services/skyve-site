import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import {
  MAINTENANCE_FAQ,
  FAQ_CTA_TRUST,
  FAQ_CTA_IMAGE,
} from "@/lib/maintenance-data";

function FaqItem({ item }: { item: { q: string; a: string } }) {
  return (
    <details className="group rounded-xl border border-mist bg-clear px-4 open:shadow-card">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3.5 text-sm font-semibold text-horizon marker:hidden">
        {item.q}
        <Plus className="h-4 w-4 shrink-0 text-ridge transition-transform group-open:rotate-45" />
      </summary>
      <p className="pb-3.5 text-sm leading-relaxed text-ink-70">{item.a}</p>
    </details>
  );
}

export function MaintenanceFAQ() {
  const left = MAINTENANCE_FAQ.filter((_, i) => i % 2 === 0);
  const right = MAINTENANCE_FAQ.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* FAQ */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-ridge">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Roof Maintenance Questions Answered
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="space-y-3">
              {left.map((item) => (
                <FaqItem key={item.q} item={item} />
              ))}
            </div>
            <div className="space-y-3">
              {right.map((item) => (
                <FaqItem key={item.q} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA box */}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-horizon-deep p-7 text-clear shadow-elevated">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FAQ_CTA_IMAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/60" />
          <div className="relative">
            <h3 className="font-serif text-2xl font-bold leading-tight">
              The Cheapest Roof Repair Is Prevention.
            </h3>
            <p className="mt-2 text-sm text-sky-soft/80">
              Protect your roof, extend its lifespan, and avoid unexpected repairs.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
              >
                Schedule Maintenance <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#plans"
                className="inline-flex items-center gap-2 rounded-lg border border-clear/40 px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-clear/10"
              >
                View Plans
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-clear/10 pt-5 text-xs font-medium text-sky-soft/80">
              {FAQ_CTA_TRUST.map((t) => (
                <span key={t.label} className="flex items-center gap-1.5">
                  <Icon name={t.icon} className="h-4 w-4 text-accent" /> {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
