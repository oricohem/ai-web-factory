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
        eyebrow="Queue triage"
        title="Review queue"
        description="Operational triage board for promotion decisions, risk, and quality scoring."
      />
      <ReviewQueueView items={reviewQueue} />
    </>
  );
}
