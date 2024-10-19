const { test, expect } = require('@playwright/test')


test('Valid login', async function ({ page }) {
    await page.goto("https://www.saucedemo.com/v1/")



    //LOGIN INTO THE PAGE//

    //maximize the browser
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)


    //go to the page

    await page.getByPlaceholder("Username").type("standard_user", { delay: 200 })
    // await page.locator("//input[@id='user-name']").type("standard_user", { delay: 200 })
    await page.waitForTimeout(1000)
    await page.locator("//input[@id='password']").type("secret_sauce", { delay: 100 })
    await page.waitForTimeout(1000)
    await page.locator("//input[@id='login-button']").click()
    await page.waitForTimeout(3000)


    //ADD to Chart a  product//

    await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click()
    await page.waitForTimeout(3000)
    await page.locator("//button[contains(text(),'ADD TO CART')]").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle("Swag Labs");
    // await page.pause()


    //LOG-OUT FROM THE PAGE//

    await page.locator("//button[contains(text(),'Open Menu')]").click()
    await page.locator("//a[@id='logout_sidebar_link']").click()

    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle("Swag Labs");


});
