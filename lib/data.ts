import type {
  PipelineEntry,
  ReviewQueueEntry,
  UiComponentEntry,
} from "./types";
import componentsJson from "@/data/components.json";
import pipelinesJson from "@/data/pipelines.json";
import reviewQueueJson from "@/data/review-queue.json";

export const uiComponents = componentsJson as UiComponentEntry[];
export const pipelines = pipelinesJson as PipelineEntry[];
export const reviewQueue = reviewQueueJson as ReviewQueueEntry[];

export function getComponentCategories(): string[] {
  return [...new Set(uiComponents.map((c) => c.category))].sort();
}

export function getPipelineCategories(): string[] {
  return [...new Set(pipelines.map((p) => p.category))].sort();
}
