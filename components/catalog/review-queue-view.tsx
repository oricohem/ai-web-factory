"use client";

import { useMemo, useState } from "react";
import type { ReviewQueueEntry, ReviewStatus } from "@/lib/types";
import { SearchInput } from "@/components/dashboard/search-input";
import { CategoryPill } from "@/components/ui/category-pill";
import { ScoreBadge } from "@/components/ui/score-badge";
import { StatusBadge } from "@/components/ui/status-badge";

const statusFilters: { id: ReviewStatus | "all"; label: string }[] = [
  { id: "all", label: "All statuses" },
  { id: "pending", label: "Pending" },
  { id: "in_review", label: "In review" },
  { id: "changes_requested", label: "Changes" },
  { id: "approved", label: "Approved" },
];

export function ReviewQueueView({ items }: { items: ReviewQueueEntry[] }) {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<ReviewStatus | "all">("all");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((r) => {
      const okStatus = status === "all" || r.status === status;
      if (!okStatus) return false;
      if (!needle) return true;
      const hay = [r.title, r.category, r.author, r.type, r.id]
        .join(" ")
        .toLowerCase();
      return hay.includes(needle);
    });
  }, [items, q, status]);

  return (
    <div className="mx-auto max-w-6xl space-y-4 px-4 py-6 sm:space-y-5 sm:px-8 sm:py-7">
      <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput
          id="review-search"
          value={q}
          onChange={setQ}
          placeholder="Search title, ID, author, category…"
        />
        <div className="text-xs text-[color:var(--factory-text-subtle)]">
          Showing{" "}
          <span className="font-mono text-[color:var(--factory-text-muted)]">{filtered.length}</span> of{" "}
          <span className="font-mono text-[color:var(--factory-text-muted)]">{items.length}</span>
        </div>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 factory-scrollbar">
        <div className="flex min-w-max items-center gap-2">
          {statusFilters.map((s) => (
            <CategoryPill
              key={s.id}
              label={s.label}
              active={status === s.id}
              onClick={() => setStatus(s.id)}
            />
          ))}
        </div>
      </div>

      <div className="factory-panel overflow-hidden rounded-2xl">
        <div className="grid grid-cols-[1fr_auto] gap-0 border-b border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--factory-text-subtle)] sm:grid-cols-[minmax(0,2fr)_auto_auto_auto] sm:px-5">
          <div>Item</div>
          <div className="hidden sm:block">Status</div>
          <div className="hidden text-right sm:block">Score</div>
          <div className="text-right">Submitted</div>
        </div>
        <ul className="divide-y divide-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)]">
          {filtered.map((r) => (
            <li
              key={r.id}
              className="grid grid-cols-1 items-start gap-2.5 px-4 py-3.5 transition hover:bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_52%,transparent)] sm:grid-cols-[minmax(0,2fr)_auto_auto_auto] sm:items-center sm:gap-4 sm:px-5 sm:py-4"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-md border border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-black/20 px-1.5 py-0.5 font-mono text-[10px] text-[color:var(--factory-text-subtle)]">
                    {r.id.toUpperCase()}
                  </span>
                  <span className="rounded-md border border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_66%,transparent)] px-2 py-0.5 text-[10px] uppercase text-[color:var(--factory-text-muted)]">
                    {r.type}
                  </span>
                  <span className="hidden rounded-md border border-[color:color-mix(in_srgb,var(--factory-border)_76%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_68%,transparent)] px-2 py-0.5 text-[10px] font-medium text-[color:var(--factory-text-subtle)] sm:inline-block">
                    {r.category}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-[color:var(--factory-text)] sm:text-base">
                  {r.title}
                </p>
                <p className="mt-1 text-xs text-[color:var(--factory-text-subtle)]">
                  {r.author}
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 sm:hidden">
                  <StatusBadge status={r.status} variant="review" />
                  <ScoreBadge score={r.score} />
                </div>
              </div>
              <div className="hidden sm:block">
                <StatusBadge status={r.status} variant="review" />
              </div>
              <div className="hidden sm:flex sm:justify-end">
                <ScoreBadge score={r.score} />
              </div>
              <div className="text-right text-xs text-[color:var(--factory-text-subtle)] sm:text-sm">
                {new Date(r.submittedAt).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_66%,transparent)] px-4 py-8 text-center text-sm text-[color:var(--factory-text-subtle)]">
          Nothing in the queue matches these filters.
        </p>
      ) : null}
    </div>
  );
}
