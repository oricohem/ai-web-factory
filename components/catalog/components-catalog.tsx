"use client";

import { useMemo, useState } from "react";
import type { UiComponentEntry } from "@/lib/types";
import { ComponentCard } from "@/components/catalog/component-card";
import { SearchInput } from "@/components/dashboard/search-input";
import { CategoryPill } from "@/components/ui/category-pill";

export function ComponentsCatalog({
  items,
  categories,
}: {
  items: UiComponentEntry[];
  categories: string[];
}) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((c) => {
      const okCat = !cat || c.category === cat;
      if (!okCat) return false;
      if (!needle) return true;
      const hay = [
        c.name,
        c.description,
        c.category,
        ...c.tags,
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
          id="components-search"
          value={q}
          onChange={setQ}
          placeholder="Search components, tags, categories…"
        />
        <div className="text-sm text-[color:var(--factory-text-muted)]">
          Showing{" "}
          <span className="font-mono text-[color:var(--factory-text)]">{filtered.length}</span> of{" "}
          <span className="font-mono text-[color:var(--factory-text)]">{items.length}</span>
        </div>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0 factory-scrollbar">
        <div className="flex min-w-max items-center gap-2 pb-1">
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

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <ComponentCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_66%,transparent)] px-4 py-8 text-center text-sm text-[color:var(--factory-text-subtle)]">
          No components match your filters. Try clearing search or pick another
          category.
        </p>
      ) : null}
    </div>
  );
}
