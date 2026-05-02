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
        title="Component catalog"
        description="Production-ready UI blocks with quality scores, lifecycle status, and quick scanning by category."
      />
      <ComponentsCatalog
        items={uiComponents}
        categories={getComponentCategories()}
      />
    </>
  );
}
