// tests/fixtures/adminLoginFixture.ts
import { test as baseTest, chromium, BrowserContext, Page } from '@playwright/test';
import fs from 'fs';
import LoginPage from '../pages/LoginPage';
import { users } from '../data/users';

const STORAGE_PATH = 'storage/admin.json';

type MyFixtures = {
  loginAsAdminPage: Page;
};

const isValidSession = async (page: Page): Promise<boolean> => {
  try {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', { waitUntil: 'networkidle' });
    return await page.locator('.orangehrm-dashboard-grid').isVisible({ timeout: 5000 });
  } catch {
    return false;
  }
};

export const test = baseTest.extend<MyFixtures>({
  loginAsAdminPage: async ({ browser }, use) => {
    let context: BrowserContext;
    let page;

    if (fs.existsSync(STORAGE_PATH)) {
      context = await browser.newContext({ storageState: STORAGE_PATH });
      page = await context.newPage();

      const valid = await isValidSession(page);
      if (!valid) {
        await context.close();

        context = await browser.newContext();
        page = await context.newPage();
        const loginPage = new LoginPage(page);

        await loginPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginPage.login(users.admin.username, users.admin.password);
        await loginPage.verifyAdminLoginSuccess();
    
        await loginPage.saveAdminStorage();
      }
    } else {
      context = await browser.newContext();
      page = await context.newPage();
      const loginPage = new LoginPage(page);
      await loginPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      await loginPage.login(users.admin.username, users.admin.password);
      await loginPage.verifyAdminLoginSuccess();
  
      await loginPage.saveAdminStorage();
    }
    
    await use(page);
    await context.close();
  },
});

export const expect = baseTest.expect;
