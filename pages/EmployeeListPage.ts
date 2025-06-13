import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";
import { selectors } from "../untils/selectors";
import { contents } from "../data/contents";
export default class EmployeeListPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickButtonAdd() {
    await this.click(selectors.addEmployeePage.buttonAdd);
  }

  async findEmployeeById(id: string) {
    await this.type(selectors.employeeListPage.filterEmployeeId, id);
  }

  async clickSearch() {
    await this.page.getByRole("button", { name: selectors.employeeListPage.buttonSearch }).press('Enter');
  }

  async clickDelete() {
    await this.click(selectors.employeeListPage.buttonDelete);
  }

  async clickDeleteConfirm() {
    await this.page.getByRole("button", { name: selectors.basePage.buttonDeleteConfirm }).click();
  }

  async getRowCount() {
    const rowCount = await this.page.locator(selectors.basePage.tableItem).count();

    return rowCount;
  }

  async deleteEmployeeById(id: string) {
    await this.findEmployeeById(id);
    await this.clickSearch();
    await this.waitForTableLoaded();

    const rowCount = await this.getRowCount();

    if (rowCount > 0) {
        console.log(`Found ${rowCount} employee(s) with ID ${id}. Proceeding to delete.`);
        await this.clickDelete();
        await this.clickDeleteConfirm();
        await this.waitForTableLoaded();
    } else {
        console.warn(`No employee found with ID ${id}.`);
    }
  }

  async verifyNoRecordsFound() {
    await this.waitForTableLoaded();
    await expect(this.page.locator(selectors.employeeListPage.resultsText)).toHaveText(contents.basePage.noRecordFound);
    await expect(this.page.locator(selectors.basePage.tableBody)).toBeEmpty();
}

  async verifyEmployeeDeleted(id: string) {
    await this.findEmployeeById(id);
    await this.clickSearch();
    
    await this.verifyNoRecordsFound();
  }
}