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
    "rounded-lg border px-3 py-1.5 text-sm font-medium whitespace-nowrap transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:color-mix(in_srgb,var(--factory-amber)_46%,transparent)]";
  const staticBase =
    "rounded-md border px-2 py-1 text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap";

  const inactiveInteractive =
    "border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_68%,transparent)] text-[color:var(--factory-text-muted)] hover:border-[color:color-mix(in_srgb,var(--factory-amber)_36%,var(--factory-border))] hover:text-[color:var(--factory-text)]";
  const activeInteractive =
    "border-[color:color-mix(in_srgb,var(--factory-amber)_56%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-amber)_16%,var(--factory-surface))] text-[color:color-mix(in_srgb,var(--factory-amber)_84%,white)]";
  const inactiveStatic =
    "border-[color:color-mix(in_srgb,var(--factory-border)_76%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_66%,transparent)] text-[color:var(--factory-text-subtle)]";

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
