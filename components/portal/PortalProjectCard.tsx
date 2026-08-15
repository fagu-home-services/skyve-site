import { MapPin } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { PD_PROJECT } from "@/lib/portal-data";

export function PortalProjectCard({
  action,
  aside,
  completionLabel = "Estimated Completion",
}: {
  action?: { label: string; href: string };
  aside?: React.ReactNode;
  completionLabel?: string;
}) {
  const p = PD_PROJECT;
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="grid items-center gap-6 lg:grid-cols-[220px_1fr_auto]">
        <Photo src={p.image} seed="portal-house" alt={p.name} className="h-40 w-full rounded-xl" />

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-3 py-1 text-[11px] font-semibold text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> {p.status}
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon">{p.name}</h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-70">
            <MapPin className="h-4 w-4 text-ridge" /> {p.address}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">Project Manager</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-horizon">
                <AvatarPlaceholder initials="RM" className="h-5 w-5 rounded-full" /> {p.manager}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-ink-50">{completionLabel}</p>
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
        </div>

        {action && (
          <a
            href={action.href}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-ridge px-5 py-2.5 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear"
          >
            {action.label}
          </a>
        )}
        {aside}
      </div>
    </div>
  );
}
