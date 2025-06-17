// tests/fixtures/roleFixtures.ts
import { test as base, Page } from '@playwright/test';

type RoleFixtures = {
  adminPage: Page;
  essPage: Page;
};

export const test = base.extend<RoleFixtures>({
  adminPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: 'storage/admin.json' });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  essPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: 'storage/ess.json' });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

export const expect = base.expect;
