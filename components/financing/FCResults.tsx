import { ShieldCheck, Check, ArrowUpRight, ArrowRight } from "lucide-react";
import { FC_PAYMENT, FC_BREAKDOWN, FC_AMORTIZATION, FC_LENDERS, FC_PREQUAL } from "@/lib/financing-calc-data";
import { conicStops } from "@/lib/conic-stops";

function Donut() {
  const stops = conicStops(FC_BREAKDOWN.segments);
  return (
    <div className="relative h-36 w-36 shrink-0">
      <div className="h-full w-full rounded-full" style={{ background: `conic-gradient(${stops.join(", ")})` }} />
      <div className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full bg-clear text-center">
        <span className="font-serif text-lg font-bold text-horizon">{FC_BREAKDOWN.center}</span>
        <span className="text-[9px] text-ink-50">Monthly Payment</span>
      </div>
    </div>
  );
}

export function FCResults() {
  return (
    <div className="space-y-6">
      {/* Estimated monthly */}
      <section className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-mist-soft/60">Your Estimated Monthly Payment</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-0.5 text-[10px] font-bold uppercase text-success">
            <ShieldCheck className="h-3 w-3" /> Great Option
          </span>
        </div>
        <p className="mt-2 font-serif text-4xl font-extrabold text-clear">
          {FC_PAYMENT.monthly}<span className="text-lg font-semibold text-mist-soft/70">/month</span>
        </p>
        <p className="mt-1 text-xs text-mist-soft/70">{FC_PAYMENT.note}</p>
        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-clear/10 pt-4 sm:grid-cols-4">
          {FC_PAYMENT.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-[10px] text-mist-soft/60">{m.label}</p>
              <p className="mt-0.5 text-sm font-bold text-clear">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment breakdown */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Payment Breakdown</h2>
        <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row">
          <Donut />
          <ul className="flex-1 space-y-2 self-start text-sm">
            {FC_BREAKDOWN.segments.map((s) => (
              <li key={s.label} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
                <span className="flex-1 text-ink-70">{s.label}</span>
                <span className="font-medium text-horizon">{s.amount} <span className="text-xs text-ink-50">({s.pct}%)</span></span>
              </li>
            ))}
            <li className="flex items-center justify-between border-t border-mist pt-2 text-xs">
              <span className="text-ink-50">Total Monthly Payment</span>
              <span className="font-bold text-horizon">{FC_BREAKDOWN.totalMonthly}</span>
            </li>
            <li className="flex items-center justify-between text-xs">
              <span className="text-ink-50">Total of Payments</span>
              <span className="font-bold text-horizon">{FC_BREAKDOWN.totalPayments}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Amortization */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Amortization Preview</h2>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View Full Amortization <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-mist text-[10px] uppercase tracking-wide text-ink-50">
                <th className="py-2 pr-3 font-bold">Year</th>
                <th className="py-2 pr-3 font-bold">Monthly Payment</th>
                <th className="py-2 pr-3 font-bold">Principal Paid</th>
                <th className="py-2 pr-3 font-bold">Interest Paid</th>
                <th className="py-2 font-bold">Remaining Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {FC_AMORTIZATION.map((r) => (
                <tr key={r.year} className="text-ink-70">
                  <td className="py-2 pr-3 font-semibold text-horizon">{r.year}</td>
                  <td className="py-2 pr-3">{r.payment}</td>
                  <td className="py-2 pr-3">{r.principal}</td>
                  <td className="py-2 pr-3">{r.interest}</td>
                  <td className="py-2">{r.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[10px] text-ink-50">* Actual numbers may vary based on lender terms and conditions.</p>
      </section>

      {/* Lenders */}
      <section className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wide text-horizon">Pre-Qualify With Our Trusted Lenders</h2>
          <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
            View All Lenders <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {FC_LENDERS.map((l) => (
            <div key={l.name} className="rounded-xl border border-mist bg-clear p-3 text-center">
              <p className="font-serif text-sm font-bold text-horizon">{l.name}</p>
              <p className="mt-1 text-[10px] text-ink-50">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {FC_PREQUAL.map((p) => (
            <span key={p} className="flex items-start gap-2 text-xs text-ink-70">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" /> {p}
            </span>
          ))}
        </div>
        <button type="button" className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-ridge/30 py-2.5 text-sm font-semibold text-ridge transition-colors hover:border-ridge hover:bg-mist-soft">
          Get Pre-Qualified Now <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
}
