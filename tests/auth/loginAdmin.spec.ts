import test from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import { users } from "../../data/users";
import { messages } from "../../data/messages";

test.describe("Login - Admin", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto("index.php/auth/login");
  })
  
  test("Login successfully with valid Admin credentials", async ({ page }) => {
    await loginPage.login(users.admin.username, users.admin.password);
    await loginPage.verifyAdminLoginSuccess();
  });

  test("Login fails with incorrect password", async ({ page }) => {
    await loginPage.login(users.admin.username, users.admin.passwordWrong);
    await loginPage.verifyAlertErrorMessage(messages.login.invalidCredentials);
  });

  test("Login fails with incorrect username", async ({ page }) => {
    await loginPage.login(users.admin.usernameWrong, users.admin.password);
    await loginPage.verifyAlertErrorMessage(messages.login.invalidCredentials);
  });

  test("Login fails when Username field is empty", async ({ page }) => {
    await loginPage.login("", users.admin.password);
    await loginPage.verifyErrorMessageUsername(messages.login.requiredField);
  });

  test("Login fails when Password field is empty", async ({ page }) => {
    await loginPage.login(users.admin.username, "");
    await loginPage.verifyErrorMessagePassword(messages.login.requiredField);
  });

  test("Login fails when both Username and Password fields are empty", async ({ page }) => {
    await loginPage.login("", "");
    await loginPage.verifyErrorMessageUsername(messages.login.requiredField);
    await loginPage.verifyErrorMessagePassword(messages.login.requiredField);
  });

  test("Login fails with both incorrect Username and Password", async ({ page }) => {
    await loginPage.login(users.admin.usernameWrong, users.admin.passwordWrong);
    await loginPage.verifyAlertErrorMessage(messages.login.invalidCredentials);
  });

  test("Enter username, then clear the field to leave it empty", async ({ page }) => {
    await loginPage.fillUserName(users.admin.username);
    await loginPage.clearUserName();
    await loginPage.verifyErrorMessageUsername(messages.login.requiredField);
  })

  test("Enter password, then clear the field to leave it empty", async ({ page }) => {
    await loginPage.fillPassword(users.admin.password);
    await loginPage.clearPassword();
    await loginPage.verifyErrorMessagePassword(messages.login.requiredField);
  })
});
