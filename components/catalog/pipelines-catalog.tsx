"use client";

import { useMemo, useState } from "react";
import type { PipelineEntry } from "@/lib/types";
import { PipelineCard } from "@/components/catalog/pipeline-card";
import { SearchInput } from "@/components/dashboard/search-input";
import { CategoryPill } from "@/components/ui/category-pill";

export function PipelinesCatalog({
  items,
  categories,
}: {
  items: PipelineEntry[];
  categories: string[];
}) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((p) => {
      const okCat = !cat || p.category === cat;
      if (!okCat) return false;
      if (!needle) return true;
      const hay = [
        p.name,
        p.description,
        p.category,
        ...p.includes,
        ...p.dependencies,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(needle);
    });
  }, [items, q, cat]);

  return (
    <div className="mx-auto max-w-6xl space-y-4 px-4 py-6 sm:space-y-5 sm:px-8 sm:py-7">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput
          id="pipelines-search"
          value={q}
          onChange={setQ}
          placeholder="Search pipelines, steps, dependencies…"
        />
        <div className="text-sm text-[color:var(--factory-text-muted)]">
          Showing{" "}
          <span className="font-mono text-[color:var(--factory-text)]">{filtered.length}</span> of{" "}
          <span className="font-mono text-[color:var(--factory-text)]">{items.length}</span>
        </div>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 factory-scrollbar">
        <div className="flex w-max items-center gap-2 pr-2">
          <CategoryPill
            label="All categories"
            active={cat === null}
            onClick={() => setCat(null)}
          />
          {categories.map((c) => (
            <CategoryPill
              key={c}
              label={c}
              active={cat === c}
              onClick={() => setCat(c)}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((item) => (
          <PipelineCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_66%,transparent)] px-4 py-8 text-center text-sm text-[color:var(--factory-text-subtle)]">
          No pipelines match your filters. Try a different query or category.
        </p>
      ) : null}
    </div>
  );
}
