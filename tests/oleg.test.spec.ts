import { test } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { LoginPage } from '../pages/login-page.js';
import { PortalPage } from '../pages/portal-page.js';

export default defineConfig({ // setting global timeout for all tests
  timeout: 15000,
});

test('Login Test', async ({ page }) => { // 'Login Test' is the name of the test
  const loginPage = new LoginPage(page);
  const portalPage = new PortalPage(page);
  await loginPage.goto();
  await loginPage.login();
  await portalPage.portalHeaderIsDisplayed();
});