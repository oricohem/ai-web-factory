export function StatCard({
  label,
  value,
  hint,
  accent = "sky",
}: {
  label: string;
  value: string | number;
  hint?: string;
  accent?: "sky" | "emerald" | "amber" | "slate";
}) {
  const ring =
    accent === "sky"
      ? "from-sky-400/20 to-cyan-400/10"
      : accent === "emerald"
        ? "from-emerald-500/30 to-teal-500/20"
        : accent === "amber"
          ? "from-amber-500/30 to-orange-500/20"
          : "from-zinc-500/30 to-zinc-400/20";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] sm:p-5">
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${ring} blur-xl`}
        aria-hidden
      />
      <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
        {label}
      </div>
      <div className="mt-2 font-mono text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl">
        {value}
      </div>
      {hint ? (
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">{hint}</p>
      ) : null}
    </div>
  );
}
