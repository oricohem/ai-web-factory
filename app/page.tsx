import { HomeDashboard } from "@/components/dashboard/home-dashboard";
import { HomePremiumHero } from "@/components/home/home-premium-hero";
import { pipelines, reviewQueue, uiComponents } from "@/lib/data";

export default function Home() {
  const pendingReviews = reviewQueue.filter(
    (r) => r.status === "pending" || r.status === "in_review",
  ).length;
  const activePipelines = pipelines.filter((p) => p.status !== "draft").length;
  const avgComponentScore = Math.round(
    uiComponents.reduce((total, component) => total + component.score, 0) /
      uiComponents.length,
  );

  return (
    <>
      <HomePremiumHero
        componentsCount={uiComponents.length}
        activePipelines={activePipelines}
        pendingReviews={pendingReviews}
        avgComponentScore={avgComponentScore}
      />
      <HomeDashboard
        components={uiComponents}
        pipelines={pipelines}
        reviews={reviewQueue}
      />
    </>
  );
}
