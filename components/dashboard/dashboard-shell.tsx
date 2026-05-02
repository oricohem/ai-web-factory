"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/pipelines", label: "Pipelines" },
  { href: "/review-queue", label: "Review Queue" },
];

function NavLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
        active
          ? "bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
          : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
      }`}
    >
      {active && (
        <span
          className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.6)]"
          aria-hidden
        />
      )}
      <span className={active ? "pl-2" : ""}>{label}</span>
    </Link>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-full flex-1 bg-zinc-950 text-zinc-100">
      {/* Mobile overlay */}
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/10 bg-zinc-950/95 px-4 py-6 backdrop-blur-xl transition-transform duration-200 lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="mb-8 flex items-center gap-3 px-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25 ring-1 ring-white/10">
            <span className="font-mono text-sm font-bold text-white">AI</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-white">
              AI Web Factory
            </div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
              Catalog v1
            </div>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)
              }
              onNavigate={() => setOpen(false)}
            />
          ))}
        </nav>

        <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs text-zinc-500">
          <p className="font-medium text-zinc-400">Local catalog</p>
          <p className="mt-1 leading-relaxed">
            Mock data only — wire APIs when you are ready.
          </p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-white/10 bg-zinc-950/80 px-4 backdrop-blur-xl lg:hidden">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-200"
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
          <span className="text-sm font-medium text-zinc-200">Menu</span>
        </header>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
