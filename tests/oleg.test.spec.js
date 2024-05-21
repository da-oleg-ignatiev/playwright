// @ts-check
import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-page.js');

test('ScoreSense', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // move to LoginPage class
  await expect(page.getByTitle('Please enter your username.').fill('anneotestcsid@dataart.com')).resolves.toBeUndefined();

  // move to LoginPage class
  await expect(page.getByTitle('Please enter your password.').fill('password1')).resolves.toBeUndefined();
  
  // move to LoginPage class
  await page.locator("css=[class='login-page-main-sign-in-button']").click();
  
});




