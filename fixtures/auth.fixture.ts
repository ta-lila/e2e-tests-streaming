import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend<{ loggedInPage: void }>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      process.env.TEST_USER_BTOC_EMAIL!,
      process.env.TEST_USER_BTOC_PASSWORD!
    );
    await use();
  },
});

export { expect } from '@playwright/test';
