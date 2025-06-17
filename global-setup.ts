// global-setup.ts
import { chromium } from '@playwright/test';
import LoginPage from './pages/LoginPage';
import { users } from './data/users';

async function globalSetup() {
  const browser = await chromium.launch({ headless: true });

  try {
    // Login Admin
    const adminContext = await browser.newContext();
    const adminPage = await adminContext.newPage();
    const loginAdmin = new LoginPage(adminPage);

    await adminPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginAdmin.login(users.admin.username, users.admin.password);
    await loginAdmin.verifyAdminLoginSuccess();
    await adminContext.storageState({ path: 'storage/admin.json' });

    // Login Employee
    // const empContext = await browser.newContext();
    // const empPage = await empContext.newPage();
    // const loginEmp = new LoginPage(empPage);

    // await empPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await loginEmp.login(users.ess.username, users.ess.password);
    // await loginEmp.verifyESSLoginSuccess();
    // await empContext.storageState({ path: 'storage/ess.json' });

    await browser.close();
  } catch (error) {
    console.error('Error in global setup:', error);
    throw error;
  } finally {
    await browser.close();
  }
}
export default globalSetup;
