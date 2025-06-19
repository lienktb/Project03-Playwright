import { expect, Page } from "@playwright/test";
import BasePage from "../BasePage";
import { selectors } from "../../untils/selectors";
import { contents } from "../../data";
import { Employee, Account } from "../../types/employee";
export default class AddEmployeePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillFirstName(value: string) {
    await this.type(selectors.addEmployeePage.firstName, value);
  }

  async fillMiddleName(value: string) {
    await this.type(selectors.addEmployeePage.middleName, value);
  }

  async fillLastName(value: string) {
    await this.type(selectors.addEmployeePage.lastName, value);
  }

  async fillEmployeeId(value: string) {
    await this.type(selectors.addEmployeePage.employeeId, value);
  }

  async fillUserName(value: string) {
    await this.type(selectors.addEmployeePage.username, value);
  }

  async fillPassword(value: string) {
    await this.type(selectors.addEmployeePage.password, value);
  }

  async fillConfirmPassword(value: string) {
    await this.type(selectors.addEmployeePage.confirmPassword, value);
  }

  async fillFields(employee: Employee) {
      await this.fillTextFields(employee, selectors.addEmployeePage);
  }

  async addEmployee(options: {
    employee: Employee;
    account?: Account;
    fileUrl?: string;
  }) {
    const { employee, account, fileUrl } = options;

    await this.fillTextFields(employee, selectors.addEmployeePage);

    if (fileUrl) {
      await this.updateFileAvatar(fileUrl);
    }

    if (account) {
      await this.clickCreateLogin();
      await this.fillLoginInfo(account);
    }

    await this.clickSave();

    await this.waitForSelector(selectors.editEmployeePage.editContainer);
  }

  async fillLoginInfo(account: Account) {
    const stringFields = {
      username: account.username,
      password: account.password,
      confirmPassword: account.confirmPassword,
    };

    await this.fillTextFields(stringFields, selectors.addUserPage);
    await this.chooseStatus(account.status);
  }

  async chooseStatus(value: boolean) {
    if (value) {
      await this.click(selectors.addEmployeePage.enabledStatus);
    } else {
      await this.click(selectors.addEmployeePage.disabledStatus);
    }
  }

  async updateFileAvatar(fileUrl: string) {
    await this.page.setInputFiles(selectors.addEmployeePage.fileUpload, fileUrl);
  }

  async clickAddEmployee() {
    await this.page.getByRole('link', { name: selectors.addEmployeePage.buttonAddEmployee }).click();
  }
  
  async clickCreateLogin() {
    await this.click(selectors.addEmployeePage.buttonCreateLogin)
  }

  async verifyErrorMessageFile(expectedMessage: string) {
    await this.verifyErrorMessage(selectors.addEmployeePage.errorMessageFile, expectedMessage);
    await expect(this.page.locator(selectors.addEmployeePage.chooseFile)).toContainClass(selectors.addEmployeePage.chooseFileErrorClass);
  }

  async verifyAddedEmployee() {
    await this.waitForSelector(selectors.editEmployeePage.editContainer);
    await this.verifyMainTitle(contents.employeeDetails.title);
  }
  

  // async addEmployee(employees: Employee) {
  //   await this.fillFields(employees);
  //   await this.clickSave();
  //   await this.waitForSelector(selectors.editEmployeePage.editContainer);
  // }

  // async addEmployee(employee: Employee, fileUrl: string) {
  //   await this.fillFields(employee);
  //   await this.updateFileAvatar(fileUrl);
  //   await this.clickSave();
  //   await this.waitForSelector(selectors.editEmployeePage.editContainer);
  // }

  
  // async createAccount(account: Account) {
  //   await this.fillUserName(account.username);
  //   await this.fillPassword(account.password);
  //   await this.fillConfirmPassword(account.confirmPassword);
  //   await this.chooseStatus(account.status);
  // }

  // async addEmployee(employee: Employee, account: Account) {
  //   await this.fillFields(employee);
  //   await this.clickCreateLogin();
  //   await this.createAccount(account);
  //   await this.clickSave();
  // }

}