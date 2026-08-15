import { MapPin } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { BP_HEADER } from "@/lib/portal-budget-data";

export function BPHeader() {
  const p = BP_HEADER;
  return (
    <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <div className="grid gap-6 lg:grid-cols-[240px_1fr] lg:items-center">
        <Photo src={p.image} seed="portal-house" alt={p.title} className="h-44 w-full rounded-xl" />

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ridge/12 px-3 py-1 text-[11px] font-semibold text-ridge">
            {p.status}
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-horizon">{p.title}</h2>
          <p className="text-sm font-semibold text-ink-70">{p.subtitle}</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-50">
            <MapPin className="h-4 w-4 text-ridge" /> {p.address}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
            {p.specs.map((s) => (
              <div key={s.label}>
                <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-ink-50">
                  <Icon name={s.icon} className="h-3 w-3" /> {s.label}
                </p>
                {s.avatar ? (
                  <p className="mt-0.5 flex items-center gap-2 text-sm font-semibold text-horizon">
                    <AvatarPlaceholder initials={s.avatar} className="h-5 w-5 rounded-full" /> {s.value}
                  </p>
                ) : (
                  <p className={`mt-0.5 text-sm font-semibold ${s.tone ?? "text-horizon"}`}>{s.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
