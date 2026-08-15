import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Photo } from "@/components/shared/Photo";

type Crumb = { label: string; href?: string };

export function WRHero({ title, desc, crumbs }: { title: string; desc: string; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-horizon-deep pt-20 text-clear lg:pt-24">
      <Photo src="" seed="warranty-register-hero" alt="" className="absolute inset-0 h-full w-full opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-horizon-deep via-horizon-deep/90 to-horizon-deep/40" />
      <div className="container-skyve relative py-8 lg:py-10">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-mist-soft/70">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              {c.href ? <Link href={c.href} className="hover:text-clear">{c.label}</Link> : <span className="text-clear">{c.label}</span>}
              {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
            </span>
          ))}
        </nav>
        <div className="mt-4 flex items-center gap-3">
          <ShieldCheck className="h-9 w-9 text-sky" />
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">{title}</h1>
        </div>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-mist-soft/85">{desc}</p>
      </div>
    </section>
  );
}
