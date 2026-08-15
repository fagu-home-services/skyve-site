import Link from "next/link";
import { Home, ClipboardList, Phone, ChevronRight, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { COMPANY } from "@/lib/company";
import { FC_INVEST, FC_HELP, FC_RESOURCES, FC_EXAMPLES } from "@/lib/financing-calc-data";

export function FCBottom() {
  return (
    <>
      {/* Invest banner */}
      <section className="bg-clear py-6">
        <div className="container-skyve grid gap-6 rounded-2xl border border-mist bg-mist-soft/40 p-8 shadow-card lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
              <Home className="h-6 w-6 text-ridge" />
            </span>
            <div>
              <p className="font-serif text-base font-bold text-horizon">{FC_INVEST.title}</p>
              <p className="mt-1 text-xs leading-snug text-ink-50">{FC_INVEST.desc}</p>
            </div>
          </div>
          {FC_INVEST.features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <Icon name={f.icon} className="mt-0.5 h-5 w-5 shrink-0 text-ridge" />
              <div>
                <p className="text-sm font-bold text-horizon">{f.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-ink-50">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help / Resources / Examples */}
      <section className="bg-clear pb-14">
        <div className="container-skyve grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Help card */}
          <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
            <ClipboardList className="h-8 w-8 text-accent" />
            <h2 className="mt-3 font-serif text-lg font-bold leading-snug">{FC_HELP.title}</h2>
            <p className="mt-1.5 text-sm text-mist-soft/75">{FC_HELP.desc}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-clear/25 px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-clear/10">
                {FC_HELP.button}
              </Link>
              <a href={COMPANY.phoneHref} className="flex items-center gap-1.5 text-sm font-semibold text-sky hover:text-clear">
                <Phone className="h-4 w-4" /> {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
            <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Helpful Resources</h2>
            <ul className="mt-3 divide-y divide-mist">
              {FC_RESOURCES.map((r) => (
                <li key={r.title}>
                  <Link href={r.href} className="flex items-center justify-between gap-3 py-2.5 text-sm text-ink-70 transition-colors hover:text-ridge">
                    {r.title} <ChevronRight className="h-4 w-4 text-ink-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Examples */}
          <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
            <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Example Monthly Payments</h2>
            <ul className="mt-3 divide-y divide-mist">
              {FC_EXAMPLES.map((e) => (
                <li key={e.project} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <span className="text-ink-70">{e.project}</span>
                  <span className="flex items-center gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-ink-50" />
                    <span className="font-bold text-ridge">{e.monthly}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
