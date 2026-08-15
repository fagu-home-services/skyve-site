import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/shared/Photo";
import { ISSUES_8, type RiskLevel } from "@/lib/maintenance-data";

const RISK: Record<RiskLevel, string> = {
  High: "bg-danger/10 text-danger",
  Medium: "bg-warning/15 text-warning",
  Low: "bg-success/10 text-success",
};

export function IssuesWeCatch() {
  return (
    <section className="bg-mist-soft py-16 lg:py-20">
      <div className="container-skyve">
        <p className="text-xs font-bold uppercase tracking-widest text-ridge">
          Common Issues We Find
        </p>
        <h2 className="mt-2 font-serif text-2xl font-bold text-horizon sm:text-3xl">
          Problems We Catch Before They Become Expensive
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ISSUES_8.map((issue) => (
            <div
              key={issue.title}
              className="flex flex-col overflow-hidden rounded-xl border border-mist bg-clear shadow-card"
            >
              <Photo src={issue.image} alt={issue.title} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold text-horizon">{issue.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-ink-50">Risk Level</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${RISK[issue.risk]}`}>
                    {issue.risk}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-ink-50">Est. Repair</span>
                  <span className="font-mono font-bold text-horizon">{issue.repair}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-1 rounded-lg border border-ridge/30 bg-clear px-5 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge"
          >
            See More Issues We Find <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
