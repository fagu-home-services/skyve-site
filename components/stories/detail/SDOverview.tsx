import {
  Check, Download, Users, FileText, FileCheck, ShieldCheck, Share2,
  Link2, Mail, MessageCircle, Send,
} from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { Icon } from "@/components/shared/Icon";
import { STORY_DETAIL } from "@/lib/story-detail-data";
import { conicStops } from "@/lib/conic-stops";

const d = STORY_DETAIL;

function Card({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 rounded-2xl border border-mist bg-clear p-6 shadow-card ${className}`}>
      {children}
    </section>
  );
}

function Heading({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
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
  const stops = conicStops(d.cost.segments, { normalizeTo100: false });
  return (
    <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative h-36 w-36 shrink-0">
        <div className="h-full w-full rounded-full" style={{ background: `conic-gradient(${stops.join(", ")})` }} />
        <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full bg-clear text-center">
          <span className="text-[10px] text-ink-50">Total</span>
          <span className="font-serif text-base font-bold text-horizon">{d.cost.total}</span>
        </div>
      </div>
      <ul className="flex-1 space-y-2">
        {d.cost.segments.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-xs">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
            <span className="flex-1 text-ink-70">{s.label}</span>
            <span className="font-medium text-horizon">{s.amount}</span>
            <span className="w-8 text-right text-ink-50">({s.pct}%)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const DOC_ICON = { pdf: FileText, doc: FileCheck, cert: ShieldCheck } as const;
const SOCIAL = [Share2, Link2, Mail, MessageCircle, Send];

export function SDOverview() {
  return (
    <div className="space-y-6">
      {/* The Story */}
      <Card id="overview">
        <h2 className="font-serif text-lg font-bold text-horizon">The Story</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-70">
          {d.story.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {d.story.points.map((pt) => (
            <div key={pt.title}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft">
                <Icon name={pt.icon} className="h-5 w-5 text-ridge" />
              </span>
              <h3 className="mt-2.5 text-sm font-bold text-horizon">{pt.title}</h3>
              <p className="mt-1 text-xs leading-snug text-ink-50">{pt.desc}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Drone Photos */}
      <Card id="drone-photos">
        <Heading title="Drone Photos" action="View All Photos" />
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {d.drone.map((src, i) => (
            <Photo key={i} src={src} alt={`Drone ${i + 1}`} className="aspect-[16/11] rounded-xl shadow-card" />
          ))}
        </div>
      </Card>

      {/* Timeline (horizontal) */}
      <Card id="timeline">
        <Heading title="Project Timeline" />
        <div className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
          {d.timeline.map((t, i) => (
            <div key={t.title} className="relative flex flex-col items-center px-1 text-center">
              {i < d.timeline.length - 1 && (
                <span className="absolute left-1/2 top-3 hidden h-px w-full bg-ridge/30 lg:block" />
              )}
              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ridge text-clear">
                <Check className="h-3.5 w-3.5" />
              </span>
              <p className="mt-2 text-[11px] font-bold leading-tight text-horizon">{t.title}</p>
              <p className="mt-0.5 text-[10px] text-ink-50">{t.date}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Cost + Materials + Crew */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card id="cost-breakdown">
          <h2 className="font-serif text-base font-bold text-horizon">Cost Breakdown</h2>
          <CostDonut />
          <button type="button" className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-ridge/30 py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
            <Download className="h-3.5 w-3.5" /> Download Detailed Estimate
          </button>
        </Card>

        <Card id="materials">
          <h2 className="font-serif text-base font-bold text-horizon">Materials Used</h2>
          <ul className="mt-4 space-y-3">
            {d.materialsUsed.map((m) => (
              <li key={m.name} className="flex items-center gap-3">
                <span className="h-8 w-8 shrink-0 rounded-lg bg-mist-soft" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-horizon">{m.name}</p>
                  <p className="text-[11px] text-ink-50">{m.spec}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-ridge">{m.qty}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="mt-4 w-full rounded-lg border border-ridge/30 py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
            View All Materials
          </button>
        </Card>

        <Card id="crew">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="flex items-center gap-1.5 font-serif text-base font-bold text-horizon">
                <Users className="h-4 w-4 text-ridge" /> {d.crew.name}
              </h2>
              <p className="text-[11px] text-ink-50">Lead: {d.crew.lead}</p>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-ink-70">
              <Users className="h-4 w-4 text-ridge" /> {d.crew.members}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {d.crew.team.map((m) => (
              <div key={m.name} className="flex flex-col items-center text-center">
                <AvatarPlaceholder initials={m.initials} className="h-11 w-11 rounded-full" />
                <p className="mt-1.5 text-[11px] font-bold text-horizon">{m.name}</p>
                <p className="text-[9px] text-ink-50">{m.role}</p>
              </div>
            ))}
          </div>
          <button type="button" className="mt-4 w-full rounded-lg border border-ridge/30 py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
            View Crew Details
          </button>
        </Card>
      </div>

      {/* Before/After + Documents + Share */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <h2 className="font-serif text-base font-bold text-horizon">Before &amp; After</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[d.beforeAfter.before, d.beforeAfter.after].map((b) => (
              <div key={b.label} className="relative overflow-hidden rounded-xl shadow-card">
                <Photo src={b.image} alt={b.label} className="aspect-[4/3]" />
                <span className="absolute bottom-2 left-2 rounded-md bg-horizon-deep/85 px-2 py-0.5 text-[10px] font-semibold text-clear">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card id="documents">
          <h2 className="font-serif text-base font-bold text-horizon">Documents</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {d.documents.map((doc) => {
              const I = DOC_ICON[doc.kind as keyof typeof DOC_ICON] ?? FileText;
              return (
                <li key={doc.title} className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mist-soft">
                    <I className="h-4 w-4 text-ridge" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-horizon">{doc.title}</p>
                    <p className="truncate text-[11px] text-ink-50">{doc.sub}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <button type="button" className="mt-4 w-full rounded-lg border border-ridge/30 py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
            View All Documents
          </button>
        </Card>

        <Card>
          <h2 className="font-serif text-base font-bold text-horizon">Share This Story</h2>
          <p className="mt-2 text-xs leading-relaxed text-ink-50">
            Help others by sharing your experience with Skyve Roofing &amp; Exteriors.
          </p>
          <div className="mt-4 flex gap-2">
            {SOCIAL.map((I, i) => (
              <button key={i} type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-mist-soft text-ridge transition-colors hover:bg-ridge hover:text-clear" aria-label="Share">
                <I className="h-4 w-4" />
              </button>
            ))}
          </div>
          <button type="button" className="mt-4 w-full rounded-lg border border-ridge/30 py-2.5 text-xs font-semibold text-ridge transition-colors hover:border-ridge">
            Share Story
          </button>
        </Card>
      </div>
    </div>
  );
}
