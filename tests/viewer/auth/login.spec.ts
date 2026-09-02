import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';

test('un utilisateur BtoC peut se connecter avec des identifiants valides', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    process.env.TEST_USER_BTOC_EMAIL!,
    process.env.TEST_USER_BTOC_PASSWORD!
  );

  await expect(page).toHaveURL(/inventory/);
});