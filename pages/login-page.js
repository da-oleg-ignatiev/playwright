const { expect } = require('@playwright/test');


exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  //  this.getStartedLink = page.locator('div', { hasText: 'Sign In' });
  //  this.gettingStartedHeader = page.locator('div', { hasText: 'Sign In' });
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto('https://ss-spa-qa1.ottest.net/Authentication');
  }

//   async getStarted() {
//     await this.getStartedLink.first().click();
//     await expect(this.gettingStartedHeader).toBeVisible();
//   }

//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
};