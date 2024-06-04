import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page.js';

// @ts-check

test('ScoreSense', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login();
});