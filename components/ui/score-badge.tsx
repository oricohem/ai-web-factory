function tierFromScore(score: number): {
  label: string;
  tint: string;
  text: string;
  meter: string;
} {
  if (score >= 90)
    return {
      label: "Prime",
      tint: "bg-[color:color-mix(in_srgb,var(--factory-green)_15%,var(--factory-surface-raised))] border-[color:color-mix(in_srgb,var(--factory-green)_62%,transparent)]",
      text: "text-[color:color-mix(in_srgb,var(--factory-green)_84%,white)]",
      meter:
        "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--factory-green)_84%,white),color-mix(in_srgb,var(--factory-green)_58%,transparent))]",
    };
  if (score >= 80)
    return {
      label: "Strong",
      tint: "bg-[color:color-mix(in_srgb,var(--factory-cyan)_14%,var(--factory-surface-raised))] border-[color:color-mix(in_srgb,var(--factory-cyan)_56%,transparent)]",
      text: "text-[color:color-mix(in_srgb,var(--factory-cyan)_84%,white)]",
      meter:
        "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--factory-cyan)_82%,white),color-mix(in_srgb,var(--factory-cyan)_56%,transparent))]",
    };
  if (score >= 70)
    return {
      label: "Good",
      tint: "bg-[color:color-mix(in_srgb,var(--factory-amber)_14%,var(--factory-surface-raised))] border-[color:color-mix(in_srgb,var(--factory-amber)_56%,transparent)]",
      text: "text-[color:color-mix(in_srgb,var(--factory-amber)_86%,white)]",
      meter:
        "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--factory-amber)_86%,white),color-mix(in_srgb,var(--factory-amber)_60%,transparent))]",
    };
  return {
    label: "Low",
    tint: "bg-[color:color-mix(in_srgb,var(--factory-red)_15%,var(--factory-surface-raised))] border-[color:color-mix(in_srgb,var(--factory-red)_58%,transparent)]",
    text: "text-[color:color-mix(in_srgb,var(--factory-red)_84%,white)]",
    meter:
      "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--factory-red)_84%,white),color-mix(in_srgb,var(--factory-red)_58%,transparent))]",
  };
}

export function ScoreBadge({ score }: { score: number }) {
  const safe = Math.max(0, Math.min(100, Math.round(score)));
  const tier = tierFromScore(safe);

  return (
    <div
      className={`min-w-[5.75rem] rounded-lg border px-2 py-1.5 ${tier.tint}`}
      title={`Quality score: ${safe} — ${tier.label}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[color:var(--factory-text-subtle)]">
          Score
        </div>
        <div
          className={`font-mono text-sm font-semibold tabular-nums leading-none ${tier.text}`}
        >
          {safe}
        </div>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-black/35">
        <div
          className={`h-full rounded-full ${tier.meter}`}
          style={{ width: `${safe}%` }}
        />
      </div>
    </div>
  );
}
