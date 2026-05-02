export function StatCard({
  label,
  value,
  hint,
  accent = "cyan",
}: {
  label: string;
  value: string | number;
  hint?: string;
  accent?: "amber" | "green" | "cyan" | "neutral";
}) {
  const meter =
    accent === "amber"
      ? "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--factory-amber)_84%,white),color-mix(in_srgb,var(--factory-amber)_58%,transparent))]"
      : accent === "green"
        ? "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--factory-green)_82%,white),color-mix(in_srgb,var(--factory-green)_58%,transparent))]"
        : accent === "cyan"
          ? "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--factory-cyan)_84%,white),color-mix(in_srgb,var(--factory-cyan)_58%,transparent))]"
          : "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--factory-text-muted)_74%,white),color-mix(in_srgb,var(--factory-text-subtle)_58%,transparent))]";

  return (
    <div className="factory-panel relative overflow-hidden rounded-2xl p-4 sm:p-5">
      <div className="factory-kicker">
        {label}
      </div>
      <div className="mt-2 font-mono text-2xl font-semibold tabular-nums tracking-tight text-[color:var(--factory-text)] sm:text-3xl">
        {value}
      </div>
      {hint ? (
        <p className="mt-1.5 text-xs leading-relaxed text-[color:var(--factory-text-muted)]">
          {hint}
        </p>
      ) : null}
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/35">
        <div className={`h-full w-2/3 rounded-full ${meter}`} />
      </div>
    </div>
  );
}
