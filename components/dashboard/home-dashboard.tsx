import Link from "next/link";
import type { PipelineEntry, ReviewQueueEntry, UiComponentEntry } from "@/lib/types";
import { StatCard } from "@/components/dashboard/stat-card";

function ListRow({
  title,
  meta,
  href,
  badge,
}: {
  title: string;
  meta: string;
  href: string;
  badge?: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-start justify-between gap-3 rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_66%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_48%,transparent)] px-3 py-2.5 transition hover:border-[color:color-mix(in_srgb,var(--factory-amber)_34%,var(--factory-border))] hover:bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_56%,transparent)]"
      >
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[color:var(--factory-text)]">
            {title}
          </p>
          <p className="mt-0.5 text-xs text-[color:var(--factory-text-subtle)]">{meta}</p>
        </div>
        {badge ? (
          <span className="shrink-0 rounded-md border border-[color:color-mix(in_srgb,var(--factory-border-strong)_64%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_66%,transparent)] px-2 py-0.5 text-[11px] font-mono text-[color:var(--factory-text-muted)]">
            {badge}
          </span>
        ) : null}
      </Link>
    </li>
  );
}

export function HomeDashboard({
  components,
  pipelines,
  reviews,
}: {
  components: UiComponentEntry[];
  pipelines: PipelineEntry[];
  reviews: ReviewQueueEntry[];
}) {
  const pendingReviews = reviews.filter(
    (r) => r.status === "pending" || r.status === "in_review",
  ).length;
  const avgComponentScore = Math.round(
    components.reduce((a, c) => a + c.score, 0) / components.length,
  );
  const recentComponents = [...components]
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, 4);
  const recentPipelines = [...pipelines]
    .filter((p) => p.lastRunAt)
    .sort((a, b) =>
      (a.lastRunAt ?? "") < (b.lastRunAt ?? "") ? 1 : -1,
    )
    .slice(0, 3);
  const hotQueue = [...reviews]
    .sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1))
    .slice(0, 4);
  const approvedItems = reviews.filter((r) => r.status === "approved").length;
  const activePipelines = pipelines.filter((p) => p.status !== "draft").length;

  return (
    <div className="mx-auto max-w-6xl space-y-7 px-4 py-6 sm:space-y-8 sm:px-8 sm:py-7">
      <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="UI components"
          value={components.length}
          hint="Inspected blocks in catalog inventory."
          accent="cyan"
        />
        <StatCard
          label="Active pipelines"
          value={activePipelines}
          hint={`${pipelines.length} total lines in factory registry.`}
          accent="green"
        />
        <StatCard
          label="Open triage"
          value={pendingReviews}
          hint="Pending and in-review decisions."
          accent="amber"
        />
        <StatCard
          label="Approved this cycle"
          value={approvedItems}
          hint={`Quality floor ${avgComponentScore} average score.`}
          accent="neutral"
        />
      </div>

      <section className="factory-panel rounded-2xl p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] bg-black/20 px-3 py-2.5">
            <p className="factory-kicker">Inventory</p>
            <p className="mt-1 text-sm text-[color:var(--factory-text-muted)]">
              Components, templates, and interaction modules.
            </p>
          </div>
          <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] bg-black/20 px-3 py-2.5">
            <p className="factory-kicker">Queue</p>
            <p className="mt-1 text-sm text-[color:var(--factory-text-muted)]">
              Review-ready entries prioritized by score and status.
            </p>
          </div>
          <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] bg-black/20 px-3 py-2.5">
            <p className="factory-kicker">Pipeline state</p>
            <p className="mt-1 text-sm text-[color:var(--factory-text-muted)]">
              Runs, dependencies, and readiness for promotion.
            </p>
          </div>
          <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] bg-black/20 px-3 py-2.5">
            <p className="factory-kicker">Quality</p>
            <p className="mt-1 text-sm text-[color:var(--factory-text-muted)]">
              Evidence trail from score, status, and latest revision.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="factory-panel rounded-2xl p-4 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-sm font-semibold text-[color:var(--factory-text)]">
              Recently calibrated components
            </h2>
            <Link
              href="/components"
              className="factory-primary-button rounded-md px-2.5 py-1 text-xs font-semibold"
            >
              Open line
            </Link>
          </div>
          <ul className="mt-2.5 space-y-2">
            {recentComponents.map((c) => (
              <ListRow
                key={c.id}
                title={c.name}
                meta={`${c.category} · ${c.updatedAt}`}
                href="/components"
                badge={`Q${c.score}`}
              />
            ))}
          </ul>
        </section>

        <section className="factory-panel rounded-2xl p-4 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-sm font-semibold text-[color:var(--factory-text)]">
              Pipeline run ledger
            </h2>
            <Link
              href="/pipelines"
              className="factory-primary-button rounded-md px-2.5 py-1 text-xs font-semibold"
            >
              Inspect runs
            </Link>
          </div>
          <ul className="mt-2.5 space-y-2">
            {recentPipelines.map((p) => (
              <ListRow
                key={p.id}
                title={p.name}
                meta={p.lastRunAt ? new Date(p.lastRunAt).toLocaleString() : "—"}
                href="/pipelines"
                badge={p.category}
              />
            ))}
          </ul>
        </section>
      </div>

      <section className="factory-panel rounded-2xl p-4 sm:p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-[color:var(--factory-text)]">
              Review queue signal board
            </h2>
            <p className="mt-1 text-xs text-[color:var(--factory-text-subtle)]">
              Fast triage for promotion, fixes, and risk.
            </p>
          </div>
          <Link
            href="/review-queue"
            className="factory-primary-button rounded-lg px-3 py-1.5 text-xs font-semibold"
          >
            Open queue
          </Link>
        </div>
        <ul className="mt-3 space-y-2">
          {hotQueue.map((r) => (
            <ListRow
              key={r.id}
              title={r.title}
              meta={`${r.author} · ${r.status.replace(/_/g, " ")}`}
              href="/review-queue"
              badge={r.type}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
