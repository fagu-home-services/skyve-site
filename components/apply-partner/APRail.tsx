import { Phone, Mail } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { AP_BENEFITS, AP_QUESTIONS } from "@/lib/apply-partner-data";

export function APRail() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Partner Benefits</h2>
        <ul className="mt-4 space-y-4">
          {AP_BENEFITS.map((b) => (
            <li key={b.title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft">
                <Icon name={b.icon} className="h-4 w-4 text-ridge" />
              </span>
              <div>
                <p className="text-sm font-bold text-horizon">{b.title}</p>
                <p className="text-[11px] leading-snug text-ink-50">{b.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
        <h2 className="font-serif text-base font-bold">{AP_QUESTIONS.title}</h2>
        <p className="mt-1.5 text-sm text-mist-soft/75">{AP_QUESTIONS.desc}</p>
        <div className="mt-4 space-y-2.5 text-sm">
          <a href={AP_QUESTIONS.phoneHref} className="flex items-center gap-2.5 text-sky hover:text-clear">
            <Phone className="h-4 w-4" /> {AP_QUESTIONS.phone}
          </a>
          <a href={`mailto:${AP_QUESTIONS.email}`} className="flex items-center gap-2.5 text-sky hover:text-clear">
            <Mail className="h-4 w-4" /> {AP_QUESTIONS.email}
          </a>
        </div>
      </section>
    </div>
  );
}
