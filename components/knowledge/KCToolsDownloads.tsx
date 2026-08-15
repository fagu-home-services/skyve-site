import { ArrowRight, Download, FileText } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { KC_TOOLS, KC_DOWNLOADS, KC_AUTHORS } from "@/lib/knowledge-data";

function SectionHead({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">{title}</h2>
      {action && (
        <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {action} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}

export function KCToolsDownloads() {
  return (
    <section className="bg-clear py-12 lg:py-14">
      <div className="container-skyve space-y-12">
        {/* Tools */}
        <div>
          <SectionHead title="Interactive Tools" />
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {KC_TOOLS.map((t) => (
              <a key={t.title} href={"href" in t ? (t as { href: string }).href : "#"} className="rounded-xl border border-mist bg-clear p-4 shadow-card transition-colors hover:border-ridge">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={t.icon} className="h-5 w-5 text-ridge" />
                </span>
                <h3 className="mt-3 text-xs font-bold text-horizon">{t.title}</h3>
                <p className="mt-1 text-[10px] leading-snug text-ink-50">{t.desc}</p>
                <p className="mt-2 text-[10px] font-semibold text-ridge">{t.meta}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div>
          <SectionHead title="Download Center" action="View All Downloads" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {KC_DOWNLOADS.map((d) => (
              <a key={d.title} href="#" className="flex items-start gap-3 rounded-xl border border-mist bg-clear p-4 shadow-card transition-colors hover:border-ridge">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-mist-soft">
                  <FileText className="h-5 w-5 text-ridge" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-horizon">{d.title}</h3>
                  <p className="mt-0.5 text-xs leading-snug text-ink-50">{d.desc}</p>
                </div>
                <Download className="h-4 w-4 shrink-0 text-ink-50" />
              </a>
            ))}
          </div>
        </div>

        {/* Authors */}
        <div>
          <SectionHead title="Our Authors & Experts" action="View All Authors" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {KC_AUTHORS.map((a) => (
              <div key={a.name} className="flex items-start gap-3 rounded-xl border border-mist bg-clear p-4 shadow-card">
                <AvatarPlaceholder initials={a.initials} className="h-14 w-14 shrink-0 rounded-full" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-horizon">{a.name}</p>
                  <p className="text-[11px] font-medium text-ridge">{a.role}</p>
                  <p className="mt-1 text-[11px] leading-snug text-ink-50">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
