import Link from "next/link";
import { ClipboardList, Phone, ArrowRight, ArrowUpRight, FileText, Download } from "lucide-react";
import { COMPANY } from "@/lib/company";
import type { KCCategory } from "@/lib/kc-category-data";

export function KCCatRail({ cat }: { cat: KCCategory }) {
  return (
    <div className="space-y-6">
      {/* CTA */}
      <section className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
        <ClipboardList className="h-8 w-8 text-accent" />
        <h2 className="mt-3 font-serif text-lg font-bold leading-snug">{cat.cta.title}</h2>
        <p className="mt-1.5 text-sm text-mist-soft/75">{cat.cta.desc}</p>
        <Link href={cat.cta.href} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover">
          {cat.cta.button} <ArrowRight className="h-4 w-4" />
        </Link>
        <a href={COMPANY.phoneHref} className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-sky hover:text-clear">
          <Phone className="h-4 w-4" /> {COMPANY.phone}
        </a>
      </section>

      {/* Popular topics */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-xs font-bold uppercase tracking-wider text-horizon">{cat.popularHeading}</h2>
        <ul className="mt-4 divide-y divide-mist">
          {cat.popular.map((t) => (
            <li key={t.label}>
              <a href="#" className="flex items-center justify-between gap-3 py-2.5 text-sm text-ink-70 transition-colors hover:text-ridge">
                {t.label}
                <span className="text-xs font-semibold text-ink-50">{t.count}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
          View All Topics <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>

      {/* Downloads */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-xs font-bold uppercase tracking-wider text-horizon">Download Resources</h2>
        <ul className="mt-4 space-y-3">
          {cat.downloads.map((d) => (
            <li key={d.title}>
              <a href="#" className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-danger/10">
                  <FileText className="h-4 w-4 text-danger" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-horizon">{d.title}</span>
                  <span className="block text-[11px] text-ink-50">{d.size}</span>
                </span>
                <Download className="h-4 w-4 shrink-0 text-ridge" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
          View All Downloads <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>
    </div>
  );
}
