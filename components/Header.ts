import { expect, Page } from "@playwright/test";
import { selectors } from "../untils/selectors";

export class Header {
  constructor(private page: Page) {}

  async goto(url: string) {
    await this.page.goto(url);
  }

  async clickUserDropdownButton() {
    await this.page.locator(selectors.header.userDropdownButton).click();
  }

  async clickLogout() {
    await this.page.locator(selectors.header.logoutText).click();
  }

  async logout() {
    await this.clickUserDropdownButton();
    await this.waitForSelector(selectors.header.dropdownMenu)
    await this.clickLogout();
  }

  async verifyLogoutSuccess() {
    await expect(this.page).toHaveURL(/login/);
  }

  async waitForSelector(selector: string) {
    await this.page.waitForSelector(selector, { timeout: 5000 });
  }
} 