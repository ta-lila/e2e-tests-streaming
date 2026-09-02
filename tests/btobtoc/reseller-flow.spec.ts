import { test, expect } from '@playwright/test';

// TODO: brancher sur la vraie plateforme une fois les accès staging obtenus
// Contexte : une entreprise BtoBtoC (revendeur) crée des comptes pour ses propres
// utilisateurs finaux, qui doivent accéder au contenu sans jamais voir les autres
// organisations clientes de la plateforme.

test.skip('une entreprise BtoBtoC peut inviter un nouvel utilisateur final', async ({ page }) => {
  // Se connecter avec un compte admin BtoBtoC (revendeur)
  // await page.goto('/revendeur/utilisateurs/inviter');
  // Remplir le formulaire d'invitation (email de l'utilisateur final)
  // await page.locator('[data-test="invite-button"]').click();
  // await expect(page.locator('[data-test="success-message"]')).toBeVisible();
});

test.skip('un utilisateur final créé par un revendeur accède au contenu autorisé', async ({ page }) => {
  // Se connecter avec le compte de l'utilisateur final nouvellement créé
  // await page.goto('/contenu/123');
  // await expect(page.locator('[data-test="video-player"]')).toBeVisible();
});

test.skip('un utilisateur final BtoBtoC ne voit pas les autres revendeurs/organisations', async ({ page }) => {
  // Se connecter avec un compte utilisateur final du revendeur A
  // await page.goto('/mon-compte');
  // Vérifier qu'aucune référence à un autre revendeur (B) n'apparaît dans l'interface
});