import { test, expect } from "@playwright/test";
import ProjectPageObject from "../Projects/ProjectPageObject";

test("Delete a project", async ({ page }) => {
  const newProjectName = "My new project";
  await page.goto("/");
  await ProjectPageObject.createProject(page, newProjectName);

	await page.getByRole("button", { name: `Delete ${newProjectName} project` }).click();

  await expect(page.getByRole("heading", { name: newProjectName })).not.toBeVisible();
});

test("Project does not appear again after reload", async ({ page }) => {
  const newProjectName = "My new project";
  await page.goto("/");
  await ProjectPageObject.createProject(page, newProjectName);

	await page.getByRole("button", { name: `Delete ${newProjectName} project` }).click();
	await page.reload();

  await expect(page.getByRole("heading", { name: newProjectName })).not.toBeVisible();
});