import { Clock, Eye, ArrowRight, ChevronRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { KC_START, KC_CATEGORIES } from "@/lib/knowledge-data";

function SectionHead({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">{title}</h2>
      {action && (
        <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {action} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}

export function KCStartCategories() {
  return (
    <section id="start-here" className="scroll-mt-24 bg-clear py-12 lg:py-14">
      <div className="container-skyve">
        <SectionHead title="Start Here" action="View All Guides" />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {KC_START.map((a) => (
            <article key={a.title} className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated">
              <div className="relative">
                <Photo src={a.image} alt={a.title} className="aspect-[16/10]" />
                <span className="absolute left-2 top-2 rounded bg-horizon-deep/85 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-clear">
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="flex-1 text-sm font-bold leading-snug text-horizon">{a.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-ink-50">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {a.read}</span>
                  <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {a.views}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-12">
          <SectionHead title="Explore by Category" />
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {KC_CATEGORIES.map((c) => (
              <a
                key={c.label}
                href={"href" in c ? (c as { href: string }).href : "#"}
                className="flex items-center gap-3 rounded-xl border border-mist bg-clear p-4 shadow-card transition-colors hover:border-ridge"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={c.icon} className="h-5 w-5 text-ridge" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xs font-bold text-horizon">{c.label}</span>
                  <span className="block text-[10px] text-ink-50">{c.count}</span>
                </span>
                <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-ink-50" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
