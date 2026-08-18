import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { COMPANY } from "@/lib/company";
import { FOOTER_COLUMNS } from "@/lib/site-data";

const SOCIAL = [
  { label: "Facebook", href: COMPANY.social.facebook, path: "M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" },
  { label: "Instagram", href: COMPANY.social.instagram, path: "M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17.5 6.5h.01M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z", stroke: true },
  { label: "YouTube", href: COMPANY.social.youtube, path: "M22 8.2a3 3 0 00-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 002 8.2 31 31 0 002 12a31 31 0 00.1 3.8A3 3 0 004.1 18c1.9.5 7.9.5 7.9.5s6 0 7.9-.6a3 3 0 002.1-2.1A31 31 0 0022 12a31 31 0 00-.1-3.8zM10 15V9l5 3-5 3z" },
  { label: "LinkedIn", href: COMPANY.social.linkedin, path: "M6.5 8A1.5 1.5 0 116.5 5a1.5 1.5 0 010 3zM5 10h3v9H5v-9zm5 0h2.9v1.2h.04c.4-.75 1.4-1.55 2.86-1.55C18.5 9.65 19 11.5 19 14v5h-3v-4.4c0-1.05-.02-2.4-1.5-2.4-1.5 0-1.73 1.15-1.73 2.33V19h-3v-9z" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-horizon-deep text-mist-soft">
      <div className="container-skyve py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(5,minmax(0,1fr))]">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo variant="mono" height={34} />
            <p className="mt-5 text-sm leading-relaxed text-mist-soft/70">
              Roofing intelligence for Washington homeowners. Technology,
              transparency, and craftsmanship you can trust.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-clear/10 text-clear transition-colors hover:bg-accent"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill={s.stroke ? "none" : "currentColor"}
                    stroke={s.stroke ? "currentColor" : "none"}
                    strokeWidth={s.stroke ? 2 : 0}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-clear">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label + l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-mist-soft/70 transition-colors hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-clear/10">
        <div className="container-skyve flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist-soft/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            {"  "}· Powered by {COMPANY.poweredBy}
          </p>
          <p className="flex items-center gap-3">
            {/* /all-pages is the internal review hub — reachable by URL, never linked publicly. */}
            <a href="/login" className="transition-colors hover:text-accent">
              Staff
            </a>
            <span aria-hidden>·</span>
            Licensed • Bonded • Insured · LIC# {COMPANY.license}
          </p>
        </div>
      </div>
    </footer>
  );
}
