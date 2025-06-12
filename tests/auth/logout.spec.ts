import test from "@playwright/test";
import { Header } from "../../components/Header";
import LoginPage from "../../pages/LoginPage";
import { selectors } from "../../untils/selectors";
import { users } from "../../data/users";

test.describe("Logout", () => {
    let loginPage: LoginPage;
    let header: Header;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        header = new Header(page);
        await loginPage.goto("index.php/auth/login");
    })
    
    test("Logout - Admin", async ({ page }) => {
        await loginPage.login(users.admin.username, users.admin.password);
        await loginPage.waitForSelector(selectors.adminDashboardPage.dashboardGrid);

        await header.logout();
        await header.verifyLogoutSuccess();
    })

    test("Logout - ESS", async ({ page }) => {
        await loginPage.login(users.ess.username, users.ess.password);
        await loginPage.waitForSelector(selectors.adminDashboardPage.dashboardGrid);

        await header.logout();
        await header.verifyLogoutSuccess();
    })
})