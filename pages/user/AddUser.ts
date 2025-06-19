import { expect, Page } from "@playwright/test";
import BasePage from "../BasePage";
import { Account } from "../../types/employee";
import { selectors } from "../../untils/selectors";

export default class AddUser extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async addUser(account: Account) {
    this.selectEmployeeName
    const accountFields = {
      username: account.username,
      password: account.password,
      confirmPassword: account.confirmPassword,
    };

    await this.fillTextFields(accountFields, selectors.addUserPage);
  }

  async selectRole(role: string) {
    await this.clickDropdown(selectors.addUserPage.userRole);
    await this.selectDropdownOption(selectors.addUserPage.userRole, role);
  }

  async selectStatus(status: string) {
    const statusText = status ? selectors.addUserPage.enabled : selectors.addUserPage.disabled
    await this.clickDropdown(selectors.addUserPage.status);
    await this.selectDropdownOption(selectors.addUserPage.userRole, statusText);
  }

  async selectEmployeeName(name: string) {
    await this.selectAutocompleteOption(selectors.addUserPage.employeeName, name);
  }
}