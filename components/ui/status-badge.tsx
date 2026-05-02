import type { CatalogStatus, ReviewStatus } from "@/lib/types";

type Status = CatalogStatus | ReviewStatus;

const catalogStyles: Record<CatalogStatus, string> = {
  stable:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20",
  beta: "border-amber-500/30 bg-amber-500/10 text-amber-200 ring-1 ring-inset ring-amber-500/20",
  draft:
    "border-zinc-500/40 bg-zinc-500/10 text-zinc-300 ring-1 ring-inset ring-zinc-500/20",
};

const reviewStyles: Partial<Record<ReviewStatus, string>> = {
  pending:
    "border-sky-500/30 bg-sky-500/10 text-sky-200 ring-1 ring-inset ring-sky-500/20",
  in_review:
    "border-violet-500/35 bg-violet-500/10 text-violet-200 ring-1 ring-inset ring-violet-500/25",
  approved:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-500/20",
  changes_requested:
    "border-rose-500/35 bg-rose-500/10 text-rose-200 ring-1 ring-inset ring-rose-500/25",
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
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${className}`}
      title={variant === "review" ? `Review: ${label}` : `Status: ${label}`}
    >
      {label}
    </span>
  );
}
