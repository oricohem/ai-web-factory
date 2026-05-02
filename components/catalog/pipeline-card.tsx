import type { PipelineEntry } from "@/lib/types";
import { CategoryPill } from "@/components/ui/category-pill";
import { ScoreBadge } from "@/components/ui/score-badge";
import { StatusBadge } from "@/components/ui/status-badge";

function ChipList({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "includes" | "deps";
}) {
  const accent =
    variant === "includes"
      ? "border-emerald-500/25 bg-emerald-500/5"
      : "border-sky-500/25 bg-sky-500/5";

  return (
    <div className="space-y-2">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
        {title}
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((x) => (
          <li key={x}>
            <span
              className={`inline-flex rounded-md border px-2 py-0.5 font-mono text-[11px] text-zinc-200 ${accent}`}
            >
              {x}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PipelineCard({ item }: { item: PipelineEntry }) {
  const ran = item.lastRunAt
    ? new Date(item.lastRunAt).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "Never";

  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition hover:border-sky-300/25 hover:bg-white/[0.04] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-2">
          <h3 className="text-base font-semibold tracking-tight text-white group-hover:text-sky-100 sm:text-lg">
            {item.name}
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            <CategoryPill label={item.category} />
            <StatusBadge status={item.status} />
          </div>
        </div>
        <ScoreBadge score={item.score} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">
        {item.description}
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
        <ChipList title="Includes" items={item.includes} variant="includes" />
        <ChipList
          title="Dependencies"
          items={item.dependencies}
          variant="deps"
        />
      </div>
      <div className="mt-4 border-t border-white/10 pt-3 text-xs text-zinc-400">
        Last run: <span className="text-zinc-200">{ran}</span>
      </div>
    </article>
  );
}
