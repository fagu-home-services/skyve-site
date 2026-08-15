import Link from "next/link";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { CH_CERTS, CH_TRAINING_LINK } from "@/lib/cert-hub-data";

export function CHCerts() {
  return (
    <section className="bg-clear py-10 lg:py-14">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          Our Certifications
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CH_CERTS.map((c) => (
            <article key={c.title} className="flex flex-col rounded-2xl border border-mist bg-clear p-5 shadow-card">
              {/* wordmark (IP-safe text) */}
              <div className="flex h-12 items-center">
                <span className={`font-serif text-lg font-extrabold leading-none ${c.tone}`}>
                  {c.brand}
                  {c.sub && (
                    <span className="ml-1 align-middle text-[8px] font-bold uppercase tracking-wide text-ink-50">
                      {c.sub}
                    </span>
                  )}
                </span>
              </div>

              <h3 className="mt-3 text-sm font-bold leading-snug text-horizon">{c.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-ink-70">{c.desc}</p>

              <div className="mt-4 flex items-center justify-between border-t border-mist pt-3">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-horizon">
                  <BadgeCheck className="h-4 w-4 text-ridge" /> {c.credential}
                </span>
                <span className="text-[10px] text-ink-50">{c.since}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={CH_TRAINING_LINK.href}
            className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-6 py-3 text-sm font-semibold text-horizon transition-colors hover:border-ridge hover:text-ridge"
          >
            {CH_TRAINING_LINK.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
