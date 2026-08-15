import { Phone, ArrowRight, CircleCheck } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PP_STORAGE, PP_ALBUMS, PP_QUICK_ACTIONS, PP_TIPS, PP_HELP } from "@/lib/portal-photos-data";

export function PhotosSidebar() {
  return (
    <aside className="space-y-5">
      {/* Storage */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-center text-sm font-bold text-horizon">{PP_STORAGE.title}</h3>
        <div className="mt-4 flex justify-center">
          <div
            className="relative flex h-32 w-32 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(var(--color-ridge) 0% ${PP_STORAGE.usedPct}%, var(--color-mist) ${PP_STORAGE.usedPct}% 100%)` }}
          >
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-xl font-bold text-horizon">{PP_STORAGE.used}</span>
              <span className="text-[9px] text-ink-50">{PP_STORAGE.of}</span>
              <span className="mt-0.5 text-[11px] font-bold text-ridge">{PP_STORAGE.usedPct}%</span>
            </div>
          </div>
        </div>
        <a href="#" className="mt-3 block text-center text-xs font-semibold text-ridge hover:text-accent">Manage Storage</a>
      </div>

      {/* Albums */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PP_ALBUMS.title}</h3>
        <ul className="mt-3 space-y-0.5">
          {PP_ALBUMS.items.map((a) => (
            <li key={a.label}>
              <a href="#" className="flex items-center justify-between rounded-lg px-2 py-2 text-sm transition-colors hover:bg-mist-soft/60">
                <span className="flex items-center gap-2.5 text-ink-70">
                  <Icon name={a.icon} className={`h-4 w-4 ${a.tone}`} /> {a.label}
                </span>
                <span className="rounded-full bg-mist px-2 py-0.5 text-[11px] font-semibold text-ink-70">{a.count}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-2 block text-center text-xs font-semibold text-ridge hover:text-accent">View All Albums</a>
      </div>

      {/* Quick actions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PP_QUICK_ACTIONS.title}</h3>
        <div className="mt-3 space-y-1">
          {PP_QUICK_ACTIONS.items.map((a) => (
            <button key={a.label} type="button" className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2.5 text-left text-sm font-medium text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge">
              <Icon name={a.icon} className="h-4 w-4 text-ridge" /> {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="rounded-2xl border border-mist bg-sky-soft/40 p-5">
        <h3 className="text-sm font-bold text-horizon">{PP_TIPS.title}</h3>
        <p className="mt-1.5 text-xs text-ink-70">{PP_TIPS.intro}</p>
        <ul className="mt-3 space-y-2">
          {PP_TIPS.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-xs text-ink-70">
              <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ridge" /> {p}
            </li>
          ))}
        </ul>
        <a href={PP_TIPS.link.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {PP_TIPS.link.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PP_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{PP_HELP.desc}</p>
        <a href={PP_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PP_HELP.button.label} <ArrowRight className="h-4 w-4" />
        </a>
        <a href={`tel:${PP_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {PP_HELP.phone}
        </a>
        <p className="mt-0.5 text-[11px] text-ink-50">{PP_HELP.hours}</p>
      </div>
    </aside>
  );
}
