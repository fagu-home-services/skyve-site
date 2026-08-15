import { Icon } from "@/components/shared/Icon";
import { WHY_WORK } from "@/lib/careers-data";

export function WhyWork() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Why Work With Skyve?
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_WORK.map((c) => (
            <div
              key={c.title}
              className="rounded-xl bg-mist-soft/60 p-7 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clear shadow-card ring-1 ring-mist">
                <Icon name={c.icon} className="h-6 w-6 text-ridge" />
              </div>
              <h3 className="mt-4 text-base font-bold text-horizon">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-50">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
