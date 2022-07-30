const { test, expect } = require('@playwright/test')

test('Test scenario 2', async ({ page }) => {
    // Open SmartFrame 2
    await page.goto('/p/w.html')

    // Mouse over the SmartFrame
    await page.locator('smart-frame').hover()

    // Check if the Share button (in the top-right-hand corner of the SmartFrame) is displayed correctly
    await expect(page.locator('a >> text="SHARE"')).toBeVisible()

    // Click on the icon in the top-left-hand corner of the SmartFrame
    await page.$eval('a.--custom', (el) => el.removeAttribute('target'))
    await page.locator('a >> text="SE"').click()

    // Check if the redirect works
    await expect(page).toHaveURL('https://smartframe.io/')
})
