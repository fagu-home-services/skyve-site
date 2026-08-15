import { Icon } from "@/components/shared/Icon";
import { INCLUDED } from "@/lib/estimate-data";

export function WhatsIncluded() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-3xl font-bold text-horizon sm:text-4xl">
          What&apos;s Included In Your Estimate
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-ink-50">
          Every estimate includes a detailed breakdown so you know exactly what
          to expect.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-mist bg-clear p-6 text-center shadow-card"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-soft">
                <Icon name={item.icon} className="h-6 w-6 text-ridge" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-horizon">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-ink-50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
