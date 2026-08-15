import { Icon } from "@/components/shared/Icon";
import type { MaterialPage } from "@/lib/material-pages";
import { resolveImg } from "@/components/shared/Photo";

export function PaintingProcess({ data }: { data: MaterialPage }) {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          {data.processTitle}
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_280px]">
          <div
            className={`grid grid-cols-2 gap-6 sm:grid-cols-3 ${
              data.process.length === 6 ? "lg:grid-cols-6" : "lg:grid-cols-7"
            }`}
          >
            {data.process.map((step) => (
              <div key={step.title} className="text-center">
                <div className="relative mx-auto w-fit">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clear shadow-card ring-1 ring-mist">
                    <Icon name={step.icon} className="h-5 w-5 text-ridge" />
                  </span>
                  <span className="absolute -bottom-1 left-1/2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-ridge text-[10px] font-bold text-clear">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-3 text-[11px] font-bold text-horizon">{step.title}</h3>
                <p className="mt-1 text-[10px] leading-snug text-ink-50">{step.desc}</p>
              </div>
            ))}
          </div>

          {data.processImage && (
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolveImg(data.processImage, "exterior painting process")}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep via-horizon-deep/30 to-transparent" />
              <div className="relative flex min-h-56 flex-col justify-end p-5">
                <p className="font-serif text-lg font-bold leading-tight text-clear">
                  {data.processTagline}
                </p>
                {data.processCardText && (
                  <p className="mt-2 text-xs leading-relaxed text-sky-soft/80">
                    {data.processCardText}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
