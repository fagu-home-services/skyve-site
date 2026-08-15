import { Check, Star, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { IP_OPPORTUNITIES, IP_RETURNS, IP_WHY, IP_QUOTE } from "@/lib/investors-data";

export function IPOpportunities() {
  return (
    <section className="bg-clear pb-10">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* Opportunities */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Investment Opportunities</h2>
          <ul className="mt-4 space-y-3">
            {IP_OPPORTUNITIES.map((o) => (
              <li key={o.name} className="flex items-center gap-3 rounded-xl border border-mist p-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={o.icon} className="h-4 w-4 text-ridge" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-horizon">{o.name}</span>
                  <span className="block text-[10px] text-ink-50">{o.desc}</span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block text-sm font-bold text-ridge">{o.range}</span>
                  <span className="block text-[9px] text-ink-50">Investment Range</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Attractive returns */}
        <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
          <h2 className="text-center text-xs font-bold uppercase tracking-wide text-mist-soft/60">Attractive Returns</h2>
          <ul className="mt-4 space-y-4">
            {IP_RETURNS.map((r) => (
              <li key={r.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-clear/10 ring-1 ring-accent/30">
                  <Icon name={r.icon} className="h-4 w-4 text-accent" />
                </span>
                <div>
                  <p className="text-sm font-bold text-clear">{r.title}</p>
                  <p className="text-[11px] leading-snug text-mist-soft/70">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Why choose */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Why Investors Choose Skyve</h2>
          <ul className="mt-4 space-y-2.5">
            {IP_WHY.map((w) => (
              <li key={w} className="flex items-start gap-2 text-sm text-ink-70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {w}
              </li>
            ))}
          </ul>
          <figure className="mt-5 rounded-xl bg-mist-soft/60 p-4">
            <blockquote className="text-xs leading-relaxed text-ink-70">&ldquo;{IP_QUOTE.text}&rdquo;</blockquote>
            <figcaption className="mt-2 text-[11px] font-bold text-horizon">– {IP_QUOTE.author}</figcaption>
            <div className="mt-1 flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";
import { IP_CTA } from "@/lib/investors-data";

export function IPCTA() {
  return (
    <section id="express" className="bg-clear pb-14">
      <div className="container-skyve">
        <div className="relative grid items-center gap-6 overflow-hidden rounded-2xl bg-horizon-deep p-8 text-clear lg:grid-cols-[1.3fr_1fr_auto] lg:p-10">
          <div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">{IP_CTA.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{IP_CTA.desc}</p>
          </div>

          <ul className="space-y-2.5">
            {IP_CTA.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-clear">
                <Check className="h-4 w-4 shrink-0 text-success" /> {p}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
              {IP_CTA.button} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={COMPANY.phoneHref} className="text-sm text-mist-soft/80 hover:text-clear">
              or call <span className="font-semibold text-sky">{COMPANY.phone}</span>
            </a>
          </div>

          <Photo src={IP_CTA.image} alt="" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 opacity-15 lg:block" />
        </div>
      </div>
    </section>
  );
}
