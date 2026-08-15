import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ExternalLink } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Icon } from "@/components/shared/Icon";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LoginPanel } from "@/components/login/LoginPanel";
import { LoginForm } from "@/components/login/LoginForm";

export const metadata: Metadata = {
  title: "Login — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "Sign in to your Skyve Portal to access your projects, documents, warranties, photos, and everything about your home in one secure place.",
};

const TRUST = [
  { icon: "shield", title: "Your data is secure with Skyve", desc: "We use industry-leading security to protect your information and privacy." },
  { icon: "badge", title: "Licensed & Insured", desc: "WA License #SKYVEERex" },
  { icon: "users", title: "Trusted by Homeowners", desc: "Across Washington State" },
];

export default function LoginPage() {
  return (
    <>
      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="flex items-center justify-between px-6 py-5 lg:px-10">
          <Logo variant="mono" height={30} />
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:4252012490" className="hidden items-center gap-2 font-semibold text-clear sm:flex">
              <Phone className="h-4 w-4 text-sky" /> (425) 201-2490
            </a>
            <Link href="/" className="inline-flex items-center gap-1.5 font-semibold text-clear hover:text-sky">
              Back to Website <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Split */}
        <div className="grid min-h-screen lg:grid-cols-2">
          <LoginPanel />
          <div className="flex items-center justify-center bg-mist-soft/40 px-6 py-16 lg:px-12">
            <LoginForm />
          </div>
        </div>

        {/* Trust band */}
        <section className="border-y border-mist bg-clear py-6">
          <div className="container-skyve grid gap-6 sm:grid-cols-3">
            {TRUST.map((t) => (
              <div key={t.title} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft">
                  <Icon name={t.icon} className="h-5 w-5 text-ridge" />
                </span>
                <div>
                  <p className="text-sm font-bold text-horizon">{t.title}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-50">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
