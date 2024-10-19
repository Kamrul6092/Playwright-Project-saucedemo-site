const { test, expect } = require('@playwright/test')


test('has title', async ({ page }) => {
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle("Google");
});

// test('verify application title', async ({ page }) => {
//     await page.goto("https://www.google.com")
//     const url = await page.url()
//     console.log("tittle is " + url)

// });