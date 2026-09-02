import { test, expect } from '@playwright/test';

// TODO: brancher sur la vraie plateforme une fois les accès staging obtenus
// Contexte : vérifier les actions du back-office admin sur la gestion de contenu vidéo.

test.skip('un admin peut publier une nouvelle vidéo', async ({ page }) => {
  // Se connecter avec un compte admin
  // await page.goto('/admin/contenus/nouveau');
  // Remplir le formulaire (titre, description, upload du fichier)
  // await page.locator('[data-test="publish-button"]').click();
  // await expect(page.locator('[data-test="success-message"]')).toBeVisible();
});

test.skip('un admin peut modifier les droits d\'accès d\'un compte BtoB', async ({ page }) => {
  // await page.goto('/admin/comptes/123/droits');
  // Modifier les droits, sauvegarder
  // await expect(page.locator('[data-test="success-message"]')).toBeVisible();
});

test.skip('un contenu supprimé n\'est plus visible côté viewer', async ({ page }) => {
  // 1. Supprimer un contenu côté admin
  // 2. Aller sur la page du contenu côté viewer
  // await expect(page.locator('[data-test="content-not-found"]')).toBeVisible();
});

test.skip('un admin BtoB ne voit que les utilisateurs de sa propre organisation', async ({ page }) => {
  // Se connecter avec un compte admin BtoB (organisation A)
  // await page.goto('/admin/utilisateurs');
  // Vérifier qu'aucun utilisateur d'une autre organisation (B) n'apparaît dans la liste
});