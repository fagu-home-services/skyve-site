import Link from "next/link";
import { GUTTER_MATERIALS, GUTTER_COLORS } from "@/lib/gutter-data";

export function GutterMaterialsColors() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Gutter Materials &amp; Colors
        </h2>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[2.2fr_1fr]">
          {/* Materials */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {GUTTER_MATERIALS.map((m) => (
              <div key={m.name} className="rounded-xl border border-mist bg-clear p-3 text-center shadow-card">
                <div
                  className="aspect-[4/3] rounded-lg border border-mist"
                  style={{ backgroundColor: m.hex }}
                />
                <p className="mt-2.5 text-sm font-bold text-horizon">{m.name}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Colors */}
          <div className="rounded-xl border border-mist bg-mist-soft/50 p-5 lg:border-l lg:border-t-0">
            <p className="text-sm font-bold text-horizon">Popular Colors</p>
            <div className="mt-4 flex flex-wrap gap-4">
              {GUTTER_COLORS.map((c) => (
                <div key={c.name} className="text-center">
                  <div
                    className="h-9 w-9 rounded-full border border-mist shadow-card"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="mt-1.5 text-[10px] text-ink-50">{c.name}</p>
                </div>
              ))}
            </div>
            <Link href="#" className="mt-4 inline-block text-sm font-semibold text-ridge hover:text-accent">
              View All Colors →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
