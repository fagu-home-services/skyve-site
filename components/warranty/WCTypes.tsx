import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { WC_TYPES } from "@/lib/warranty-data";

export function WCTypes() {
  return (
    <section className="bg-mist-soft/40 py-10 lg:py-14">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          Warranty Types
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WC_TYPES.map((t) => (
            <article key={t.title} className="flex flex-col rounded-2xl border border-mist bg-clear p-6 text-center shadow-card">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-soft">
                <Icon name={t.icon} className="h-6 w-6 text-ridge" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-horizon">{t.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-70">{t.desc}</p>

              <ul className="mt-4 space-y-2 text-left">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-ink-70">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" /> {p}
                  </li>
                ))}
              </ul>

              <Link
                href={t.href}
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
