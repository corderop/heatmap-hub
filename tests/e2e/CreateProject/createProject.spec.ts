import { test, expect } from '@playwright/test'
import ProjectPageObject from '../Projects/ProjectPageObject'

test('Create a new project', async ({ page }) => {
  const newProjectName = 'My new project'
  await page.goto('/')

  await page.getByRole('button', { name: 'Add new Project' }).click()
  await page.getByLabel('Project Name').fill(newProjectName)
  await page.getByRole('button', { name: 'Confirm project creation' }).click()

  await expect(
    page.getByRole('heading', { name: newProjectName })
  ).toBeVisible()
})

test('Cancel test creation', async ({ page }) => {
  const newProjectName = 'My new project'

  await page.goto('/')

  await page.getByRole('button', { name: 'Add new Project' }).click()
  await page.getByLabel('Project Name').fill(newProjectName)
  await page.getByRole('button', { name: 'Cancel project creation' }).click()

  await expect(
    page.getByRole('heading', { name: newProjectName })
  ).not.toBeVisible()
})

test('Create test persist after refresh', async ({ page }) => {
  const newProjectName = 'My new project'
  await page.goto('/')

  await ProjectPageObject.createProject(page, newProjectName)
  await page.reload()

  await expect(
    page.getByRole('heading', { name: newProjectName })
  ).toBeVisible()
})

test('Day checkboxes disabled during project creation', async ({ page }) => {
  const today = new Date().toLocaleDateString()
  await page.goto('/')

  await page.getByRole('button', { name: 'Add new Project' }).click()

  await expect(page.getByRole('checkbox', { name: today })).toBeDisabled()
})
