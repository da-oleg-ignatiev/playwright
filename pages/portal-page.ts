import { expect, Page, Locator } from '@playwright/test';


export class PortalPage {
    private page: Page;
    private portalHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.portalHeader = page.locator("css=[data-control='BrandLogo']");

    }

    // Add your methods and actions for the portal page here

    async portalHeaderIsDisplayed() {
        await expect(this.portalHeader, 'Portal header "ScoreSense" is not displayed') // assertion
        .toBeVisible({ timeout: 15000});
    }

    async performSomeAction() {
        // Implement the logic to perform some action on the portal page
    }
}