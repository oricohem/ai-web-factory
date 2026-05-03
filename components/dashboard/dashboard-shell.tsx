"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Factory floor", code: "OVR" },
  { href: "/components", label: "Components", code: "CMP" },
  { href: "/pipelines", label: "Pipelines", code: "PLN" },
  { href: "/review-queue", label: "Review queue", code: "REV" },
];

function NavLink({
  href,
  label,
  code,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  code: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`factory-panel-hover group rounded-xl border px-3 py-2.5 transition ${
        active
          ? "border-[color:color-mix(in_srgb,var(--factory-amber)_42%,var(--factory-border))] bg-[color:color-mix(in_srgb,var(--factory-amber)_14%,var(--factory-surface-raised))] text-[color:var(--factory-text)]"
          : "border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_52%,transparent)] text-[color:var(--factory-text-muted)] hover:text-[color:var(--factory-text)]"
      }`}
    >
      <span className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium tracking-tight">{label}</span>
        <span
          className={`rounded-md border px-1.5 py-0.5 font-mono text-[10px] tracking-wider ${
            active
              ? "border-[color:color-mix(in_srgb,var(--factory-amber)_72%,transparent)] text-[color:color-mix(in_srgb,var(--factory-amber)_84%,white)]"
              : "border-[color:color-mix(in_srgb,var(--factory-border-strong)_72%,transparent)] text-[color:var(--factory-text-subtle)] group-hover:text-[color:var(--factory-text-muted)]"
          }`}
        >
          {code}
        </span>
      </span>
    </Link>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="factory-shell flex min-h-full flex-1 text-[color:var(--factory-text)]">
      <div aria-hidden className="factory-shell-rails hidden lg:block" />
      {/* Mobile overlay */}
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/55 lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--factory-rail)_96%,black),color-mix(in_srgb,var(--factory-rail)_90%,transparent))] px-4 py-5 shadow-[16px_0_48px_-40px_rgba(0,0,0,0.9)] transition-transform duration-200 lg:static lg:translate-x-0 lg:rounded-r-2xl lg:border-r-[color:color-mix(in_srgb,var(--factory-border-strong)_40%,transparent)] ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="mb-6 rounded-2xl border border-[color:color-mix(in_srgb,var(--factory-border-strong)_58%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_66%,transparent)] p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:color-mix(in_srgb,var(--factory-amber)_65%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-amber)_11%,transparent)]">
              <span className="font-mono text-sm font-semibold text-[color:color-mix(in_srgb,var(--factory-amber)_80%,white)]">
                WF
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-[0.015em] text-[color:var(--factory-text)]">
                AI Web Factory
              </p>
              <p className="factory-kicker mt-1">Control workspace</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
            <div className="rounded-lg border border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_68%,transparent)] px-2 py-1.5">
              <p className="factory-kicker">Line</p>
              <p className="mt-0.5 font-mono text-[color:var(--factory-text-muted)]">
                CAL-16
              </p>
            </div>
            <div className="rounded-lg border border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_68%,transparent)] px-2 py-1.5">
              <p className="factory-kicker">Shift</p>
              <p className="mt-0.5 font-mono text-[color:var(--factory-text-muted)]">
                Night
              </p>
            </div>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1.5" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              code={item.code}
              active={
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)
              }
              onNavigate={() => setOpen(false)}
            />
          ))}
        </nav>

        <div className="mt-auto rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_70%,transparent)] p-3 text-xs">
          <div className="mb-2 flex items-center justify-between">
            <p className="factory-kicker">Factory state</p>
            <span className="rounded-md border border-[color:color-mix(in_srgb,var(--factory-green)_40%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-green)_15%,transparent)] px-1.5 py-0.5 font-mono text-[10px] text-[color:color-mix(in_srgb,var(--factory-green)_82%,white)]">
              nominal
            </span>
          </div>
          <p className="leading-relaxed text-[color:var(--factory-text-subtle)]">
            Local catalog only, production services disconnected.
          </p>
        </div>
      </aside>

      <div className="factory-main-frame flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-canvas)_95%,black)] px-4 lg:hidden">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:color-mix(in_srgb,var(--factory-border)_70%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_72%,transparent)] text-[color:var(--factory-text-muted)]"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
          >
            <span className="sr-only">Open menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[color:var(--factory-text)]">
              AI Web Factory
            </p>
            <p className="factory-kicker mt-0.5">Control workspace</p>
          </div>
        </header>

        <div className="factory-main-stage flex-1">{children}</div>
      </div>
    </div>
  );
}
