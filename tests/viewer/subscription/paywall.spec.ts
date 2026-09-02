import { test, expect } from '@playwright/test';

// TODO: brancher sur la vraie plateforme une fois les accès staging obtenus
// Contexte : un visiteur non abonné doit voir une offre de souscription (paywall)
// avant de pouvoir accéder au contenu premium.

test.skip('un visiteur non abonné voit une offre de souscription', async ({ page }) => {
  // await page.goto('/contenu-premium');
  // await expect(page.locator('[data-test="paywall"]')).toBeVisible();
  // await expect(page.locator('[data-test="subscribe-button"]')).toBeVisible();
});

test.skip('un utilisateur abonné accède directement au contenu premium', async ({ page }) => {
  // Se connecter avec un compte ayant un abonnement actif
  // await page.goto('/contenu-premium');
  // await expect(page.locator('[data-test="video-player"]')).toBeVisible();
});

test.skip('un abonnement expiré bloque l\'accès au contenu premium', async ({ page }) => {
  // Se connecter avec un compte dont l'abonnement a expiré
  // await page.goto('/contenu-premium');
  // await expect(page.locator('[data-test="paywall"]')).toBeVisible();
});