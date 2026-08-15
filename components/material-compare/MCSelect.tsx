import { RotateCcw } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { MC_MATERIALS } from "@/lib/material-compare-data";

export function MCSelect() {
  return (
    <aside className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
      <h2 className="text-sm font-bold uppercase tracking-wide text-ridge">1. Select Materials to Compare</h2>
      <p className="mt-1 text-[11px] text-ink-50">Choose 2 to 4 roofing materials</p>

      <ul className="mt-4 space-y-2">
        {MC_MATERIALS.map((m) => (
          <li key={m.name}>
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-mist p-2 transition-colors hover:border-ridge/50">
              <input type="checkbox" defaultChecked={m.on} className="h-4 w-4 shrink-0 rounded border-mist accent-ridge" />
              <Photo src={m.image} alt={m.name} className="h-9 w-12 shrink-0 rounded" />
              <span className="min-w-0">
                <span className={`block text-xs font-bold ${m.on ? "text-ridge" : "text-horizon"}`}>{m.name}</span>
                <span className="block text-[10px] text-ink-50">{m.tag}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>

      <button type="button" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-50 hover:text-ridge">
        <RotateCcw className="h-3.5 w-3.5" /> Clear Selection
      </button>
    </aside>
  );
}
