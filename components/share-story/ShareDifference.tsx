import { Icon } from "@/components/shared/Icon";
import { SHARE_DIFFERENCE } from "@/lib/share-story-data";

export function ShareDifference() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve text-center">
        <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
          {SHARE_DIFFERENCE.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-70">
          {SHARE_DIFFERENCE.desc}
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SHARE_DIFFERENCE.features.map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-soft">
                <Icon name={f.icon} className="h-6 w-6 text-ridge" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-horizon">{f.title}</h3>
              <p className="mt-1.5 text-xs leading-snug text-ink-50">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
