"use client";

export function SearchInput({
  value,
  onChange,
  placeholder = "Search…",
  id,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
}) {
  return (
    <div className="relative w-full min-w-[12rem] sm:max-w-md">
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <span
        className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[color:var(--factory-text-subtle)]"
        aria-hidden
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16.5 16.5 21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_66%,transparent)] py-2 pl-9 pr-3 text-sm text-[color:var(--factory-text)] placeholder:text-[color:var(--factory-text-subtle)] outline-none ring-[color:color-mix(in_srgb,var(--factory-amber)_48%,transparent)] transition focus:border-[color:color-mix(in_srgb,var(--factory-amber)_54%,transparent)] focus:ring-2"
      />
    </div>
  );
}
