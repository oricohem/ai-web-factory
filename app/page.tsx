import { HomeDashboard } from "@/components/dashboard/home-dashboard";
import { PageHeader } from "@/components/dashboard/page-header";
import { pipelines, reviewQueue, uiComponents } from "@/lib/data";

export default function Home() {
  return (
    <>
      <PageHeader
        title="Factory overview"
        description="A single place to browse reusable UI, operationalize AI pipelines, and move work through review with clear quality signals."
        eyebrow="Production floor"
      />
      <HomeDashboard
        components={uiComponents}
        pipelines={pipelines}
        reviews={reviewQueue}
      />
    </>
  );
}
