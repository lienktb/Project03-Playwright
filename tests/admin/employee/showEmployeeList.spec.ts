import { test } from "@playwright/test";
import AddEmployeePage from "../../../pages/employee/AddEmployeePage";
import { Sidebar } from "../../../components/Sidebar";
import { selectors } from "../../../untils/selectors";
import EmployeeListPage from "../../../pages/employee/PIMPage";
import { employeeData } from "../../../data/employees";
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

test.describe("Search employee", () => {
 test.beforeEach(async ({ page }) => {
    await employeeListPage.deleteEmployeeById(employeeData.validEmployee.employeeId);
    await employeeListPage.clickButtonAdd();
    await addEmployeePage.addEmployee(buildEmployeeData(employeeData.validEmployee));
    await employeeListPage.clickEmployeeList();
  })

  test("Search employee by id", async ({ page }) => {
    await employeeListPage.findEmployeeById(employeeData.validEmployee.employeeId);
    await employeeListPage.verifyEmployeeFound(employeeData.validEmployee);
  })

  test("Search employee by name", async ({ page }) => {
    await employeeListPage.findEmployeeByName(employeeData.validEmployee.firstName);
    await employeeListPage.verifyEmployeeFound(employeeData.validEmployee);
  })
})