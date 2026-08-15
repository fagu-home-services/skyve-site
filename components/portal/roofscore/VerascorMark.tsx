/* IP-safe text wordmark for the Verascor product (no logo art). */
export function VerascorMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0f766e]" fill="currentColor" aria-hidden>
        <path d="M12 2 3 6v6c0 5 3.8 8.5 9 10 5.2-1.5 9-5 9-10V6l-9-4Z" opacity="0.9" />
      </svg>
      <span className="font-serif text-base font-bold tracking-tight text-[#0f766e]">verascor</span>
    </span>
  );
}
