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
        className="group flex items-start justify-between gap-3 rounded-xl border border-transparent px-3 py-2.5 transition hover:border-white/10 hover:bg-white/[0.04]"
      >
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-zinc-100 group-hover:text-violet-100">
            {title}
          </p>
          <p className="mt-0.5 text-xs text-zinc-500">{meta}</p>
        </div>
        {badge ? (
          <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-zinc-400">
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

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:px-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="UI components"
          value={components.length}
          hint="Curated blocks ready to ship."
          accent="violet"
        />
        <StatCard
          label="Pipelines"
          value={pipelines.length}
          hint="End-to-end AI workflows."
          accent="emerald"
        />
        <StatCard
          label="Open reviews"
          value={pendingReviews}
          hint="Pending + in review."
          accent="amber"
        />
        <StatCard
          label="Avg component score"
          value={avgComponentScore}
          hint="Quality heuristic (mock)."
          accent="sky"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-sm font-semibold text-white">
              Recently updated components
            </h2>
            <Link
              href="/components"
              className="text-xs font-medium text-violet-300 hover:text-violet-200"
            >
              View all
            </Link>
          </div>
          <ul className="mt-3 divide-y divide-white/10">
            {recentComponents.map((c) => (
              <ListRow
                key={c.id}
                title={c.name}
                meta={`${c.category} · ${c.updatedAt}`}
                href="/components"
                badge={`${c.score}`}
              />
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-sm font-semibold text-white">
              Pipelines — recent runs
            </h2>
            <Link
              href="/pipelines"
              className="text-xs font-medium text-fuchsia-300 hover:text-fuchsia-200"
            >
              View all
            </Link>
          </div>
          <ul className="mt-3 divide-y divide-white/10">
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

      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-violet-950/40 via-zinc-950/40 to-zinc-950 p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold text-white">Review queue</h2>
            <p className="mt-1 text-xs text-zinc-500">
              Triage what ships next — scores and statuses are illustrative.
            </p>
          </div>
          <Link
            href="/review-queue"
            className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-white/10"
          >
            Open queue
          </Link>
        </div>
        <ul className="mt-4 divide-y divide-white/10">
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
