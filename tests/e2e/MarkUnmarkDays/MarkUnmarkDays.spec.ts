import { test, expect } from '@playwright/test'
import ProjectPageObject from '../Projects/ProjectPageObject'

const yesterday = new Date(Date.now() - 24 * 3600 * 1000)

test('Mark day', async ({ page }) => {
  const newProjectName = 'My new project'
  await page.goto('/', { waitUntil: 'networkidle' })
  await ProjectPageObject.createProject(page, newProjectName)

  await page
    .getByRole('checkbox', { name: yesterday.toLocaleDateString() })
    .click()

  await expect(
    page.getByRole('checkbox', { name: yesterday.toLocaleDateString() })
  ).toBeChecked()
})

test('Day remains checked after reload', async ({ page }) => {
  const newProjectName = 'My new project'
  await page.goto('/', { waitUntil: 'networkidle' })
  await ProjectPageObject.createProject(page, newProjectName)

  await page
    .getByRole('checkbox', { name: yesterday.toLocaleDateString() })
    .click()
  await page.reload()

  await expect(
    page.getByRole('checkbox', { name: yesterday.toLocaleDateString() })
  ).toBeChecked()
})

test('Unmark day', async ({ page }) => {
  const newProjectName = 'My new project'
  await page.goto('/', { waitUntil: 'networkidle' })
  await ProjectPageObject.createProject(page, newProjectName)

  await page
    .getByRole('checkbox', { name: yesterday.toLocaleDateString() })
    .click()
  await expect(
    page.getByRole('checkbox', { name: yesterday.toLocaleDateString() })
  ).toBeChecked()
  await page
    .getByRole('checkbox', { name: yesterday.toLocaleDateString() })
    .click()

  await expect(
    page.getByRole('checkbox', { name: yesterday.toLocaleDateString() })
  ).not.toBeChecked()
})

test('Day remains unchecked after reload', async ({ page }) => {
  const newProjectName = 'My new project'
  await page.goto('/', { waitUntil: 'networkidle' })
  await ProjectPageObject.createProject(page, newProjectName)

  await page
    .getByRole('checkbox', { name: yesterday.toLocaleDateString() })
    .click()
  await expect(
    page.getByRole('checkbox', { name: yesterday.toLocaleDateString() })
  ).toBeChecked()
  await page
    .getByRole('checkbox', { name: yesterday.toLocaleDateString() })
    .click()
  await page.reload()

  await expect(
    page.getByRole('checkbox', { name: yesterday.toLocaleDateString() })
  ).not.toBeChecked()
})
