import { MapPin, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { PT_HEADER } from "@/lib/portal-project-timeline-data";

export function PTHeader({ button }: { button?: { label: string; href: string } }) {
  const p = PT_HEADER;
  const btn = button ?? p.button;
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr_auto] lg:items-center">
        {/* Image */}
        <Photo src={p.image} seed="portal-house" alt={p.title} className="h-44 w-full rounded-xl" />

        {/* Details */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ridge/12 px-3 py-1 text-[11px] font-semibold text-ridge">
            {p.status}
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon">{p.title}</h2>
          <p className="text-sm font-semibold text-ink-70">{p.subtitle}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-50">
            <MapPin className="h-4 w-4 text-ridge" /> {p.address}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {p.specs.map((s) => (
              <div key={s.label}>
                <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-ink-50">
                  <Icon name={s.icon} className="h-3 w-3" /> {s.label}
                </p>
                {s.label === "Project Manager" ? (
                  <p className="mt-0.5 flex items-center gap-2 text-sm font-semibold text-horizon">
                    <AvatarPlaceholder initials="MA" className="h-5 w-5 rounded-full" /> {s.value}
                  </p>
                ) : (
                  <p className={`mt-0.5 text-sm font-semibold ${s.good ? "text-success" : "text-horizon"}`}>{s.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress donut */}
        <div className="flex flex-col items-center border-t border-mist pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <p className="text-sm font-bold text-horizon">Project Progress</p>
          <div
            className="relative mt-3 flex h-28 w-28 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(var(--color-ridge) 0% ${p.progress}%, var(--color-mist) ${p.progress}% 100%)` }}
          >
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-clear">
              <span className="font-serif text-2xl font-bold text-horizon">{p.progress}%</span>
              <span className="text-[10px] font-semibold text-ridge">{p.progressLabel}</span>
            </div>
          </div>
          <a href={btn.href} className="mt-3 inline-flex items-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            {btn.label} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
