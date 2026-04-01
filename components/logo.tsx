export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={compact ? 28 : 40}
        height={compact ? 28 : 40}
        viewBox="0 0 64 64"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="deltartGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#9A84FF" />
            <stop offset="100%" stopColor="#F454D5" />
          </linearGradient>
        </defs>
        <path
          d="M32 5 58 50H6z"
          fill="none"
          stroke="url(#deltartGradient)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M32 17 46 42H18z" fill="none" stroke="url(#deltartGradient)" strokeWidth="3" />
      </svg>
      <div className="leading-tight">
        <p className="text-sm font-semibold tracking-[0.24em] text-white">DELTART</p>
        {!compact && <p className="text-xs text-white/70">Digital Growth Systems</p>}
      </div>
    </div>
  );
}
