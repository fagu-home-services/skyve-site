import { Phone, ArrowRight, Star } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { PM_SCORE, PM_REMINDERS, PM_SEASONAL, PM_HELP, PM_PROVIDERS } from "@/lib/portal-maintenance-data";

function Toggle({ on }: { on: boolean }) {
  return (
    <span className={`flex h-5 w-9 items-center rounded-full px-0.5 transition-colors ${on ? "justify-end bg-ridge" : "justify-start bg-mist"}`}>
      <span className="h-4 w-4 rounded-full bg-clear shadow" />
    </span>
  );
}

export function MaintSidebar() {
  return (
    <aside className="space-y-5">
      {/* Maintenance Score */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-center text-sm font-bold text-horizon">{PM_SCORE.title}</h3>
        <div className="mt-4 flex justify-center">
          <div
            className="relative flex h-36 w-36 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(var(--color-success) 0% ${PM_SCORE.score}%, var(--color-mist) ${PM_SCORE.score}% 100%)` }}
          >
            <div className="flex flex-col items-center justify-center rounded-full bg-clear" style={{ height: "6.75rem", width: "6.75rem" }}>
              <span className="font-serif text-3xl font-bold text-horizon">{PM_SCORE.score}</span>
              <span className="text-[11px] font-semibold text-success">{PM_SCORE.rating}</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-ink-70">{PM_SCORE.note}</p>
      </div>

      {/* Reminders */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">{PM_REMINDERS.title}</h3>
          <a href="#" className="text-xs font-semibold text-ridge hover:text-accent">Manage</a>
        </div>
        <ul className="mt-3 space-y-3">
          {PM_REMINDERS.items.map((r) => (
            <li key={r.label} className="flex items-center justify-between">
              <span className="text-sm text-ink-70">{r.label}</span>
              <span className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-success">On</span>
                <Toggle on={r.on} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Seasonal Checklist */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PM_SEASONAL.title}</h3>
        <ul className="mt-3 space-y-3">
          {PM_SEASONAL.items.map((s) => (
            <li key={s.season} className="flex gap-3">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${s.bg}`}>
                <Icon name={s.icon} className={`h-4 w-4 ${s.tone}`} />
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{s.season}</p>
                <p className="text-[11px] leading-snug text-ink-50">{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View Full Checklist <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{PM_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{PM_HELP.desc}</p>
        <a href={PM_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PM_HELP.button.label}
        </a>
        <a href={`tel:${PM_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {PM_HELP.phone}
        </a>
        <p className="mt-0.5 text-[11px] text-ink-50">{PM_HELP.hours}</p>
      </div>

      {/* Recommended Providers */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PM_PROVIDERS.title}</h3>
        <ul className="mt-3 space-y-3">
          {PM_PROVIDERS.items.map((p) => (
            <li key={p.name} className="flex items-center gap-3">
              <AvatarPlaceholder initials={p.initials} className="h-9 w-9 shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-horizon">{p.name}</p>
                <p className="text-[11px] text-ink-50">{p.role}</p>
              </div>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-horizon">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" /> {p.rating}
              </span>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View All Providers <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}
