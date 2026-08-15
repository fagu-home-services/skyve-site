import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { Icon } from "@/components/shared/Icon";
import { CP_TOOLS, CP_COURSES, CP_SUPPORT } from "@/lib/contractors-data";

export function CP3Col() {
  return (
    <section className="bg-mist-soft/40 py-12 lg:py-14">
      <div className="container-skyve grid gap-6 lg:grid-cols-3">
        {/* Tools */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Tools & Resources</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {CP_TOOLS.map((t) => (
              <a key={t.title} href="#" className="flex items-start gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={t.icon} className="h-4 w-4 text-ridge" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold text-horizon">{t.title}</span>
                  <span className="block text-[10px] leading-snug text-ink-50">{t.desc}</span>
                </span>
              </a>
            ))}
          </div>
          <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
            Explore All Tools & Resources <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Training */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Training & Certifications</h2>
          <div className="mt-4 space-y-4">
            {CP_COURSES.map((c) => (
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
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
            View All Courses & Certifications <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Support */}
        <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Partner Support</h2>
          <ul className="mt-4 space-y-4">
            {CP_SUPPORT.map((s) => (
              <li key={s.title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={s.icon} className="h-4 w-4 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{s.title}</p>
                  <p className="text-[11px] leading-snug text-ink-50">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
            Contact Support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
