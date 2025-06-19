import { test } from "../../../fixtures/roleFixture";
import EmployeeListPage from "../../../pages/employee/PIMPage";
import { employeeData } from "../../../data/employees";
import { Sidebar } from "../../../components/Sidebar";
import { selectors } from "../../../untils/selectors";

test.describe("TC - Delete employee", () => {
    let employeeListPage: EmployeeListPage;
    let sideBar: Sidebar;

    test.beforeEach(async ({ adminPage }) => {
        employeeListPage = new EmployeeListPage(adminPage);
        sideBar = new Sidebar(adminPage);
        await employeeListPage.goto("index.php/dashboard/index");
        await sideBar.clickMenuItem(selectors.sidebar.menuPIM);
    })

    test("Delete employee by id", async ({ adminPage }) => {
        await employeeListPage.deleteEmployeeById(employeeData.validEmployee.employeeId);
        await employeeListPage.verifyEmployeeDeleted(employeeData.validEmployee.employeeId);
    })
})