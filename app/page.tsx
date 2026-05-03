import { HomeDashboard } from "@/components/dashboard/home-dashboard";
import { HomeFirstReadHero } from "@/components/home/home-first-read-hero";
import { pipelines, reviewQueue, uiComponents } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HomeFirstReadHero
        components={uiComponents}
        pipelines={pipelines}
        reviews={reviewQueue}
      />
      <HomeDashboard
        components={uiComponents}
        pipelines={pipelines}
        reviews={reviewQueue}
      />
    </>
  );
}
