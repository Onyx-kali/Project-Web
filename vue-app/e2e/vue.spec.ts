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

test('switches between light and dark mode on the shop homepage', async ({ page }) => {
  await page.goto('/shop')

  const quartzButton = page.getByRole('button', { name: 'Quartz' })
  const onyxButton = page.getByRole('button', { name: 'Onyx' })
  const bismuthButton = page.getByRole('button', { name: 'Bismuth' })
  await expect(onyxButton).toHaveAttribute('aria-pressed', 'true')
  await expect(quartzButton).toHaveAttribute('aria-pressed', 'false')
  await expect(bismuthButton).toHaveAttribute('aria-pressed', 'false')
  await expect(page.locator('.page-theme')).toHaveClass(/theme-onyx/)

  await bismuthButton.click()
  await expect(bismuthButton).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.page-theme')).toHaveClass(/theme-bismuth/)
  await expect(page.locator('.bismuth-stars')).toBeVisible()
  await expect(page.locator('.bismuth-star')).toHaveCount(7)

  await quartzButton.click()
  await expect(quartzButton).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.page-theme')).toHaveClass(/theme-quartz/)
  await expect(page.locator('.bismuth-stars')).toHaveCount(0)

  await onyxButton.click()
  await expect(onyxButton).toHaveAttribute('aria-pressed', 'true')
  await expect(page.locator('.page-theme')).toHaveClass(/theme-onyx/)
})
