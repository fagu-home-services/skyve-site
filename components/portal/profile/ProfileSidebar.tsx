import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PRO_ACCOUNT, PRO_NOTIFICATIONS, PRO_CONNECTED } from "@/lib/portal-profile-data";

function Check({ on }: { on: boolean }) {
  return (
    <span className={`flex h-5 w-5 items-center justify-center rounded ${on ? "bg-ridge text-clear" : "border border-mist bg-clear"}`}>
      {on && (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      )}
    </span>
  );
}

export function ProfileSidebar() {
  return (
    <aside className="space-y-5">
      {/* Account Summary */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PRO_ACCOUNT.title}</h3>
        <ul className="mt-3 space-y-3">
          {PRO_ACCOUNT.rows.map((r) => (
            <li key={r.label} className="flex items-start justify-between gap-4 text-sm">
              <span className="text-ink-50">{r.label}</span>
              <span className="text-right font-semibold text-horizon">{r.value}</span>
            </li>
          ))}
          <li className="flex items-center justify-between border-t border-mist pt-3 text-sm">
            <span className="text-ink-50">{PRO_ACCOUNT.status.label}</span>
            <span className="rounded-full bg-success/12 px-2.5 py-0.5 text-[11px] font-semibold text-success">{PRO_ACCOUNT.status.value}</span>
          </li>
        </ul>
        <a href={PRO_ACCOUNT.button.href} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PRO_ACCOUNT.button.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Notification Preferences */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PRO_NOTIFICATIONS.title}</h3>
        <p className="text-[11px] text-ink-50">{PRO_NOTIFICATIONS.subtitle}</p>
        <ul className="mt-3 space-y-3">
          {PRO_NOTIFICATIONS.items.map((n) => (
            <li key={n.title} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={n.icon} className="h-4 w-4 text-ridge" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{n.title}</p>
                <p className="text-[11px] text-ink-50">{n.desc}</p>
              </div>
              <Check on={n.on} />
            </li>
          ))}
        </ul>
        <button type="button" className="mt-4 w-full rounded-lg bg-ridge py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
          {PRO_NOTIFICATIONS.button}
        </button>
      </div>

      {/* Connected Accounts */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PRO_CONNECTED.title}</h3>
        <p className="text-[11px] text-ink-50">{PRO_CONNECTED.subtitle}</p>
        <ul className="mt-3 space-y-3">
          {PRO_CONNECTED.items.map((a) => (
            <li key={a.name} className="flex items-center gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base font-bold ${a.bg} ${a.tone}`}>
                {a.mono || a.name[0]}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{a.name}</p>
                <p className="truncate text-[11px] text-ink-50">{a.detail}</p>
              </div>
              {a.connected ? (
                <span className="shrink-0 rounded-full bg-success/12 px-3 py-1 text-[11px] font-semibold text-success">Connected</span>
              ) : (
                <button type="button" className="shrink-0 rounded-lg border border-ridge px-3 py-1 text-[11px] font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">Connect</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
