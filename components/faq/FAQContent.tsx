"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Minus, Plus, Phone, ArrowRight, ClipboardCheck, FileText } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { FAQ_CATEGORIES, FAQ_ITEMS, FAQ_STILL, FAQ_TOP_TOPICS, FAQ_ASK, FAQ_RESOURCES } from "@/lib/faq-data";

export function FAQContent() {
  const [cat, setCat] = useState("All Questions");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(0);

  const items = FAQ_ITEMS.filter((it) => {
    const matchCat = cat === "All Questions" || it.category === cat;
    const matchQuery = it.q.toLowerCase().includes(query.toLowerCase()) || it.a.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <section className="bg-clear py-12 lg:py-16">
      <div className="container-skyve grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Main */}
        <div>
          {/* Search */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full rounded-xl border border-mist bg-clear py-3.5 pl-11 pr-4 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
            />
          </div>

          {/* Category chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {FAQ_CATEGORIES.map((c) => (
              <button
                key={c.label}
                type="button"
                onClick={() => setCat(c.label)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-semibold transition-colors ${
                  cat === c.label ? "border-ridge bg-ridge text-clear" : "border-mist bg-clear text-ink-70 hover:border-ridge"
                }`}
              >
                <Icon name={c.icon} className="h-3.5 w-3.5" /> {c.label}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <h2 className="mt-8 font-serif text-xl font-bold text-horizon">Frequently Asked Questions</h2>
          <ul className="mt-4 divide-y divide-mist border-y border-mist">
            {items.map((it, i) => (
              <li key={it.q}>
                <button type="button" onClick={() => setOpen(open === i ? -1 : i)} className={`flex w-full items-center justify-between gap-4 py-4 text-left ${open === i ? "" : ""}`}>
                  <span className="text-sm font-bold text-horizon">{it.q}</span>
                  {open === i ? <Minus className="h-4 w-4 shrink-0 text-ridge" /> : <Plus className="h-4 w-4 shrink-0 text-ink-50" />}
                </button>
                {open === i && <p className="pb-4 pr-8 text-sm leading-relaxed text-ink-70">{it.a}</p>}
              </li>
            ))}
            {items.length === 0 && <li className="py-8 text-center text-sm text-ink-50">No questions match your search.</li>}
          </ul>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Still have a question */}
          <div className="rounded-2xl border border-mist bg-mist-soft/40 p-5">
            <h3 className="text-sm font-bold text-horizon">{FAQ_STILL.title}</h3>
            <p className="mt-1 text-xs text-ink-70">{FAQ_STILL.desc}</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a href={`tel:${FAQ_STILL.phone.replace(/[^\d]/g, "")}`} className="flex items-center gap-2 text-sm font-semibold text-horizon">
                <Phone className="h-4 w-4 text-ridge" /> {FAQ_STILL.phone}
              </a>
              <Link href={FAQ_STILL.button.href} className="rounded-lg border border-ridge bg-clear px-4 py-2 text-center text-xs font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
                {FAQ_STILL.button.label}
              </Link>
            </div>
          </div>

          {/* Top Topics */}
          <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
            <h3 className="text-sm font-bold text-horizon">{FAQ_TOP_TOPICS.title}</h3>
            <ul className="mt-3 divide-y divide-mist">
              {FAQ_TOP_TOPICS.items.map((t) => (
                <li key={t.label}>
                  <button type="button" className="flex w-full items-center justify-between py-2.5 text-sm text-ink-70 hover:text-ridge">
                    {t.label}
                    <span className="rounded-full bg-mist px-2 py-0.5 text-[11px] font-semibold text-ink-70">{t.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ask a question dark card */}
          <div className="rounded-2xl bg-horizon-deep p-6 text-clear shadow-card">
            <ClipboardCheck className="h-8 w-8 text-sky" />
            <h3 className="mt-3 font-serif text-lg font-bold">{FAQ_ASK.title}</h3>
            <p className="mt-2 text-sm text-mist-soft/80">{FAQ_ASK.desc}</p>
            <Link href={FAQ_ASK.button.href} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-ridge px-5 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
              {FAQ_ASK.button.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Helpful Resources */}
          <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
            <h3 className="text-sm font-bold text-horizon">{FAQ_RESOURCES.title}</h3>
            <ul className="mt-3 space-y-3">
              {FAQ_RESOURCES.items.map((r) => (
                <li key={r.title}>
                  <Link href={r.href} className="flex items-start gap-3 hover:text-ridge">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-ridge" />
                    <span>
                      <span className="block text-sm font-bold text-horizon">{r.title}</span>
                      <span className="block text-[11px] text-ink-50">{r.desc}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={FAQ_RESOURCES.link.href} className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ridge hover:text-accent">
              {FAQ_RESOURCES.link.label} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
