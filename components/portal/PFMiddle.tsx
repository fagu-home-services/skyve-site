import { Check, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import {
  PORTAL_TIMELINE,
  PORTAL_UPDATES,
  PORTAL_HOME_GLANCE,
  PORTAL_APPOINTMENT,
} from "@/lib/portal-data";

function statusColor(status: string) {
  if (status === "Completed") return "text-success";
  if (status === "In Progress") return "text-ridge";
  return "text-ink-50";
}

export function PFMiddle() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {/* Project Timeline */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">Project Timeline</h3>
        <ol className="mt-4 space-y-4">
          {PORTAL_TIMELINE.map((t, i) => (
            <li key={t.n} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    t.state === "done"
                      ? "bg-success text-clear"
                      : t.state === "active"
                        ? "bg-ridge text-clear"
                        : "border border-mist bg-clear text-ink-50"
                  }`}
                >
                  {t.state === "done" ? <Check className="h-4 w-4" /> : t.n}
                </span>
                {i < PORTAL_TIMELINE.length - 1 && <span className="mt-1 w-px flex-1 bg-mist" />}
              </div>
              <div className={`flex-1 pb-1 ${t.state === "active" ? "rounded-lg -mx-2 -my-1 bg-sky-soft/50 px-2 py-1" : ""}`}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-horizon">{t.title}</p>
                  <span className={`text-[11px] font-semibold ${statusColor(t.status)}`}>{t.status}</span>
                </div>
                <p className="mt-0.5 text-[11px] text-ink-50">{t.date}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Recent Updates */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">Recent Updates</h3>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View Full Updates <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        <div className="mt-4 space-y-3">
          {PORTAL_UPDATES.map((u) => (
            <div key={u.text} className="flex gap-3">
              <Photo src={u.thumb} seed={u.text} alt="" className="h-12 w-16 shrink-0 rounded-lg" />
              <div>
                <p className="text-xs font-semibold text-horizon">{u.text}</p>
                <p className="mt-0.5 text-[11px] text-ink-50">{u.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="mt-4 w-full rounded-lg border border-mist py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
          See All Photos &amp; Updates
        </button>
      </div>

      {/* Home glance + appointment */}
      <div className="space-y-4">
        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <h3 className="text-sm font-bold text-horizon">{PORTAL_HOME_GLANCE.title}</h3>
          <div className="mt-4 space-y-3">
            {PORTAL_HOME_GLANCE.items.map((it) => (
              <div key={it.label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={it.icon} className="h-4 w-4 text-ridge" />
                </span>
                <span className="text-base font-bold text-horizon">{it.value}</span>
                <span className="text-sm text-ink-70">{it.label}</span>
              </div>
            ))}
          </div>
          <a href="#" className="mt-4 inline-block text-xs font-semibold text-ridge hover:text-accent">View Full Details →</a>
        </div>

        <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
          <h3 className="text-sm font-bold text-horizon">{PORTAL_APPOINTMENT.title}</h3>
          <div className="mt-3 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
              <Icon name="calendar" className="h-4 w-4 text-ridge" />
            </span>
            <div>
              <p className="text-sm font-bold text-horizon">{PORTAL_APPOINTMENT.name}</p>
              <p className="text-[11px] text-ink-50">{PORTAL_APPOINTMENT.withWho}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3 rounded-lg bg-mist-soft/50 p-3">
            <div className="flex flex-col items-center rounded-lg bg-clear px-3 py-1.5 shadow-card">
              <span className="text-[9px] font-bold uppercase text-accent">{PORTAL_APPOINTMENT.month}</span>
              <span className="font-serif text-lg font-bold text-horizon">{PORTAL_APPOINTMENT.day}</span>
            </div>
            <div>
              <p className="text-sm font-bold text-horizon">{PORTAL_APPOINTMENT.weekday}</p>
              <p className="text-[11px] text-ink-50">{PORTAL_APPOINTMENT.time}</p>
            </div>
          </div>
          <button type="button" className="mt-3 w-full rounded-lg border border-mist py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
}
