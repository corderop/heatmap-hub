import { test, expect } from '@playwright/test'

test('Has HeatmapHub title', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page).toHaveTitle(/HeatmapHub/)
})

test('Has HeatmapHub title in the navbar', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('HeatmapHub')).toBeVisible()
})
