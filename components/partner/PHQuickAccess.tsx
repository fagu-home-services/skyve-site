import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PH_QUICK_ACCESS } from "@/lib/partner-data";

export function PHQuickAccess() {
  return (
    <section className="bg-mist-soft/40 py-8">
      <div className="container-skyve">
        <h2 className="text-xs font-bold uppercase tracking-wider text-ink-50">Quick Access</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PH_QUICK_ACCESS.map((q) => (
            <a key={q.title} href="#" className="group rounded-xl border border-mist bg-clear p-4 shadow-card transition-colors hover:border-ridge">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={q.icon} className="h-4 w-4 text-ridge" />
                </span>
                <ArrowRight className="h-4 w-4 text-ink-50 group-hover:text-accent" />
              </div>
              <p className="mt-3 text-sm font-bold text-horizon">{q.title}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{q.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
