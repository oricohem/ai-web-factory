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
      ? "border-[color:color-mix(in_srgb,var(--factory-green)_50%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-green)_12%,var(--factory-surface-raised))] text-[color:color-mix(in_srgb,var(--factory-green)_85%,white)]"
      : "border-[color:color-mix(in_srgb,var(--factory-cyan)_50%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-cyan)_12%,var(--factory-surface-raised))] text-[color:color-mix(in_srgb,var(--factory-cyan)_84%,white)]";

  return (
    <div className="space-y-2">
      <div className="factory-kicker">
        {title}
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((x) => (
          <li key={x}>
            <span
              className={`inline-flex rounded-md border px-2 py-0.5 font-mono text-[11px] ${accent}`}
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
    <article className="factory-panel factory-panel-hover group flex flex-col rounded-2xl p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-2">
          <p className="factory-kicker">Pipeline</p>
          <h3 className="text-base font-semibold tracking-tight text-[color:var(--factory-text)] sm:text-lg">
            {item.name}
          </h3>
          <p className="font-mono text-[11px] text-[color:var(--factory-text-subtle)]">
            {item.id}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <CategoryPill label={item.category} />
            <StatusBadge status={item.status} />
          </div>
        </div>
        <ScoreBadge score={item.score} />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--factory-text-muted)]">
        {item.description}
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] bg-black/20 p-3">
          <ChipList title={`Includes · ${item.includes.length}`} items={item.includes.slice(0, 3)} variant="includes" />
        </div>
        <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] bg-black/20 p-3">
          <ChipList
            title={`Dependencies · ${item.dependencies.length}`}
            items={item.dependencies}
            variant="deps"
          />
        </div>
      </div>
      <div className="mt-4 border-t border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] pt-3 text-xs text-[color:var(--factory-text-subtle)]">
        Last run: <span className="text-[color:var(--factory-text-muted)]">{ran}</span>
      </div>
    </article>
  );
}
