# Prompt Figma — Fresh by Elegance du Goût

## Contexte

Tu es un designer UI/UX senior spécialisé en applications mobiles food-tech. Tu vas concevoir le design system complet et toutes les maquettes de **Fresh**, une application de cuisine intelligente propulsée par l'IA.

**Fresh** permet aux utilisateurs de scanner leur frigo, recevoir des recettes personnalisées, planifier leurs repas et faire leurs courses — le tout guidé par "Chef Farah", un assistant IA culinaire.

**Cible** : 25-45 ans, urbains, soucieux de bien manger sans gaspiller. Ambiance : chaleureuse, méditerranéenne, moderne mais accessible.

**Plateforme** : iOS + Android (React Native / Expo)

---

## Design System

### Palette

**Couleurs principales :**
- Red `#E8372A` — CTAs, accents principaux
- Red Dark `#D03025` — États hover/pressed
- Teal `#2A9D8F` — Secondaire, badges, tab active, bulles chat user
- Teal Light `#3DB8A9` — Tint léger
- Orange `#FF6B35` — Accent tertiaire (temps de cuisson)

**Couleurs neutres (Light Mode) :**
- Cream `#FAFAF5` — Fond de page
- White `#FFFFFF` — Cartes, surfaces
- Charcoal `#2D2D2D` — Texte principal
- Grey `#6B6B6B` — Texte secondaire
- Light Grey `#9A9A9A` — Texte muet, icônes inactives
- Muted `#F0F0E8` — Fonds secondaires
- Border `#E5E5DC` — Séparateurs
- Primary Light `#FDE8E6` — Fond léger accent rouge

**Couleurs neutres (Dark Mode) :**
- Background `#0F0F0F`
- Card `#1A1A1A`
- Text `#F5F5F0`
- Text Secondary `#9A9590`
- Text Light `#6B6360`
- Border `#2A2520`

### Typographie

- **Titres / Hero** : DM Serif Display (serif élégant)
  - Hero : 48px
  - H1 : 36px
  - H2 : 30px
  - H3 : 24px
  - H4 : 20px
- **Corps / UI** : DM Sans (sans-serif lisible)
  - Body : 16px Regular
  - Body small : 14px Regular
  - Label : 14px Medium
  - Button : 16px Bold
  - Caption : 12px Regular
- **Monospace** : Space Mono (contenu scientifique/nutrition)

### Spacing

8px / 16px / 24px / 32px / 48px / 64px

### Border Radius

- Petit : 4px
- Standard : 8px
- **Défaut** : 12px (cartes, boutons, inputs)
- Large : 16px (modals)
- Pill : 9999px (badges, avatars)

### Ombres (Light uniquement)

- Card : `0 2px 8px rgba(0,0,0,0.08)`
- Elevated : `0 4px 16px rgba(0,0,0,0.12)`

---

## Écrans à concevoir (10 écrans)

### 1. Home (Accueil) — pas de header
- Hero plein écran : fond cream, titre DM Serif Display "Votre frigo. Vos recettes. Ce soir."
- Sous-titre DM Sans, 2 boutons CTA (rouge plein + outline)
- Mention "Plan gratuit · Sans carte bancaire · FR/EN"
- Carrousel horizontal de RecipeCards (suggestions)
- Section "3 étapes, zéro stress" avec 3 cartes numérotées et illustrations
- Section 6 fonctionnalités (grille 2 colonnes, icône + titre + description + CTA + illustration)
- Teaser tarifs : 3 colonnes (Gratuit 0€ / Premium 4,99€ / Famille 9,99€), badge "Recommandé" sur Premium
- CTA final "Prêt à transformer votre cuisine ?"

### 2. Recettes (Search) — header "Recettes"
- Barre de recherche arrondie, placeholder "Poulet, tiramisu, curry..."
- 5 rangées de chips horizontaux scrollables :
  - Difficulté (chips rouges)
  - Temps de cuisson (chips orange)
  - Moment du repas (chips teal)
  - Régime alimentaire (chips teal)
  - Catégories (chips accent)
- Grille de RecipeCards (image 1:1, titre, catégorie, temps, difficulté)
- État vide : emoji 🍽 centré + "Recherche parmi 25 000+ recettes"
- État aucun résultat : emoji 🔍 + "Aucun résultat"

### 3. Vision (Scan Frigo) — pas de header
- Écran caméra plein écran avec overlay
- Bouton capture rond central
- État loading : animation d'analyse
- Écran résultats : chips ingrédients détectés (tag teal) + liste recettes suggérées + bulle message Chef Farah

### 4. Chef Farah (Chat IA) — header "Chef Farah"
- Interface conversationnelle
- Bulles user : fond teal `#2A9D8F`, texte blanc, alignées à droite
- Bulles bot : fond blanc (light) / `#1A1A1A` (dark), texte charcoal, alignées à gauche
- Avatar Chef Farah sur les bulles bot
- Input en bas : fond blanc, bordure `#E5E5DC`, bouton envoi rouge
- Suggestions rapides en chips au-dessus de l'input

### 5. Menu (Planning Repas) — header "Menu"
- Vue semaine (lundi → dimanche), navigation semaine précédente/suivante
- 3 slots par jour : Petit-déjeuner / Déjeuner / Dîner
- Chaque slot : mini RecipeCard ou état vide "+"
- Bouton flottant "Générer la liste de courses" (rouge)

### 6. Courses (Liste) — header "Courses"
- Liste groupée par rayon (Fruits & Légumes, Viandes, Épicerie, etc.)
- Chaque item : checkbox + nom + quantité
- Items cochés barrés et grisés
- Header de groupe avec compteur (3/5 items)
- Bouton "Partager la liste"

### 7. Profil — header "Profil"
- En-tête : avatar (ou initiales) + nom + email + badge tier
- Section préférences alimentaires (allergies, régimes) avec chips
- Section substitutions personnalisées
- Section paramètres (notifications, langue, thème)
- Bouton "Gérer mon abonnement"
- Bouton déconnexion (rouge outline)
- Version app en footer

### 8. Détail Recette (recipe/[slug]) — header "Recette" avec bouton retour
- Hero image 220px (arrondi bas 12px) ou RecipePlaceholder (dégradé + emoji)
- Titre DM Serif Display
- Ligne métadonnées : icônes + difficulté, temps, portions, coût estimé
- Boutons d'action : ❤️ favori, 📅 ajouter au plan, 🔗 partager
- Section ingrédients (liste avec puces, quantités)
- Section étapes numérotées (1, 2, 3...)
- Section nutrition (tableau ou grille)
- Badge tier si recette premium/famille (🔒)

### 9. Sign-in — pas de header
- Logo Fresh centré en haut
- Illustration accueillante
- Bouton "Continuer avec Google" (blanc, logo Google)
- Bouton "Continuer avec Apple" (noir, logo Apple)
- Lien texte "Explorer sans compte →"
- Fond cream

### 10. Upgrade Modal — overlay semi-transparent
- Titre "Passez à la vitesse supérieure"
- 3 colonnes comparatives :
  - Gratuit : fonctionnalités de base listées
  - Premium 4,99€/mois : tout gratuit + fonctionnalités premium, badge "Recommandé"
  - Famille 9,99€/mois : tout premium + multi-profils
- CTA par colonne
- Mention "Essai gratuit 14 jours"
- Bouton fermer (X) en haut à droite

---

## Tab Bar (7 onglets)

| Position | Label | Icône |
|----------|-------|-------|
| 1 | Accueil | Maison |
| 2 | Recettes | Loupe |
| 3 | Vision | Caméra |
| 4 | Chef Farah | Bulles chat |
| 5 | Menu | Calendrier |
| 6 | Courses | Caddie |
| 7 | Profil | Personne |

- Icône active : teal `#2A9D8F`
- Icône inactive : `#9A9A9A`
- Fond : blanc (light) / surface dark
- Taille icônes : 24px

---

## Composants réutilisables à créer

1. **Button** — plein (rouge/teal) + outline, taille S/M/L
2. **Input** — champ texte avec placeholder, état focus
3. **Chip** — actif/inactif, compact, couleurs variables
4. **RecipeCard** — image (ou placeholder gradient+emoji), titre, catégorie, temps, difficulté
5. **RecipePlaceholder** — dégradé linéaire par catégorie + emoji centré
6. **Avatar** — image ou initiales, tailles S/M/L
7. **Badge** — petit, couleurs variées, texte
8. **EmptyState** — emoji + titre + description centré
9. **SectionHeader** — titre + lien optionnel "Tout voir"
10. **ChatBubble** — user (teal, droite) + bot (blanc, gauche, avec avatar)
11. **Skeleton** — placeholder loading animé
12. **Divider** — ligne horizontale fine

---

## Recettes sans image — Fallback visuel

Quand une recette n'a pas de photo, afficher un dégradé linéaire selon sa catégorie avec un emoji centré :

| Catégorie | Dégradé | Emoji |
|-----------|---------|-------|
| Desserts | `#F4845F` → `#F79D84` | 🍰 |
| Plats principaux | `#E8372A` → `#F06B62` | 🍖 |
| Petit-déjeuner | `#F7B731` → `#F9CC6B` | 🥞 |
| Soupes | `#38ADA9` → `#6BD5D1` | 🍜 |
| Salades | `#78E08F` → `#A3EBB1` | 🥗 |
| Pains | `#D4A574` → `#E2C09E` | 🍞 |
| Boissons | `#9B59B6` → `#BF7FD3` | 🍹 |
| Cuisine du monde | `#E77F67` → `#F0A595` | 🌍 |
| Healthy | `#2A9D8F` → `#3DB8A9` | 🥑 |
| Défaut | `#C4C4BC` → `#D6D6CE` | 🍽 |

---

## Consignes générales

- **Ambiance** : chaleureuse, méditerranéenne, accessible. Pas clinique ni froid.
- **Style illustrations** : flat warm style (couleurs chaudes, personnages simples)
- **Toujours designer Light + Dark mode**
- **Touch targets minimum** : 44×44px
- **Devices** : iPhone 14/15 (393×852) comme base, vérifier iPhone SE (375×667) et Pro Max (430×932)
- **Langue** : français (interface complète en français)
- **Accessibilité** : contraste suffisant, tailles lisibles, pas de texte sur image sans overlay

---

*Application "Fresh by Elegance du Goût" — Chef Farah*
*Stack : React Native (Expo) — iOS + Android*
