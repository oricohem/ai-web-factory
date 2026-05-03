import Link from "next/link";
import type { PipelineEntry, ReviewQueueEntry, UiComponentEntry } from "@/lib/types";

function percent(value: number, total: number): number {
  if (total === 0) {
    return 0;
  }
  return Math.round((value / total) * 100);
}

export function HomeFirstReadHero({
  components,
  pipelines,
  reviews,
}: {
  components: UiComponentEntry[];
  pipelines: PipelineEntry[];
  reviews: ReviewQueueEntry[];
}) {
  const totalQueue = reviews.length;
  const approvedCount = reviews.filter((r) => r.status === "approved").length;
  const inReviewCount = reviews.filter((r) => r.status === "in_review").length;
  const pendingCount = reviews.filter((r) => r.status === "pending").length;
  const approvedRate = percent(approvedCount, totalQueue);
  const hotReview = [...reviews].sort((a, b) =>
    a.submittedAt < b.submittedAt ? 1 : -1,
  )[0];
  const latestPipeline = [...pipelines]
    .filter((p) => p.lastRunAt)
    .sort((a, b) => (a.lastRunAt ?? "") < (b.lastRunAt ?? "") ? 1 : -1)[0];
  const strongestComponent = [...components].sort((a, b) => b.score - a.score)[0];

  return (
    <section className="border-b border-[color:color-mix(in_srgb,var(--factory-border)_72%,transparent)] px-4 pb-8 pt-6 sm:px-8 sm:pb-9 sm:pt-8">
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[color:color-mix(in_srgb,var(--factory-border-strong)_68%,transparent)] bg-[linear-gradient(165deg,color-mix(in_srgb,var(--factory-surface-raised)_90%,black),color-mix(in_srgb,var(--factory-surface)_84%,black))] p-5 sm:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-55"
            style={{
              background:
                "radial-gradient(120% 90% at 8% 0%, color-mix(in srgb, var(--factory-amber) 24%, transparent) 0%, transparent 50%), linear-gradient(120deg, rgba(255,255,255,0.05), transparent 30%)",
            }}
          />
          <div className="relative z-10 max-w-2xl">
            <p className="factory-kicker">Home first-read pilot</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[color:var(--factory-text)] sm:text-[2.6rem] sm:leading-[1.08]">
              Ship AI web systems with a clear proof trail, not another dashboard
              wall.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--factory-text-muted)] sm:text-base">
              AI Web Factory keeps components, pipelines, and review decisions in
              one operational narrative so teams can move from build to approval
              with fewer blind spots.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <Link
                href="/review-queue"
                className="factory-primary-button rounded-full px-4 py-2 text-sm font-semibold"
              >
                Open review queue
              </Link>
              <Link
                href="/pipelines"
                className="factory-ghost-button rounded-full px-4 py-2 text-sm font-semibold"
              >
                Inspect active pipelines
              </Link>
            </div>
          </div>
        </div>

        <aside className="factory-panel rounded-[1.65rem] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="factory-kicker">Product proof artifact</p>
              <h2 className="mt-1 text-base font-semibold tracking-tight text-[color:var(--factory-text)] sm:text-lg">
                Live quality signal board
              </h2>
            </div>
            <span className="factory-chip">Cycle snapshot</span>
          </div>

          <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_62%,transparent)] px-3 py-2.5">
              <p className="factory-kicker">Approved</p>
              <p className="mt-1 text-2xl font-semibold text-[color:var(--factory-text)]">
                {approvedRate}%
              </p>
            </div>
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_62%,transparent)] px-3 py-2.5">
              <p className="factory-kicker">In review</p>
              <p className="mt-1 text-2xl font-semibold text-[color:var(--factory-text)]">
                {inReviewCount}
              </p>
            </div>
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface-raised)_62%,transparent)] px-3 py-2.5">
              <p className="factory-kicker">Pending</p>
              <p className="mt-1 text-2xl font-semibold text-[color:var(--factory-text)]">
                {pendingCount}
              </p>
            </div>
          </div>

          <dl className="mt-3 space-y-2 rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_58%,transparent)] p-3.5">
            <div className="grid gap-1.5 sm:grid-cols-[auto_1fr] sm:gap-3">
              <dt className="factory-kicker">Latest queue item</dt>
              <dd className="text-sm text-[color:var(--factory-text-muted)]">
                {hotReview ? `${hotReview.title} · ${hotReview.author}` : "No queue data"}
              </dd>
            </div>
            <div className="grid gap-1.5 sm:grid-cols-[auto_1fr] sm:gap-3">
              <dt className="factory-kicker">Recent pipeline run</dt>
              <dd className="text-sm text-[color:var(--factory-text-muted)]">
                {latestPipeline
                  ? `${latestPipeline.name} · ${new Date(
                      latestPipeline.lastRunAt as string,
                    ).toLocaleString()}`
                  : "No recent run recorded"}
              </dd>
            </div>
            <div className="grid gap-1.5 sm:grid-cols-[auto_1fr] sm:gap-3">
              <dt className="factory-kicker">Top component score</dt>
              <dd className="text-sm text-[color:var(--factory-text-muted)]">
                {strongestComponent
                  ? `${strongestComponent.name} · Q${strongestComponent.score}`
                  : "No component score available"}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
