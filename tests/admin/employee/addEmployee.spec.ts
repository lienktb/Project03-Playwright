import { test } from "../../../fixtures/roleFixture";
import AddEmployeePage from "../../../pages/AddEmployeePage";
import { Sidebar } from "../../../components/Sidebar";
import { selectors } from "../../../untils/selectors";
import EmployeeListPage from "../../../pages/EmployeeListPage";
import { employeeData } from "../../../data/employees";
import { files } from "../../../data/files";
import { messages } from "../../../data/messages";

let addEmployeePage: AddEmployeePage;
let employeeListPage: EmployeeListPage;
let sideBar: Sidebar;

test.beforeEach(async ({ adminPage }) => {
  addEmployeePage = new AddEmployeePage(adminPage);
  employeeListPage = new EmployeeListPage(adminPage);
  sideBar = new Sidebar(adminPage);

  await employeeListPage.goto("index.php/dashboard/index");
  await sideBar.clickMenuItem(selectors.sidebar.menuPIM);
});

test.describe("Add Employee - Valid Cases", () => {
  test.beforeEach(async ({ page }) => {
      await employeeListPage.deleteEmployeeById(employeeData.validEmployee.employeeId);
      await employeeListPage.clickButtonAdd();
  })

  test("Successfully add a new employee without avatar", async ({ page }) => {
      await addEmployeePage.addEmployeeWithoutAvatar(employeeData.validEmployee);
      await addEmployeePage.verifyAddedEmployee();
  })

  test("Successfully add a new employee with valid avatar - JPG", async ({ page }) => {
      await addEmployeePage.addEmployeeWithAvatar(employeeData.validEmployee, files.validImageJPG);
      await addEmployeePage.verifyAddedEmployee();
  })

  test("Successfully add a new employee with valid avatar - PNG", async ({ page }) => {
      await addEmployeePage.addEmployeeWithAvatar(employeeData.validEmployee, files.validImagePNG);
      await addEmployeePage.verifyAddedEmployee();
  })

  test("Successfully add a new employee with valid avatar - GIF", async ({ page }) => {
      await addEmployeePage.addEmployeeWithAvatar(employeeData.validEmployee, files.validImageGif);
      await addEmployeePage.verifyAddedEmployee();
  })

  test("Add employee without entering Employee ID", async ({ page }) => {
    await addEmployeePage.addEmployeeWithoutAvatar(employeeData.noEmployeeId);
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Add employee without entering middle name", async ({ page }) => {
    await addEmployeePage.addEmployeeWithoutAvatar(employeeData.noMiddleName);
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Add employee with a duplicate Employee ID", async ({ page }) => {
    await addEmployeePage.addEmployeeWithoutAvatar(employeeData.validEmployee);
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
    await addEmployeePage.addEmployeeWithoutAvatar(employeeData.invalidEmployeeId);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageEmployeeId, messages.employee.employeeIdInvalid);
  })

  test("First Name field must not be empty", async ({ page }) => {
    await addEmployeePage.addEmployeeWithoutAvatar(employeeData.noFirstName);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageFirstName, messages.basePage.requiredField);
  })

  test("Last Name field must not be empty", async ({ page }) => {
    await addEmployeePage.addEmployeeWithoutAvatar(employeeData.noLastName);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageLastName, messages.basePage.requiredField);
  })

  test("Validate character limit for First Name and Last Name fields", async ({ page }) => {
    await addEmployeePage.addEmployeeWithoutAvatar(employeeData.employeeLongName);
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
    await addEmployeePage.addEmployeeAndCreateLoginAccount(employeeData.validEmployee, employeeData.accountValid);
    await addEmployeePage.verifyAddedEmployee();
  })

  test("Add employee with all required fields left empty", async ({ page }) => {
    await addEmployeePage.addEmployeeAndCreateLoginAccount(employeeData.validEmployee, employeeData.accountNoFields);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageUsername, messages.basePage.requiredField);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessagePassword, messages.basePage.requiredField);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageConfirmPassword, messages.basePage.passwordNotMatch);
  })
  test("Add employee with username left empty", async ({ page }) => {
    await addEmployeePage.addEmployeeAndCreateLoginAccount(employeeData.validEmployee, employeeData.accountNoUsername);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageUsername, messages.basePage.requiredField);
  })
  test("Add employee with password left empty", async ({ page }) => {
    await addEmployeePage.addEmployeeAndCreateLoginAccount(employeeData.validEmployee, employeeData.accountNoPassword);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessagePassword, messages.basePage.requiredField);
  })
  test("Add employee with password less than 7 characters", async ({ page }) => {
    await addEmployeePage.addEmployeeAndCreateLoginAccount(employeeData.validEmployee, employeeData.passwordTooShort);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessagePassword, messages.basePage.passwordTooShort);
  })
  test("Add employee with password containing only digits", async ({ page }) => {
    await addEmployeePage.addEmployeeAndCreateLoginAccount(employeeData.validEmployee, employeeData.accountNumberPassword);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessagePassword, messages.basePage.passwordLowercase);
  })
  test("Add employee with valid password but confirm password left empty", async ({ page }) => {
    await addEmployeePage.addEmployeeAndCreateLoginAccount(employeeData.validEmployee, employeeData.accountNoConfirmPassword);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageConfirmPassword, messages.basePage.passwordNotMatch);
  })
  test("Add employee with valid password but confirm password differs from password", async ({ page }) => {
    await addEmployeePage.addEmployeeAndCreateLoginAccount(employeeData.validEmployee, employeeData.accountInvalidConfirmPassword);
    await addEmployeePage.verifyErrorMessage(selectors.addEmployeePage.errorMessageConfirmPassword, messages.basePage.passwordNotMatch);
  })
  
})
