import Link from "next/link";
import { ChevronRight, CheckCircle2, ArrowRight, Phone, ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { COMPANY } from "@/lib/company";
import { RL_RECOMMENDED, RL_SIGNS, RL_INSPECTION, RL_RESOURCES } from "@/lib/roof-life-data";

export function RLExtras() {
  return (
    <>
      <section className="bg-clear pt-2">
        <div className="container-skyve grid gap-6 lg:grid-cols-3">
          {/* Recommended actions */}
          <div className="rounded-2xl border border-mist bg-mist-soft/40 p-6 shadow-card">
            <h2 className="font-serif text-base font-bold text-horizon">Recommended Actions</h2>
            <ul className="mt-4 space-y-3">
              {RL_RECOMMENDED.map((a) => (
                <li key={a.title}>
                  <a href="#" className="flex items-start gap-3 rounded-lg p-1.5 transition-colors hover:bg-clear">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-clear ring-1 ring-mist">
                      <Icon name={a.icon} className="h-4 w-4 text-ridge" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-horizon">{a.title}</span>
                      <span className="block text-[11px] leading-snug text-ink-50">{a.desc}</span>
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-ink-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Signs */}
          <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <h2 className="font-serif text-base font-bold text-horizon">Signs Your Roof May Be Aging</h2>
            <ul className="mt-4 space-y-2.5">
              {RL_SIGNS.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-ink-70">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> {s}
                </li>
              ))}
            </ul>
            <Link href="/learn/roof-repair" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-ridge/30 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft">
              View Roof Aging Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Inspection */}
          <div className="relative overflow-hidden rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
            <Photo src={RL_INSPECTION.image} alt="" className="absolute inset-0 h-full w-full opacity-20" />
            <div className="relative">
              <h2 className="font-serif text-lg font-bold leading-snug">{RL_INSPECTION.title}</h2>
              <p className="mt-2 text-sm text-mist-soft/80">{RL_INSPECTION.desc}</p>
              <Link href={RL_INSPECTION.href} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
                {RL_INSPECTION.button} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={COMPANY.phoneHref} className="mt-4 flex items-center gap-2 text-sm font-semibold text-sky hover:text-clear">
                <Phone className="h-4 w-4" /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful resources */}
      <section className="bg-clear py-10">
        <div className="container-skyve">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-horizon">Helpful Resources</h2>
            <Link href="/learn" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
              View All Guides <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RL_RESOURCES.map((r) => (
              <Link key={r.title} href={r.href} className="flex items-start gap-3 rounded-xl border border-mist bg-clear p-4 shadow-card transition-colors hover:border-ridge">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={r.icon} className="h-4 w-4 text-ridge" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-horizon">{r.title}</span>
                  <span className="block text-[11px] leading-snug text-ink-50">{r.desc}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-50" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
