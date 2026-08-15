"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

function BrandMark({ kind }: { kind: "google" | "apple" | "microsoft" }) {
  if (kind === "google") return <span className="text-base font-bold text-[#4285F4]">G</span>;
  if (kind === "apple") return <span className="text-base font-bold text-horizon"></span>;
  return (
    <span className="grid grid-cols-2 gap-0.5">
      <span className="h-2 w-2 bg-[#f25022]" />
      <span className="h-2 w-2 bg-[#7fba00]" />
      <span className="h-2 w-2 bg-[#00a4ef]" />
      <span className="h-2 w-2 bg-[#ffb900]" />
    </span>
  );
}

export function LoginForm() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full max-w-md rounded-2xl border border-mist bg-clear p-6 shadow-elevated sm:p-8">
      <h1 className="font-serif text-3xl font-bold text-horizon">Login</h1>
      <p className="mt-2 text-sm text-ink-70">Enter your email and password to access your Skyve account.</p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-xs font-semibold text-horizon">Email Address</span>
          <div className="relative mt-1.5">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input type="email" placeholder="you@email.com" className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-10 pr-3 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-horizon">Password</span>
          <div className="relative mt-1.5">
            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-50" />
            <input type={show ? "text" : "password"} placeholder="Enter your password" className="w-full rounded-lg border border-mist bg-clear py-2.5 pl-10 pr-10 text-sm text-ink-90 outline-none placeholder:text-ink-50 focus:border-ridge" />
            <button type="button" onClick={() => setShow(!show)} aria-label="Toggle password" className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-50 hover:text-ridge">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>

        <div className="text-right">
          <a href="#" className="text-xs font-semibold text-ridge hover:text-accent">Forgot your password?</a>
        </div>

        <label className="flex items-center gap-2 text-sm text-ink-70">
          <input type="checkbox" className="h-4 w-4 rounded border-mist text-ridge accent-ridge" /> Remember me
        </label>

        <Link href="/portal" className="flex w-full items-center justify-center rounded-lg bg-ridge py-3 text-sm font-semibold text-clear transition-colors hover:bg-ridge-bright">
          Log In
        </Link>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-mist" />
          <span className="text-xs text-ink-50">or</span>
          <span className="h-px flex-1 bg-mist" />
        </div>

        {[
          { kind: "google", label: "Continue with Google" },
          { kind: "apple", label: "Continue with Apple" },
          { kind: "microsoft", label: "Continue with Microsoft" },
        ].map((b) => (
          <button key={b.label} type="button" className="flex w-full items-center justify-center gap-3 rounded-lg border border-mist bg-clear py-2.5 text-sm font-semibold text-horizon transition-colors hover:border-ridge">
            <span className="flex w-5 justify-center"><BrandMark kind={b.kind as "google" | "apple" | "microsoft"} /></span>
            {b.label}
          </button>
        ))}

        <p className="text-center text-sm text-ink-70">
          Don&apos;t have an account? <Link href="/estimate" className="font-semibold text-ridge hover:text-accent">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
