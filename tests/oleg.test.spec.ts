import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page.js';
import { PortalPage } from '../pages/portal-page.js';

// @ts-check

test('ScoreSense', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const portalPage = new PortalPage(page);
  await loginPage.goto();
  await loginPage.login();
  await portalPage.portalHeaderIsDisplayed();
});