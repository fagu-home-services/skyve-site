import { ArrowRight, Phone, Mail } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { RP_TOOLS, RP_SUPPORT, RP_CONTACT } from "@/lib/realtors-data";

export function RPToolsSupport() {
  return (
    <section className="bg-mist-soft/40 py-12 lg:py-14">
      <div className="container-skyve grid gap-8 lg:grid-cols-2">
        {/* Tools */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">Tools & Resources for Realtors</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {RP_TOOLS.map((t) => (
              <a key={t.title} href="#" className="rounded-xl border border-mist bg-clear p-4 shadow-card transition-colors hover:border-ridge">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft">
                  <Icon name={t.icon} className="h-4 w-4 text-ridge" />
                </span>
                <p className="mt-2.5 text-xs font-bold text-horizon">{t.title}</p>
                <p className="mt-0.5 text-[10px] leading-snug text-ink-50">{t.desc}</p>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-ridge hover:text-accent">
              View All Resources <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-horizon">Partner Support</h2>
          <div className="mt-5 rounded-2xl border border-mist bg-clear p-6 shadow-card">
            <ul className="space-y-4">
              {RP_SUPPORT.map((s) => (
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
          </div>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-70">
            <span className="font-semibold text-horizon">Have Questions?</span>
            <a href={RP_CONTACT.phoneHref} className="inline-flex items-center gap-1 font-semibold text-ridge hover:text-accent">
              <Phone className="h-3.5 w-3.5" /> Call {RP_CONTACT.phone}
            </a>
            <span className="text-ink-50">or</span>
            <span>Email</span>
            <a href={`mailto:${RP_CONTACT.email}`} className="inline-flex items-center gap-1 font-semibold text-ridge hover:text-accent">
              <Mail className="h-3.5 w-3.5" /> {RP_CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
