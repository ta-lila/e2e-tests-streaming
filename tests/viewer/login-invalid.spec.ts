import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('un utilisateur avec un compte bloqué voit un message d\'erreur', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    process.env.TEST_USER_LOCKED_EMAIL!,
    process.env.TEST_USER_LOCKED_PASSWORD!
  );

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText('locked out');
});