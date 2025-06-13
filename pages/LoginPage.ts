import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";
import { selectors } from "../untils/selectors";

export default class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async fillUserName(username: string) {
        await this.waitForSelector(selectors.loginPage.username);
        await this.type(selectors.loginPage.username, username);
    }

    async clearUserName() {
        await this.clearInputLocator(selectors.loginPage.username);
    }

    async fillPassword(password: string) {
        await this.type(selectors.loginPage.password, password);
    }

    async clearPassword() {
        await this.clearInputLocator(selectors.loginPage.password);
    }

    async clickLogin() {
        await this.click(selectors.loginPage.buttonLogin);
    }

    async login(username: string, password: string) {
        await this.fillUserName(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    async verifyErrorMessageUsername(messageExpected: string) {
        await this.waitForSelector(selectors.loginPage.errorMessageUsername);
        await expect(this.page.locator(selectors.loginPage.errorMessageUsername)).toBeVisible();
        expect(await this.page.locator(selectors.loginPage.errorMessageUsername).innerText()).toEqual(messageExpected);
    }

    async verifyErrorMessagePassword(messageExpected: string) {
        await this.waitForSelector(selectors.loginPage.errorMessagePassword);
        await expect(this.page.locator(selectors.loginPage.errorMessagePassword)).toBeVisible();
        expect(await this.page.locator(selectors.loginPage.errorMessagePassword).innerText()).toEqual(messageExpected);
    }

    async verifyAlertErrorMessage(messageExpected: string) {
        await this.waitForSelector(selectors.loginPage.alertErrorMessage);
        await expect(this.page.locator(selectors.loginPage.alertErrorMessage)).toBeVisible();
        expect(await this.page.locator(selectors.loginPage.alertErrorText).innerText()).toEqual(messageExpected);
    }

    async verifyAdminLoginSuccess() {
        await this.waitForSelector(selectors.adminDashboardPage.dashboardGrid);
        const menuItems = await this.page.locator(selectors.adminDashboardPage.menuItems).allTextContents();

        expect(menuItems).toContain('Admin');
        expect(menuItems).toContain('PIM');
    }

    async verifyESSLoginSuccess() {
        await this.waitForSelector(selectors.adminDashboardPage.dashboardGrid);
        const menuItems = await this.page.locator(selectors.adminDashboardPage.menuItems).allTextContents();

        expect(menuItems).not.toContain('Admin');
        expect(menuItems).not.toContain('PIM');
    }

    async saveAdminStorage() {
        await this.page.context().storageState({ path: 'storage/admin.json' });
    }

    async saveESSStorage() {
        await this.page.context().storageState({ path: 'storage/ess.json' });
    }
};
