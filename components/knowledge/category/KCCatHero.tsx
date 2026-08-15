import { ChevronRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import type { KCCategory } from "@/lib/kc-category-data";

export function KCCatHero({ cat }: { cat: KCCategory }) {
  return (
    <section className="bg-clear pb-6 pt-4">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        {/* Left */}
        <div>
          <p className="eyebrow text-ridge">{cat.eyebrow}</p>
          <h1 className="mt-3 font-serif text-4xl font-extrabold leading-[1.05] text-horizon sm:text-5xl">
            {cat.titleLines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-70">{cat.desc}</p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
            {cat.stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={s.icon} className="h-4 w-4 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{s.value}</p>
                  <p className="text-[11px] text-ink-50">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image + in this section */}
        <div className="relative">
          <Photo src={cat.image} alt={cat.titleLines.join(" ")} className="aspect-[16/10] rounded-2xl shadow-elevated" />
          <nav className="mt-4 rounded-2xl bg-horizon-deep p-5 text-clear shadow-elevated lg:absolute lg:right-4 lg:top-4 lg:mt-0 lg:w-64">
            <p className="text-xs font-bold uppercase tracking-wider text-mist-soft/60">In This Section</p>
            <ul className="mt-3 space-y-1">
              {cat.inThisSection.map((s) => (
                <li key={s.label}>
                  <a href="#" className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-mist-soft/85 transition-colors hover:bg-clear/10 hover:text-clear">
                    <Icon name={s.icon} className="h-4 w-4 shrink-0 text-sky" />
                    <span className="flex-1">{s.label}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-mist-soft/40" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
