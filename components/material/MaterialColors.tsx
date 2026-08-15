import { ExternalLink } from "lucide-react";
import type { MaterialPage } from "@/lib/material-pages";

export function MaterialColors({ data }: { data: MaterialPage }) {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          {data.colorsHeading}
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-10">
          {data.colors.map((c) => (
            <div key={c.name} className="text-center">
              <div
                className="aspect-square rounded-xl border border-mist shadow-card"
                style={{ backgroundColor: c.hex }}
              />
              <p className="mt-2 text-[11px] font-medium text-horizon">{c.name}</p>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-mist p-2 text-center">
            <ExternalLink className="h-5 w-5 text-ridge" />
            <p className="mt-1.5 text-[11px] font-semibold text-ridge">View More Colors</p>
          </div>
        </div>
        {data.colorsNote && (
          <p className="mt-4 text-center text-xs text-ink-50">{data.colorsNote}</p>
        )}
      </div>
    </section>
  );
}
