import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import {
  PORTAL_USER,
  PORTAL_NAV,
  PORTAL_SIDEBAR_PROMO,
} from "@/lib/portal-data";

type Promo = { title: string; desc: string; button: { label: string; href: string } };

function Sidebar({ active, promo }: { active: string; promo?: Promo }) {
  const pr = promo ?? PORTAL_SIDEBAR_PROMO;
  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-horizon-deep text-clear lg:flex">
      <div className="flex h-[72px] items-center border-b border-clear/10 px-6">
        <Logo variant="mono" height={30} />
      </div>

      <div className="border-b border-clear/10 px-6 py-4">
        <p className="text-xs font-bold uppercase tracking-wide text-clear">Future Homeowner Portal</p>
        <span className="mt-1 inline-block rounded-full bg-ridge/40 px-2 py-0.5 text-[10px] font-semibold text-sky">
          Phase 2
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {PORTAL_NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              item.label === active
                ? "bg-ridge text-clear"
                : "text-mist-soft/75 hover:bg-clear/5 hover:text-clear"
            }`}
          >
            <span className="flex items-center gap-3">
              <Icon name={item.icon} className="h-[18px] w-[18px]" />
              {item.label}
            </span>
            {item.badge && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[10px] font-bold text-clear">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Promo */}
      <div className="px-4 pb-4">
        <div className="overflow-hidden rounded-xl border border-clear/10 bg-clear/5">
          <Photo src="" seed="portal-promo" alt="" className="h-24 w-full" />
          <div className="p-4">
            <p className="text-sm font-bold text-clear">{pr.title}</p>
            <p className="mt-0.5 text-[11px] text-mist-soft/70">{pr.desc}</p>
            <Link
              href={pr.button.href}
              className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-ridge px-3 py-2 text-xs font-semibold text-clear transition-colors hover:bg-ridge-bright"
            >
              {pr.button.label}
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

type TopAction = { icon: string; label: string; href?: string };

function Topbar({
  topLeft,
  topAction,
  topActions,
}: {
  topLeft?: React.ReactNode;
  topAction?: TopAction;
  topActions?: React.ReactNode;
}) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-mist bg-clear px-6 py-4">
      <div className="min-w-0 flex-1">{topLeft}</div>

      <div className="flex items-center gap-4">
        <button type="button" className="relative hidden text-ink-50 hover:text-ridge sm:block" aria-label="Messages">
          <Icon name="message" className="h-5 w-5" />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[9px] font-bold text-clear">3</span>
        </button>
        <button type="button" className="relative hidden text-ink-50 hover:text-ridge sm:block" aria-label="Notifications">
          <Icon name="bell" className="h-5 w-5" />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[9px] font-bold text-clear">2</span>
        </button>
        <span className="hidden items-center gap-1.5 text-sm font-medium text-ink-70 md:flex">
          <Icon name="help" className="h-4 w-4 text-ridge" /> Need Help?
        </span>
        <div className="hidden items-center gap-2.5 border-l border-mist pl-4 sm:flex">
          <div className="text-right">
            <p className="text-sm font-bold text-horizon">{PORTAL_USER.name}</p>
            <p className="text-[11px] text-ink-50">{PORTAL_USER.role}</p>
          </div>
          <AvatarPlaceholder initials="AJ" className="h-9 w-9 rounded-full" />
        </div>
        {topActions
          ? topActions
          : topAction && (
              <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-ridge px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
                <Icon name={topAction.icon} className="h-4 w-4" /> <span className="hidden sm:inline">{topAction.label}</span>
              </button>
            )}
      </div>
    </header>
  );
}

function PortalFooter() {
  const cols = [
    { h: "Services", links: ["Roof Replacement", "Roof Repair", "Metal Roofing", "Gutters", "Siding", "Exterior Services"] },
    { h: "Company", links: ["About Skyve", "Our Process", "Careers", "Contact Us"] },
    { h: "Resources", links: ["Knowledge Center", "Field Reports", "Skyve TV", "Calculators", "FAQ"] },
    { h: "Legal", links: ["Privacy Policy", "Terms of Service", "FTC Disclosure", "Release Forms", "Revoke Consent"] },
  ];
  return (
    <footer className="bg-horizon-deep text-clear">
      <div className="px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Logo variant="mono" height={30} />
            <p className="mt-3 text-xs leading-relaxed text-mist-soft/70">
              Building excellence. Protecting what matters most.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-xs font-bold uppercase tracking-wide text-clear">{c.h}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <span className="text-xs text-mist-soft/70 hover:text-clear">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-clear">Contact</p>
            <ul className="mt-3 space-y-2 text-xs text-mist-soft/70">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-sky" /> (425) 201-2490</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-sky" /> info@skyveexteriors.com</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky" /> 12300 NE 8th St, Ste 100 Bellevue, WA 98005</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-clear/10 pt-6 text-[11px] text-mist-soft/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2025 Skyve Roofing &amp; Exteriors. All rights reserved.</span>
          <span>Licensed · Bonded · Insured · LIC# SKYVEE668BT1100G</span>
        </div>
      </div>
    </footer>
  );
}

export function PortalShell({
  children,
  active = "Dashboard",
  topLeft,
  topAction,
  topActions,
  promo,
}: {
  children: React.ReactNode;
  active?: string;
  topLeft?: React.ReactNode;
  topAction?: TopAction;
  topActions?: React.ReactNode;
  promo?: Promo;
}) {
  return (
    <div className="flex min-h-screen bg-mist-soft/40">
      <Sidebar active={active} promo={promo} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar topLeft={topLeft} topAction={topAction} topActions={topActions} />
        <main className="flex-1 px-6 py-6">{children}</main>
        <PortalFooter />
      </div>
    </div>
  );
}
