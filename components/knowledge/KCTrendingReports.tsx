import Link from "next/link";
import { Bookmark, ArrowRight, Code2, FileText, MapPin } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { KC_TRENDING, KC_FIELD_REPORTS } from "@/lib/knowledge-data";

function SectionHead({ title, href, action }: { title: string; href?: string; action?: string }) {
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">{title}</h2>
      {action && (
        <Link href={href ?? "#"} className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
          {action} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}

export function KCTrendingReports() {
  return (
    <section className="bg-mist-soft/40 py-12 lg:py-14">
      <div className="container-skyve">
        {/* Trending */}
        <SectionHead title="Trending Articles" action="View All Articles" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {KC_TRENDING.map((a) => (
            <article key={a.title} className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated">
              <div className="relative">
                <Photo src={a.image} alt={a.title} className="aspect-[16/11]" />
                <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-clear/90 text-ridge shadow-card">
                  <Bookmark className="h-3 w-3" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-3.5">
                <span className="text-[9px] font-bold uppercase tracking-wide text-ridge">{a.tag}</span>
                <h3 className="mt-1 flex-1 text-xs font-bold leading-snug text-horizon">{a.title}</h3>
                <span className="mt-3 text-[10px] text-ink-50">{a.read}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Field reports */}
        <div className="mt-12">
          <SectionHead title="Learn From Real Roofs" href="/field-reports" action="View All Field Reports" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {KC_FIELD_REPORTS.map((r) => (
              <Link
                key={r.city}
                href="/field-reports"
                className="group overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated"
              >
                <div className="relative">
                  <Photo src={r.image} alt={r.city} className="aspect-[16/9]" />
                  <span className="absolute left-2 top-2 flex items-center gap-1 rounded bg-horizon-deep/85 px-2 py-0.5 text-[10px] font-semibold text-clear">
                    <MapPin className="h-3 w-3" /> {r.city}
                  </span>
                  <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-horizon-deep/70 text-clear ring-1 ring-clear/40 backdrop-blur-sm">
                    <Code2 className="h-4 w-4" />
                  </span>
                </div>
                <div className="grid grid-cols-2 divide-x divide-mist">
                  {[r.left, r.right].map((c, i) => (
                    <div key={i} className="p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-ridge">{c.label}</p>
                      <p className="mt-1 text-[10px] leading-snug text-ink-50">{c.desc}</p>
                      <p className="mt-2 flex items-center gap-1 text-[10px] text-ink-50">
                        <FileText className="h-3 w-3" /> {r.pages}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
