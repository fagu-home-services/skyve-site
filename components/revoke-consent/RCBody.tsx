import Link from "next/link";
import { ArrowRight, CircleCheck, Phone, Mail, ShieldCheck } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { RC_STEPS, RC_AFTER, RC_CAN_REVOKE, RC_HELP, RC_MATTERS } from "@/lib/revoke-consent-data";

export function RCBody() {
  return (
    <section className="bg-clear py-8 lg:py-12">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Steps */}
        <div>
          <h2 className="font-serif text-xl font-bold text-horizon">How to Revoke Consent</h2>
          <p className="mt-1 text-sm text-ink-70">Follow these simple steps to revoke your consent.</p>

          <div className="mt-5 space-y-6">
            {RC_STEPS.map((s, i) => (
              <article key={s.title} className="flex items-start gap-4 border-b border-mist pb-6 last:border-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                  <Icon name={s.icon} className="h-5 w-5 text-ridge" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-horizon">
                    <span className="text-ridge">{i + 1}.</span> {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-70">{s.desc}</p>
                  {s.button && (
                    <Link
                      href={s.button.href}
                      className="mt-3 inline-flex items-center gap-2 rounded-lg border border-ridge px-4 py-2 text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear"
                    >
                      {s.button.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* What happens after */}
          <div className="mt-6 flex items-center gap-5 rounded-2xl border border-mist bg-sky-soft/40 p-6">
            <div className="flex-1">
              <p className="text-sm font-bold text-horizon">{RC_AFTER.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-70">{RC_AFTER.desc}</p>
            </div>
            <ShieldCheck className="hidden h-14 w-14 shrink-0 text-ridge/40 sm:block" />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* What you can revoke */}
          <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <h2 className="font-serif text-base font-bold text-horizon">{RC_CAN_REVOKE.title}</h2>
            <ul className="mt-4 space-y-3">
              {RC_CAN_REVOKE.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink-70">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-ridge" /> {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Need help */}
          <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
            <h2 className="font-serif text-base font-bold">{RC_HELP.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mist-soft/80">{RC_HELP.desc}</p>
            <Link
              href={RC_HELP.button.href}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
            >
              {RC_HELP.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-4 space-y-2.5 text-sm">
              <a href={`tel:${RC_HELP.phone.replace(/[^\d]/g, "")}`} className="flex items-center gap-2.5 text-sky hover:text-clear">
                <Phone className="h-4 w-4" /> {RC_HELP.phone}
              </a>
              <a href={`mailto:${RC_HELP.email}`} className="flex items-center gap-2.5 text-sky hover:text-clear">
                <Mail className="h-4 w-4" /> {RC_HELP.email}
              </a>
            </div>
          </div>

          {/* Your privacy matters */}
          <div className="rounded-2xl border border-mist bg-mist-soft/50 p-6">
            <ShieldCheck className="h-8 w-8 text-ridge" />
            <h2 className="mt-3 font-serif text-base font-bold text-horizon">{RC_MATTERS.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-70">{RC_MATTERS.desc}</p>
            <p className="mt-3 text-sm font-bold text-horizon">{RC_MATTERS.highlight}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
