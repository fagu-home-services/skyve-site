import { Check, ArrowRight, Star } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { CP_STEPS, CP_LEAD_ACCESS } from "@/lib/contractors-data";

export function CPHowWorks() {
  const la = CP_LEAD_ACCESS;
  return (
    <section id="how" className="bg-clear py-12 lg:py-14">
      <div className="container-skyve grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Steps */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">How The Program Works</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {CP_STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="relative mx-auto w-fit">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-mist bg-clear shadow-card">
                    <Icon name={s.icon} className="h-5 w-5 text-ridge" />
                  </span>
                  <span className="absolute -top-1 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-ridge text-xs font-bold text-clear">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-3 text-[11px] font-bold text-horizon">{s.title}</h3>
                <p className="mt-1 text-[10px] leading-snug text-ink-50">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#join" className="inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
              Join the Program Today <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Lead access */}
        <div className="rounded-2xl bg-horizon-deep p-7 text-clear shadow-elevated lg:p-8">
          <div className="grid gap-6 sm:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="font-serif text-lg font-bold">{la.title}</h2>
              <p className="mt-1.5 text-sm text-mist-soft/75">{la.desc}</p>
              <ul className="mt-4 space-y-2">
                {la.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-clear">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {p}
                  </li>
                ))}
              </ul>
              <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-clear/10 px-5 py-2.5 text-sm font-semibold text-clear ring-1 ring-clear/20 transition-colors hover:bg-clear/20">
                {la.button} <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Lead preview card */}
            <div className="self-start rounded-xl bg-clear p-4 text-ink-70 shadow-elevated">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-horizon">New Lead</p>
                <span className="rounded-full bg-ridge/10 px-2 py-0.5 text-[10px] font-semibold text-ridge">{la.preview.badge}</span>
              </div>
              <dl className="mt-3 space-y-2 text-xs">
                {la.preview.rows.map((r) => (
                  <div key={r.label} className="flex items-center justify-between gap-3">
                    <dt className="text-ink-50">{r.label}</dt>
                    <dd className="font-semibold text-horizon">{r.value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink-50">{la.preview.scoreLabel}</dt>
                  <dd className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </dd>
                </div>
              </dl>
              <button type="button" className="mt-4 w-full rounded-lg bg-ridge py-2 text-xs font-semibold text-clear transition-colors hover:bg-ridge-bright">
                {la.preview.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
