import { MapPin } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { PORTAL_PROJECT, PORTAL_QUICK_ACTIONS } from "@/lib/portal-data";

export function PFHero() {
  const p = PORTAL_PROJECT;
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="grid gap-6 lg:grid-cols-[300px_1fr_220px]">
        {/* Image */}
        <Photo src={p.image} seed="portal-house" alt={p.name} className="h-52 w-full rounded-xl lg:h-full" />

        {/* Details */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-3 py-1 text-[11px] font-semibold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> {p.status}
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-horizon">{p.name}</h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-70">
            <MapPin className="h-4 w-4 text-ridge" /> {p.address}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Project Manager</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-horizon">
                <AvatarPlaceholder initials="RM" className="h-5 w-5 rounded-full" /> {p.manager}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Estimated Completion</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-horizon">
                <Icon name="calendar" className="h-4 w-4 text-ridge" /> {p.completion}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Project Status</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> {p.projectStatus}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink-70">Overall Progress</span>
              <span className="font-bold text-horizon">{p.progress}%</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-mist">
              <div className="h-full rounded-full bg-gradient-to-r from-ridge to-sky" style={{ width: `${p.progress}%` }} />
            </div>
            <p className="mt-2 text-xs text-ink-50">{p.note}</p>
          </div>
        </div>

        {/* Quick actions */}
        <div className="border-t border-mist pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="text-sm font-bold text-horizon">Quick Actions</p>
          <div className="mt-3 space-y-2.5">
            {PORTAL_QUICK_ACTIONS.map((a) => (
              <button
                key={a.label}
                type="button"
                className="flex w-full items-center gap-2.5 rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-left text-sm font-medium text-horizon transition-colors hover:border-ridge hover:text-ridge"
              >
                <Icon name={a.icon} className="h-4 w-4 text-ridge" /> {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
