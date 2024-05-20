// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://spendonlife-qa2.ottest.net/us/6019/418p75w/DNBE/008/f/cs_4p_a008.aspx');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Personal Information/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
