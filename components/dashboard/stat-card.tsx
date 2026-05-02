export function StatCard({
  label,
  value,
  hint,
  accent = "violet",
}: {
  label: string;
  value: string | number;
  hint?: string;
  accent?: "violet" | "emerald" | "amber" | "sky";
}) {
  const ring =
    accent === "violet"
      ? "from-violet-500/30 to-fuchsia-500/20"
      : accent === "emerald"
        ? "from-emerald-500/30 to-teal-500/20"
        : accent === "amber"
          ? "from-amber-500/30 to-orange-500/20"
          : "from-sky-500/30 to-cyan-500/20";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${ring} blur-2xl`}
        aria-hidden
      />
      <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
        {label}
      </div>
      <div className="mt-2 font-mono text-3xl font-semibold tabular-nums tracking-tight text-white">
        {value}
      </div>
      {hint ? (
        <p className="mt-2 text-xs leading-relaxed text-zinc-500">{hint}</p>
      ) : null}
    </div>
  );
}
