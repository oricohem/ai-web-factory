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
        title="AI pipelines"
        description="Composable stages, explicit dependencies, and run signals — designed for operators and builders alike."
      />
      <PipelinesCatalog
        items={pipelines}
        categories={getPipelineCategories()}
      />
    </>
  );
}
