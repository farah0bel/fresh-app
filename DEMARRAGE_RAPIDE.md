# ⚡ DÉMARRAGE RAPIDE - FRESH APP

## 🎯 Guide express pour lancer l'app en 5 minutes

---

## ✅ PRÉREQUIS (2 minutes)

### Installer Node.js

1. **Aller sur** : https://nodejs.org
2. **Télécharger** : Version LTS (recommandée)
3. **Installer** : Double-clic et suivre les instructions
4. **Vérifier** l'installation :

```bash
node --version
# Doit afficher : v18.x.x ou supérieur

npm --version
# Doit afficher : 9.x.x ou supérieur
```

✅ **Node.js installé !**

---

## 📦 TÉLÉCHARGER LE PROJET (1 minute)

### **Option A : Depuis Figma Make** ⭐

1. **Cliquer** sur le bouton `Download` / `Télécharger` (en haut à droite)
2. **Télécharger** le fichier ZIP
3. **Extraire** le ZIP dans un dossier de votre choix
4. **Renommer** le dossier en `fresh-app` (optionnel)

### **Option B : Clone GitHub**

```bash
git clone https://github.com/farah0bel/fresh-app.git
cd fresh-app
```

✅ **Projet téléchargé !**

---

## 🚀 LANCER L'APP (2 minutes)

### **Étape 1 : Ouvrir un terminal**

- **Windows** : `Win + R` → taper `cmd` → Entrée
- **Mac** : `Cmd + Espace` → taper `terminal` → Entrée
- **Linux** : `Ctrl + Alt + T`

### **Étape 2 : Aller dans le dossier**

```bash
cd chemin/vers/fresh-app

# Exemple Windows :
# cd C:\Users\VotreNom\Downloads\fresh-app

# Exemple Mac/Linux :
# cd ~/Downloads/fresh-app
```

### **Étape 3 : Installer les dépendances**

```bash
npm install
```

⏳ Patientez 1-2 minutes (télécharge React, Vite, etc.)

### **Étape 4 : Lancer l'app**

```bash
npm run dev
```

🎉 **L'app se lance !**

Vous verrez :
```
  VITE v6.3.5  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### **Étape 5 : Ouvrir le navigateur**

- **Automatique** : Le navigateur s'ouvre sur http://localhost:5173
- **Manuel** : Ouvrir Chrome/Safari et aller sur http://localhost:5173

✅ **L'APP FONCTIONNE !**

---

## 🎨 CE QUE VOUS VOYEZ

### **Page SignIn** (par défaut)

```
┌─────────────────────────────────────┐
│                                     │
│          [LOGO FRESH]               │
│       Aquarelle 200x200px           │
│                                     │
│  ────────────────────────────       │
│  │ Email                  │         │
│  ────────────────────────────       │
│                                     │
│  ────────────────────────────       │
│  │ Mot de passe           │         │
│  ────────────────────────────       │
│                                     │
│      [Se connecter]                 │
│                                     │
│  Pas de compte ? S'inscrire         │
│                                     │
└─────────────────────────────────────┘
```

### **Navigation disponible** (après connexion simulée)

Modifier l'URL dans le navigateur pour tester :

- http://localhost:5173/ → **Home** (Accueil)
- http://localhost:5173/search → **Search** (Recherche)
- http://localhost:5173/vision → **Vision** (Scan IA)
- http://localhost:5173/chat → **Chat** (Chef Farah)
- http://localhost:5173/plan → **Plan** (Planning)
- http://localhost:5173/list → **List** (Courses)
- http://localhost:5173/profile → **Profile** (Profil)
- http://localhost:5173/logos-demo → **LogosDemo** ⭐

---

## 🎨 VOIR LA DÉMO LOGOS

**URL** : http://localhost:5173/logos-demo

Vous verrez les **4 variantes** du logo Fresh :

```
┌──────────────────────────────────────┐
│  1️⃣ LOGO FULL (aquarelle complet)  │
│     [Image 200x200px]               │
│     Fond beige + frigo aquarelle    │
│                                     │
│  2️⃣ ICON MEDIUM (frigo simplifié)  │
│     [SVG 48x48px]                   │
│     Teal + légumes                  │
│                                     │
│  3️⃣ ICON SMALL (flat design)       │
│     [SVG 32x32px]                   │
│     Version minimaliste             │
│                                     │
│  4️⃣ LOGOTYPE (texte uniquement)    │
│     Fresh                           │
│     DM Serif Display                │
└──────────────────────────────────────┘
```

---

## 🔄 TESTER LE MODE DARK

1. **Aller sur** : http://localhost:5173/profile
2. **Cliquer** sur le toggle "Mode sombre"
3. **Voir** : Tout l'app passe en mode dark !

```css
/* Mode Light */
background: #FFFBF5 (beige clair)
text: #333333

/* Mode Dark */
background: #1A1A1A (gris foncé)
text: #FFFFFF
```

---

## 📱 TESTER LE RESPONSIVE

### **Méthode 1 : Redimensionner le navigateur**

- **Agrandir/Réduire** la fenêtre du navigateur
- **Observer** : L'UI s'adapte automatiquement

### **Méthode 2 : DevTools mobile**

1. **Ouvrir DevTools** : `F12` (Windows) ou `Cmd + Option + I` (Mac)
2. **Cliquer** sur l'icône mobile 📱 (en haut à gauche)
3. **Choisir** : iPhone 12 Pro, Pixel 5, etc.
4. **Tester** : Navigation, scroll, etc.

---

## 🛑 ARRÊTER L'APP

Dans le terminal :

- **Windows/Linux** : `Ctrl + C`
- **Mac** : `Cmd + C`

Confirmer avec `Y` si demandé.

Pour **relancer** :
```bash
npm run dev
```

---

## 🔧 COMMANDES UTILES

```bash
# Lancer en développement
npm run dev

# Build pour production (fichiers optimisés)
npm run build

# Prévisualiser le build
npm run preview

# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install

# Ouvrir sur un autre port
npm run dev -- --port 3000
```

---

## 🎯 NAVIGATION RAPIDE (URLs)

| URL | Page | Description |
|-----|------|-------------|
| `/signin` | **SignIn** | Page de connexion |
| `/` | **Home** | Accueil + recettes |
| `/search` | **Search** | Recherche avancée |
| `/vision` | **Vision** | Scan IA |
| `/chat` | **Chat** | Chatbot Chef Farah |
| `/plan` | **Plan** | Planning famille |
| `/list` | **List** | Liste courses |
| `/profile` | **Profile** | Profil |
| `/recipe/1` | **RecipeDetail** | Détail recette #1 |
| `/logos-demo` | **LogosDemo** | ⭐ Démo logos |

---

## 📚 LIRE LA DOCUMENTATION

### **Ordre recommandé** :

1. **README.md** (5 min) ← Vue d'ensemble
2. **FRESH_LOGOS_GUIDE_COMPLET.md** (30 min) ← ⭐ Guide logos complet
3. **STRUCTURE_PROJET.md** (10 min) ← Liste des fichiers
4. **guidelines/Guidelines.md** (20 min) ← Design system

### **Ouvrir avec** :

- **VS Code** (recommandé) : https://code.visualstudio.com
- **Sublime Text**
- **Notepad++**
- Ou n'importe quel éditeur de texte

---

## 🎨 PERSONNALISER L'APP

### **Changer les couleurs**

Fichier : `src/styles/theme.css`

```css
/* Modifier ces valeurs */
--primary: #E8372A;    /* Rouge Fresh */
--secondary: #2A9D8F;  /* Teal Fresh */
```

### **Changer les données mock**

Fichier : `src/app/data/mockData.ts`

```typescript
// Modifier les recettes, utilisateurs, etc.
export const mockRecipes = [
  {
    id: 1,
    name: "Votre nouvelle recette",
    // ...
  }
];
```

### **Changer les polices**

Fichier : `src/styles/fonts.css`

```css
/* Ajouter d'autres Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=VotrePolice:wght@400;700&display=swap');
```

---

## 🆘 PROBLÈMES COURANTS

### ❌ "npm : commande introuvable"

**Solution** : Installer Node.js → https://nodejs.org

---

### ❌ "Cannot find module 'react'"

**Solution** :
```bash
npm install
```

---

### ❌ "Port 5173 already in use"

**Solution** : Utiliser un autre port
```bash
npm run dev -- --port 3000
```

Puis ouvrir : http://localhost:3000

---

### ❌ "EACCES: permission denied"

**Solution** : Ne pas utiliser `sudo`
```bash
# Au lieu de :
sudo npm install

# Faire :
npm install
```

---

### ❌ "Module not found: Can't resolve '@/...'"

**Solution** : Chemin d'importation incorrect

```typescript
// ❌ Incorrect
import { Button } from '@/components/ui/button'

// ✅ Correct
import { Button } from './components/ui/button'
```

---

### ❌ Page blanche dans le navigateur

**Solution** : Vérifier la console (F12)

1. Ouvrir DevTools : `F12`
2. Onglet **Console**
3. Lire les erreurs
4. Corriger le fichier concerné

---

## 🚀 PROCHAINES ÉTAPES

Maintenant que l'app fonctionne :

1. ✅ **Explorer** les 10 écrans
2. ✅ **Tester** les 4 variantes logo (`/logos-demo`)
3. ✅ **Lire** la documentation complète
4. ✅ **Personnaliser** les couleurs/données
5. ✅ **Modifier** le code selon vos besoins
6. 🚀 **Déployer** sur Vercel (optionnel)

---

## 📦 DÉPLOYER SUR VERCEL (bonus)

```bash
# 1. Installer Vercel CLI
npm install -g vercel

# 2. Se connecter
vercel login

# 3. Déployer
vercel

# 4. Production
vercel --prod
```

**Résultat** : URL publique type `fresh-app.vercel.app`

---

## 💡 RACCOURCIS CLAVIER

| Raccourci | Action |
|-----------|--------|
| `Ctrl + C` | Arrêter le serveur |
| `F12` | Ouvrir DevTools |
| `Ctrl + Shift + R` | Rechargement dur |
| `Ctrl + +` / `Ctrl + -` | Zoom |

---

## 📊 RÉSUMÉ EN 5 ÉTAPES

```bash
# 1. Installer Node.js (si pas déjà fait)
# https://nodejs.org

# 2. Télécharger le projet (Figma Make ou Git)

# 3. Ouvrir un terminal dans le dossier
cd fresh-app

# 4. Installer les dépendances
npm install

# 5. Lancer l'app
npm run dev

# 🎉 Ouvrir http://localhost:5173
```

**Temps total : ~5 minutes**

---

## 🌟 FÉLICITATIONS !

Vous avez maintenant :

✅ **Fresh app** qui tourne en local
✅ **10 écrans** fonctionnels
✅ **4 variantes** du logo Fresh
✅ **Mode dark/light** opérationnel
✅ **Design system** complet
✅ **Documentation** complète

---

## 🆘 BESOIN D'AIDE ?

- 📖 Lire `README.md`
- 📥 Lire `COMMENT_TELECHARGER.md`
- 📂 Lire `STRUCTURE_PROJET.md`
- 💬 Chat avec Chef Farah dans l'app !
- 🐛 GitHub Issues

---

**🚀 Bon développement avec Fresh !**

**Fait avec ❤️ et 🥘 par l'équipe Fresh**

---

**Version 1.0.0** - Mars 2026
