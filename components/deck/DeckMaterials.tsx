import { LayoutGrid } from "lucide-react";
import { DECK_MATERIALS } from "@/lib/deck-data";

type Material = { name: string; desc: string; hex: string };

export function DeckMaterials({ materials = DECK_MATERIALS }: { materials?: Material[] }) {
  const lgCols = materials.length >= 6 ? "lg:grid-cols-7" : "lg:grid-cols-6";
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Premium Decking Materials
        </h2>

        <div className={`mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 ${lgCols}`}>
          {materials.map((m) => (
            <div key={m.name} className="rounded-xl border border-mist bg-clear p-3 text-center shadow-card">
              <div
                className="aspect-[16/9] rounded-lg border border-mist"
                style={{ backgroundColor: m.hex }}
              />
              <p className="mt-2.5 text-sm font-bold text-horizon">{m.name}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{m.desc}</p>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-mist p-3 text-center">
            <LayoutGrid className="h-6 w-6 text-ridge" />
            <p className="mt-1.5 text-[11px] font-semibold text-ridge">View More Materials</p>
          </div>
        </div>
      </div>
    </section>
  );
}
