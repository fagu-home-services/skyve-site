import { Check, Phone, FileText } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { LI_INSURANCE, LI_QUESTIONS } from "@/lib/licenses-data";

export function LIInsurance() {
  return (
    <section className="bg-clear py-10 lg:py-14">
      <div className="container-skyve">
        <h2 className="text-center text-sm font-bold uppercase tracking-wider text-horizon">
          Our Insurance Coverage
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr_1fr_1fr_1.15fr]">
          {LI_INSURANCE.map((ins) => (
            <article key={ins.name} className="flex flex-col rounded-2xl border border-mist bg-clear p-5 shadow-card">
              <Icon name={ins.icon} className="h-7 w-7 text-ridge" />
              <h3 className="mt-3 text-sm font-bold text-horizon">{ins.name}</h3>
              <p className="mt-1.5 flex-1 text-[11px] leading-relaxed text-ink-70">{ins.desc}</p>

              <p className="mt-3 text-[10px] uppercase tracking-wide text-ink-50">{ins.coverageLabel}</p>
              <p className="text-base font-bold text-horizon">{ins.coverage}</p>
              <p className="mt-2 text-[11px] text-ink-50">{ins.policy}</p>
              <p className="text-[11px] text-ink-50">Expires: {ins.expires}</p>

              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/12 px-3 py-1 text-[11px] font-semibold text-success">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" /> {ins.status}
                </span>
              </div>
            </article>
          ))}

          {/* Have Questions — dark card */}
          <div className="flex flex-col rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
            <h3 className="text-base font-bold">{LI_QUESTIONS.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-mist-soft/80">{LI_QUESTIONS.desc}</p>
            <ul className="mt-4 space-y-2">
              {LI_QUESTIONS.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs text-clear">
                  <Check className="h-4 w-4 shrink-0 text-success" /> {p}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
            >
              <FileText className="h-4 w-4" /> {LI_QUESTIONS.button}
            </button>
            <p className="mt-4 text-[11px] text-mist-soft/70">{LI_QUESTIONS.callLabel}</p>
            <a href={`tel:${LI_QUESTIONS.phone.replace(/[^\d]/g, "")}`} className="mt-1 flex items-center gap-2 text-sm font-semibold text-sky hover:text-clear">
              <Phone className="h-4 w-4" /> {LI_QUESTIONS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
