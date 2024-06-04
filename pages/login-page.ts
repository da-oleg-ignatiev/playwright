import { expect, Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;
  //getStartedLink;
  //private gettingStartedHeader: Locator;
  //pomLink
  //tocList;
  private username: Locator;
  private password: Locator;
  private signInButton: Locator;


  constructor(page) {
    this.page = page;
    //this.getStartedLink = page.locator('div', { hasText: 'Sign In' });
    //this.pomLink = page.locator('li', {hasText: 'Guides',}).locator('a', {hasText: 'Page Object Model',});
    //this.tocList = page.locator('article div.markdown ul > li > a'); // toc is a common abbreviation for "Table of Contents"
   
    this.username = page.getByTitle('Please enter your username.');
    this.password = page.getByTitle('Please enter your password.');
    this.signInButton = page.locator("css=[class='login-page-main-sign-in-button']");
  }

  async goto() {
    await this.page.goto('https://ss-spa-qa1.ottest.net/Authentication');
    await expect(this.signInButton, '"Sign In" button is not displayed')
    .toBeVisible({ timeout: 15000 });
  }

  async login() {
    await expect(this.username.fill('anneotestcsid@dataart.com')).resolves.toBeUndefined();
    await expect(this.password.fill('password1')).resolves.toBeUndefined();
    await this.signInButton.click();
  }

  // async getStarted() {
  //   await this.getStartedLink.first().click();
  //   await expect(this.gettingStartedHeader).toBeVisible({ timeout: 15000 });
  // }
}