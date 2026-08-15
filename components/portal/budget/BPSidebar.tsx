import { Phone, ArrowRight, CircleCheck, FileText } from "lucide-react";
import { BP_SUMMARY, BP_FINANCING, BP_DOCS, BP_HELP } from "@/lib/portal-budget-data";

export function BPSidebar() {
  return (
    <aside className="space-y-5">
      {/* Payment Summary */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{BP_SUMMARY.title}</h3>
        <ul className="mt-3 space-y-2.5">
          {BP_SUMMARY.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-sm">
              <span className="text-ink-70">{r.label}</span>
              <span className="font-bold text-horizon">{r.value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-xl bg-success/8 p-4">
          <p className="flex items-center gap-2 text-sm font-bold text-success">
            <CircleCheck className="h-4 w-4" /> {BP_SUMMARY.autopay.title}
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-ink-70">{BP_SUMMARY.autopay.desc}</p>
          <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            {BP_SUMMARY.autopay.link} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Financing Information */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{BP_FINANCING.title}</h3>
        <ul className="mt-3 space-y-2.5">
          {BP_FINANCING.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-sm">
              <span className="text-ink-50">{r.label}</span>
              <span className="font-semibold text-horizon">{r.value}</span>
            </li>
          ))}
        </ul>
        <a href={BP_FINANCING.button.href} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {BP_FINANCING.button.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Download & Documents */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{BP_DOCS.title}</h3>
        <ul className="mt-3 space-y-1">
          {BP_DOCS.items.map((d) => (
            <li key={d.name}>
              <a href="#" className="flex items-center justify-between rounded-lg px-2 py-2 text-sm transition-colors hover:bg-mist-soft/60">
                <span className="flex items-center gap-2.5 text-ink-70">
                  <FileText className="h-4 w-4 text-danger" /> {d.name}
                </span>
                <span className="text-[10px] font-bold text-ink-50">{d.type}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {BP_DOCS.link} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Need help */}
      <div className="rounded-2xl border border-mist bg-mist-soft/50 p-5">
        <h3 className="text-sm font-bold text-horizon">{BP_HELP.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ink-70">{BP_HELP.desc}</p>
        <a href={BP_HELP.button.href} className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {BP_HELP.button.label}
        </a>
        <a href={`tel:${BP_HELP.phone.replace(/[^\d]/g, "")}`} className="mt-3 flex items-center gap-2 text-sm font-semibold text-horizon">
          <Phone className="h-4 w-4 text-ridge" /> {BP_HELP.phone}
        </a>
        <p className="mt-0.5 text-[11px] text-ink-50">{BP_HELP.hours}</p>
      </div>
    </aside>
  );
}
