import { Check, ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { RP_STEPS, RP_EARN } from "@/lib/realtors-data";

export function RPHowWorks() {
  return (
    <section id="how" className="bg-clear py-12 lg:py-14">
      <div className="container-skyve grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Steps */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">How The Program Works</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {RP_STEPS.map((s) => (
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

        {/* Earn card */}
        <div className="relative overflow-hidden rounded-2xl bg-horizon-deep text-clear shadow-elevated">
          <Photo src={RP_EARN.image} alt="" className="absolute inset-0 h-full w-full opacity-20" />
          <div className="relative p-7 lg:p-8">
            <h2 className="font-serif text-lg font-bold">{RP_EARN.title}</h2>
            <p className="mt-2 max-w-md text-sm text-mist-soft/80">{RP_EARN.desc}</p>
            <p className="mt-5 font-serif text-4xl font-extrabold text-clear">{RP_EARN.amount}</p>
            <p className="text-sm font-semibold text-sky">{RP_EARN.amountSub}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {RP_EARN.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-clear">
                  <Check className="h-4 w-4 shrink-0 text-success" /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-mist-soft/60">{RP_EARN.note}</p>
            <a href="#join" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
              Join the Realtors Program <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
