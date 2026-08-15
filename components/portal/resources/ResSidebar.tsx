import { Phone, ArrowRight, ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { RES_FEATURED, RES_TOOLS, RES_QUICK_LINKS, RES_HELP } from "@/lib/portal-resources-data";

export function ResSidebar() {
  return (
    <aside className="space-y-5">
      {/* Featured Resource */}
      <div>
      <h3 className="mb-3 text-sm font-bold text-horizon">{RES_FEATURED.title}</h3>
      <div className="overflow-hidden rounded-2xl border border-mist bg-clear shadow-card">
        <div className="relative">
          <Photo src="" seed="res-featured" alt="" className="h-40 w-full" />
          <span className="absolute left-3 top-3 rounded-md bg-ridge px-2.5 py-1 text-[10px] font-semibold text-clear">{RES_FEATURED.badge}</span>
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg font-bold text-horizon">{RES_FEATURED.heading}</h3>
          <p className="mt-2 text-xs leading-relaxed text-ink-70">{RES_FEATURED.desc}</p>
          <a href={RES_FEATURED.button.href} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            {RES_FEATURED.button.label} <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <div className="mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-ridge" />
            <span className="h-1.5 w-1.5 rounded-full bg-mist" />
            <span className="h-1.5 w-1.5 rounded-full bg-mist" />
          </div>
        </div>
      </div>
      </div>

      {/* Helpful Tools */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{RES_TOOLS.title}</h3>
        <ul className="mt-3 space-y-1">
          {RES_TOOLS.items.map((t) => (
            <li key={t.label}>
              <a href={t.href} className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-mist-soft/60">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={t.icon} className="h-4 w-4 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{t.label}</p>
                  <p className="text-[11px] text-ink-50">{t.desc}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <a href={RES_TOOLS.link.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {RES_TOOLS.link.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Quick Links */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{RES_QUICK_LINKS.title}</h3>
        <ul className="mt-3 space-y-1">
          {RES_QUICK_LINKS.items.map((q) => (
            <li key={q.label}>
              <a href="#" className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-mist-soft/60">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={q.icon} className="h-4 w-4 text-ridge" />
                </span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-horizon">{q.label}</p>
                  <p className="text-[11px] text-ink-50">{q.desc}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-ink-50" />
              </a>
            </li>
          ))}
        </ul>
        <a href={RES_QUICK_LINKS.link.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {RES_QUICK_LINKS.link.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{RES_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{RES_HELP.desc}</p>
        <a href={`tel:${RES_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {RES_HELP.phone}
        </a>
        <p className="text-[11px] text-ink-50">{RES_HELP.hours}</p>
        <a href={RES_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {RES_HELP.button.label}
        </a>
      </div>
    </aside>
  );
}
