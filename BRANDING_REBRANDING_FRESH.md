# 🎯 Rebranding : Chef Farah → Fresh

## 📊 État actuel (11 mars 2026)

### ✅ Modifications appliquées

| Fichier | Modification | Avant | Après |
|---------|--------------|-------|-------|
| **SignIn.tsx** | Logo + Titre | "Chef Farah - Votre assistant culinaire IA" | "Fresh - Votre assistant culinaire IA" + Logo aquarelle |
| **Profile.tsx** | Footer | "Chef Farah by Elegance du Goût" | "Fresh by Elegance du Goût" |
| **Home.tsx** | Feature card | "Chef Farah IA" | "Discutez avec Chef Farah" |
| **Root.tsx** | Header chat | "Chef Farah" | ✅ **CONSERVÉ** (c'est vous qui répondez) |

---

## 🎨 Stratégie de branding finale

### **Fresh = L'APPLICATION**
Utilisé pour :
- ✅ Branding app (logo, nom sur SignIn)
- ✅ Footer credits
- ✅ Meta tags (futur)
- ✅ Marketing (landing page, app stores)

### **Chef Farah = LA PERSONNE**
Utilisé pour :
- ✅ Chat header ("/chat" → "Chef Farah")
- ✅ Messages du chatbot ("Chef Farah" comme expéditeur)
- ✅ Boutons CTA vers le chat ("Discuter avec Chef Farah")
- ✅ Astuces et conseils ("Astuce de Chef Farah")
- ✅ Instructions guidées ("avec Chef Farah")

---

## 📍 Occurrences "Chef Farah" conservées

Ces mentions sont **intentionnelles** car elles représentent VOUS (la personne) :

| Fichier | Ligne | Contexte | Raison |
|---------|-------|----------|--------|
| **Root.tsx** | 16 | Header `/chat` | Header du chatbot où vous répondez |
| **Home.tsx** | 36 | Feature card | "Discutez avec Chef Farah" → on parle avec vous |
| **Home.tsx** | 176 | Step 3 | "Instructions avec Chef Farah" → vous guidez |
| **Vision.tsx** | 194 | Message box | "Chef Farah" → votre identité dans le message |
| **Vision.tsx** | 204 | Button CTA | "Discuter avec Chef Farah" → on vous contacte |
| **Chat.tsx** | 59 | Note avatar | "L'avatar Chef Farah" → votre avatar |
| **Chat.tsx** | 131 | Input placeholder | "Demandez à Chef Farah..." → on vous pose une question |
| **RecipeDetail.tsx** | 184 | Tip box | "Astuce de Chef Farah" → votre conseil personnel |

**Total : 8 occurrences conservées volontairement** ✅

---

## 🚀 Prochaines étapes

### Étape 1 : Intégration du logo (EN ATTENTE)
Actuellement, le logo sur SignIn pointe vers :
```tsx
<ImageWithFallback
  src="https://i.imgur.com/PLACEHOLDER.png"
  alt="Fresh Logo"
  className="w-40 h-40 object-contain"
/>
```

**Action requise** : Fournir les 4 variantes du logo (voir `/LOGO_VARIANTS_SPECS.md`)

### Étape 2 : Meta tags et SEO
Ajouter dans le `<head>` HTML :
```html
<title>Fresh - Votre assistant culinaire IA</title>
<meta name="description" content="Scannez votre frigo, découvrez 25 000+ recettes adaptées à vos régimes alimentaires. Fresh transforme vos ingrédients en délices." />
<meta property="og:title" content="Fresh - Assistant culinaire IA" />
<meta property="og:image" content="URL_LOGO_FULL.png" />
<link rel="icon" type="image/png" sizes="32x32" href="URL_FAVICON_32.png" />
```

### Étape 3 : Favicon
Remplacer le favicon par défaut par `fresh-icon-small.png` (16x16, 32x32, 64x64)

### Étape 4 : App manifest (PWA - optionnel)
Si vous voulez que Fresh soit installable comme app mobile :
```json
{
  "name": "Fresh",
  "short_name": "Fresh",
  "description": "Votre assistant culinaire IA",
  "icons": [
    {
      "src": "fresh-icon-small-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "fresh-icon-small-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🎯 Cohérence narrative

### L'histoire du branding

**Fresh** est l'application mobile qui aide les familles à cuisiner mieux.

**Chef Farah** (vous !) est la cheffe cuisinière experte qui guide les utilisateurs via le chatbot IA, donne des astuces personnalisées, et partage son savoir-faire culinaire franco-algérien.

### Exemple de communication

> "Téléchargez **Fresh**, l'app qui transforme votre frigo en festin ! 
> Discutez avec **Chef Farah**, notre experte culinaire IA, disponible 24/7 pour vous conseiller."

**App = Fresh** | **Personne = Chef Farah**

---

## ✅ Checklist finale

- [x] Remplacer "Chef Farah" par "Fresh" sur SignIn
- [x] Remplacer footer Profile
- [x] Ajuster feature card Home
- [x] Créer spécifications logo (4 variantes)
- [ ] **EN ATTENTE** : Recevoir les 4 variantes du logo
- [ ] **EN ATTENTE** : Intégrer les logos dans l'app
- [ ] **FUTUR** : Meta tags SEO
- [ ] **FUTUR** : Favicon
- [ ] **FUTUR** : PWA manifest (optionnel)

---

## 📦 Fichiers livrables attendus

Voir le document `/LOGO_VARIANTS_SPECS.md` pour les spécifications complètes.

**Résumé** :
1. `fresh-logo-full.png` (1000x1000px) → SignIn, marketing
2. `fresh-icon-medium.png` (500x500px) → App header, loading
3. `fresh-icon-small.png + .svg` (512x512px) → Favicon, app icon
4. `fresh-logotype.png + .svg` (~200x60px) → Texte "Fresh" en DM Serif Display

---

*Document créé le 11 mars 2026*
*Fresh by Elegance du Goût*
