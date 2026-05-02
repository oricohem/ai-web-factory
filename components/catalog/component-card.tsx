import type { UiComponentEntry } from "@/lib/types";
import { CategoryPill } from "@/components/ui/category-pill";
import { ScoreBadge } from "@/components/ui/score-badge";
import { StatusBadge } from "@/components/ui/status-badge";

function PreviewPlaceholder({ name }: { name: string }) {
  return (
    <div className="relative aspect-[16/6] overflow-hidden rounded-lg border border-[color:color-mix(in_srgb,var(--factory-border-strong)_72%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_72%,black)]">
      <div className="factory-inspection-grid absolute inset-0" />
      <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
        <div className="rounded-md border border-[color:color-mix(in_srgb,var(--factory-border-strong)_76%,transparent)] bg-black/35 px-2 py-0.5 font-mono text-[10px] text-[color:var(--factory-text-muted)]">
          inspection plate
        </div>
        <div className="rounded-md border border-[color:color-mix(in_srgb,var(--factory-cyan)_45%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-cyan)_12%,transparent)] px-2 py-0.5 font-mono text-[10px] text-[color:color-mix(in_srgb,var(--factory-cyan)_78%,white)]">
          viewport 1280
        </div>
      </div>
      <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
        <div className="grid gap-1">
          <div className="h-1.5 w-16 rounded-full bg-[color:color-mix(in_srgb,var(--factory-amber)_58%,transparent)]" />
          <div className="h-1.5 w-24 rounded-full bg-[color:color-mix(in_srgb,var(--factory-cyan)_50%,transparent)]" />
        </div>
        <div className="truncate text-right text-[10px] font-semibold uppercase tracking-[0.1em] text-[color:var(--factory-text-subtle)]">
          {name}
        </div>
      </div>
    </div>
  );
}

export function ComponentCard({ item }: { item: UiComponentEntry }) {
  return (
    <article className="factory-panel factory-panel-hover group flex flex-col overflow-hidden rounded-2xl p-3">
      <div className="flex flex-wrap items-start justify-between gap-3 pb-2">
        <div className="min-w-0">
          <p className="factory-kicker">Component</p>
          <h3 className="truncate text-base font-semibold tracking-tight text-[color:var(--factory-text)]">
            {item.name}
          </h3>
          <p className="mt-0.5 font-mono text-[11px] text-[color:var(--factory-text-subtle)]">
            {item.id}
          </p>
        </div>
        <ScoreBadge score={item.score} />
      </div>
      <div className="pb-2">
        <PreviewPlaceholder name={item.name} />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <CategoryPill label={item.category} />
          <StatusBadge status={item.status} />
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-[color:var(--factory-text-muted)] sm:line-clamp-3">
          {item.description}
        </p>
        <div className="flex flex-wrap items-center gap-1.5">
          {item.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="factory-chip"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto border-t border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] pt-2 text-xs text-[color:var(--factory-text-subtle)]">
          Updated {item.updatedAt}
        </div>
      </div>
    </article>
  );
}
