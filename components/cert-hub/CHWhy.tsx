import { Icon } from "@/components/shared/Icon";
import { CH_WHY } from "@/lib/cert-hub-data";

export function CHWhy() {
  return (
    <section className="bg-mist-soft/50 py-10 lg:py-12">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          {CH_WHY.title}
        </h2>
        <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CH_WHY.items.map((it) => (
            <div key={it.title} className="flex gap-3">
              <Icon name={it.icon} className="h-6 w-6 shrink-0 text-ridge" />
              <div>
                <p className="text-sm font-bold text-horizon">{it.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-70">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
