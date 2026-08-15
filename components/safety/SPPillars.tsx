import { Icon } from "@/components/shared/Icon";
import { SP_PILLARS } from "@/lib/safety-data";

export function SPPillars() {
  return (
    <section className="bg-mist-soft/40 py-10 lg:py-14">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          {SP_PILLARS.title}
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SP_PILLARS.items.map((p) => (
            <article key={p.title} className="rounded-2xl border border-mist bg-clear p-5 text-center shadow-card">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-soft">
                <Icon name={p.icon} className="h-6 w-6 text-ridge" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-horizon">{p.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-70">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
