import { ArrowRight, ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { SET_ACCOUNT, SET_QUICK_ACTIONS, SET_HELP } from "@/lib/portal-settings-data";

export function SetSidebar() {
  return (
    <aside className="space-y-5">
      {/* Account Summary */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{SET_ACCOUNT.title}</h3>
        <ul className="mt-3 space-y-3">
          {SET_ACCOUNT.rows.map((r) => (
            <li key={r.label} className="flex items-start justify-between gap-4 text-sm">
              <span className="text-ink-50">{r.label}</span>
              <span className="text-right font-semibold text-horizon">{r.value}</span>
            </li>
          ))}
          <li className="flex items-center justify-between border-t border-mist pt-3 text-sm">
            <span className="text-ink-50">{SET_ACCOUNT.status.label}</span>
            <span className="rounded-full bg-success/12 px-2.5 py-0.5 text-[11px] font-semibold text-success">{SET_ACCOUNT.status.value}</span>
          </li>
        </ul>
        <a href={SET_ACCOUNT.button.href} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {SET_ACCOUNT.button.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{SET_QUICK_ACTIONS.title}</h3>
        <ul className="mt-3 space-y-1">
          {SET_QUICK_ACTIONS.items.map((a) => (
            <li key={a.label}>
              <button type="button" className="flex w-full items-center justify-between gap-2.5 rounded-lg px-2 py-2.5 text-left text-sm font-medium text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge">
                <span className="flex items-center gap-2.5">
                  <Icon name={a.icon} className="h-4 w-4 text-ridge" /> {a.label}
                </span>
                <ChevronRight className="h-4 w-4 text-ink-50" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Help & Resources */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{SET_HELP.title}</h3>
        <p className="text-[11px] text-ink-50">{SET_HELP.subtitle}</p>
        <ul className="mt-3 space-y-1">
          {SET_HELP.items.map((h) => (
            <li key={h.label}>
              <a href={h.href} className="flex items-center justify-between gap-2.5 rounded-lg px-2 py-2.5 text-sm text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge">
                <span className="flex items-center gap-2.5">
                  <Icon name={h.icon} className="h-4 w-4 text-ridge" /> {h.label}
                </span>
                <ChevronRight className="h-4 w-4 text-ink-50" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
