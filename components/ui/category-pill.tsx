export function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const base =
    "rounded-full border px-3 py-1 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400/60";

  const inactive =
    "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/15 hover:bg-white/[0.06]";
  const activeStyles =
    "border-violet-500/40 bg-violet-500/15 text-violet-100 shadow-[0_0_0_1px_rgba(139,92,246,0.15)]";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${active ? activeStyles : inactive}`}
      >
        {label}
      </button>
    );
  }

  return (
    <span className={`${base} ${inactive} cursor-default`}>{label}</span>
  );
}
