import { expect, Page } from '@playwright/test';
import { selectors } from '../untils/selectors';
export default class BasePage {

    constructor(public page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url, { waitUntil: 'networkidle' });
    }

    async clearInputLocator(locator: string) {
        await this.page.locator(locator).clear();
    }

    async waitForSelectorTimeOut(selector: string, timeout: number = 5000) {
        await this.page.waitForSelector(selector, { timeout });
    }

    async waitForSelector(selector: string) {
        await this.page.locator(selector).first().waitFor({ state: 'visible' });
    }

    async waitForTableLoaded(timeout: number = 5000) {
        await this.page.waitForSelector(selectors.basePage.tableLoader, { state: 'detached', timeout });
        await this.waitForSelectorTimeOut(selectors.basePage.tableDecoratorCard, timeout);
    }

    async type(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }

    async click(locator: string) {
        await this.page.locator(locator).click();
    }

    async verifyPageTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async verifyPageURL(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    async verifyMainTitle(title: string) {
        await this.waitForSelector(selectors.basePage.mainTitle);
        await expect(this.page.locator(selectors.basePage.mainTitle).first()).toHaveText(title);
    }

    async verifyErrorMessage(locator: string, messageExpected: string) {
        const messageLocator = this.page.locator(locator);
        await this.waitForSelector(locator);
        await expect(messageLocator).toBeVisible();
        expect(await messageLocator.innerText()).toEqual(messageExpected);
    }
};
