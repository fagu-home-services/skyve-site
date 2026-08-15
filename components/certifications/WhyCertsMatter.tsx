import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { WHY_CERTS, LICENSED_CARD } from "@/lib/certifications-data";

export function WhyCertsMatter() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Why Our Certifications Matter to You
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {WHY_CERTS.map((w) => (
              <div key={w.title} className="text-center">
                <Icon name={w.icon} className="mx-auto h-7 w-7 text-ridge" />
                <h3 className="mt-3 text-xs font-bold text-horizon">{w.title}</h3>
                <p className="mt-1 text-[11px] leading-snug text-ink-50">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Licensed card */}
        <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
          <h3 className="font-serif text-lg font-bold">{LICENSED_CARD.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-sky-soft/80">
            {LICENSED_CARD.text}
          </p>
          <ul className="mt-4 space-y-2.5">
            {LICENSED_CARD.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-clear">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> {item}
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
          >
            Request Certificate <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-3 text-center text-[10px] text-sky-soft/60">
            {LICENSED_CARD.note}
          </p>
        </div>
      </div>
    </section>
  );
}
