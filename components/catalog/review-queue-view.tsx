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
    <div className="mx-auto max-w-6xl space-y-5 px-4 py-6 sm:space-y-6 sm:px-8 sm:py-8">
      <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput
          id="review-search"
          value={q}
          onChange={setQ}
          placeholder="Search title, ID, author, category…"
        />
        <div className="text-xs text-zinc-400">
          Showing{" "}
          <span className="font-mono text-zinc-200">{filtered.length}</span> of{" "}
          <span className="font-mono text-zinc-200">{items.length}</span>
        </div>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        <div className="grid grid-cols-[1fr_auto] gap-0 border-b border-white/10 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 sm:grid-cols-[minmax(0,2fr)_auto_auto_auto] sm:px-5">
          <div>Item</div>
          <div className="hidden sm:block">Status</div>
          <div className="hidden text-right sm:block">Score</div>
          <div className="text-right">Submitted</div>
        </div>
        <ul className="divide-y divide-white/10">
          {filtered.map((r) => (
            <li
              key={r.id}
              className="grid grid-cols-1 items-start gap-2.5 px-4 py-3.5 transition hover:bg-white/[0.03] sm:grid-cols-[minmax(0,2fr)_auto_auto_auto] sm:items-center sm:gap-4 sm:px-5 sm:py-4"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-zinc-400">
                    {r.id}
                  </span>
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] uppercase text-zinc-300">
                    {r.type}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-50 sm:text-base">
                  {r.title}
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  {r.category} · {r.author}
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
              <div className="text-right text-xs text-zinc-400 sm:text-sm">
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
        <p className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-8 text-center text-sm text-zinc-400">
          Nothing in the queue matches these filters.
        </p>
      ) : null}
    </div>
  );
}
