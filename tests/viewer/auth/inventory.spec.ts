import { test, expect } from '../../../fixtures/auth.fixture';

test('un utilisateur connecte voit la liste des produits', async ({ page, loggedInPage }) => {
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});