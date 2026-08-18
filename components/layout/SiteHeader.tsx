"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Phone, Menu, X, LogIn } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { NAV } from "@/lib/site-data";
import { COMPANY } from "@/lib/company";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-clear/95 backdrop-blur-md shadow-card border-b border-mist"
          : "bg-transparent"
      }`}
    >
      <div className="container-skyve flex h-[72px] items-center justify-between gap-4">
        <Logo variant={solid ? "color" : "mono"} height={36} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? "text-ink-70 hover:text-accent"
                    : "text-clear/90 hover:text-clear"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-56 translate-y-1 rounded-xl border border-mist bg-clear p-2 opacity-0 shadow-elevated transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-md px-3 py-2 text-sm text-ink-70 transition-colors hover:bg-mist-soft hover:text-accent"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              solid ? "text-ridge hover:text-accent" : "text-clear hover:text-sky-soft"
            }`}
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          {/* Staff / ops — PHP painel (not the customer portal) */}
          <a
            href="/login"
            aria-label="Staff login"
            title="Staff login"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              solid
                ? "text-ink-70 hover:bg-mist-soft hover:text-accent"
                : "text-clear/85 hover:bg-clear/10 hover:text-clear"
            }`}
          >
            <LogIn className="h-4.5 w-4.5 h-[18px] w-[18px]" />
          </a>
          <Link
            href="/instant-estimate/"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-clear shadow-card transition-colors hover:bg-accent-hover"
          >
            Get Estimate
          </Link>
        </div>

        {/* Mobile: staff login + menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/login"
            aria-label="Staff login"
            title="Staff login"
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              solid ? "text-horizon" : "text-clear"
            }`}
          >
            <LogIn className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={solid ? "text-horizon" : "text-clear"}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="border-t border-mist bg-clear lg:hidden">
          <nav className="container-skyve flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-base font-semibold text-horizon"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-mist pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-sm text-ink-70 hover:text-accent"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-mist pt-4">
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 font-semibold text-ridge">
                <Phone className="h-4 w-4" /> {COMPANY.phone}
              </a>
              <a
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-ink-70"
              >
                <LogIn className="h-4 w-4" /> Staff login
              </a>
              <Link
                href="/instant-estimate/"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-clear"
              >
                Get Estimate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
