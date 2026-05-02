import { mkdir } from "node:fs/promises";
import path from "node:path";
import { test } from "@playwright/test";

const screenshotDir = path.join(process.cwd(), "screenshots");

const pages = [
  { name: "home", path: "/" },
  { name: "components", path: "/components" },
  { name: "pipelines", path: "/pipelines" },
  { name: "review-queue", path: "/review-queue" },
] as const;

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
] as const;

test.beforeAll(async () => {
  await mkdir(screenshotDir, { recursive: true });
});

for (const pageInfo of pages) {
  for (const viewport of viewports) {
    test(`${pageInfo.name} ${viewport.name} screenshot`, async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      await page.goto(pageInfo.path, { waitUntil: "networkidle" });

      await page.screenshot({
        path: path.join(screenshotDir, `${pageInfo.name}-${viewport.name}.png`),
      });
    });
  }
}
