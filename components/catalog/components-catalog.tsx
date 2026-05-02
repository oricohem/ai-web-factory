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
    <div className="mx-auto max-w-6xl space-y-5 px-4 py-6 sm:space-y-6 sm:px-8 sm:py-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput
          id="components-search"
          value={q}
          onChange={setQ}
          placeholder="Search components, tags, categories…"
        />
        <div className="text-sm text-zinc-400">
          Showing{" "}
          <span className="font-mono text-zinc-100">{filtered.length}</span> of{" "}
          <span className="font-mono text-zinc-100">{items.length}</span>
        </div>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
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
        <p className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-8 text-center text-sm text-zinc-400">
          No components match your filters. Try clearing search or pick another
          category.
        </p>
      ) : null}
    </div>
  );
}
