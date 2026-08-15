import { ArrowRight, Clock, Users } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { FR_DETAIL } from "@/lib/field-report-detail-data";
import { conicStops } from "@/lib/conic-stops";

const d = FR_DETAIL;

function Card({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl border border-mist bg-clear p-6 shadow-card">
      {children}
    </section>
  );
}

function Heading({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-serif text-lg font-bold text-horizon">{title}</h2>
      {action && (
        <button type="button" className="inline-flex items-center gap-1 rounded-lg border border-ridge/30 px-3 py-1.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
          {action}
        </button>
      )}
    </div>
  );
}

function CostDonut() {
  const gradient = `conic-gradient(${conicStops(d.cost.segments, { normalizeTo100: false }).join(", ")})`;

  return (
    <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative h-40 w-40 shrink-0">
        <div className="h-full w-full rounded-full" style={{ background: gradient }} />
        <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full bg-clear text-center shadow-inner">
          <span className="text-[10px] text-ink-50">Total</span>
          <span className="font-serif text-lg font-bold text-horizon">{d.cost.total}</span>
        </div>
      </div>
      <ul className="flex-1 space-y-2">
        {d.cost.segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
            <span className="flex-1 text-ink-70">{s.label}</span>
            <span className="font-medium text-horizon">{s.amount}</span>
            <span className="w-10 text-right text-xs text-ink-50">({s.pct}%)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FRDetailOverview() {
  return (
    <div className="space-y-6">
      {/* Drone Photos */}
      <Card id="drone-photos">
        <Heading title="Drone Photos" action="View All Photos" />
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {d.drone.map((p, i) => (
            <div key={p.label} className={`relative overflow-hidden rounded-xl shadow-card ${i === 0 ? "sm:col-span-1 sm:row-span-2" : ""}`}>
              <Photo src={p.image} alt={p.label} className={i === 0 ? "h-full min-h-[220px]" : "aspect-[16/10]"} />
              <span className="absolute bottom-2 left-2 rounded-md bg-horizon-deep/80 px-2 py-0.5 text-[11px] font-medium text-clear">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Timeline */}
      <Card id="timeline">
        <Heading title="Project Timeline" />
        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {d.timeline.map((t) => (
            <div key={t.n} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ridge text-[11px] font-bold text-clear">
                  {t.n}
                </span>
                <span className="mt-1 w-px flex-1 bg-mist" />
              </div>
              <div className="flex flex-1 gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-horizon">{t.title}</h3>
                  <p className="text-[11px] font-medium text-ridge">{t.dates}</p>
                  <p className="mt-1 text-xs leading-snug text-ink-50">{t.desc}</p>
                </div>
                <Photo src={t.image} alt={t.title} className="h-16 w-20 shrink-0 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Cost + Materials */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card id="cost-breakdown">
          <Heading title="Cost Breakdown" />
          <CostDonut />
          <button type="button" className="mt-5 w-full rounded-lg border border-ridge/30 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge">
            View Detailed Estimate
          </button>
        </Card>

        <Card id="materials">
          <Heading title="Materials Used" />
          <ul className="mt-5 space-y-3">
            {d.materialsUsed.map((m) => (
              <li key={m.name} className="flex items-center gap-3">
                <span className="h-9 w-9 shrink-0 rounded-lg bg-mist-soft" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-horizon">{m.name}</p>
                  <p className="text-xs text-ink-50">{m.spec}</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-ridge">{m.qty}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="mt-5 w-full rounded-lg border border-ridge/30 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge">
            View All Materials
          </button>
        </Card>
      </div>

      {/* Crew */}
      <Card id="crew">
        <Heading title="Crew" />
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold text-horizon">
              <Users className="h-4 w-4 text-ridge" /> {d.crewInfo.name}
            </p>
            <p className="text-xs text-ink-50">Team Lead: {d.crewInfo.lead}</p>
          </div>
          <div>
            <p className="font-serif text-xl font-bold text-horizon">{d.crewInfo.members}</p>
            <p className="text-xs text-ink-50">Members</p>
          </div>
          <div>
            <p className="flex items-center gap-1 font-serif text-xl font-bold text-horizon">
              <Clock className="h-4 w-4 text-ridge" /> {d.crewInfo.days}
            </p>
            <p className="text-xs text-ink-50">Days on Project</p>
          </div>
          <div>
            <p className="font-serif text-xl font-bold text-horizon">{d.crewInfo.hours}</p>
            <p className="text-xs text-ink-50">Hours Worked</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {d.crewInfo.team.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <AvatarPlaceholder initials={m.initials} className="h-14 w-14 rounded-full" />
              <p className="mt-2 text-xs font-bold text-horizon">{m.name}</p>
              <p className="text-[10px] text-ink-50">{m.role}</p>
            </div>
          ))}
        </div>

        <button type="button" className="mt-6 w-full rounded-lg border border-ridge/30 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge">
          View Team Details <ArrowRight className="ml-1 inline h-4 w-4" />
        </button>
      </Card>
    </div>
  );
}
