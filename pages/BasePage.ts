import { expect, Page } from '@playwright/test';
export default class BasePage {

    constructor(public page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url, { waitUntil: 'networkidle' });
    }

    async verifyPageTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async verifyPageURL(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async clearInputLocator(locator: string) {
        await this.page.locator(locator).clear();
    }

    async waitForSelector(selector: string) {
        await this.page.waitForSelector(selector, { timeout: 5000 });
    }
};
