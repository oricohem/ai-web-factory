import Link from "next/link";

export function HomePremiumHero({
  componentsCount,
  activePipelines,
  pendingReviews,
  avgComponentScore,
}: {
  componentsCount: number;
  activePipelines: number;
  pendingReviews: number;
  avgComponentScore: number;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(170deg,color-mix(in_srgb,var(--factory-canvas)_92%,#0e1117),color-mix(in_srgb,var(--factory-canvas)_82%,#131a24))]" />
        <div className="absolute -left-16 top-[-28%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--factory-cyan)_26%,transparent),transparent_64%)]" />
        <div className="absolute -right-24 top-[8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--factory-amber)_18%,transparent),transparent_66%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(235,241,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(235,241,255,0.1)_1px,transparent_1px)] [background-size:120px_120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--factory-border-strong)_72%,white),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(140%_85%_at_50%_100%,transparent_42%,rgba(0,0,0,0.44)_100%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:min-h-[72dvh] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--factory-border-strong)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_58%,transparent)] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-[color:var(--factory-text-subtle)]">
            Premium command surface
          </p>
          <h1 className="mt-5 max-w-[14ch] text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-[color:var(--factory-text)] sm:text-5xl lg:text-[3.9rem]">
            Ship trusted AI websites from one modern factory.
          </h1>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-[color:var(--factory-text-muted)] sm:text-lg">
            AI Web Factory unifies reusable components, pipeline operations, and
            quality review so your team can move from concept to launch with
            clear production confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/components"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--factory-amber)_76%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-amber)_24%,transparent)] px-5 py-2.5 text-sm font-semibold text-[color:#f8edd7] transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[color:color-mix(in_srgb,var(--factory-amber)_92%,white)] hover:bg-[color:color-mix(in_srgb,var(--factory-amber)_30%,transparent)] active:translate-y-px active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--factory-amber)_52%,white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--factory-canvas)]"
            >
              Start in component catalog
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--factory-amber)_62%,white)] bg-[color:color-mix(in_srgb,var(--factory-amber)_14%,transparent)] transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  aria-hidden
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </Link>
            <Link
              href="/review-queue"
              className="inline-flex items-center rounded-full border border-[color:color-mix(in_srgb,var(--factory-border-strong)_74%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_58%,transparent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--factory-text-muted)] transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[color:color-mix(in_srgb,var(--factory-cyan)_40%,var(--factory-border-strong))] hover:text-[color:var(--factory-text)] active:translate-y-px active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_srgb,var(--factory-cyan)_44%,white)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--factory-canvas)]"
            >
              Open live review queue
            </Link>
          </div>

          <div className="mt-7 grid gap-2 text-xs text-[color:var(--factory-text-subtle)] sm:grid-cols-3 sm:gap-3">
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_76%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_56%,transparent)] px-3 py-2.5">
              <p className="factory-kicker">Catalog scale</p>
              <p className="mt-1 font-mono text-sm text-[color:var(--factory-text-muted)]">
                {componentsCount} components tracked
              </p>
            </div>
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_76%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_56%,transparent)] px-3 py-2.5">
              <p className="factory-kicker">Pipeline activity</p>
              <p className="mt-1 font-mono text-sm text-[color:var(--factory-text-muted)]">
                {activePipelines} active lines
              </p>
            </div>
            <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_76%,transparent)] bg-[color:color-mix(in_srgb,var(--factory-surface)_56%,transparent)] px-3 py-2.5">
              <p className="factory-kicker">Review load</p>
              <p className="mt-1 font-mono text-sm text-[color:var(--factory-text-muted)]">
                {pendingReviews} decisions pending
              </p>
            </div>
          </div>
        </div>

        <div className="factory-panel relative overflow-hidden rounded-[1.65rem] p-2.5 sm:p-3">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_72%_at_78%_2%,color-mix(in_srgb,var(--factory-cyan)_24%,transparent),transparent_64%)]" />
          <div className="relative rounded-[1.2rem] border border-[color:color-mix(in_srgb,var(--factory-border-strong)_70%,transparent)] bg-[linear-gradient(165deg,color-mix(in_srgb,var(--factory-surface-raised)_83%,#121a27),color-mix(in_srgb,var(--factory-surface)_92%,#0f141d))] p-4 sm:p-5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-[color:var(--factory-text-subtle)]">
              <span>Live product proof</span>
              <span className="font-mono">v1 premium direction</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-[1.3fr_1fr]">
              <article className="relative overflow-hidden rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border-strong)_70%,transparent)] bg-[linear-gradient(155deg,#111a27,#101520)] p-4">
                <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(174,196,234,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(174,196,234,0.16)_1px,transparent_1px)] [background-size:18px_18px]" />
                <p className="factory-kicker relative">Deployment confidence matrix</p>
                <p className="relative mt-5 font-mono text-3xl font-semibold tracking-tight text-[color:var(--factory-text)]">
                  {avgComponentScore}
                  <span className="text-xl text-[color:var(--factory-text-muted)]">
                    /100
                  </span>
                </p>
                <p className="relative mt-2 text-sm leading-relaxed text-[color:var(--factory-text-muted)]">
                  Composite score from component quality, recent pipeline health,
                  and review readiness.
                </p>
              </article>

              <div className="space-y-3">
                <article className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)] bg-black/20 px-3 py-3">
                  <p className="factory-kicker">Readiness</p>
                  <p className="mt-1 font-mono text-base text-[color:color-mix(in_srgb,var(--factory-green)_78%,white)]">
                    Launch corridor stable
                  </p>
                </article>
                <article className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)] bg-black/20 px-3 py-3">
                  <p className="factory-kicker">Open triage</p>
                  <p className="mt-1 font-mono text-base text-[color:var(--factory-text-muted)]">
                    {pendingReviews} queue items
                  </p>
                </article>
                <article className="rounded-xl border border-[color:color-mix(in_srgb,var(--factory-border)_78%,transparent)] bg-black/20 px-3 py-3">
                  <p className="factory-kicker">Active lines</p>
                  <p className="mt-1 font-mono text-base text-[color:var(--factory-text-muted)]">
                    {activePipelines} pipelines running
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
