import { Headset, ArrowRight, FileText } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { MSG_DETAILS, MSG_ATTACHMENTS, MSG_QUICK_ACTIONS, MSG_OFFICE } from "@/lib/portal-messages-data";

export function MsgSidebar() {
  return (
    <aside className="space-y-5">
      {/* Conversation Details */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{MSG_DETAILS.title}</h3>
        <div className="mt-4 flex items-center gap-3">
          <AvatarPlaceholder initials={MSG_DETAILS.initials} className="h-11 w-11 rounded-full" />
          <div>
            <p className="text-sm font-bold text-horizon">{MSG_DETAILS.name}</p>
            <p className="text-[11px] text-ink-50">{MSG_DETAILS.role}</p>
          </div>
        </div>
        <p className="mt-4 text-xs font-bold text-horizon">{MSG_DETAILS.contactTitle}</p>
        <ul className="mt-2 space-y-2 text-sm">
          {MSG_DETAILS.contact.map((c) => (
            <li key={c.value} className="flex items-center gap-2.5 text-ink-70">
              <Icon name={c.icon} className="h-4 w-4 shrink-0 text-ridge" /> <span className="truncate">{c.value}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-2 border-t border-mist pt-4">
          {MSG_DETAILS.meta.map((m) => (
            <li key={m.label} className="flex items-center justify-between text-sm">
              <span className="text-ink-50">{m.label}</span>
              <span className="font-semibold text-horizon">{m.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Shared Attachments */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-horizon">{MSG_ATTACHMENTS.title}</h3>
          <a href="#" className="text-xs font-semibold text-ridge hover:text-accent">View All</a>
        </div>
        <ul className="mt-3 space-y-2">
          {MSG_ATTACHMENTS.items.map((a) => (
            <li key={a.name} className="flex items-center gap-3">
              <FileText className={`h-4 w-4 shrink-0 ${a.tone}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-horizon">{a.name}</p>
                <p className="text-[11px] text-ink-50">{a.meta}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{MSG_QUICK_ACTIONS.title}</h3>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {MSG_QUICK_ACTIONS.items.map((a) => (
            <button
              key={a.label}
              type="button"
              className={`flex flex-col items-center gap-1.5 rounded-lg border border-mist bg-clear px-3 py-3 text-center transition-colors hover:border-ridge ${a.full ? "col-span-2 flex-row justify-center" : ""}`}
            >
              <Icon name={a.icon} className="h-4 w-4 text-ridge" />
              <span className="text-[11px] font-semibold text-horizon">{a.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Office Contact */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold text-horizon">
          <Headset className="h-4 w-4 text-ridge" /> {MSG_OFFICE.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{MSG_OFFICE.desc}</p>
        <a href={`tel:${MSG_OFFICE.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Icon name="phone" className="h-4 w-4 text-ridge" /> {MSG_OFFICE.phone}
        </a>
        <p className="text-[11px] text-ink-50">{MSG_OFFICE.hours}</p>
        <a href={`tel:${MSG_OFFICE.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {MSG_OFFICE.button} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}
