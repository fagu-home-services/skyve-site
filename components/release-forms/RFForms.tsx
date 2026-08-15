import Link from "next/link";
import { Download, ArrowRight, Lock, CircleCheck, Phone, User } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { RF_FORMS, RF_SECURE, RF_WHY, RF_QUESTIONS, RF_HOW } from "@/lib/release-forms-data";

export function RFForms() {
  return (
    <section className="bg-clear py-8 lg:py-12">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Forms list */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon">Available Release Forms</h2>
          <p className="mt-1 text-sm text-ink-70">
            Download, review, and complete the necessary forms for your project.
          </p>

          <div className="mt-5 divide-y divide-mist border-y border-mist">
            {RF_FORMS.map((f, i) => (
              <article key={f.title} className="flex flex-col gap-4 py-5 sm:flex-row sm:items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                  <Icon name={f.icon} className="h-5 w-5 text-ridge" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-horizon">
                    <span className="text-ridge">{i + 1}.</span> {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-70">{f.desc}</p>
                  <p className="mt-2.5 flex items-center gap-1.5 text-[11px] text-ink-50">
                    <User className="h-3.5 w-3.5" /> Who needs to sign: {f.signer}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                  <button
                    type="button"
                    className="rounded-lg border border-ridge px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear"
                  >
                    View Form
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ridge hover:text-accent"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PDF
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Secure box */}
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-mist bg-sky-soft/40 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-clear">
              <Lock className="h-5 w-5 text-ridge" />
            </span>
            <div>
              <p className="text-sm font-bold text-horizon">{RF_SECURE.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-70">{RF_SECURE.desc}</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Why we use */}
          <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <h2 className="font-serif text-base font-bold text-horizon">{RF_WHY.title}</h2>
            <ul className="mt-4 space-y-3">
              {RF_WHY.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink-70">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Questions */}
          <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
            <h2 className="font-serif text-base font-bold">{RF_QUESTIONS.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mist-soft/80">{RF_QUESTIONS.desc}</p>
            <Link
              href={RF_QUESTIONS.button.href}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
            >
              {RF_QUESTIONS.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${RF_QUESTIONS.phone.replace(/[^\d]/g, "")}`}
              className="mt-4 flex items-center gap-2.5 text-sm font-semibold text-sky hover:text-clear"
            >
              <Phone className="h-4 w-4" /> {RF_QUESTIONS.phone}
            </a>
          </div>

          {/* How it works */}
          <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <h2 className="font-serif text-base font-bold text-horizon">{RF_HOW.title}</h2>
            <ol className="mt-4 space-y-4">
              {RF_HOW.steps.map((s, i) => (
                <li key={s.title} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ridge text-xs font-bold text-clear">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-horizon">{s.title}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
