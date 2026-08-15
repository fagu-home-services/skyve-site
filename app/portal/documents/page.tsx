import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Upload, FolderPlus, ShieldCheck } from "lucide-react";
import { PortalShell } from "@/components/portal/PortalShell";
import { PassportHeader } from "@/components/portal/passport/PassportHeader";
import { DocsBrowser } from "@/components/portal/docs/DocsBrowser";
import { DocsAside } from "@/components/portal/docs/DocsAside";
import { VerascorMark } from "@/components/portal/roofscore/VerascorMark";
import { DOC_SECURE } from "@/lib/portal-docs-data";

export const metadata: Metadata = {
  title: "Documents — Future Homeowner Portal | Skyve Roofing & Exteriors",
  description:
    "All your important home documents in one secure place — powered by Verascor. Folders, categories, warranties, inspection reports, and financial records.",
};

const TOP_LEFT = (
  <div>
    <nav className="flex items-center gap-1.5 text-xs text-ink-50">
      <Link href="/portal" className="hover:text-ridge">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="font-semibold text-horizon">Documents</span>
    </nav>
    <div className="mt-1 flex flex-wrap items-center gap-2">
      <h1 className="font-serif text-2xl font-bold text-horizon sm:text-3xl">Documents</h1>
      <span className="hidden items-center gap-1.5 text-xs text-ink-50 sm:flex">
        Powered by <VerascorMark />
      </span>
    </div>
    <p className="mt-0.5 text-sm text-ink-70">All your important home documents in one secure place.</p>
  </div>
);

const TOP_ACTIONS = (
  <div className="flex items-center gap-2">
    <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-mist bg-clear px-4 py-2.5 text-sm font-semibold text-horizon transition-colors hover:border-ridge hover:text-ridge">
      <Upload className="h-4 w-4" /> <span className="hidden sm:inline">Upload Document</span>
    </button>
    <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-ridge px-4 py-2.5 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
      <FolderPlus className="h-4 w-4" /> <span className="hidden sm:inline">New Folder</span>
    </button>
  </div>
);

export default function PortalDocumentsPage() {
  return (
    <PortalShell active="Documents" topLeft={TOP_LEFT} topActions={TOP_ACTIONS}>
      <div className="space-y-6">
        <PassportHeader />

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <DocsBrowser />
          <DocsAside />
        </div>

        {/* Secure band */}
        <div className="flex flex-col items-start gap-5 rounded-2xl border border-mist bg-sky-soft/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-clear shadow-card">
              <ShieldCheck className="h-6 w-6 text-ridge" />
            </span>
            <div>
              <p className="text-sm font-bold text-horizon">{DOC_SECURE.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-70">{DOC_SECURE.desc}</p>
            </div>
          </div>
          <button type="button" className="shrink-0 rounded-lg border border-ridge bg-clear px-5 py-2.5 text-sm font-semibold text-ridge transition-colors hover:bg-ridge hover:text-clear">
            {DOC_SECURE.button.label}
          </button>
        </div>
      </div>
    </PortalShell>
  );
}
