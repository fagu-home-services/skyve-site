"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, LayoutGrid, List, Folder, MoreVertical, FileText, Download } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { DOC_TABS, DOC_QUICK, DOC_FOLDERS, DOC_RECENT, DOC_CATEGORY_TONE } from "@/lib/portal-docs-data";

export function DocsBrowser() {
  const [tab, setTab] = useState("All Documents");
  const [query, setQuery] = useState("");

  const recent = DOC_RECENT.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {DOC_TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`shrink-0 whitespace-nowrap border-b-2 px-3.5 py-2.5 text-sm font-semibold transition-colors ${
              tab === t ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents..."
            className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-9 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
          />
        </div>
        <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist px-4 py-2.5 text-sm font-semibold text-ink-70 hover:border-ridge">
          <SlidersHorizontal className="h-4 w-4" /> Filter
        </button>
        <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist px-4 py-2.5 text-sm font-semibold text-ink-70 hover:border-ridge">
          Sort: Newest <ChevronDown className="h-4 w-4" />
        </button>
        <div className="flex items-center overflow-hidden rounded-lg border border-mist">
          <button type="button" aria-label="Grid view" className="flex h-10 w-10 items-center justify-center text-ink-50 hover:text-ridge">
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button type="button" aria-label="List view" className="flex h-10 w-10 items-center justify-center bg-ridge text-clear">
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-sm font-bold text-horizon">Quick Access</h2>
        <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {DOC_QUICK.map((q) => (
            <button key={q.label} type="button" className="rounded-2xl border border-mist bg-clear p-4 text-center shadow-card transition-colors hover:border-ridge">
              <Icon name={q.icon} className={`mx-auto h-7 w-7 ${q.tone}`} />
              <p className="mt-2.5 text-[11px] font-bold leading-snug text-horizon">{q.label}</p>
              <p className="mt-1 font-serif text-xl font-bold text-horizon">{q.count}</p>
              <p className="text-[10px] text-ink-50">documents</p>
            </button>
          ))}
        </div>
      </div>

      {/* Folders */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">Folders</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-mist text-[11px] uppercase tracking-wide text-ink-50">
                <th className="py-2 pr-4 font-semibold">Name</th>
                <th className="py-2 pr-4 font-semibold">Documents</th>
                <th className="py-2 pr-4 font-semibold">Last Updated</th>
                <th className="py-2 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {DOC_FOLDERS.map((f) => (
                <tr key={f.name} className="hover:bg-mist-soft/30">
                  <td className="py-3 pr-4">
                    <span className="flex items-center gap-2.5 font-semibold text-horizon">
                      <Folder className="h-4 w-4 text-ridge" /> {f.name}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-ink-70">{f.count}</td>
                  <td className="py-3 pr-4 text-ink-70">{f.updated}</td>
                  <td className="py-3 text-right">
                    <button type="button" aria-label="More" className="text-ink-50 hover:text-ridge"><MoreVertical className="h-4 w-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Documents */}
      <div className="rounded-2xl border border-mist bg-clear p-5 shadow-card">
        <h2 className="text-sm font-bold text-horizon">Recent Documents</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-mist text-[11px] uppercase tracking-wide text-ink-50">
                <th className="py-2 pr-4 font-semibold">Name</th>
                <th className="py-2 pr-4 font-semibold">Category</th>
                <th className="py-2 pr-4 font-semibold">Uploaded</th>
                <th className="py-2 pr-4 font-semibold">Size</th>
                <th className="py-2 pr-4 font-semibold">Uploaded By</th>
                <th className="py-2 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mist">
              {recent.map((d) => (
                <tr key={d.name} className="hover:bg-mist-soft/30">
                  <td className="py-3 pr-4">
                    <span className="flex items-center gap-2.5 font-semibold text-horizon">
                      <FileText className="h-4 w-4 text-danger" /> {d.name}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${DOC_CATEGORY_TONE[d.category] ?? "bg-mist text-ink-70"}`}>{d.category}</span>
                  </td>
                  <td className="py-3 pr-4 text-ink-70">{d.uploaded}</td>
                  <td className="py-3 pr-4 text-ink-70">{d.size}</td>
                  <td className="py-3 pr-4 text-ink-70">{d.by}</td>
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button type="button" aria-label="Download" className="text-ridge hover:text-accent"><Download className="h-4 w-4" /></button>
                      <button type="button" aria-label="More" className="text-ink-50 hover:text-ridge"><MoreVertical className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm font-semibold text-ridge hover:text-accent">View All Documents →</a>
        </div>
      </div>
    </div>
  );
}
