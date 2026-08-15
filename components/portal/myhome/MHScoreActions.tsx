import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { MH_HEALTH, MH_QUICK_ACTIONS } from "@/lib/portal-myhome-data";

export function MHScoreActions() {
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr] lg:divide-x lg:divide-mist">
        {/* Home Health Score */}
        <div>
          <h2 className="text-sm font-bold text-horizon">{MH_HEALTH.title}</h2>
          <div className="mt-4 flex items-center gap-5">
            <div
              className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full"
              style={{ background: `conic-gradient(var(--color-success) 0% ${MH_HEALTH.score}%, var(--color-mist) ${MH_HEALTH.score}% 100%)` }}
            >
              <div className="flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-full bg-clear">
                <span className="font-serif text-2xl font-bold text-horizon">{MH_HEALTH.score}</span>
                <span className="text-[10px] font-semibold text-success">{MH_HEALTH.rating}</span>
              </div>
            </div>
            <div>
              <p className="text-xs leading-relaxed text-ink-70">{MH_HEALTH.desc}</p>
              <a href={MH_HEALTH.link.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
                {MH_HEALTH.link.label} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:pl-6">
          <h2 className="text-sm font-bold text-horizon">{MH_QUICK_ACTIONS.title}</h2>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
            {MH_QUICK_ACTIONS.items.map((a) => (
              <button key={a.label} type="button" className="flex flex-col items-center gap-2 rounded-xl border border-mist bg-clear p-3 text-center transition-colors hover:border-ridge">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={a.icon} className="h-5 w-5 text-ridge" />
                </span>
                <span className="text-[10px] font-semibold leading-snug text-horizon">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
