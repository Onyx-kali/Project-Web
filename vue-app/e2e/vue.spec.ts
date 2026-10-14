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

  const darkModeButton = page.getByRole('button', { name: 'Dunkelmodus' })
  const lightModeButton = page.getByRole('button', { name: 'Hellmodus' })
  await expect(darkModeButton).toHaveAttribute('aria-pressed', 'true')
  await expect(lightModeButton).toHaveAttribute('aria-pressed', 'false')
  await expect(page.locator('.page-theme')).toHaveClass(/theme-dark/)
  await expect(page.locator('.page-theme')).toHaveCSS('background-color', 'rgb(11, 16, 32)')
  await expect(page.locator('.hero')).toHaveCSS('background-color', 'rgb(21, 27, 43)')

  await lightModeButton.click()
  await expect(lightModeButton).toHaveAttribute('aria-pressed', 'true')
  await expect(darkModeButton).toHaveAttribute('aria-pressed', 'false')
  await expect(page.locator('.page-theme')).not.toHaveClass(/theme-dark/)
  await expect(page.locator('.page-theme')).toHaveCSS('background-color', 'rgb(246, 247, 251)')

  await darkModeButton.click()
  await expect(page.locator('.page-theme')).toHaveClass(/theme-dark/)
  await expect(darkModeButton).toHaveAttribute('aria-pressed', 'true')
})
