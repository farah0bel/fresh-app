# 🍽️ Fresh - Application Cuisine Familiale Intelligente

![Fresh Logo](https://via.placeholder.com/800x200/E8372A/FFFFFF?text=Fresh+-+Cuisine+Familiale+Intelligente)

## 📱 À propos

**Fresh** est une application mobile cuisine/food tech franco-algérienne freemium ciblant les familles de 30-50 ans en France.

### ✨ Fonctionnalités principales

- 🥘 **25 000 recettes** adaptables à 11 régimes alimentaires
- 📸 **Scan IA** de frigo et tickets de courses
- 💬 **Chatbot Chef Farah** - assistance personnalisée
- 📅 **Planning famille** avec gestion des repas
- 🔍 **Recherche avancée** par ingrédients, temps, difficulté
- 👤 **Profils personnalisés** avec préférences alimentaires
- 🌙 **Mode sombre/clair** adaptatif
- 📱 **100% responsive** mobile-first

---

## 🎨 Design System

### Couleurs principales
- **Red** : `#E8372A` - Couleur primaire (passion, énergie)
- **Teal** : `#2A9D8F` - Couleur secondaire (fraîcheur, santé)

### Typographies
- **Titres** : DM Serif Display
- **Corps** : DM Sans
- **Code/Mono** : Space Mono

### 11 Régimes alimentaires supportés
Végétarien • Végétalien • Sans gluten • Sans lactose • Halal • Casher • Paléo • Cétogène • Diabétique • Hyposodé • Anti-allergies

---

## 📂 Structure du projet

```
fresh-app/
├── src/
│   ├── app/
│   │   ├── components/         # Composants réutilisables
│   │   │   ├── FreshLogo.tsx   # Logo Fresh (3 variantes)
│   │   │   ├── TabBar.tsx      # Navigation principale
│   │   │   ├── RecipeCard.tsx  # Carte recette
│   │   │   └── ui/             # Composants UI shadcn
│   │   ├── pages/              # 10 écrans principaux
│   │   │   ├── SignIn.tsx      # Authentification
│   │   │   ├── Home.tsx        # Accueil
│   │   │   ├── Search.tsx      # Recherche
│   │   │   ├── Vision.tsx      # Scan IA
│   │   │   ├── Chat.tsx        # Chatbot Chef Farah
│   │   │   ├── Plan.tsx        # Planning
│   │   │   ├── List.tsx        # Liste courses
│   │   │   ├── Profile.tsx     # Profil
│   │   │   ├── RecipeDetail.tsx
│   │   │   └── LogosDemo.tsx   # Demo logos
│   │   ├── data/
│   │   │   └── mockData.ts     # Données mock
│   │   ├── routes.ts           # Configuration React Router
│   │   └── App.tsx             # Point d'entrée
│   ├── styles/
│   │   ├── theme.css           # Design system
│   │   ├── fonts.css           # Polices Google Fonts
│   │   ├── tailwind.css        # Config Tailwind v4
│   │   └── index.css           # Styles globaux
│   └── main.tsx                # Bootstrap React
├── guidelines/
│   └── Guidelines.md           # Guide Figma complet
├── 📄 Documentation logos (9 fichiers)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

---

## 🚀 Installation & Lancement

### Prérequis
- **Node.js** 18+ ([télécharger](https://nodejs.org))
- **npm** ou **pnpm** (recommandé)

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/farah0bel/fresh-app.git
cd fresh-app

# Installer les dépendances
npm install
# ou
pnpm install

# Lancer en développement
npm run dev
# ou
pnpm dev
```

L'application sera disponible sur **http://localhost:5173** 🎉

### Build production

```bash
npm run build
# ou
pnpm build
```

Les fichiers optimisés seront dans le dossier `dist/`

---

## 📱 Écrans principaux (10)

| Écran | Route | Description |
|-------|-------|-------------|
| **SignIn** | `/signin` | Authentification avec logo aquarelle |
| **Home** | `/` | Accueil avec recettes du jour |
| **Search** | `/search` | Recherche avancée par filtres |
| **Vision** | `/vision` | Scan frigo/tickets IA |
| **Chat** | `/chat` | Chatbot Chef Farah |
| **Plan** | `/plan` | Planning hebdomadaire famille |
| **List** | `/list` | Liste de courses intelligente |
| **Profile** | `/profile` | Profil & préférences |
| **RecipeDetail** | `/recipe/:id` | Détail recette complète |
| **LogosDemo** | `/logos-demo` | Démo 3 variantes logo |

---

## 🎨 Logo Fresh (3 variantes SVG)

Le logo aquarelle existe en **3 versions** dans `<FreshLogo />` :

```tsx
import { FreshLogo } from './components/FreshLogo';

// Variante 1 : Icon Medium (192x192px)
<FreshLogo variant="icon-medium" />

// Variante 2 : Icon Small (64x64px)
<FreshLogo variant="icon-small" />

// Variante 3 : Logotype (avec texte "Fresh")
<FreshLogo variant="logotype" />
```

**Voir la démo** : `/logos-demo`

---

## 🧭 Navigation TabBar (5 onglets)

| Onglet | Icône | Route | Description |
|--------|-------|-------|-------------|
| **Accueil** | 🏠 Home | `/` | Recettes du jour |
| **Vision** | 📸 Scan | `/vision` | Scan IA |
| **Recherche** | 🔍 Search | `/search` | Recherche avancée |
| **Planning** | 📅 Calendar | `/plan` | Planning famille |
| **Profil** | 👤 User | `/profile` | Mon profil |

---

## 📚 Documentation complète

### 📄 Fichiers documentation logos (9)

1. **FRESH_LOGOS_GUIDE_COMPLET.md** ⭐ **GUIDE TOUT-EN-1** (50 pages)
   - Résumé complet de toute la documentation
   - À lire en premier !

2. **MISSION_COMPLETE.md** - Résumé final du projet
3. **LOGOS_INTEGRATION_COMPLETE.md** - Détails techniques logos
4. **LOGO_VARIANTS_SPECS.md** - Spécifications 3 variantes
5. **BRANDING_REBRANDING_FRESH.md** - Stratégie Fresh vs Chef Farah
6. **GUIDE_CREATION_LOGOS.md** - Guide Figma complet
7. **TEMPLATE_FIGMA_LOGOS.md** - Template Figma
8. **ALTERNATIVES_SIMPLES_LOGOS.md** - Méthodes Canva/alternatives
9. **RECAP_FINAL_LOGOS.md** - Vue d'ensemble
10. **TODO_LOGO_INTEGRATION.md** - Checklist intégration

### 📘 Autres guides

- **guidelines/Guidelines.md** - Guide Figma design system complet
- **BRANDING_IMPROVEMENTS_SUMMARY.md** - Améliorations branding
- **ATTRIBUTIONS.md** - Crédits & licences

---

## 🛠️ Technologies

- **React** 18.3.1
- **TypeScript** 5+
- **Vite** 6.3.5 (build ultra-rapide)
- **React Router** 7.13.0 (routing)
- **Tailwind CSS** 4.1.12 (styling)
- **Radix UI** (composants accessibles)
- **Lucide React** (icônes)
- **Motion** (animations)
- **Material-UI** (composants avancés)
- **Recharts** (graphiques)

---

## 🎯 Branding : Fresh vs Chef Farah

### **Fresh** = L'application
- Logo aquarelle moderne
- Identité visuelle Red #E8372A + Teal #2A9D8F
- Positionnement : app familiale intelligente

### **Chef Farah** = L'experte qui répond au chat
- Présence uniquement dans `/chat`
- Avatar personnalisé
- Ton chaleureux et expert

**Voir détails** : `BRANDING_REBRANDING_FRESH.md`

---

## 📦 Déploiement

### **Vercel** (recommandé)

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel
```

### **Netlify**

```bash
# Build
npm run build

# Déployer le dossier dist/
```

### **GitHub Pages**

Voir la documentation officielle Vite : [Déployer sur GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages)

---

## 👥 Équipe

**Chef Farah** - Créatrice & Product Owner
- Experte cuisine franco-algérienne
- Spécialiste 11 régimes alimentaires
- Vision produit & design

---

## 📄 Licence

**Propriétaire** - Tous droits réservés © 2026 Fresh App

---

## 🆘 Support

Pour toute question :
- 📧 Email : contact@fresh-app.fr
- 💬 Chat : Directement dans l'app avec Chef Farah !
- 🐛 Issues : [GitHub Issues](https://github.com/farah0bel/fresh-app/issues)

---

## 🎉 Prochaines étapes

- [ ] Connexion Supabase (backend)
- [ ] API scan IA (frigo/tickets)
- [ ] Notifications push
- [ ] Mode offline
- [ ] Tests unitaires
- [ ] CI/CD pipeline
- [ ] Publication App Store / Play Store

---

**Fait avec ❤️ et 🥘 par l'équipe Fresh**

🚀 **Version 1.0.0** - Mars 2026
