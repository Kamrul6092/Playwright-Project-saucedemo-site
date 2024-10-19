const { test, expect } = require('@playwright/test')


test('my first test', async function ({ page }) {
    expect(12).toBe(12)

})


test('my second test', async function ({ page }) {
    expect(100).toBe(100)

})


test('my third test', async function ({ page }) {
    expect(2.0).toBe(2.0)

})

// test.only('my four test', async function ({ page }) {
//     expect("atif islam").toContain("12")

// })

test.skip('my five test', async function ({ page }) {
    expect("atif islam").toContain("atif")

})

test('my four test', async function ({ page }) {
    expect("atif islam").toContain("atif")
    // expect(true).toBeTruthy()

})