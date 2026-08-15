import { Phone, ArrowRight, Calendar } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PT_NEXT, PT_SUMMARY, PT_WEATHER, PT_HELP } from "@/lib/portal-project-timeline-data";

export function PTSidebar() {
  return (
    <aside className="space-y-5">
      {/* Upcoming Next */}
      <div className="rounded-2xl border border-mist bg-clear p-5 text-center shadow-card">
        <h3 className="text-left text-sm font-bold text-horizon">{PT_NEXT.title}</h3>
        <span className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-soft">
          <Icon name={PT_NEXT.icon} className="h-6 w-6 text-ridge" />
        </span>
        <p className="mt-3 text-sm font-bold text-horizon">{PT_NEXT.name}</p>
        <p className="mt-1 text-xs text-ink-70">{PT_NEXT.desc}</p>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-50">
          <Calendar className="h-3.5 w-3.5 text-ridge" /> {PT_NEXT.date}
        </p>
        <a href={PT_NEXT.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PT_NEXT.button.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Project Summary */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PT_SUMMARY.title}</h3>
        <ul className="mt-3 space-y-2.5">
          {PT_SUMMARY.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-sm">
              <span className="text-ink-50">{r.label}</span>
              <span className="font-semibold text-horizon">{r.value}</span>
            </li>
          ))}
        </ul>
        <a href={PT_SUMMARY.button.href} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PT_SUMMARY.button.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Weather Forecast */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PT_WEATHER.title}</h3>
        <p className="text-[11px] text-ink-50">{PT_WEATHER.location}</p>
        <div className="mt-3 grid grid-cols-5 gap-1 text-center">
          {PT_WEATHER.days.map((d) => (
            <div key={d.date}>
              <p className="text-[10px] font-semibold text-horizon">{d.day}</p>
              <p className="text-[9px] text-ink-50">{d.date}</p>
              <Icon name={d.icon} className={`mx-auto my-1.5 h-5 w-5 ${d.icon === "sun" ? "text-warning" : "text-sky"}`} />
              <p className="text-[11px] font-bold text-horizon">{d.temp}</p>
              <p className="text-[9px] text-ridge">{d.rain}</p>
            </div>
          ))}
        </div>
        <button type="button" className="mt-4 w-full rounded-lg border border-mist py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
          {PT_WEATHER.button.label}
        </button>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{PT_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{PT_HELP.desc}</p>
        <a href={PT_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PT_HELP.button.label}
        </a>
        <a href={`tel:${PT_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {PT_HELP.phone}
        </a>
        <p className="mt-0.5 text-[11px] text-ink-50">{PT_HELP.hours}</p>
      </div>
    </aside>
  );
}
