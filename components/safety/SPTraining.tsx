import { Icon } from "@/components/shared/Icon";
import { SP_TRAINING } from "@/lib/safety-data";

export function SPTraining() {
  return (
    <section className="bg-mist-soft/40 py-10 lg:py-12">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          {SP_TRAINING.title}
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {SP_TRAINING.items.map((t) => (
            <div key={t.title} className="text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-sky-soft">
                <Icon name={t.icon} className="h-5 w-5 text-ridge" />
              </span>
              <p className="mt-3 text-xs font-bold leading-snug text-horizon">{t.title}</p>
              <p className="mt-1 text-[11px] text-ink-50">{t.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
