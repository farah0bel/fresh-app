export interface Recipe {
  id: string;
  title: string;
  category: string;
  time: number;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  image?: string;
  isPremium?: boolean;
  portions: number;
  cost: string;
  ingredients: { name: string; quantity: string }[];
  steps: string[];
  nutrition: { label: string; value: string }[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Couscous Royal aux Légumes',
    category: 'Plats principaux',
    time: 45,
    difficulty: 'Moyen',
    image: 'https://images.unsplash.com/photo-1542627501-cadbb5b43ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VzY291cyUyMHJveWFsJTIwbW9yb2NjYW4lMjBkaXNofGVufDF8fHx8MTc3MzIzMTIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    portions: 6,
    cost: '15€',
    ingredients: [
      { name: 'Semoule de couscous', quantity: '500g' },
      { name: 'Poulet', quantity: '4 morceaux' },
      { name: 'Merguez', quantity: '6 pièces' },
      { name: 'Courgettes', quantity: '2 pièces' },
      { name: 'Carottes', quantity: '4 pièces' },
      { name: 'Pois chiches', quantity: '200g' },
      { name: 'Oignon', quantity: '1 pièce' },
      { name: 'Épices couscous', quantity: '2 c. à soupe' },
      { name: 'Harissa', quantity: 'Au goût' },
    ],
    steps: [
      'Faire revenir l\'oignon émincé dans une cocotte avec de l\'huile d\'olive.',
      'Ajouter le poulet et faire dorer de tous les côtés.',
      'Ajouter les épices, les légumes coupés en gros morceaux et les pois chiches.',
      'Couvrir d\'eau et laisser mijoter 30 minutes.',
      'Pendant ce temps, préparer la semoule selon les instructions du paquet.',
      'Faire griller les merguez à la poêle.',
      'Servir la semoule avec les légumes, la viande et le bouillon. Accompagner de harissa.',
    ],
    nutrition: [
      { label: 'Calories', value: '520 kcal' },
      { label: 'Protéines', value: '32g' },
      { label: 'Glucides', value: '58g' },
      { label: 'Lipides', value: '18g' },
    ],
  },
  {
    id: '2',
    title: 'Tajine d\'Agneau aux Pruneaux',
    category: 'Plats principaux',
    time: 90,
    difficulty: 'Moyen',
    isPremium: true,
    image: 'https://images.unsplash.com/photo-1594155434520-6a4d74dd0458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWdpbmUlMjBsYW1iJTIwcHJ1bmVzJTIwbW9yb2NjYW58ZW58MXx8fHwxNzczMjMxMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    portions: 4,
    cost: '18€',
    ingredients: [
      { name: 'Épaule d\'agneau', quantity: '800g' },
      { name: 'Pruneaux', quantity: '200g' },
      { name: 'Oignons', quantity: '2 pièces' },
      { name: 'Amandes', quantity: '100g' },
      { name: 'Miel', quantity: '2 c. à soupe' },
      { name: 'Cannelle', quantity: '1 bâton' },
      { name: 'Gingembre', quantity: '1 c. à café' },
      { name: 'Safran', quantity: '1 pincée' },
    ],
    steps: [
      'Faire dorer les morceaux d\'agneau dans le tajine avec de l\'huile d\'olive.',
      'Ajouter les oignons émincés et les épices.',
      'Couvrir d\'eau à hauteur et laisser mijoter à feu doux pendant 1h.',
      'Ajouter les pruneaux et le miel, poursuivre la cuisson 20 minutes.',
      'Faire griller les amandes à sec dans une poêle.',
      'Servir le tajine parsemé d\'amandes grillées.',
    ],
    nutrition: [
      { label: 'Calories', value: '650 kcal' },
      { label: 'Protéines', value: '45g' },
      { label: 'Glucides', value: '42g' },
      { label: 'Lipides', value: '32g' },
    ],
  },
  {
    id: '3',
    title: 'Makroudh aux Dattes',
    category: 'Desserts',
    time: 60,
    difficulty: 'Difficile',
    portions: 20,
    cost: '8€',
    ingredients: [
      { name: 'Semoule fine', quantity: '500g' },
      { name: 'Dattes', quantity: '300g' },
      { name: 'Beurre fondu', quantity: '150g' },
      { name: 'Huile végétale', quantity: '2 c. à soupe' },
      { name: 'Fleur d\'oranger', quantity: '2 c. à soupe' },
      { name: 'Miel', quantity: '200g' },
      { name: 'Cannelle', quantity: '1 c. à café' },
    ],
    steps: [
      'Mélanger la semoule avec le beurre fondu, l\'huile et la fleur d\'oranger. Laisser reposer 30 min.',
      'Dénoyauter les dattes et les mixer avec la cannelle pour obtenir une pâte.',
      'Former des boudins de pâte à semoule, les garnir de pâte de dattes au centre.',
      'Façonner en losanges et décorer avec un peigne à makroudh.',
      'Faire frire dans l\'huile chaude jusqu\'à coloration dorée.',
      'Plonger les makroudh chauds dans le miel tiède, puis les laisser égoutter.',
    ],
    nutrition: [
      { label: 'Calories', value: '180 kcal' },
      { label: 'Protéines', value: '3g' },
      { label: 'Glucides', value: '28g' },
      { label: 'Lipides', value: '7g' },
    ],
  },
  {
    id: '4',
    title: 'Chorba aux Légumes',
    category: 'Soupes',
    time: 50,
    difficulty: 'Facile',
    image: 'https://images.unsplash.com/photo-1665594051407-7385d281ad76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9yYmElMjBzb3VwJTIwYWxnZXJpYW58ZW58MXx8fHwxNzczMjMxMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    portions: 6,
    cost: '10€',
    ingredients: [
      { name: 'Agneau ou poulet', quantity: '400g' },
      { name: 'Tomates', quantity: '3 pièces' },
      { name: 'Céleri', quantity: '2 branches' },
      { name: 'Carottes', quantity: '2 pièces' },
      { name: 'Vermicelles', quantity: '100g' },
      { name: 'Pois chiches', quantity: '150g' },
      { name: 'Coriandre fraîche', quantity: '1 bouquet' },
      { name: 'Citron', quantity: '2 pièces' },
    ],
    steps: [
      'Faire revenir la viande avec un peu d\'huile d\'olive.',
      'Ajouter les légumes coupés en dés et les tomates pelées.',
      'Couvrir d\'eau, ajouter les pois chiches et laisser mijoter 35 minutes.',
      'Ajouter les vermicelles et poursuivre la cuisson 10 minutes.',
      'Ajouter la coriandre ciselée et le jus de citron avant de servir.',
    ],
    nutrition: [
      { label: 'Calories', value: '280 kcal' },
      { label: 'Protéines', value: '22g' },
      { label: 'Glucides', value: '32g' },
      { label: 'Lipides', value: '8g' },
    ],
  },
  {
    id: '5',
    title: 'Salade Mechouia',
    category: 'Salades',
    time: 30,
    difficulty: 'Facile',
    image: 'https://images.unsplash.com/photo-1722032617357-7b09276b1a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aCUyMGFmcmljYW4lMjBzYWxhZCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzczMjMxMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    portions: 4,
    cost: '6€',
    ingredients: [
      { name: 'Poivrons rouges', quantity: '4 pièces' },
      { name: 'Tomates', quantity: '4 pièces' },
      { name: 'Piments verts', quantity: '2 pièces' },
      { name: 'Ail', quantity: '3 gousses' },
      { name: 'Huile d\'olive', quantity: '4 c. à soupe' },
      { name: 'Citron', quantity: '1 pièce' },
      { name: 'Thon', quantity: '1 boîte (optionnel)' },
      { name: 'Œufs durs', quantity: '2 pièces' },
    ],
    steps: [
      'Faire griller les poivrons, tomates et piments au four ou sur le grill jusqu\'à ce que la peau noircisse.',
      'Laisser refroidir dans un sac fermé, puis peler.',
      'Épépiner et couper les légumes en petits morceaux.',
      'Ajouter l\'ail écrasé, l\'huile d\'olive et le jus de citron.',
      'Bien mélanger et servir frais avec du thon et des œufs durs.',
    ],
    nutrition: [
      { label: 'Calories', value: '150 kcal' },
      { label: 'Protéines', value: '6g' },
      { label: 'Glucides', value: '12g' },
      { label: 'Lipides', value: '9g' },
    ],
  },
  {
    id: '6',
    title: 'Msemmen Traditionnel',
    category: 'Breakfast',
    time: 40,
    difficulty: 'Moyen',
    isPremium: true,
    portions: 8,
    cost: '5€',
    ingredients: [
      { name: 'Farine', quantity: '500g' },
      { name: 'Semoule fine', quantity: '100g' },
      { name: 'Eau tiède', quantity: '300ml' },
      { name: 'Sel', quantity: '1 c. à café' },
      { name: 'Beurre mou', quantity: '100g' },
      { name: 'Huile végétale', quantity: 'Pour la cuisson' },
    ],
    steps: [
      'Mélanger la farine, la semoule et le sel. Ajouter l\'eau progressivement pour former une pâte souple.',
      'Pétrir 10 minutes, former des boules et laisser reposer 15 minutes.',
      'Étaler finement chaque boule sur un plan huilé.',
      'Badigeonner de beurre mou et saupoudrer de semoule.',
      'Plier en carré et laisser reposer 5 minutes.',
      'Cuire à la poêle à feu moyen jusqu\'à coloration dorée de chaque côté.',
    ],
    nutrition: [
      { label: 'Calories', value: '220 kcal' },
      { label: 'Protéines', value: '5g' },
      { label: 'Glucides', value: '35g' },
      { label: 'Lipides', value: '7g' },
    ],
  },
];

export const chatHistory = [
  {
    id: '1',
    sender: 'bot',
    message: 'Bonjour ! Je suis Chef Farah, votre assistante culinaire IA. Comment puis-je vous aider aujourd\'hui ? 👨‍🍳',
    timestamp: new Date('2026-03-11T10:00:00'),
  },
  {
    id: '2',
    sender: 'user',
    message: 'J\'ai du poulet, des tomates et des pois chiches. Qu\'est-ce que je peux faire ?',
    timestamp: new Date('2026-03-11T10:01:00'),
  },
  {
    id: '3',
    sender: 'bot',
    message: 'Parfait ! Avec ces ingrédients, je vous suggère une délicieuse **Chorba** ou un **Couscous**. Les deux sont savoureux et faciles à préparer. Vous avez une préférence ? 🍲',
    timestamp: new Date('2026-03-11T10:01:30'),
  },
];