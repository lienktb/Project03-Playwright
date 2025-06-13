import { expect, Page } from "@playwright/test";
import { selectors } from "../untils/selectors";

export class Sidebar {
  constructor(private page: Page) {}

   async goto(url: string) {
    await this.page.goto(url);
  }

  async clickMenuItem(locator: string) {
    await this.page.locator(locator).click();
  }

}