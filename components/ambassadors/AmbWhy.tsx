import { ShieldCheck } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AMB_WHY, AMB_REWARDS } from "@/lib/ambassadors-data";

export function AmbWhy() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-10 lg:grid-cols-2">
        {/* Why */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            Why Become a <span className="text-ridge">Skyve Ambassador</span>?
          </h2>
          <div className="mt-8 space-y-6">
            {AMB_WHY.map((w) => (
              <div key={w.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-soft">
                  <Icon name={w.icon} className="h-5 w-5 text-ridge" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-horizon">{w.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-ink-50">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards card */}
        <div className="rounded-2xl bg-horizon-deep p-7 text-clear shadow-elevated lg:p-8">
          <h2 className="font-serif text-xl font-bold">
            Earn Generous <span className="text-accent">Rewards</span>
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {AMB_REWARDS.map((r) => (
              <div key={r.label} className="rounded-xl bg-clear/5 p-5 text-center ring-1 ring-clear/10">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ridge">
                  <Icon name={r.icon} className="h-5 w-5 text-clear" />
                </span>
                <p className="mt-4 font-serif text-2xl font-extrabold text-clear">{r.value}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-sky">{r.label}</p>
                <p className="mt-2 text-[11px] leading-snug text-mist-soft/70">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-mist-soft/70">
            <ShieldCheck className="h-4 w-4 text-accent" />
            No limits. The more you refer, the more you earn!
          </p>
        </div>
      </div>
    </section>
  );
}
