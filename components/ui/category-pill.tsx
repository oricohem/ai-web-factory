export function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const interactiveBase =
    "rounded-lg border px-3 py-1.5 text-sm font-medium whitespace-nowrap transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/70";
  const staticBase =
    "rounded-md border px-2.5 py-1 text-xs font-medium whitespace-nowrap";

  const inactiveInteractive =
    "border-white/12 bg-white/[0.04] text-zinc-200 hover:border-white/20 hover:bg-white/[0.07]";
  const activeInteractive =
    "border-sky-400/40 bg-sky-400/14 text-sky-100 shadow-[0_0_0_1px_rgba(125,211,252,0.18)]";
  const inactiveStatic = "border-white/10 bg-white/[0.03] text-zinc-300";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${interactiveBase} ${
          active ? activeInteractive : inactiveInteractive
        }`}
      >
        {label}
      </button>
    );
  }

  return <span className={`${staticBase} ${inactiveStatic} cursor-default`}>{label}</span>;
}
