import test from "@playwright/test";
import EmployeeListPage from "../../../pages/EmployeeListPage";
import { validEmployee } from "../../../data/employees";
import { Sidebar } from "../../../components/Sidebar";
import { selectors } from "../../../untils/selectors";

test.describe("TC - Delete employee", () => {
    let employeeListPage: EmployeeListPage;
    let sideBar: Sidebar;

    test.beforeEach(async ({ page }) => {
        employeeListPage = new EmployeeListPage(page);
        sideBar = new Sidebar(page);
        await employeeListPage.goto("index.php/dashboard/index");
        await sideBar.clickMenuItem(selectors.sidebar.menuPIM);
    })

    test("Delete employee by id", async ({ page }) => {
        await employeeListPage.deleteEmployeeById(validEmployee.employeeId);
        await employeeListPage.verifyEmployeeDeleted(validEmployee.employeeId);
    })
})