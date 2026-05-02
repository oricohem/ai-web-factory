import type { UiComponentEntry } from "@/lib/types";
import { CategoryPill } from "@/components/ui/category-pill";
import { ScoreBadge } from "@/components/ui/score-badge";
import { StatusBadge } from "@/components/ui/status-badge";

function PreviewPlaceholder({ name }: { name: string }) {
  return (
    <div className="relative aspect-[16/7] overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
        <div className="rounded-md border border-white/10 bg-black/35 px-2 py-1 font-mono text-[10px] text-zinc-300">
          preview
        </div>
        <div className="truncate text-right text-[10px] font-medium uppercase tracking-wider text-zinc-400">
          {name}
        </div>
      </div>
    </div>
  );
}

export function ComponentCard({ item }: { item: UiComponentEntry }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition hover:border-sky-400/25 hover:bg-white/[0.04]">
      <div className="p-3 pb-2">
        <PreviewPlaceholder name={item.name} />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-3 pb-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            <h3 className="truncate text-base font-semibold tracking-tight text-white group-hover:text-sky-100">
              {item.name}
            </h3>
            <CategoryPill label={item.category} />
          </div>
          <ScoreBadge score={item.score} />
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-300 sm:line-clamp-3">
          {item.description}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={item.status} />
          {item.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto border-t border-white/10 pt-2 text-xs text-zinc-400">
          Updated {item.updatedAt}
        </div>
      </div>
    </article>
  );
}
