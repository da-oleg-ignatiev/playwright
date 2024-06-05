import { expect, test } from '@playwright/test';
import { getPool } from '../db/db.js';
import { LoginPage } from '../pages/login-page.js';
import { PortalPage } from '../pages/portal-page.js';

test('Login Test', async ({ page }) => { // 'Login Test' is the name of the test
  const loginPage = new LoginPage(page);
  const portalPage = new PortalPage(page);
  await loginPage.goto();
  await loginPage.login();
  await portalPage.portalHeaderIsDisplayed();
});

test('DB Test', async () => {
  console.log('Test is running...');
  const sqlQuery = "SELECT TOP 1 FROM  CreditFulfillment WHERE c.EmailAddress = 'GARYGRAHART@gmail.com'";
  const pool = await getPool();
  if (pool) {
    const result = await pool.request().query(sqlQuery);
    console.log(result);
    expect(result.recordset.length).toBe(1);
  }
  console.log('Test is done...');
});


test.afterAll(async ({ page }) => {
  console.log('Closing the browser...');
  await page.context().close();
});