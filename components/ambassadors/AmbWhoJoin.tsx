import { ArrowRight, Check } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AMB_WHO } from "@/lib/ambassadors-data";

const READY_TRUST = ["Free to Join", "Easy to Share", "Start Earning Today"];

export function AmbWhoJoin() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Who can join */}
        <div className="rounded-2xl border border-mist bg-mist-soft/40 p-7 shadow-card">
          <h2 className="font-serif text-xl font-bold text-horizon">Who Can Join?</h2>
          <div className="mt-6 grid grid-cols-3 gap-5 sm:grid-cols-5">
            {AMB_WHO.map((w) => (
              <div key={w.label} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-clear ring-1 ring-mist">
                  <Icon name={w.icon} className="h-5 w-5 text-ridge" />
                </span>
                <span className="text-[11px] font-semibold text-horizon">{w.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to join */}
        <div id="join" className="rounded-2xl bg-ridge p-7 text-clear shadow-elevated">
          <h2 className="font-serif text-xl font-bold">Ready to Join?</h2>
          <p className="mt-1 text-sm text-sky-soft/90">It&apos;s free and only takes a minute.</p>
          <form className="mt-5 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-lg border border-clear/20 bg-clear px-4 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50"
            />
            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
            >
              Join Now <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {READY_TRUST.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-sky-soft/90">
                <Check className="h-3.5 w-3.5 text-clear" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
