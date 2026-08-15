import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import type { ServicePage } from "@/lib/service-pages";

export function ServiceMaterials({ data }: { data: ServicePage }) {
  if (!data.materials || !data.manufacturers) return null;
  return (
    <section className="bg-clear pb-16 lg:pb-20">
      <div className="container-skyve">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
              {data.materialsTitle}
            </h2>
            <p className="mt-2 text-sm text-ink-50">{data.materialsIntro}</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {data.manufacturers.map((m) => (
              <span
                key={m}
                className="font-serif text-lg font-bold tracking-tight text-ink-50"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.materials.map((m) => (
            <div
              key={m.title}
              className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card"
            >
              <Photo src={m.image} alt={m.title} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-horizon">{m.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-50">
                  {m.desc}
                </p>
                <Link
                  href={m.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ridge transition-colors hover:text-accent"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
