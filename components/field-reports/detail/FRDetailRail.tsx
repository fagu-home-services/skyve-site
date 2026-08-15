import {
  Check,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  FileCheck,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { FR_DETAIL } from "@/lib/field-report-detail-data";

const d = FR_DETAIL;

const MAP_QUERY = encodeURIComponent(`${d.location.address1}, ${d.location.address2}`);
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`;
const MAP_LINK = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const DOC_ICON = { pdf: FileText, doc: FileCheck, cert: ShieldCheck } as const;

function Card({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <h2 className="font-serif text-base font-bold text-horizon">{title}</h2>
      {children}
    </section>
  );
}

export function FRDetailRail() {
  return (
    <div className="space-y-6">
      {/* Project summary */}
      <Card title="Project Summary">
        <dl className="mt-4 space-y-2.5 text-sm">
          {d.summary.map((s) => (
            <div key={s.label} className="flex items-center justify-between gap-3">
              <dt className="text-ink-50">{s.label}</dt>
              <dd
                className={`flex items-center gap-1 font-medium ${
                  s.good ? "text-success" : "text-horizon"
                }`}
              >
                {s.check && <Check className="h-3.5 w-3.5 text-success" />}
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </Card>

      {/* Client info */}
      <Card title="Client Information">
        <div className="mt-4 space-y-2.5 text-sm text-ink-70">
          <p className="flex items-center gap-2.5 font-semibold text-horizon">
            <User className="h-4 w-4 text-ridge" /> {d.client.name}
          </p>
          <a href={`mailto:${d.client.email}`} className="flex items-center gap-2.5 text-ridge hover:text-accent">
            <Mail className="h-4 w-4" /> {d.client.email}
          </a>
          <p className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 text-ridge" /> {d.client.phone}
          </p>
          <p className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-ridge" /> {d.client.city}
          </p>
        </div>
      </Card>

      {/* Location */}
      <Card title="Project Location">
        <div className="mt-4 overflow-hidden rounded-xl border border-mist">
          <iframe
            title="Project location"
            src={MAP_EMBED}
            className="h-40 w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-3 flex items-end justify-between gap-3">
          <p className="text-xs text-ink-70">
            {d.location.address1}
            <br />
            {d.location.address2}
          </p>
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-ridge hover:text-accent"
          >
            Open in Google Maps <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Card>

      {/* Quick actions */}
      <Card title="Quick Actions">
        <div className="mt-4 space-y-2">
          {d.quickActions.map((a) => (
            <button
              key={a.label}
              type="button"
              className="flex w-full items-center gap-2.5 rounded-lg border border-mist px-3.5 py-2.5 text-sm font-medium text-ridge transition-colors hover:border-ridge hover:bg-mist-soft"
            >
              <Icon name={a.icon} className="h-4 w-4" /> {a.label}
            </button>
          ))}
        </div>
      </Card>

      {/* Notes & documents */}
      <Card title="Notes & Documents" id="notes-documents">
        <ul className="mt-4 space-y-3">
          {d.documents.map((doc) => {
            const I = DOC_ICON[doc.kind as keyof typeof DOC_ICON] ?? FileText;
            return (
              <li key={doc.title} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mist-soft">
                  <I className="h-4 w-4 text-ridge" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-horizon">{doc.title}</p>
                  <p className="text-xs text-ink-50">{doc.sub}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button type="button" className="mt-5 w-full rounded-lg border border-ridge/30 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge">
          View All Documents
        </button>
      </Card>
    </div>
  );
}
