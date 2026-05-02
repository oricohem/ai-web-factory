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
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput
          id="components-search"
          value={q}
          onChange={setQ}
          placeholder="Search components, tags, categories…"
        />
        <div className="text-xs text-zinc-500">
          Showing{" "}
          <span className="font-mono text-zinc-300">{filtered.length}</span> of{" "}
          <span className="font-mono text-zinc-300">{items.length}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
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

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <ComponentCard key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-8 text-center text-sm text-zinc-500">
          No components match your filters. Try clearing search or pick another
          category.
        </p>
      ) : null}
    </div>
  );
}
