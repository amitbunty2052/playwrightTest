import {test,expect} from '@playwright/test'

test('Opening Google @simple',async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle('Google')
})

test('Opening Google and enter text @search',async({page})=>{
    await page.goto("https://www.google.com")
    await expect(page).toHaveTitle('Google')
    const textbox = page.locator("textarea#APjFqb.gLFyf")
    await textbox.fill('thetestdata.com')
    await page.getByLabel('Google Search').first().click()
})