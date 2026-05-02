function tierFromScore(score: number): {
  label: string;
  tint: string;
  text: string;
} {
  if (score >= 90)
    return {
      label: "Excellent",
      tint: "bg-emerald-500/12 border-emerald-500/30",
      text: "text-emerald-100",
    };
  if (score >= 80)
    return {
      label: "Strong",
      tint: "bg-sky-500/12 border-sky-500/30",
      text: "text-sky-100",
    };
  if (score >= 70)
    return {
      label: "Good",
      tint: "bg-amber-500/12 border-amber-500/30",
      text: "text-amber-100",
    };
  return {
    label: "Needs work",
    tint: "bg-zinc-500/12 border-zinc-500/30",
    text: "text-zinc-100",
  };
}

export function ScoreBadge({ score }: { score: number }) {
  const safe = Math.max(0, Math.min(100, Math.round(score)));
  const tier = tierFromScore(safe);

  return (
    <div
      className={`flex min-w-[5rem] items-center justify-between gap-2 rounded-lg border px-2.5 py-1.5 ${tier.tint}`}
      title={`Quality score: ${safe} — ${tier.label}`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-wide text-zinc-300">
        Score
      </div>
      <div
        className={`font-mono text-sm font-semibold tabular-nums leading-none ${tier.text}`}
      >
        {safe}
      </div>
    </div>
  );
}
