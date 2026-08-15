import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePage } from "@/lib/service-pages";

export function RepairProcessCosts({ data }: { data: ServicePage }) {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Process */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            {data.processTitle}
          </h2>
          <p className="mt-2 text-sm text-ink-50">{data.processIntro}</p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {data.process.map((step) => (
              <div key={step.title} className="text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-ridge text-sm font-bold text-clear">
                  {step.n}
                </span>
                <h3 className="mt-3 text-sm font-bold text-horizon">{step.title}</h3>
                <p className="mt-1 text-xs leading-snug text-ink-50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Costs */}
        {data.costs && (
          <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card">
            <h3 className="font-serif text-lg font-bold text-horizon">
              {data.costsTitle}
            </h3>
            <p className="mt-1 text-sm text-ink-50">{data.costsIntro}</p>

            <ul className="mt-5 divide-y divide-mist">
              {data.costs.map((c) => (
                <li key={c.label} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-sm text-ink-70">{c.label}</span>
                  <span className="font-mono text-sm font-bold text-horizon">
                    {c.price}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/estimate/instant"
              className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-ridge/30 px-4 py-3 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
