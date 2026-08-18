import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { STORIES_TRUST } from "@/lib/customer-stories-data";

export function StoriesTrustBar() {
  return (
    <section className="bg-clear py-10">
      <div className="container-skyve grid gap-8 rounded-2xl border border-mist bg-mist-soft/40 p-8 shadow-card sm:grid-cols-2 lg:grid-cols-5">
        {STORIES_TRUST.map((t) => (
          <div key={t.title} className="flex flex-col items-start gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
              <Icon name={t.icon} className="h-4 w-4 text-ridge" />
            </span>
            <p className="text-sm font-bold text-horizon">{t.title}</p>
            <p className="text-xs leading-snug text-ink-50">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StoriesCTA() {
  return (
    <section className="bg-clear pb-16">
      <div className="container-skyve">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-horizon-deep px-8 py-10 text-clear lg:flex-row">
          <div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Ready to Start Your Story?</h2>
            <p className="mt-1.5 text-sm text-mist-soft/80">Join hundreds of happy homeowners.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/instant-estimate/"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover"
            >
              Get Your Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-clear/30 px-6 py-3.5 text-sm font-semibold text-clear transition-colors hover:border-clear hover:bg-clear/10"
            >
              View Our Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
