import { Phone } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { COMPANY } from "@/lib/company";
import { EMERGENCY_TRUST } from "@/lib/emergency-data";

export function EmergencyTrust() {
  return (
    <section className="bg-horizon-deep py-14 lg:py-16">
      <div className="container-skyve grid gap-10 lg:grid-cols-[320px_1fr]">
        <div className="text-clear">
          <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
            Why Homeowners Trust Skyve In an Emergency
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-sky-soft/80">
            When disaster strikes, you need a roofing company that shows up,
            communicates, and gets the job done.
          </p>
          <a
            href={COMPANY.phoneHref}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-accent-hover"
          >
            <Phone className="h-4 w-4" /> Call Now: {COMPANY.phone}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-clear/10">
          {EMERGENCY_TRUST.map((t) => (
            <div key={t.title} className="text-center">
              <Icon name={t.icon} className="mx-auto h-7 w-7 text-sky" />
              <h3 className="mt-3 text-sm font-bold text-clear">{t.title}</h3>
              <p className="mt-1 text-xs leading-snug text-sky-soft/70">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
