import { ChevronDown, ArrowRight } from "lucide-react";
import { AP_SELECTS } from "@/lib/apply-partner-data";

function Field({ label, placeholder, required, optional }: { label: string; placeholder?: string; required?: boolean; optional?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-horizon">
        {label}
        {required && <span className="text-accent"> *</span>}
        {optional && <span className="font-normal text-ink-50"> (if different)</span>}
      </span>
      <input type="text" placeholder={placeholder} className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
    </label>
  );
}

function Select({ sel }: { sel: { label: string; required?: boolean; placeholder?: string; value?: string; options: string[] } }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-horizon">{sel.label}{sel.required && <span className="text-accent"> *</span>}</span>
      <div className="relative mt-1.5">
        <select defaultValue={sel.value ?? ""} className="w-full appearance-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-70 outline-none focus:border-ridge">
          {sel.placeholder && <option value="">{sel.placeholder}</option>}
          {sel.options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
      </div>
    </label>
  );
}

export function APForm() {
  return (
    <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-8">
      <h2 className="text-sm font-bold uppercase tracking-wide text-ridge">1. Business Information</h2>

      <div className="mt-5 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Business Name" placeholder="Enter your business name" required />
          <Field label="Legal Business Name" placeholder="Enter legal name" optional />
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <Select sel={AP_SELECTS.businessType} />
          <Select sel={AP_SELECTS.yearEstablished} />
          <Select sel={AP_SELECTS.employees} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Primary Contact Name" placeholder="Enter full name" required />
          <Field label="Title" placeholder="e.g., Owner, President" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email Address" placeholder="Enter email address" required />
          <Field label="Phone Number" placeholder="(425) 555-0123" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Business Website" placeholder="https://yourwebsite.com" />
          <Field label="Business Address" placeholder="Enter full address" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <Field label="City" placeholder="Enter city" required />
          <Select sel={AP_SELECTS.state} />
          <Field label="ZIP Code" placeholder="Enter ZIP code" required />
        </div>
        <label className="block">
          <span className="text-xs font-semibold text-horizon">Service Areas <span className="text-accent">*</span></span>
          <input type="text" placeholder="e.g., King County, Snohomish County, Pierce County" className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
          <span className="mt-1.5 block text-[11px] text-ink-50">List the counties or cities where you provide services</span>
        </label>

        <div className="flex justify-end">
          <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-ridge px-6 py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
            Save & Continue <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
