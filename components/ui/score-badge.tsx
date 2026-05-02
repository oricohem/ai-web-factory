function tierFromScore(score: number): {
  label: string;
  bar: string;
  text: string;
} {
  if (score >= 90)
    return {
      label: "Excellent",
      bar: "from-emerald-400 to-teal-400",
      text: "text-emerald-200",
    };
  if (score >= 80)
    return {
      label: "Strong",
      bar: "from-violet-400 to-fuchsia-400",
      text: "text-violet-200",
    };
  if (score >= 70)
    return {
      label: "Good",
      bar: "from-amber-400 to-orange-400",
      text: "text-amber-200",
    };
  return {
    label: "Needs work",
    bar: "from-zinc-500 to-zinc-400",
    text: "text-zinc-300",
  };
}

export function ScoreBadge({ score }: { score: number }) {
  const safe = Math.max(0, Math.min(100, Math.round(score)));
  const tier = tierFromScore(safe);

  return (
    <div
      className="flex min-w-[5.5rem] flex-col gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2"
      title={`Quality score: ${safe} — ${tier.label}`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
          Score
        </span>
        <span
          className={`font-mono text-sm font-semibold tabular-nums ${tier.text}`}
        >
          {safe}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${tier.bar}`}
          style={{ width: `${safe}%` }}
        />
      </div>
    </div>
  );
}
