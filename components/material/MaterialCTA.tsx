import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import type { MaterialPage } from "@/lib/material-pages";
import { resolveImg } from "@/components/shared/Photo";

export function MaterialCTA({ data }: { data: MaterialPage }) {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolveImg(data.heroImage, `${data.slug} ${data.eyebrow}`)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep to-horizon-deep/55" />

      <div className="container-skyve relative py-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="text-clear">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">{data.ctaTitle}</h2>
            <p className="mt-2 max-w-lg text-sm text-sky-soft/80">{data.ctaSubtitle}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/estimate/instant"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#types"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/40 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              Explore Shingle Options <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-clear/10 pt-6 text-xs font-medium text-sky-soft/80">
          {data.ctaTrust.map((t) => (
            <span key={t.label} className="flex items-center gap-2">
              <Icon name={t.icon} className="h-4 w-4 text-accent" /> {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
