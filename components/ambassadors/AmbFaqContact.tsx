import { Plus, Phone, Mail } from "lucide-react";
import { AMB_FAQ, AMB_CONTACT } from "@/lib/ambassadors-data";

const SOCIAL = [
  { label: "Facebook", path: "M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" },
  { label: "Instagram", stroke: true, path: "M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6.5h.01M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z" },
  { label: "YouTube", path: "M22 8.2a3 3 0 00-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 002 8.2 31 31 0 002 12a31 31 0 00.1 3.8A3 3 0 004.1 18c1.9.5 7.9.5 7.9.5s6 0 7.9-.6a3 3 0 002.1-2.1A31 31 0 0022 12a31 31 0 00-.1-3.8zM10 15V9l5 3-5 3z" },
  { label: "LinkedIn", path: "M6.5 8A1.5 1.5 0 116.5 5a1.5 1.5 0 010 3zM5 10h3v9H5v-9zm5 0h2.9v1.2h.04c.4-.75 1.4-1.55 2.86-1.55C18.5 9.65 19 11.5 19 14v5h-3v-4.4c0-1.05-.02-2.4-1.5-2.4-1.5 0-1.73 1.15-1.73 2.33V19h-3v-9z" },
];

export function AmbFaqContact() {
  return (
    <section className="bg-clear py-16 lg:py-20">
      <div className="container-skyve">
        <h2 className="text-center font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 md:grid-cols-2">
          {AMB_FAQ.map((f) => (
            <details key={f.q} className="group rounded-xl border border-mist bg-clear px-4 shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-3.5 text-sm font-semibold text-horizon">
                {f.q}
                <Plus className="h-4 w-4 shrink-0 text-ridge transition-transform group-open:rotate-45" />
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-ink-70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Contact bar */}
      <div className="container-skyve mt-12">
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-horizon-deep px-6 py-6 text-clear lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ridge">
              <Phone className="h-4 w-4 text-clear" />
            </span>
            <div>
              <p className="text-sm font-bold">{AMB_CONTACT.title}</p>
              <p className="text-xs text-mist-soft/70">{AMB_CONTACT.desc}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${AMB_CONTACT.email}`} className="flex items-center gap-2 text-mist-soft/90 hover:text-clear">
              <Mail className="h-4 w-4 text-sky" /> {AMB_CONTACT.email}
            </a>
            <a href={AMB_CONTACT.phoneHref} className="flex items-center gap-2 text-mist-soft/90 hover:text-clear">
              <Phone className="h-4 w-4 text-sky" /> {AMB_CONTACT.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-mist-soft/60">Follow Us</span>
            {SOCIAL.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="flex h-8 w-8 items-center justify-center rounded-full bg-clear/10 text-clear transition-colors hover:bg-accent">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill={s.stroke ? "none" : "currentColor"} stroke={s.stroke ? "currentColor" : "none"} strokeWidth={s.stroke ? 2 : 0} strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
