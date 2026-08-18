import Link from "next/link";
import { ArrowRight, Phone, ShieldAlert } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { COMPANY } from "@/lib/company";
import type { ServicePage } from "@/lib/service-pages";

export function RepairTypes({ data }: { data: ServicePage }) {
  if (!data.repairTypes) return null;
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
          {data.repairTypesTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-50">{data.repairTypesIntro}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {data.repairTypes.map((r) => (
            <div
              key={r.title}
              className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card"
            >
              <Photo src={r.image} alt={r.title} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold text-horizon">{r.title}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-snug text-ink-50">
                  {r.desc}
                </p>
                <Link
                  href="/instant-estimate/"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ridge transition-colors hover:text-accent"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}

          {data.emergency && (
            <div className="flex flex-col justify-center rounded-xl border border-mist bg-clear p-5 text-center shadow-card sm:col-span-2 lg:col-span-1">
              <ShieldAlert className="mx-auto h-8 w-8 text-ridge" />
              <h3 className="mt-3 text-sm font-bold text-horizon">
                {data.emergency.title}
              </h3>
              <p className="mt-2 text-xs leading-snug text-ink-50">
                {data.emergency.desc}
              </p>
              <a
                href={COMPANY.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
              >
                Call Now <Phone className="h-4 w-4" />
              </a>
              <a
                href={COMPANY.phoneHref}
                className="mt-2 text-xs font-semibold text-ridge hover:text-accent"
              >
                {COMPANY.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
