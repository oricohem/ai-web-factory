import type { CatalogStatus, ReviewStatus } from "@/lib/types";

type Status = CatalogStatus | ReviewStatus;

const catalogStyles: Record<CatalogStatus, string> = {
  stable:
    "border-[color:color-mix(in_srgb,var(--factory-green)_62%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-green)_16%,var(--factory-surface-raised))] text-[color:color-mix(in_srgb,var(--factory-green)_84%,white)]",
  beta:
    "border-[color:color-mix(in_srgb,var(--factory-amber)_56%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-amber)_14%,var(--factory-surface-raised))] text-[color:color-mix(in_srgb,var(--factory-amber)_86%,white)]",
  draft:
    "border-[color:color-mix(in_srgb,var(--factory-border-strong)_80%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_74%,transparent)] text-[color:var(--factory-text-muted)]",
};

const reviewStyles: Partial<Record<ReviewStatus, string>> = {
  pending:
    "border-[color:color-mix(in_srgb,var(--factory-cyan)_55%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-cyan)_14%,var(--factory-surface-raised))] text-[color:color-mix(in_srgb,var(--factory-cyan)_86%,white)]",
  in_review:
    "border-[color:color-mix(in_srgb,var(--factory-amber)_58%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-amber)_14%,var(--factory-surface-raised))] text-[color:color-mix(in_srgb,var(--factory-amber)_86%,white)]",
  approved:
    "border-[color:color-mix(in_srgb,var(--factory-green)_62%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-green)_15%,var(--factory-surface-raised))] text-[color:color-mix(in_srgb,var(--factory-green)_84%,white)]",
  changes_requested:
    "border-[color:color-mix(in_srgb,var(--factory-red)_66%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-red)_17%,var(--factory-surface-raised))] text-[color:color-mix(in_srgb,var(--factory-red)_86%,white)]",
};

const catalogLabel: Record<CatalogStatus, string> = {
  stable: "Stable",
  beta: "Beta",
  draft: "Draft",
};

const reviewLabel: Record<ReviewStatus, string> = {
  pending: "Pending",
  in_review: "In review",
  approved: "Approved",
  changes_requested: "Changes",
};

function isCatalogStatus(s: Status): s is CatalogStatus {
  return s === "stable" || s === "beta" || s === "draft";
}

export function StatusBadge({
  status,
  variant = "catalog",
}: {
  status: Status;
  variant?: "catalog" | "review";
}) {
  const className = isCatalogStatus(status)
    ? catalogStyles[status]
    : (reviewStyles[status as ReviewStatus] ?? catalogStyles.draft);

  const label = isCatalogStatus(status)
    ? catalogLabel[status]
    : reviewLabel[status as ReviewStatus];

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${className}`}
      title={variant === "review" ? `Review: ${label}` : `Status: ${label}`}
    >
      {label}
    </span>
  );
}
