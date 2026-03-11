# Fresh App — Guide Design Figma

*Référence technique complète pour réaliser le design de l'application Fresh.*
*Généré le 11 mars 2026*

---

## 1. Écrans à designer

| # | Écran | Tab Label | Icône iOS / Android | Header visible |
|---|-------|-----------|-------------------|----------------|
| 1 | **Home** (index.tsx) | Accueil | house.fill / home | Non |
| 2 | **Search** (search.tsx) | Recettes | magnifyingglass / search | Oui |
| 3 | **Vision** (vision.tsx) | Vision | camera.fill / photo_camera | Non |
| 4 | **Chat** (chat.tsx) | Chef Farah | bubble.left.and.bubble.right.fill / chat | Oui |
| 5 | **Plan** (plan.tsx) | Menu | calendar / calendar_today | Oui |
| 6 | **List** (list.tsx) | Courses | cart.fill / shopping_cart | Oui |
| 7 | **Profile** (profile.tsx) | Profil | person.fill / person | Oui |
| 8 | **Recipe Detail** (recipe/[slug].tsx) | — | ← retour | Oui ("Recette") |
| 9 | **Sign-in** (sign-in.tsx) | — | — | Non |
| 10 | **Upgrade Modal** (upgrade.tsx) | — | — | Non (modal) |

---

## 2. Palette de couleurs

### Brand (partagées light/dark)

| Nom | Hex | Usage |
|-----|-----|-------|
| **Red** | `#E8372A` | CTAs principaux, accents, tint |
| **Red Dark** | `#D03025` | Hover / pressed state |
| **Red Light** | `#F06B62` | Tint léger |
| **Teal** | `#2A9D8F` | Secondaire, badges, tab active |
| **Teal Light** | `#3DB8A9` | Tint léger |
| **Orange** | `#FF6B35` | Accent tertiaire |
| **Charcoal** | `#2D2D2D` | Texte principal |
| **Cream** | `#FAFAF5` | Fond principal light |

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| background | `#FAFAF5` | Fond de page |
| card | `#FFFFFF` | Surface des cartes |
| text | `#2D2D2D` | Texte principal |
| textSecondary | `#6B6B6B` | Texte secondaire |
| textLight | `#9A9A9A` | Texte muet |
| muted | `#F0F0E8` | Tabs inactifs, fonds secondaires |
| border | `#E5E5DC` | Séparateurs, bordures |
| primaryLight | `#FDE8E6` | Fonds légers accent |
| tabIconDefault | `#9A9A9A` | Icône tab inactive |
| tabIconSelected | `#2A9D8F` | Icône tab active |
| chatBubbleUser | `#2A9D8F` | Bulle chat utilisateur |
| chatBubbleUserText | `#FFFFFF` | Texte bulle user |
| chatBubbleBot | `#FFFFFF` | Bulle chat bot |
| chatBubbleBotText | `#2D2D2D` | Texte bulle bot |
| chatInputBg | `#FFFFFF` | Fond input chat |
| chatInputBorder | `#E5E5DC` | Bordure input chat |

### Dark Mode

| Token | Hex | Usage |
|-------|-----|-------|
| background | `#0F0F0F` | Fond de page |
| card | `#1A1A1A` | Surface des cartes |
| text | `#F5F5F0` | Texte principal |
| textSecondary | `#9A9590` | Texte secondaire |
| textLight | `#6B6360` | Texte muet |
| muted | `#1A1A1A` | Tabs inactifs |
| border | `#2A2520` | Séparateurs |
| tabIconDefault | `#6B6360` | Icône tab inactive |
| tabIconSelected | `#2A9D8F` | Icône tab active |
| chatBubbleBot | `#1A1A1A` | Bulle chat bot |
| chatBubbleBotText | `#F5F5F0` | Texte bulle bot |

---

## 3. Typographie

### Familles de polices

| Police | Poids | Usage |
|--------|-------|-------|
| **DM Serif Display** | Regular (400) | Titres hero, headings principaux |
| **DM Serif Display** | Italic (400) | Emphase, citations |
| **DM Sans** | Regular (400) | Corps de texte |
| **DM Sans** | Medium (500) | Labels, sous-titres |
| **DM Sans** | SemiBold (600) | Accents, chips actifs |
| **DM Sans** | Bold (700) | Titres sections, boutons |
| **Space Mono** | Regular (400) | Contenu scientifique, code |

### Échelle de tailles

| Token | Taille | Usage courant |
|-------|--------|---------------|
| xs | 12px | Captions, badges |
| sm | 14px | Labels, texte secondaire |
| base | 16px | Corps de texte (défaut) |
| lg | 18px | Sous-titres |
| xl | 20px | Titres de section |
| 2xl | 24px | Titres importants |
| 3xl | 30px | Grand titre |
| 4xl | 36px | Titre hero secondaire |
| 5xl | 48px | Titre hero principal |

---

## 4. Spacing (espacement)

| Token | Valeur | Usage |
|-------|--------|-------|
| xs | 8px | Micro-espacement (entre chips, icône-texte) |
| sm | 16px | Padding standard (intérieur cartes) |
| md | 24px | Espacement sections |
| lg | 32px | Grands espacements |
| xl | 48px | Espacement hero |
| 2xl / 3xl | 64px | Séparation majeure |

---

## 5. Border Radius

| Token | Valeur | Usage |
|-------|--------|-------|
| sm | 4px | Subtil (petits éléments) |
| md | 8px | Standard |
| lg | 12px | **Défaut principal** (cartes, inputs, boutons) |
| xl | 16px | Proéminent (modals, grosses cartes) |
| full | 9999px | Pills, avatars, badges circulaires |

---

## 6. Composants UI existants

| Composant | Description | Variantes |
|-----------|-------------|-----------|
| **Button** | Bouton CTA | Couleur red/teal, taille, plein/outline |
| **IconButton** | Bouton icône seule | Rond, tailles |
| **Input** | Champ texte | Placeholder, focus state |
| **Card** | Conteneur contenu | Ombre, bordure |
| **Badge** | Tag statut | Couleurs variées |
| **Chip** | Filtre / tag | Actif/inactif, compact, couleur |
| **Avatar** | Photo profil | Taille, initiales fallback |
| **Divider** | Séparateur | Horizontal |
| **SectionHeader** | Titre de section | Avec/sans lien "Tout voir" |
| **EmptyState** | État vide | Emoji + titre + description |
| **Skeleton** | Placeholder loading | Animé |
| **RecipeCard** | Carte recette | Image ou RecipePlaceholder |
| **RecipePlaceholder** | Fallback sans image | Dégradé catégorie + emoji |

---

## 7. Tab Bar

- **Taille icônes** : 24px
- **Couleur active** : `#2A9D8F` (teal)
- **Couleur inactive** : `#9A9A9A` (light) / `#6B6360` (dark)
- **Fond** : `colors.card` (blanc / dark surface)
- **Bordure top** : `colors.border`
- **7 onglets** : Accueil, Recettes, Vision, Chef Farah, Menu, Courses, Profil
- **Icônes** : SF Symbols (iOS) / Material Icons (Android)

---

## 8. Détail par écran

### 8.1 Home (index.tsx)
- Hero plein écran : titre DM Serif Display 48px, sous-titre DM Sans 16px
- 2 CTA : "Commencer gratuitement" (red) + "Voir comment ça marche" (outline)
- Carrousel suggestions recettes (RecipeCards horizontales)
- Section "3 étapes" avec illustrations
- Section fonctionnalités (6 features avec illustrations)
- Teaser tarifs (3 tiers : Gratuit / Premium 4,99€ / Famille 9,99€)
- Fond cream `#FAFAF5`

### 8.2 Search / Recettes (search.tsx)
- Barre de recherche en haut (Input, placeholder "Poulet, tiramisu, curry...")
- 5 rangées de chips filtres (scrollables horizontalement) :
  - Difficulté (red)
  - Temps de cuisson (orange)
  - Moment du repas (teal)
  - Régime alimentaire (teal)
  - Catégories (accent)
- Grille de RecipeCards
- Empty state : emoji 🍽 + "Recherche parmi 25 000+ recettes"
- Empty state aucun résultat : 🔍 + "Aucun résultat"

### 8.3 Vision (vision.tsx)
- Interface scan plein écran (caméra)
- Loading animé pendant analyse
- Résultats : chips ingrédients détectés + recettes suggérées + message Chef Farah

### 8.4 Chat — Chef Farah (chat.tsx)
- Interface conversationnelle
- Bulles user (teal `#2A9D8F`, texte blanc)
- Bulles bot (blanc/dark, texte charcoal)
- Input en bas avec bordure `#E5E5DC`
- Avatar Chef Farah

### 8.5 Plan / Menu (plan.tsx)
- Vue semaine (7 jours)
- Slots repas (petit-déj, déjeuner, dîner)
- Drag & drop recettes
- Bouton "Générer les courses"

### 8.6 List / Courses (list.tsx)
- Liste de courses groupée par rayon
- Checkboxes pour cocher les items achetés
- Tri par catégorie magasin

### 8.7 Profile (profile.tsx)
- Avatar + nom utilisateur
- Préférences alimentaires (allergies, régimes)
- Substitutions personnalisées
- Paramètres compte
- Bouton déconnexion
- Gestion abonnement (tier actuel, upgrade)

### 8.8 Recipe Detail (recipe/[slug].tsx)
- Hero image 220px (ou RecipePlaceholder gradient)
- Titre recette (DM Serif Display)
- Métadonnées : difficulté, temps, portions, coût estimé
- Liste ingrédients
- Étapes de préparation numérotées
- Infos nutritionnelles
- Boutons : favoris, ajouter au plan, partager

### 8.9 Sign-in
- Logo Fresh
- 2 boutons OAuth : "Continuer avec Google" + "Continuer avec Apple"
- Lien "Continuer sans compte" (guest mode)
- Pas de formulaire email/password

### 8.10 Upgrade Modal
- Comparatif 3 tiers en colonnes
- Badge "Recommandé" sur Premium
- Prix : 0€ / 4,99€ par mois / 9,99€ par mois
- Boutons CTA par tier
- Essai gratuit 14 jours
- Fond semi-transparent (modal overlay)

---

## 9. Interactions & États

| État | Traitement |
|------|------------|
| **Loading** | Skeleton animé (gris pulsé) |
| **Empty** | EmptyState (emoji + titre + description) |
| **Error** | Banner rouge avec message + retry |
| **Hover/Press** | Red → Red Dark (`#D03025`), opacité 0.8 |
| **Chip actif** | Fond couleur pleine, texte blanc |
| **Chip inactif** | Fond transparent, bordure, texte couleur |
| **Tab active** | Teal (`#2A9D8F`), label visible |
| **Tab inactive** | Gris (`#9A9A9A`), label visible |
| **Recette sans image** | RecipePlaceholder (dégradé catégorie + emoji) |
| **Badge premium** | 🔒 sur recettes verrouillées |

---

## 10. Dimensions cibles

| Device | Largeur | Hauteur |
|--------|---------|---------|
| iPhone SE | 375px | 667px |
| iPhone 14/15 | 393px | 852px |
| iPhone 14/15 Pro Max | 430px | 932px |
| Android standard | 360px | 800px |
| Android large | 412px | 915px |

**Safe areas** : respecter les encoches (notch/dynamic island) et home indicator iOS.

---

## 11. Assets & Illustrations

- **Logo** : `assets/images/icon_1024.png` (1024×1024)
- **Adaptive icon** : `assets/images/adaptive-icon.png`
- **Splash** : `assets/images/splash-icon.png`
- **Illustrations Home** : style flat warm (femme scannant frigo, 3 étapes, main+téléphone)
- **Images recettes** : WebP 1024×1024 via `https://api.freshapp.fr/images/recipes/{id}.webp`
- **Fallback recette** : dégradé linéaire par catégorie + emoji centré

### Gradients par catégorie (RecipePlaceholder)

| Catégorie | Couleur 1 | Couleur 2 |
|-----------|-----------|-----------|
| Desserts/Cakes/Cookies | `#F4845F` | `#F79D84` |
| Main Dishes/Beef/Pork | `#E8372A` | `#F06B62` |
| Breakfast | `#F7B731` | `#F9CC6B` |
| Soups/Chowders | `#38ADA9` | `#6BD5D1` |
| Salads | `#78E08F` | `#A3EBB1` |
| Breads/Pizza | `#D4A574` | `#E2C09E` |
| Cocktails/Beverages | `#9B59B6` | `#BF7FD3` |
| Italian/Mexican/Indian | `#E77F67` | `#F0A595` |
| Healthy/Vegetarian | `#2A9D8F` | `#3DB8A9` |
| Default | `#C4C4BC` | `#D6D6CE` |

---

## 12. Règles de design

1. **Police titres** = DM Serif Display, **corps** = DM Sans
2. **CTA principal** = Red `#E8372A`, arrondi 12px
3. **CTA secondaire** = outline border, couleur texte
4. **Espacement interne cartes** = 16px (sm)
5. **Espacement entre sections** = 24-32px (md-lg)
6. **Ombres cartes** : `0 2px 8px rgba(0,0,0,0.08)` (light) / pas d'ombre (dark)
7. **Images recettes** : ratio libre, arrondi 12px
8. **Minimum touch target** : 44×44px (accessibilité)
9. **Texte minimum** : 12px (xs)
10. **Mode sombre** : toujours designer les 2 versions

---

*Fichier de référence pour Figma. Tous les tokens sont alignés avec `constants/Colors.ts`.*
*Stack : Expo Router + React Native — Les composants natifs iOS/Android peuvent légèrement différer du web.*
