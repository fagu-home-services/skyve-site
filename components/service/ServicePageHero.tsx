import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, Clock, Award } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { COMPANY } from "@/lib/company";
import type { ServicePage } from "@/lib/service-pages";
import { resolveImg } from "@/components/shared/Photo";
import { liveHref } from "@/lib/launch-phase";

export function ServicePageHero({ data }: { data: ServicePage }) {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolveImg(data.heroImage, `${data.slug} ${data.eyebrow}`)}
        alt={data.eyebrow}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/92 to-horizon-deep/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-horizon-deep to-transparent" />

      <div className="container-skyve relative pt-24 pb-14 lg:pt-28">
        <div className="pb-6">
          <Breadcrumb
            variant="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: data.eyebrow },
            ]}
          />
        </div>

        <div className="max-w-xl text-clear">
          <p className="eyebrow text-sky">{data.eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            {data.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sky-soft/90">
            {data.sub}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/instant-estimate/"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={liveHref("/services/roof-inspection", "/contact")}
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              Schedule Inspection <CalendarDays className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-clear">
            <span className="flex items-center gap-1.5 rounded-md bg-clear/10 px-2.5 py-1.5">
              <Award className="h-3.5 w-3.5 text-success" /> 25-Year Warranty
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-sky" /> Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-sky" /> {COMPANY.yearsCombined} Years Combined
            </span>
          </div>
        </div>

        {data.heroCard && (
          <div className="absolute right-5 top-1/2 hidden w-64 -translate-y-1/2 rounded-2xl bg-horizon-deep/85 p-6 text-clear shadow-elevated backdrop-blur-sm lg:block">
            <ShieldCheck className="h-7 w-7 text-sky" />
            <div className="mt-4 space-y-2">
              {data.heroCard.titleLines.map((line) => (
                <p key={line} className="font-serif text-lg font-bold leading-tight">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-sky-soft/70">
              {data.heroCard.text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
