import { Check, Calendar, ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { SHARE_STEPS, SHARE_PROJECT_TYPES } from "@/lib/share-story-data";

function Field({
  label, placeholder, required, optional,
}: { label: string; placeholder: string; required?: boolean; optional?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-horizon">
        {label}
        {required && <span className="text-accent"> *</span>}
        {optional && <span className="font-normal text-ink-50"> (Optional)</span>}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
      />
    </label>
  );
}

export function ShareForm() {
  return (
    <div className="rounded-2xl border border-mist bg-clear p-6 shadow-card lg:p-8">
      <h2 className="font-serif text-xl font-bold text-horizon">Tell Us About Your Experience</h2>

      {/* Step indicator */}
      <div className="mt-6 flex items-center">
        {SHARE_STEPS.map((step, i) => (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  i === 0 ? "bg-ridge text-clear" : "border border-mist text-ink-50"
                }`}
              >
                {i + 1}
              </span>
              <span className={`hidden text-xs font-semibold sm:block ${i === 0 ? "text-horizon" : "text-ink-50"}`}>
                {step}
              </span>
            </div>
            {i < SHARE_STEPS.length - 1 && <span className="mx-2 h-px flex-1 bg-mist" />}
          </div>
        ))}
      </div>

      {/* Step 1 fields */}
      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your Name" placeholder="Full name" required />
          <Field label="Email Address" placeholder="name@email.com" required />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone Number" placeholder="(425) 555-0123" />
          <Field label="City" placeholder="Enter your city" />
        </div>

        {/* Project type */}
        <div>
          <p className="text-sm font-semibold text-horizon">
            Project Type <span className="text-accent">*</span>
          </p>
          <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {SHARE_PROJECT_TYPES.map((t, i) => (
              <button
                key={t.label}
                type="button"
                className={`relative flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors ${
                  i === 0 ? "border-ridge bg-ridge/5 ring-1 ring-ridge" : "border-mist hover:border-ridge/50"
                }`}
              >
                {i === 0 && (
                  <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-ridge">
                    <Check className="h-2.5 w-2.5 text-clear" />
                  </span>
                )}
                <Icon name={t.icon} className={`h-5 w-5 ${i === 0 ? "text-ridge" : "text-ink-50"}`} />
                <span className="text-[11px] font-semibold text-horizon">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Project Address" placeholder="Street address" optional />
          <label className="block">
            <span className="text-sm font-semibold text-horizon">Completed Date</span>
            <div className="relative mt-1.5">
              <input
                type="text"
                placeholder="Select date"
                className="w-full rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
              />
              <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            </div>
          </label>
        </div>

        {/* Description */}
        <label className="block">
          <span className="text-sm font-semibold text-horizon">
            Tell Us About Your Project <span className="text-accent">*</span>
          </span>
          <span className="mt-0.5 block text-xs text-ink-50">
            What was the scope of work? What prompted you to contact Skyve?
          </span>
          <textarea
            rows={4}
            placeholder="Share details about your project..."
            className="mt-2 w-full resize-none rounded-lg border border-mist bg-clear px-3.5 py-2.5 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge"
          />
        </label>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-ridge px-5 py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright"
        >
          Next: Your Experience <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
