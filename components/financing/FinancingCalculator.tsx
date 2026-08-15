"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import { FINANCING_TERMS, LOAN_TERM_OPTIONS } from "@/lib/financing-data";

function monthlyPayment(principal: number, apr: number, months: number) {
  const r = apr / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

export function FinancingCalculator() {
  const [cost, setCost] = useState(20000);
  const [down, setDown] = useState(2000);
  const [term, setTerm] = useState(60);

  const maxDown = Math.round(cost * 0.3);
  const clampedDown = Math.min(down, maxDown);
  const principal = Math.max(cost - clampedDown, 0);
  const downPct = cost > 0 ? Math.round((clampedDown / cost) * 100) : 0;

  return (
    <section className="bg-clear pb-16 lg:pb-20">
      <div className="container-skyve grid gap-6 lg:grid-cols-2">
        {/* Calculator */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card lg:p-8">
          <h2 className="font-serif text-xl font-bold text-horizon">
            Financing Calculator
          </h2>
          <p className="mt-1 text-sm text-ink-50">
            Adjust the values to see your estimated payment.
          </p>

          {/* Project cost */}
          <div className="mt-6 flex items-center justify-between">
            <label className="text-sm font-semibold text-ink-70">Project Cost</label>
            <span className="rounded-md border border-mist px-3 py-1 font-mono text-sm font-bold text-horizon">
              {usd(cost)}
            </span>
          </div>
          <input
            type="range"
            min={5000}
            max={50000}
            step={1000}
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="mt-3 w-full accent-ridge"
          />
          <div className="mt-1 flex justify-between text-[11px] text-ink-50">
            <span>$5,000</span>
            <span>$50,000+</span>
          </div>

          {/* Down payment */}
          <div className="mt-6 flex items-center justify-between">
            <label className="text-sm font-semibold text-ink-70">Down Payment</label>
            <span className="rounded-md border border-mist px-3 py-1 font-mono text-sm font-bold text-horizon">
              {usd(clampedDown)} ({downPct}%)
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={maxDown}
            step={500}
            value={clampedDown}
            onChange={(e) => setDown(Number(e.target.value))}
            className="mt-3 w-full accent-ridge"
          />
          <div className="mt-1 flex justify-between text-[11px] text-ink-50">
            <span>0%</span>
            <span>30%</span>
          </div>

          {/* Loan term */}
          <p className="mt-6 text-sm font-semibold text-ink-70">Loan Term</p>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {LOAN_TERM_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setTerm(opt)}
                className={`rounded-lg border py-2.5 text-sm font-semibold transition-colors ${
                  term === opt
                    ? "border-ridge bg-ridge text-clear"
                    : "border-mist text-ink-70 hover:border-ridge"
                }`}
              >
                {opt} Mo.
              </button>
            ))}
          </div>
        </div>

        {/* Estimated payments */}
        <div className="rounded-2xl border border-mist bg-clear p-7 shadow-card lg:p-8">
          <h2 className="font-serif text-xl font-bold text-horizon">
            Estimated Monthly Payments
          </h2>
          <p className="mt-1 text-sm text-ink-50">
            Based on a {usd(cost)} project with {usd(clampedDown)} down.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {FINANCING_TERMS.map((t) => {
              const selected = t.months === term;
              const popular = t.months === 60;
              return (
                <div
                  key={t.months}
                  className={`relative rounded-xl p-5 text-center ${
                    selected
                      ? "ring-2 ring-ridge shadow-card"
                      : "border border-mist"
                  }`}
                >
                  {popular && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-clear">
                      Most Popular
                    </span>
                  )}
                  <p className="text-xs text-ink-50">{t.months} Months</p>
                  <p className="mt-1 font-mono text-2xl font-extrabold text-horizon">
                    {usd(monthlyPayment(principal, t.apr, t.months))}
                    <span className="text-sm font-bold"> /mo*</span>
                  </p>
                  <p className="mt-1 text-xs text-ink-50">
                    {t.apr.toFixed(2)}% APR
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-lg bg-sky-soft/40 p-4">
            <Calculator className="mt-0.5 h-5 w-5 shrink-0 text-ridge" />
            <p className="text-xs leading-relaxed text-ink-70">
              This is a soft estimate. Final terms may vary based on credit
              approval. No impact to credit score to check rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
