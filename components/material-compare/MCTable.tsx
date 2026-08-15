import { ChevronDown, RefreshCw, X, Star } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import {
  MC_PROJECT, MC_COLUMNS, MC_ROWS, MC_APPEARANCE, MC_BEST_FOR, MC_OVERALL,
} from "@/lib/material-compare-data";

function Stars({ n }: { n: number }) {
  return (
    <span className="flex justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i < n ? "fill-accent text-accent" : "text-mist"}`} />
      ))}
    </span>
  );
}

export function MCTable() {
  return (
    <div>
      {/* Project details */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold uppercase tracking-wide text-ridge">2. Project Details</h2>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end">
          <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MC_PROJECT.map((f) => (
              <label key={f.label} className="block">
                <span className="text-xs font-semibold text-horizon">{f.label}</span>
                <div className="relative mt-1.5">
                  <select defaultValue={f.value} className="w-full appearance-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge">
                    {f.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
                </div>
              </label>
            ))}
          </div>
          <button type="button" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-horizon-deep px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-horizon">
            <RefreshCw className="h-4 w-4" /> Update Comparison
          </button>
        </div>
      </div>

      {/* Comparison table */}
      <div className="mt-6 rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold uppercase tracking-wide text-ridge">3. Material Comparison</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-center text-xs">
            <thead>
              <tr>
                <th className="w-40 text-left" />
                {MC_COLUMNS.map((c) => (
                  <th key={c.name} className="p-2 align-top">
                    <div className="relative overflow-hidden rounded-lg">
                      <Photo src={c.image} alt={c.name} className="aspect-[16/9]" />
                      <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-clear/90 text-ink-50">
                        <X className="h-2.5 w-2.5" />
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] font-bold leading-tight text-horizon">{c.name}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {MC_ROWS.map((r) => (
                <tr key={r.label}>
                  <td className="py-2.5 pr-3 text-left text-[11px] font-semibold text-ink-70">{r.label}</td>
                  {r.values.map((v, i) => (
                    <td key={i} className="px-2 py-2.5 text-ink-70">{v}</td>
                  ))}
                </tr>
              ))}
              {/* Appearance */}
              <tr>
                <td className="py-2.5 pr-3 text-left text-[11px] font-semibold text-ink-70">{MC_APPEARANCE.label}</td>
                {MC_APPEARANCE.values.map((a, i) => (
                  <td key={i} className="px-2 py-2.5">
                    <Stars n={a.stars} />
                    <span className="mt-0.5 block text-[10px] text-ink-50">({a.label})</span>
                  </td>
                ))}
              </tr>
              {/* Best for */}
              <tr>
                <td className="py-2.5 pr-3 text-left text-[11px] font-semibold text-ink-70">{MC_BEST_FOR.label}</td>
                {MC_BEST_FOR.values.map((v, i) => (
                  <td key={i} className="px-2 py-2.5 text-[11px] leading-snug text-ink-70">{v}</td>
                ))}
              </tr>
              {/* Overall */}
              <tr className="bg-ridge/5">
                <td className="py-3 pr-3 text-left text-xs font-bold text-ridge">{MC_OVERALL.label}</td>
                {MC_OVERALL.values.map((o, i) => (
                  <td key={i} className="px-2 py-3">
                    <span className="block font-serif text-base font-bold text-ridge">{o.rating}</span>
                    <span className="block text-[10px] font-semibold text-success">{o.tag}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
