import { test, expect } from '@playwright/test'

test('opens the homepage from the welcome button', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Willkommen bei NOVA' })).toBeVisible()
  await page.getByRole('button', { name: 'Shop entdecken' }).click()
  await expect(page.getByRole('heading', { name: 'Shop in den Sternen.' })).toBeVisible()
})

test('opens the homepage when the welcome page is clicked', async ({ page }) => {
  await page.goto('/')
  await page.locator('.welcome-page').click({ position: { x: 20, y: 20 } })
  await expect(page.getByRole('heading', { name: 'Shop in den Sternen.' })).toBeVisible()
})
