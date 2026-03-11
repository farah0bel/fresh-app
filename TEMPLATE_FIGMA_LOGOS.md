# 🎨 Template Figma : Fresh Logo Variants

## 📋 Import rapide dans Figma

### Méthode 1 : Copier-coller ce template

1. **Ouvrir Figma** → https://figma.com
2. **Créer nouveau fichier** (File → New design file)
3. **Copier-coller** les frames ci-dessous directement dans Figma

---

## 🖼️ FRAME 1 : Logo Full (1000x1000px)

```
Frame: fresh-logo-full
Taille: 1000x1000
Background: Transparent

Instructions :
1. Créer frame 1000x1000px
2. Importer votre logo aquarelle (File → Place image)
3. Centrer le logo
4. Export PNG transparent
```

**Paramètres d'export Figma** :
```
Format: PNG
Scale: 1x
Suffix: -full
Include background: OFF (transparent)
```

---

## 🖼️ FRAME 2 : Icon Medium (500x500px)

```
Frame: fresh-icon-medium
Taille: 500x500
Background: Transparent

Instructions :
1. Dupliquer votre logo full
2. Redimensionner frame → 500x500
3. SUPPRIMER :
   - Cercle beige de fond
   - Texte "FRESH"
4. GARDER :
   - Frigo aquarelle
   - Légumes/tomates
5. Recentrer les éléments
6. Export PNG transparent
```

**Paramètres d'export Figma** :
```
Format: PNG
Scale: 1x
Suffix: -medium
Include background: OFF (transparent)
```

---

## 🖼️ FRAME 3 : Icon Small - Version Flat (512x512px)

**⚠️ IMPORTANT : Créer en flat design, PAS aquarelle**

### Template visuel (à reproduire)

```
Frame: fresh-icon-small
Taille: 512x512
Background: Transparent

┌──────────────────────┐
│                      │
│   ┌──────────┐      │
│   │    ━━    │      │  ← Étagère blanche
│   │          │      │
│   │    🔴    │      │  ← Tomate rouge #E8372A
│   │          │      │
│   │    ━━    │      │  ← Étagère blanche
│   └──────────┘      │
│   Frigo teal        │
│   #2A9D8F           │
│                      │
└──────────────────────┘
```

### Instructions détaillées Figma

#### Étape 1 : Créer le frigo
```
1. Rectangle tool (R)
2. Dimensions : 240px × 360px
3. Centrer dans frame 512x512
4. Fill : #2A9D8F
5. Corner radius : 12px
6. Nom du layer : "Frigo Background"
```

#### Étape 2 : Ajouter porte du frigo (optionnel)
```
1. Rectangle tool (R)
2. Dimensions : 110px × 350px
3. Position : Gauche du frigo
4. Fill : #52C5AB avec Opacity 30%
5. Corner radius : 8px
6. Nom : "Porte"
```

#### Étape 3 : Créer les étagères
```
ÉTAGÈRE 1 :
1. Line tool (L)
2. Largeur : 200px
3. Position : Y = 180px (tiers supérieur)
4. Stroke : #FFFFFF
5. Stroke weight : 6px
6. Nom : "Étagère Top"

ÉTAGÈRE 2 :
1. Dupliquer étagère 1
2. Position : Y = 340px (tiers inférieur)
3. Nom : "Étagère Bottom"
```

#### Étape 4 : Ajouter la tomate
```
1. Ellipse tool (O)
2. Dimensions : 60px × 60px (cercle parfait)
3. Position : Centre entre les 2 étagères
4. Fill : #E8372A
5. Nom : "Tomate"
```

#### Étape 5 : Ajouter reflet sur tomate
```
1. Ellipse tool (O)
2. Dimensions : 18px × 18px
3. Position : Coin supérieur gauche de la tomate
4. Fill : #FFFFFF
5. Opacity : 60%
6. Nom : "Reflet"
```

#### Étape 6 : Ajouter poignée (optionnel)
```
1. Rectangle tool (R)
2. Dimensions : 4px × 30px
3. Position : Côté droit du frigo, au centre
4. Fill : #FFFFFF
5. Corner radius : 2px
6. Nom : "Poignée"
```

### Hiérarchie des layers
```
fresh-icon-small (Frame 512x512)
├── Frigo Background (Rectangle #2A9D8F)
├── Porte (Rectangle #52C5AB optionnel)
├── Étagère Top (Line #FFFFFF)
├── Étagère Bottom (Line #FFFFFF)
├── Tomate (Circle #E8372A)
│   └── Reflet (Circle #FFFFFF 60%)
└── Poignée (Rectangle #FFFFFF optionnel)
```

### Paramètres d'export
```
Format: PNG
Scale: 1x, 0.5x, 0.25x (pour tester en 256px, 128px, 64px)
Suffix: -small
Include background: OFF (transparent)

Test de visibilité :
Exporter aussi en 16x16px et vérifier que c'est lisible !
```

---

## 🖼️ FRAME 4 : Logotype (600x200px)

```
Frame: fresh-logotype
Taille: 600x200
Background: Transparent

Instructions :
1. Text tool (T)
2. Texte : "Fresh"
3. Font : DM Serif Display
4. Size : 120px
5. Color : #000000
6. Align : Center (vertical + horizontal)
7. Export PNG transparent
```

**Paramètres de texte Figma** :
```
Font family: DM Serif Display
Font weight: Regular
Font size: 120px
Line height: Auto
Letter spacing: 0px
Color: #000000
Text align: Center
```

**Paramètres d'export** :
```
Format: PNG
Scale: 1x
Suffix: -logotype
Include background: OFF (transparent)
```

---

## 🎨 Palette de couleurs Fresh (à ajouter dans Figma)

### Créer les Color Styles dans Figma

```
1. Clic droit dans le panel → Create style → Color

COULEURS PRINCIPALES :
• Teal : #2A9D8F (frigo principal)
• Teal Light : #52C5AB (porte, ombres)
• Red : #E8372A (tomate, accent)
• Cream : #F5E6D3 (fond beige clair - logo full uniquement)

COULEURS SECONDAIRES :
• White : #FFFFFF (étagères, reflets)
• Green : #45B39D (légumes optionnels)
• Orange : #FF9F66 (carottes optionnelles)
• Black : #000000 (logotype)
```

---

## 📐 Grid & Layout settings

### Pour Icon Small (512x512)

```
Layout Grid settings :
• Type : Grid
• Size : 64px
• Color : #000000 10%

Cela crée une grille 8x8 pour aligner facilement les éléments.
```

### Guides recommandés

```
Icon Small (512x512) :
• Guide vertical X=256 (centre)
• Guide horizontal Y=256 (centre)
• Guide horizontal Y=170 (étagère top)
• Guide horizontal Y=342 (étagère bottom)
```

---

## 🚀 Import rapide : URL du Community Template

**Je créerai un template Figma Community public si besoin !**

Pour l'instant, suivez les instructions ci-dessus pour créer manuellement.

---

## 💡 Astuces Figma Pro

### Auto Layout pour variantes
```
Si vous créez plusieurs variantes de l'Icon Small :
1. Créer une frame parent "Fresh Icons"
2. Auto Layout (Shift + A)
3. Gap : 64px
4. Alignment : Center
5. Ajouter vos 3 variantes (A, B, C)
6. Export toutes en une fois
```

### Components pour réutilisation
```
Si vous voulez réutiliser les logos :
1. Sélectionner votre logo
2. Ctrl/Cmd + Alt + K (Create Component)
3. Nommer : "Fresh Logo / Full"
4. Vous pouvez maintenant l'instancier partout
```

### Export batch (tous les logos en une fois)
```
1. Sélectionner TOUS les frames (Cmd/Ctrl + clic)
2. Design panel → Export
3. Format : PNG
4. Cocher tous les frames
5. Cliquer "Export 4 layers"
6. Tous les fichiers exportés en une fois !
```

---

## 🎯 Checklist de validation avant export

### Logo Full
- [ ] Taille exacte : 1000x1000px
- [ ] Résolution : Minimum 72 DPI (144 DPI recommandé)
- [ ] Format : PNG transparent
- [ ] Tous les éléments visibles (frigo, légumes, fond, texte)
- [ ] Centré dans le frame

### Icon Medium
- [ ] Taille exacte : 500x500px
- [ ] Fond beige RETIRÉ ✅
- [ ] Texte "FRESH" RETIRÉ ✅
- [ ] Frigo + légumes conservés
- [ ] Format : PNG transparent
- [ ] Centré dans le frame

### Icon Small
- [ ] Taille exacte : 512x512px
- [ ] Style FLAT (pas aquarelle) ✅
- [ ] Maximum 3 couleurs (teal, rouge, blanc)
- [ ] Test 16x16px → encore lisible ✅
- [ ] Format : PNG transparent
- [ ] Centré dans le frame

### Logotype
- [ ] Largeur ~600px, hauteur ~200px
- [ ] Police : DM Serif Display ✅
- [ ] Couleur : Noir #000000
- [ ] Format : PNG transparent
- [ ] Texte centré

---

## 📦 Résultat final attendu

Après export, vous devriez avoir **4 fichiers** :

```
📂 Fresh Logos/
├── fresh-logo-full.png (1000x1000px, ~500 KB)
├── fresh-icon-medium.png (500x500px, ~200 KB)
├── fresh-icon-small.png (512x512px, ~50 KB)
└── fresh-logotype.png (600x200px, ~30 KB)

Total : ~780 KB
```

**Vérifications finales** :
- Tous les fichiers sont PNG
- Tous ont un fond transparent
- Tous s'ouvrent correctement dans Preview/Photos
- L'icon small est lisible même réduit en 16x16px

---

## 🆘 Problèmes courants et solutions

### "Je ne trouve pas la police DM Serif Display"
```
Solution :
1. Dans Figma, elle est disponible automatiquement
2. Sinon : Google Fonts → DM Serif Display → Download
3. Alternative : Playfair Display, Crimson Text
```

### "Mon export n'est pas transparent"
```
Solution :
1. Vérifier que "Include background" est DÉSACTIVÉ
2. Le frame ne doit pas avoir de Fill
3. Export → PNG → Uncheck "Include background in export"
```

### "L'icon small est floue en 16x16px"
```
Solution :
1. Vous avez gardé trop de détails
2. Simplifier encore plus (frigo + tomate uniquement)
3. Augmenter la taille du stroke (6px minimum)
4. Supprimer les petits détails (poignée, reflets)
```

### "Figma est en anglais"
```
Traduction des outils principaux :
• Rectangle tool = Outil Rectangle (R)
• Ellipse tool = Outil Ellipse (O)
• Line tool = Outil Ligne (L)
• Text tool = Outil Texte (T)
• Export = Exporter
• Frame = Cadre
```

---

🎨 **Bon courage ! Dites-moi si vous bloquez à une étape, je vous débloquerai immédiatement.**

*Template créé le 11 mars 2026*
*Fresh by Elegance du Goût*
