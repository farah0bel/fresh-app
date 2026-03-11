# Recap — Système de Tiers & Visuels Recettes

*Généré le 10 mars 2026*

---

## Architecture des tiers

| Tier | Recettes | Avec visuel | Prix | Inclusion |
|------|----------|-------------|------|-----------|
| **Freemium** | 100 | 100 (100%) | Gratuit | — |
| **Premium** | 2 000 | 2 000 (100%) | 4,99€/mois | Free + Premium |
| **Famille** | 5 000 | 5 000 (100%) | 9,99€/mois | Free + Premium + Famille |

Les 5 041 visuels déjà générés couvrent les 3 tiers dès le lancement.

---

## Répartition par meal type

| Type | % | Free (100) | Premium (2 000) | Famille (5 000) |
|------|---|-----------|----------------|----------------|
| Plats principaux | 35% | 35 | 700 | 1 750 |
| Desserts | 15% | 15 | 300 | 750 |
| Petit-déjeuner | 10% | 10 | 200 | 500 |
| Entrées & accompagnements | 10% | 10 | 200 | 500 |
| Soupes | 8% | 8 | 160 | 400 |
| Pains & viennoiseries | 8% | 8 | 160 | 400 |
| Salades | 7% | 7 | 140 | 350 |
| Boissons | 7% | 7 | 140 | 350 |

185 catégories DB regroupées en 8 meal types.

---

## Génération mensuelle

- **50 images/mois** (25 premium + 25 famille)
- Famille voit les 50 grâce à l'inclusion
- Proportions par meal type respectées dans chaque batch
- Coût : **~2€/mois** (0,04€/image via Replicate Flux 1.1 Pro)
- Cron : 1er de chaque mois à 3h (`0 3 1 * *`)

---

## Production actuelle

| Métrique | Valeur |
|----------|--------|
| Visuels générés | 5 041 |
| Couverture DB | 20,1% (5 041 / 25 137) |
| Coût unitaire | ~0,04€/image |
| Format | WebP 1024×1024, qualité 85% |
| Hébergement | VPS OVH (Nginx, cache 30j) |
| Statut Replicate | Crédit épuisé (402) |

---

## Fichiers produits

| Fichier | Emplacement | Statut |
|---------|-------------|--------|
| `assign_recipe_tiers.py` | `04_BUSINESS/scripts/` | Prêt — assigne free/premium/family aux 25K recettes |
| `migration_add_tier.sql` | `04_BUSINESS/scripts/` | Prêt — ALTER TABLE + index |
| `generate_tier_images_cron.py` | `04_BUSINESS/scripts/` | Prêt — cron mensuel 50 images, proportionnel |
| `PATCH_BACKEND_TIER_FILTER.md` | `04_BUSINESS/scripts/` | Prêt — instructions patch API |
| `PROGRAMME_COMMERCIAL_VISUELS_TIERS.md` | `05_MARKETING/` | Prêt — document Cowork marketing |

---

## Étapes d'exécution

| # | Action | Qui | Dépendance |
|---|--------|-----|------------|
| 1 | Exécuter `migration_add_tier.sql` sur CloudDB | Claude Code | — |
| 2 | Lancer `assign_recipe_tiers.py` (dry-run puis réel) | Claude Code | Étape 1 |
| 3 | Patcher le backend (`recipes.ts`) selon `PATCH_BACKEND_TIER_FILTER.md` | Claude Code | Étape 2 |
| 4 | Déployer `generate_tier_images_cron.py` sur le VPS | Claude Code | Étape 2 + crédit Replicate |
| 5 | Recharger crédit Replicate | Farah | — |
| 6 | Intégrer badges 🔒/👨‍👩‍👧‍👦 + écrans upsell dans l'app | Claude Code | Étape 3 |

---

## Conversion & rétention

- **Free → Premium** : 100 recettes illustrées vs placeholders avec badge 🔒
- **Premium → Famille** : 2 000 vs 5 000 + 4 profils famille
- **Rétention** : +50 nouvelles recettes illustrées/mois pour les abonnés
- **Fallback** : `RecipePlaceholder` (dégradé + emoji catégorie) pour les recettes sans image

---

*Scripts dans `04_BUSINESS/scripts/`. Document marketing dans `05_MARKETING/`. Seul Claude Code exécute les modifications sur 01_DATA et 02_APP.*
