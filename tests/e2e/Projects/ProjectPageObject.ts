import type { Page } from '@playwright/test'

class ProjectPageObject {
  static async createProject (page: Page, name: string): Promise<void> {
    await page.getByRole('button', { name: 'Add new Project' }).click()
    await page.getByLabel('Project Name').fill(name)
    await page
      .getByRole('button', { name: 'Confirm project creation' })
      .click()
  }
}

export default ProjectPageObject
