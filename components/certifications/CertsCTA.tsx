import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { CERTS_CTA_TRUST, CERTS_CTA_IMAGE } from "@/lib/certifications-data";

export function CertsCTA() {
  return (
    <section className="relative overflow-hidden bg-horizon-deep">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={CERTS_CTA_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep to-horizon-deep/55" />

      <div className="container-skyve relative py-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="text-clear">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Certified Expertise. Superior Results.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-sky-soft/80">
              Choose a roofing company that meets the highest standards of quality,
              training, and professionalism.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/instant-estimate/"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-elevated transition-colors hover:bg-accent-hover"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/40 bg-clear/5 px-6 py-3.5 text-sm font-semibold text-clear backdrop-blur-sm transition-colors hover:bg-clear/10"
            >
              View Our Work <Play className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-clear/10 pt-6 text-xs font-medium text-sky-soft/80">
          {CERTS_CTA_TRUST.map((t) => (
            <span key={t.label} className="flex items-center gap-2">
              <Icon name={t.icon} className="h-4 w-4 text-accent" /> {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
