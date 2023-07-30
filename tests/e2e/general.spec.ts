import { test, expect } from "@playwright/test";

test("Has HeatmapHub title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/HeatmapHub/);
});
