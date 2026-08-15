import { CheckCircle2 } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { WHY_MATTER, INSPECTION_STATS } from "@/lib/inspection-data";

export function WhyInspectionsMatter() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve grid items-center gap-10 lg:grid-cols-[0.9fr_1.4fr]">
        {/* Copy + checklist */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">
            {WHY_MATTER.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-70">
            {WHY_MATTER.intro}
          </p>
          <ul className="mt-5 space-y-2.5">
            {WHY_MATTER.checklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-ink-70">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-ridge" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {INSPECTION_STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-mist bg-clear p-6 text-center shadow-card">
              <Icon name={s.icon} className="mx-auto h-7 w-7 text-ridge" />
              <p className="mt-3 font-serif text-3xl font-extrabold text-horizon">
                {s.value}
              </p>
              <p className="text-sm font-bold text-horizon">{s.label}</p>
              <p className="mt-1 text-xs text-ink-50">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
