import Link from "next/link";
import { Check, ChevronRight, Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import type { LegalSection } from "@/lib/legal-privacy-data";

type QuestionsData = { title: string; desc: string; button: { label: string; href: string }; phone: string };
type CommitmentData = { title: string; desc: string; highlight: string };

export function LegalContent({
  sections,
  questions,
  commitment,
}: {
  sections: LegalSection[];
  questions: QuestionsData;
  commitment: CommitmentData;
}) {
  return (
    <section className="bg-clear py-8 lg:py-12">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s, i) => (
            <article key={s.id} id={s.id} className="scroll-mt-28 border-b border-mist pb-8 last:border-0">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                  <Icon name={s.icon} className="h-5 w-5 text-ridge" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-lg font-bold text-horizon">
                    <span className="text-ridge">{i + 1}.</span> {s.title}
                  </h2>

                  {s.text && <p className="mt-2 text-sm leading-relaxed text-ink-70">{s.text}</p>}
                  {s.inlineLink && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-70">
                      {s.inlineLink.before}
                      <Link href={s.inlineLink.href} className="font-semibold text-ridge hover:text-accent">
                        {s.inlineLink.label}
                      </Link>
                      {s.inlineLink.after}
                    </p>
                  )}
                  {s.introLine && <p className="mt-2 text-sm leading-relaxed text-ink-70">{s.introLine}</p>}

                  {s.bullets && (
                    <div className="mt-3 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2.5 text-sm text-ink-70">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {b}
                        </div>
                      ))}
                    </div>
                  )}

                  {s.link && (
                    <Link href={s.link.href} className="mt-3 inline-block text-sm font-semibold text-ridge hover:text-accent">
                      {s.link.label}
                    </Link>
                  )}

                  {s.contact && (
                    <div className="mt-4 flex flex-wrap items-start gap-x-8 gap-y-3 text-sm">
                      <a href={`mailto:${s.contact.email}`} className="flex items-center gap-2 text-ridge hover:text-accent">
                        <Mail className="h-4 w-4" /> {s.contact.email}
                      </a>
                      <a href={`tel:${s.contact.phone.replace(/[^\d]/g, "")}`} className="flex items-center gap-2 text-ridge hover:text-accent">
                        <Phone className="h-4 w-4" /> {s.contact.phone}
                      </a>
                      <span className="flex items-start gap-2 text-ink-70">
                        <MapPin className="mt-0.5 h-4 w-4 text-ridge" />
                        <span>
                          {s.contact.addressLines.map((l) => (
                            <span key={l} className="block">{l}</span>
                          ))}
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {/* Quick links */}
          <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <h2 className="font-serif text-base font-bold text-horizon">Quick Links</h2>
            <ul className="mt-4 space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm text-ink-70 transition-colors hover:bg-mist-soft/60 hover:text-ridge"
                  >
                    <span className="flex items-center gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-ridge" /> {s.title}
                    </span>
                    <ChevronRight className="h-3.5 w-3.5 text-ink-50 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Questions card */}
          <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
            <h2 className="font-serif text-base font-bold">{questions.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mist-soft/80">{questions.desc}</p>
            <Link
              href={questions.button.href}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
            >
              {questions.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${questions.phone.replace(/[^\d]/g, "")}`}
              className="mt-4 flex items-center gap-2.5 text-sm font-semibold text-sky hover:text-clear"
            >
              <Phone className="h-4 w-4" /> {questions.phone}
            </a>
          </div>

          {/* Commitment card */}
          <div className="rounded-2xl border border-mist bg-mist-soft/50 p-6">
            <ShieldCheck className="h-8 w-8 text-ridge" />
            <h2 className="mt-3 font-serif text-base font-bold text-horizon">{commitment.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-70">{commitment.desc}</p>
            <p className="mt-3 text-sm font-bold text-horizon">{commitment.highlight}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
