const { test, expect } = require('@playwright/test')

test('Test scenario 1', async ({ page }) => {
    // Open SmartFrame 1
    await page.goto('/p/e.html')

    // Mouse over the SmartFrame
    await page.frameLocator('iframe').locator('smart-frame').hover()

    // Check if the caption is correctly displayed (bottom section of the SmartFrame)
    const caption = page.frameLocator('iframe').locator('.caption-box')
    await expect(caption).toBeVisible()
    await expect(caption).toHaveText(
        'An image (from Latin: imago) is an artifact that depicts visual perception, such as a photograph or other two-dimensional picture, that resembles a subject—usually a physical object—and thus provides a depiction of it. In the context of signal processing, an image is a distributed amplitude of color(s). A pictorial script is a writing system that employs images as symbols for various semantic entities, rather than the abstract signs used by alphabets.'
    )

    // Click on the icon in the top-left-hand corner of the SmartFrame
    await page.frameLocator('iframe').locator('a >> text="EMBED"').click()

    // Check if the layer opens
    await expect(
        page.frameLocator('iframe').locator('.share__script')
    ).toBeVisible()
})
