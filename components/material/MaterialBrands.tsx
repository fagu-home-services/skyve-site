import type { MaterialPage } from "@/lib/material-pages";

export function MaterialBrands({ data }: { data: MaterialPage }) {
  return (
    <section className="bg-clear py-14 lg:py-16">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-xl font-bold text-horizon sm:text-2xl">
          {data.brandsHeading}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {data.brands.map((b) => (
            <span
              key={b}
              className="font-serif text-xl font-bold tracking-tight text-ink-50"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
