import { ArrowRight, ChevronRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { SEL_SUMMARY, SEL_PALETTE, SEL_RESOURCES } from "@/lib/portal-selections-data";

export function SelSidebar() {
  return (
    <aside className="space-y-5">
      {/* Selections Summary */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{SEL_SUMMARY.title}</h3>
        <ul className="mt-4 space-y-3">
          {SEL_SUMMARY.rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2.5 text-ink-70">
                <Icon name={r.icon} className="h-4 w-4 text-ridge" /> {r.label}
              </span>
              <span className="font-semibold text-horizon">{r.value}</span>
            </li>
          ))}
        </ul>
        <a href={SEL_SUMMARY.button.href} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {SEL_SUMMARY.button.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Color Palette */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{SEL_PALETTE.title}</h3>
        <p className="text-[11px] text-ink-50">{SEL_PALETTE.subtitle}</p>
        <ul className="mt-4 space-y-3">
          {SEL_PALETTE.items.map((c) => (
            <li key={c.label} className="flex items-center gap-3">
              <span
                className={`h-10 w-10 shrink-0 rounded-lg border ${c.empty ? "border-dashed border-mist" : "border-mist"}`}
                style={{ backgroundColor: c.swatch }}
              />
              <div>
                <p className="text-sm font-bold text-horizon">{c.label}</p>
                <p className="text-[11px] text-ink-50">{c.value}</p>
              </div>
            </li>
          ))}
        </ul>
        <a href={SEL_PALETTE.button.href} className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ridge bg-clear px-4 py-2 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
          {SEL_PALETTE.button.label} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Helpful Resources */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h3 className="text-sm font-bold text-horizon">{SEL_RESOURCES.title}</h3>
        <ul className="mt-3 divide-y divide-mist">
          {SEL_RESOURCES.items.map((r) => (
            <li key={r.label}>
              <a href={r.href} className="flex items-center justify-between gap-2 py-2.5 text-sm text-ink-70 hover:text-ridge">
                <span className="flex items-center gap-2.5">
                  <Icon name="document" className="h-4 w-4 text-ridge" /> {r.label}
                </span>
                <ChevronRight className="h-4 w-4 text-ink-50" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
