import type { Metadata } from "next";
import { ComponentsCatalog } from "@/components/catalog/components-catalog";
import { PageHeader } from "@/components/dashboard/page-header";
import { getComponentCategories, uiComponents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Components",
};

export default function ComponentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Component inventory"
        title="Component catalog"
        description="Inspection-ready UI artifacts with calibration score, lifecycle status, and compact metadata for fast reuse decisions."
      />
      <ComponentsCatalog
        items={uiComponents}
        categories={getComponentCategories()}
      />
    </>
  );
}
