# 🎨 Spécifications des variantes du logo Fresh

## 📋 Résumé
L'application **Fresh** nécessite 4 variantes du logo actuel pour différents contextes d'utilisation (marketing, header app, favicon, logotype).

---

## 🖼️ Logo actuel fourni
- **Format** : Illustration aquarelle
- **Éléments** : Frigo ouvert teal (#2A9D8F) + légumes/tomates rouges
- **Fond** : Cercle beige/crème
- **Texte** : "FRESH" en typographie manuscrite
- **Dimensions** : ~500x500px (estimation)

---

## ✅ Variantes à créer

### **Variante 1 : Logo complet (Marketing)**
#### 📍 Usage
- Page SignIn (`/sign-in`)
- Splash screen (futur)
- Communications marketing (email, réseaux sociaux)
- App stores (preview images)

#### 🎨 Spécifications
- **Format** : PNG transparent, 1000x1000px minimum
- **Contenu** : Logo complet tel que fourni (frigo + légumes + fond beige circulaire + texte "FRESH")
- **Qualité** : Haute résolution (300 DPI si possible)
- **Nom de fichier** : `fresh-logo-full.png`
- **Notes** : C'est le logo "hero", utilisé pour les grandes tailles

---

### **Variante 2 : Logo simplifié sans fond (App header)**
#### 📍 Usage
- Header de l'app (optionnel, si on veut remplacer le texte "Fresh")
- Loading states
- Watermarks dans l'app

#### 🎨 Spécifications
- **Format** : PNG transparent, 500x500px
- **Contenu** : Frigo + légumes SANS fond beige circulaire, SANS texte
- **Fond** : **Transparent** (crucial pour mode dark/light)
- **Qualité** : Détails simplifiés pour rester lisible à 60-100px
- **Nom de fichier** : `fresh-icon-medium.png`
- **Notes** : Doit être visible sur fond clair ET fond sombre

---

### **Variante 3 : Icon simple (Favicon/App Icon)**
#### 📍 Usage
- Favicon (16x16, 32x32, 64x64)
- App icon mobile (iOS/Android)
- Push notifications
- TabBar icon (optionnel)

#### 🎨 Spécifications
- **Format** : PNG transparent + SVG, 512x512px
- **Contenu** : **Simplification maximale** - Uniquement le frigo teal en forme reconnaissable
  - Option 1 : Silhouette frigo simplifié teal
  - Option 2 : Lettre "F" stylisée en forme de frigo
  - Option 3 : Frigo + 1 seul légume (tomate rouge)
- **Fond** : Transparent
- **Style** : Flat design, contours nets (pas d'aquarelle à cette taille)
- **Couleurs** : Teal #2A9D8F + Red #E8372A (maximum 2-3 couleurs)
- **Nom de fichier** : `fresh-icon-small.png` et `fresh-icon-small.svg`
- **Notes** : Doit rester reconnaissable à 16x16px !

---

### **Variante 4 : Logotype texte seul (Accompagnement)**
#### 📍 Usage
- Accompagne les icons simplifiés
- Header avec icon (icon + "Fresh" à côté)
- Footer
- Signatures email

#### 🎨 Spécifications
- **Format** : PNG transparent + SVG, largeur flexible
- **Contenu** : Texte "Fresh" uniquement
- **Typographie** : **DM Serif Display** (typographie officielle de l'app, pas la typo manuscrite du logo)
- **Couleur** : Variable selon contexte (fourni en noir, sera adapté en CSS avec `var(--text)`)
- **Versions** :
  - Horizontal : "Fresh" (largeur ~200px, hauteur 60px)
  - Vertical : "F / R / E / S / H" empilé (optionnel)
- **Nom de fichier** : `fresh-logotype.png` et `fresh-logotype.svg`
- **Notes** : Texte simple et épuré, cohérent avec le design system de l'app

---

## 🎯 Récapitulatif des fichiers attendus

| Fichier | Taille | Format | Usage principal |
|---------|--------|--------|-----------------|
| `fresh-logo-full.png` | 1000x1000px | PNG transparent | SignIn, marketing |
| `fresh-icon-medium.png` | 500x500px | PNG transparent | App header, loading |
| `fresh-icon-small.png` + `.svg` | 512x512px | PNG + SVG | Favicon, app icon |
| `fresh-logotype.png` + `.svg` | ~200x60px | PNG + SVG | Texte seul |

---

## 🔄 Processus d'intégration

### Étape 1 : Fourniture des fichiers
Placez tous les fichiers dans un dossier `/public/logos/` ou un service d'hébergement (Imgur, Cloudinary, etc.)

### Étape 2 : Communication des URLs
Fournissez-moi les URLs ou chemins des fichiers :
```
fresh-logo-full.png → https://...
fresh-icon-medium.png → https://...
fresh-icon-small.png → https://...
fresh-logotype.svg → https://...
```

### Étape 3 : Intégration dans l'app
J'intégrerai les logos aux emplacements suivants :
- ✅ SignIn : `fresh-logo-full.png`
- ✅ Favicon : `fresh-icon-small.png` (16x16, 32x32, 64x64)
- ✅ Header optionnel : `fresh-icon-medium.png` + `fresh-logotype.svg`
- ✅ Meta tags (OpenGraph, Twitter) : `fresh-logo-full.png`

---

## 💡 Recommandations de design

### Pour la Variante 3 (Icon small)
Le défi est de simplifier l'aquarelle complexe en icon 16x16px. Voici mes suggestions :

**Option recommandée** : Frigo stylisé minimaliste
```
┌─────┐
│  ━  │  ← Étagère du frigo
│  🍅 │  ← Tomate rouge (point focal)
│  ━  │
└─────┘
```
- Forme rectangulaire teal (#2A9D8F)
- 2 barres horizontales blanches (étagères)
- 1 petit point rouge central (tomate)
- Contours nets, pas d'aquarelle

**Alternative** : Lettre "F" + végétal
```
┌─┐
│F│ + 🍃 (feuille verte/teal)
└─┘
```

### Cohérence des couleurs
Toutes les variantes doivent utiliser :
- **Teal** : #2A9D8F (couleur principale Fresh)
- **Red** : #E8372A (accent, tomates)
- **Vert/feuillage** : Dérivés du teal (#45B39D, #52C5AB)

---

## ❓ Questions avant création

1. **Souhaitez-vous garder l'aquarelle sur toutes les variantes ?**
   - Si oui : les petites tailles seront floues
   - Recommandation : aquarelle uniquement sur logo full, style flat sur les icons

2. **Préférence pour l'icon small ?**
   - Option A : Frigo simplifié
   - Option B : Lettre "F"
   - Option C : Frigo + 1 tomate

3. **Le logotype doit-il être exactement "Fresh" ou peut-on styliser ?**
   - Recommandation : Texte simple "Fresh" en DM Serif Display, cohérent avec l'app

---

## 📦 Livraison

Une fois les fichiers prêts, envoyez-moi :
1. Les 4 fichiers (7 fichiers au total avec les SVG)
2. Les URLs où ils sont hébergés
3. Toute note de design particulière

Je procéderai immédiatement à l'intégration ! 🚀

---

*Dernière mise à jour : 11 mars 2026*
*Fresh by Elegance du Goût*
