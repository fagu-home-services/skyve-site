import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { PH_BENEFITS, PH_COURSES, PH_RESOURCES } from "@/lib/partner-data";

export function PHBenefits() {
  return (
    <section className="bg-clear pb-10">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* Benefits */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Partner Benefits</h2>
          <ul className="mt-4 space-y-2.5">
            {PH_BENEFITS.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-ink-70">
                <Check className="h-4 w-4 shrink-0 text-success" /> {b}
              </li>
            ))}
          </ul>
          <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
            Learn more about Partner Benefits <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Training */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Training & Certifications</h2>
            <a href="#" className="inline-flex items-center gap-1 text-[11px] font-semibold text-ridge hover:text-accent">
              View All Courses <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
          <div className="mt-4 space-y-4">
            {PH_COURSES.map((c) => (
              <div key={c.title} className="flex gap-3">
                <Photo src={c.image} alt={c.title} className="h-14 w-20 shrink-0 rounded-lg" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-horizon">{c.title}</p>
                  <p className="text-[11px] text-ink-50">{c.desc}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-ink-50">{c.progress}% Complete</span>
                    <span className="h-1.5 flex-1 rounded-full bg-mist">
                      <span className="block h-full rounded-full bg-ridge" style={{ width: `${c.progress}%` }} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Top Partner Resources</h2>
          <ul className="mt-4 space-y-3">
            {PH_RESOURCES.map((r) => (
              <li key={r.title}>
                <a href="#" className="flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-mist-soft">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                    <Icon name={r.icon} className="h-4 w-4 text-ridge" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-horizon">{r.title}</span>
                    <span className="block text-[11px] text-ink-50">{r.desc}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
            Visit Resource Center <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
