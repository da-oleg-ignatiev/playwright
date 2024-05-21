// @ts-check
import { test, expect } from '@playwright/test';
import { log } from 'console';

test('ScoreSense', async ({ page }) => {
  await page.goto('https://ss-spa-qa1.ottest.net/Authentication');

  await expect(page.getByTitle('Please enter your username.').fill('anneotestcsid@dataart.com')).resolves.toBeUndefined();

  await expect(page.getByTitle('Please enter your password.').fill('password1')).resolves.toBeUndefined();


  await page.locator("css=[class='login-page-main-sign-in-button']").click();
  
});




