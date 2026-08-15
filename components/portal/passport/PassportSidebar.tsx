import { ArrowRight, ChevronRight, CircleCheck, Clock, Lock } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { PP_SCORE, PP_QUICK_ACTIONS, PP_SUMMARY, PP_CHECKLIST, PP_SHARE } from "@/lib/portal-passport-data";

export function PassportSidebar() {
  return (
    <aside className="space-y-5">
      {/* Verascor Score */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-center text-sm font-bold text-horizon">{PP_SCORE.title}</h3>
        <div className="mt-4 flex justify-center">
          <div
            className="relative flex h-32 w-32 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(var(--color-success) 0% ${PP_SCORE.score}%, var(--color-mist) ${PP_SCORE.score}% 100%)` }}
          >
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-2xl font-bold text-horizon">{PP_SCORE.score}</span>
              <span className="text-[11px] font-semibold text-success">{PP_SCORE.rating}</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-ink-70">{PP_SCORE.note}</p>
        <a href={PP_SCORE.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PP_SCORE.button.label}
        </a>
      </div>

      {/* Quick actions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PP_QUICK_ACTIONS.title}</h3>
        <div className="mt-3 space-y-1">
          {PP_QUICK_ACTIONS.items.map((a) => (
            <button key={a.label} type="button" className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-left text-sm font-medium text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge">
              <span className="flex items-center gap-2.5">
                <Icon name={a.icon} className="h-4 w-4 text-ridge" /> {a.label}
              </span>
              <ChevronRight className="h-4 w-4 text-ink-50" />
            </button>
          ))}
        </div>
      </div>

      {/* Property Summary */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PP_SUMMARY.title}</h3>
        <ul className="mt-3 space-y-2.5">
          {PP_SUMMARY.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-sm">
              <span className="text-ink-50">{r.label}</span>
              <span className="font-semibold text-horizon">{r.value}</span>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View Full Details <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Document Checklist */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{PP_CHECKLIST.title}</h3>
        <ul className="mt-3 space-y-2.5">
          {PP_CHECKLIST.items.map((d) => {
            const uploaded = d.status === "Uploaded";
            return (
              <li key={d.label} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-ink-70">
                  {uploaded ? <CircleCheck className="h-4 w-4 text-success" /> : <Clock className="h-4 w-4 text-warning" />}
                  {d.label}
                </span>
                <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${uploaded ? "bg-success/12 text-success" : "bg-warning/15 text-warning"}`}>
                  {d.status}
                </span>
              </li>
            );
          })}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          View All Documents <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Share */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{PP_SHARE.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{PP_SHARE.desc}</p>
        <a href={PP_SHARE.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {PP_SHARE.button.label}
        </a>
        <p className="mt-3 flex items-center gap-1.5 text-[11px] text-ink-50">
          <Lock className="h-3.5 w-3.5 text-ridge" /> {PP_SHARE.note}
        </p>
      </div>
    </aside>
  );
}
