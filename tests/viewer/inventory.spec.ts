import { test, expect } from '../../fixtures/auth.fixture';

test('un utilisateur connecté voit la liste des produits', async ({ page, loggedInPage }) => {
  await page.waitForTimeout(3000); // pause de 3 secondes pour observer
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
  
});