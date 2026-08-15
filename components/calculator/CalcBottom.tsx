import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import type { CalcData } from "@/lib/calculator-data";

export function CalcBottom({ data }: { data: CalcData }) {
  return (
    <section className="bg-clear pb-14 pt-6">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        {/* Recent projects */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-horizon">{data.recentHeading}</h2>
            <Link href="/projects" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
              View All Projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {data.recent.map((p) => (
              <Link key={p.city} href="/projects" className="overflow-hidden rounded-xl border border-mist bg-clear shadow-card transition-shadow hover:shadow-elevated">
                <Photo src={p.image} alt={p.city} className="aspect-[16/11]" />
                <div className="p-2.5">
                  <p className="text-[11px] font-bold text-horizon">{p.city}</p>
                  <p className="text-[10px] text-ink-50">{p.size}</p>
                  <p className="text-xs font-bold text-ridge">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Helpful resources */}
        <div>
          <h2 className="font-serif text-lg font-bold text-horizon">Helpful Resources</h2>
          <div className="mt-4 space-y-3">
            {data.resources.map((r) => (
              <Link key={r.title} href={r.href} className="flex items-center gap-3 rounded-xl border border-mist bg-clear p-3.5 shadow-card transition-colors hover:border-ridge">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={r.icon} className="h-4 w-4 text-ridge" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-horizon">{r.title}</span>
                  <span className="block text-[11px] text-ink-50">{r.desc}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-50" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
