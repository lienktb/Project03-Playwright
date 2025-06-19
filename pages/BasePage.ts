import { expect, Page } from '@playwright/test';
import { selectors } from '../untils/selectors';
import { getAutocompleteDropdown, getAutocompleteInput, getAutocompleteOption, getDropdownOption, getDropdownSelect } from '../helpers/xpathHelper';
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

  // wait
  async waitForSelectorTimeOut(selector: string, timeout: number = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async waitForSelector(selector: string, timeout: number = 5000) {
    try {
      await this.page.locator(selector).first().waitFor({ state: 'visible', timeout });
    } catch (error) {
      console.warn(`Element with selector "${selector}" not visible after 1 second. Ignoring.`);
    }
  }

  async waitForTableLoaded(timeout: number = 5000) {
    await this.page.waitForSelector(selectors.basePage.tableLoader, { state: 'detached', timeout });
    await this.waitForSelectorTimeOut(selectors.basePage.tableDecoratorCard, timeout);
  }

  // click
  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async clickSave() {
    await this.page.getByRole('button', { name: selectors.basePage.buttonSave }).click();
  }

  async clickButtonAdd() {
    await this.click(selectors.basePage.buttonAdd);
  }

  // type input
  async type(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async fillTextFields(data: Record<string, string>, selectorMap: Record<string, string>) {
    for (const key in data) {
      const value = data[key];
      const selector = selectorMap[key];
      if (value && selector) {
        await this.type(selector, value);
      }
    }
  }

  // input autocompleted
  async getLocatorAutocompleteOption(label: string, value: string) {
    return this.page.locator(getAutocompleteOption(label, value));
  }

  async selectAutocompleteOption(label: string, value: string,) {
    await this.type(getAutocompleteInput(label), value);
    await this.waitForSelector(getAutocompleteDropdown(label));

    const resultOption = this.page.locator(getAutocompleteOption(label, value));
    const searchingOption = await this.getLocatorAutocompleteOption(label, selectors.basePage.searching);
    const noRecordOption  = await this.getLocatorAutocompleteOption(label, selectors.basePage.noRecords);

    if (await searchingOption.isVisible()) {
      await searchingOption.waitFor({ state: "detached", timeout: 3000 });
    }

    if (await noRecordOption.isVisible()) {
      throw new Error(`No Records Found "${value}"`);
    }

    await resultOption.first().waitFor({ state: "visible", timeout: 3000 });
    await resultOption.first().click();
  }

  // select option
  async clickDropdown(label: string) {
    await this.click(getDropdownSelect(label));
  }
  
  async selectDropdownOption(label: string, value: string) {
    await this.click(getDropdownOption(label, value));
  }

  // verify
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
