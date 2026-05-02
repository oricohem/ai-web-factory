export type CatalogStatus = "stable" | "beta" | "draft";

export type ReviewStatus =
  | "pending"
  | "in_review"
  | "approved"
  | "changes_requested";

export type ReviewItemType = "component" | "pipeline";

export interface UiComponentEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  status: CatalogStatus;
  score: number;
  tags: string[];
  updatedAt: string;
}

export interface PipelineEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  status: CatalogStatus;
  score: number;
  includes: string[];
  dependencies: string[];
  lastRunAt: string | null;
}

export interface ReviewQueueEntry {
  id: string;
  title: string;
  type: ReviewItemType;
  category: string;
  status: ReviewStatus;
  score: number;
  submittedAt: string;
  author: string;
}
