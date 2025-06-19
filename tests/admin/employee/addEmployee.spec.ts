import { test } from "@playwright/test";
import { AddEmployeePage, EmployeeListPage } from "../../../pages";
import { Sidebar } from "../../../components/Sidebar";
import { selectors } from "../../../untils/selectors";
import { employeeData, accountData, files, messages } from "../../../data";
import { buildEmployeeData } from "../../../helpers/employeeHelper";

let addEmployeePage: AddEmployeePage;
let employeeListPage: EmployeeListPage;
let sideBar: Sidebar;

test.beforeEach(async ({ page }) => {
  addEmployeePage = new AddEmployeePage(page);
  employeeListPage = new EmployeeListPage(page);
  sideBar = new Sidebar(page);

  await employeeListPage.goto("index.php/dashboard/index");
  await sideBar.clickMenuItem(selectors.sidebar.menuPIM);
});

test.describe("Add Employee - Valid Cases", () => {
  test.beforeEach(async ({ page }) => {
    await employeeListPage.deleteEmployeeById(employeeData.validEmployee.employeeId);
    await employeeListPage.clickButtonAdd();
  })

  test("Successfully add a new employee without avatar", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee));
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Successfully add a new employee with valid avatar - JPG", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, undefined, files.validImageJPG));
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Successfully add a new employee with valid avatar - PNG", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, undefined, files.validImagePNG));
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Successfully add a new employee with valid avatar - GIF", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, undefined, files.validImageGif));
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Add employee without entering Employee ID", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.noEmployeeId));
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Add employee without entering middle name", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.noMiddleName))
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Add employee with a duplicate Employee ID", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee));
    await addEmployeePage.verifyAddedEmployee();

    await addEmployeePage.clickAddEmployee();

    await addEmployeePage.fillFields(employeeData.validEmployee);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageEmployeeId, messages.employee.employeeIdExist);
  })
})

test.describe("Add Employee - Invalid Cases", () => {
  test.beforeEach(async ({ page }) => {
      await employeeListPage.clickButtonAdd();
  })

  test("Employee ID must be less than 10 characters", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.invalidEmployeeId))
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageEmployeeId, messages.employee.employeeIdInvalid);
  })

  test("First Name field must not be empty", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.noFirstName));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageFirstName, messages.basePage.requiredField);
  })

  test("Last Name field must not be empty", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.noLastName))
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageLastName, messages.basePage.requiredField);
  })

  test("Validate character limit for First Name and Last Name fields", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.employeeLongName));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageFirstName, messages.employee.nameInvalid);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageMiddleName, messages.employee.nameInvalid);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageLastName, messages.employee.nameInvalid);
  })

  test("Upload avatar image exceeding 1MB", async ({ page }) => {
    await addEmployeePage.updateFileAvatar(files.invalidImage);
    await addEmployeePage.verifyErrorMessageFile(messages.updateFile.exceeded);
  })

  test("Upload invalid file type (not jpg/png/gif)", async ({ page }) => {
    await addEmployeePage.updateFileAvatar(files.invalidFileType);
    await addEmployeePage.verifyErrorMessageFile(messages.updateFile.invalidFileType);
  })
})

test.describe("Add Employee and Create Login Account", () => {
  test.beforeEach(async ({ page }) => {
    await employeeListPage.deleteEmployeeById(employeeData.validEmployee.employeeId);
    await employeeListPage.clickButtonAdd();
  })

  test("Add employee successfully and create login account", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, accountData.accountValid));
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Add employee with all required fields left empty", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, accountData.accountNoFields));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageUsername, messages.basePage.requiredField);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessagePassword, messages.basePage.requiredField);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageConfirmPassword, messages.basePage.passwordNotMatch);
  })
  test("Add employee with username left empty", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, accountData.accountNoUsername));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageUsername, messages.basePage.requiredField);
  })
  test("Add employee with password left empty", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, accountData.accountNoPassword));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessagePassword, messages.basePage.requiredField);
  })
  test("Add employee with password less than 7 characters", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, accountData.passwordTooShort));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessagePassword, messages.basePage.passwordTooShort);
  })
  test("Add employee with password containing only digits", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, accountData.accountNumberPassword));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessagePassword, messages.basePage.passwordLowercase);
  })
  test("Add employee with valid password but confirm password left empty", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, accountData.accountNoConfirmPassword));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageConfirmPassword, messages.basePage.passwordNotMatch);
  })
  test("Add employee with valid password but confirm password differs from password", async ({ page }) => {
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee, accountData.accountInvalidConfirmPassword));
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageConfirmPassword, messages.basePage.passwordNotMatch);
  })
  
})