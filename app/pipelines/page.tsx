import type { Metadata } from "next";
import { PipelinesCatalog } from "@/components/catalog/pipelines-catalog";
import { PageHeader } from "@/components/dashboard/page-header";
import { getPipelineCategories, pipelines } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pipelines",
};

export default function PipelinesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pipeline registry"
        title="AI pipelines"
        description="Production lines with explicit dependencies, readiness signals, and run history for operator triage."
      />
      <PipelinesCatalog
        items={pipelines}
        categories={getPipelineCategories()}
      />
    </>
  );
}
