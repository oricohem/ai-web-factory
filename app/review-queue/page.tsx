import type { Metadata } from "next";
import { ReviewQueueView } from "@/components/catalog/review-queue-view";
import { PageHeader } from "@/components/dashboard/page-header";
import { reviewQueue } from "@/lib/data";

export const metadata: Metadata = {
  title: "Review queue",
};

export default function ReviewQueuePage() {
  return (
    <>
      <PageHeader
        title="Review queue"
        description="What is waiting for a decision — filter by status, scan scores, and keep releases predictable."
      />
      <ReviewQueueView items={reviewQueue} />
    </>
  );
}
