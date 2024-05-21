// @ts-check
import { test, expect } from '@playwright/test';
import { log } from 'console';

test('ScoreSense', async ({ page }) => {
  await page.goto('https://ss-spa-qa1.ottest.net/Authentication');

  page.locator("css=[name='username']").fill('anneotestcsid@dataart.com');

       
  //page.locator("xpath=//input[@class='login-page-main-password']").fill('password1');

  await page.locator("xpath=//button[@class='login-page-main-sign-in-button']").click();
});




