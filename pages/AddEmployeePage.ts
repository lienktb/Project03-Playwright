import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";
import { selectors } from "../untils/selectors";
import { files } from "../data/files";
import { contents } from "../data/contents";

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

  async updateFileAvatar(fileUrl: string) {
    await this.page.setInputFiles(selectors.addEmployeePage.fileUpload, fileUrl);
  }

  async clickSave() {
    await this.page.getByRole('button', { name: selectors.addEmployeePage.buttonSave }).click();
  }

  async clickAddEmployee() {
    await this.page.getByRole('link', { name: selectors.addEmployeePage.buttonAddEmployee }).click();
  }

   async fillFields(employees: Employee) {
    await this.fillFirstName(employees.firstname);
    await this.fillMiddleName(employees.middleName ?? '');
    await this.fillLastName(employees.lastName);
    await this.fillEmployeeId( employees.employeeId);
  }

  async addEmployeeWithoutAvatar(employees: Employee) {
    await this.fillFields(employees);
    await this.clickSave();
  }

  async addEmployeeWithAvatar(employee: Employee, fileUrl: string) {
    await this.fillFields(employee);
    await this.updateFileAvatar(fileUrl);
    await this.clickSave();
  }

  async verifyErrorMessageFile(expectedMessage: string) {
    await this.verifyErrorMessage(selectors.addEmployeePage.errorMessageFile, expectedMessage);
    await expect(this.page.locator(selectors.addEmployeePage.chooseFile)).toContainClass(selectors.addEmployeePage.chooseFileErrorClass);
  }

  async verifyAddedEmployee() {
    await this.waitForSelector(selectors.editEmployeePage.editContainer);
    await this.verifyMainTitle(contents.employeeDetails.title);
  }
}

type Employee = {
  firstname: string;
  middleName?: string;
  lastName: string;
  employeeId: string;
};