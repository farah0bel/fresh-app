import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Share2 } from 'lucide-react';

interface GroceryItem {
  id: string;
  name: string;
  quantity: string;
  checked: boolean;
}

interface GrocerySection {
  category: string;
  items: GroceryItem[];
}

export function List() {
  const [groceryList, setGroceryList] = useState<GrocerySection[]>([
    {
      category: 'Fruits & Légumes',
      items: [
        { id: '1', name: 'Courgettes', quantity: '2 pièces', checked: false },
        { id: '2', name: 'Carottes', quantity: '4 pièces', checked: true },
        { id: '3', name: 'Oignons', quantity: '2 pièces', checked: false },
        { id: '4', name: 'Tomates', quantity: '3 pièces', checked: false },
        { id: '5', name: 'Céleri', quantity: '2 branches', checked: false },
      ],
    },
    {
      category: 'Viandes & Poissons',
      items: [
        { id: '6', name: 'Poulet', quantity: '4 morceaux', checked: false },
        { id: '7', name: 'Merguez', quantity: '6 pièces', checked: true },
        { id: '8', name: 'Agneau', quantity: '400g', checked: false },
      ],
    },
    {
      category: 'Épicerie',
      items: [
        { id: '9', name: 'Semoule de couscous', quantity: '500g', checked: false },
        { id: '10', name: 'Pois chiches', quantity: '200g', checked: false },
        { id: '11', name: 'Vermicelles', quantity: '100g', checked: true },
        { id: '12', name: 'Harissa', quantity: '1 tube', checked: false },
        { id: '13', name: 'Épices couscous', quantity: '1 sachet', checked: false },
      ],
    },
    {
      category: 'Produits frais',
      items: [
        { id: '14', name: 'Œufs', quantity: '6 pièces', checked: false },
        { id: '15', name: 'Beurre', quantity: '200g', checked: false },
        { id: '16', name: 'Coriandre fraîche', quantity: '1 bouquet', checked: true },
      ],
    },
    {
      category: 'Divers',
      items: [
        { id: '17', name: 'Citrons', quantity: '3 pièces', checked: false },
        { id: '18', name: 'Huile d\'olive', quantity: '1 bouteille', checked: false },
      ],
    },
  ]);

  const toggleItem = (sectionIndex: number, itemId: string) => {
    setGroceryList((prev) =>
      prev.map((section, idx) =>
        idx === sectionIndex
          ? {
              ...section,
              items: section.items.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
              ),
            }
          : section
      )
    );
  };

  const getProgress = (items: GroceryItem[]) => {
    const total = items.length;
    const checked = items.filter((item) => item.checked).length;
    return { total, checked };
  };

  const handleShare = () => {
    // Mock share functionality
    alert('Fonctionnalité de partage simulée - La liste serait partagée via votre application de messagerie');
  };

  return (
    <div className="max-w-[600px] mx-auto px-4 py-6">
      {/* Header Actions */}
      <div className="mb-6">
        <Button
          onClick={handleShare}
          variant="outline"
          className="w-full border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)]/10 rounded-[var(--radius-lg)]"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Partager la liste
        </Button>
      </div>

      {/* Grocery Sections */}
      <div className="space-y-6">
        {groceryList.map((section, sectionIndex) => {
          const { total, checked } = getProgress(section.items);
          return (
            <div key={section.category} className="bg-card rounded-[var(--radius-lg)] overflow-hidden shadow-sm dark:shadow-none">
              {/* Section Header */}
              <div className="bg-[var(--muted)] px-4 py-3 flex items-center justify-between">
                <h3 className="font-sans font-bold text-base text-[var(--text)]">{section.category}</h3>
                <span className="text-sm text-[var(--text-secondary)]">
                  {checked}/{total}
                </span>
              </div>

              {/* Items List */}
              <div className="divide-y divide-[var(--border)]">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="px-4 py-3 flex items-center gap-3 hover:bg-[var(--muted)]/50 transition-colors"
                  >
                    <Checkbox
                      id={item.id}
                      checked={item.checked}
                      onCheckedChange={() => toggleItem(sectionIndex, item.id)}
                      className="data-[state=checked]:bg-[var(--color-teal)] data-[state=checked]:border-[var(--color-teal)]"
                    />
                    <label
                      htmlFor={item.id}
                      className="flex-1 flex items-baseline justify-between cursor-pointer"
                    >
                      <span
                        className={`font-sans ${
                          item.checked
                            ? 'line-through text-[var(--text-light)]'
                            : 'text-[var(--text)]'
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`text-sm ml-2 ${
                          item.checked
                            ? 'line-through text-[var(--text-light)]'
                            : 'text-[var(--text-secondary)]'
                        }`}
                      >
                        {item.quantity}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-light)] rounded-[var(--radius-lg)] p-6 text-white">
        <h3 className="font-serif text-xl mb-2">Récapitulatif</h3>
        <p className="text-sm opacity-90">
          {groceryList.reduce((acc, section) => acc + getProgress(section.items).checked, 0)} /{' '}
          {groceryList.reduce((acc, section) => acc + getProgress(section.items).total, 0)} articles achetés
        </p>
      </div>

      {/* Info */}
      <div className="mt-6 bg-card rounded-[var(--radius-lg)] p-6 shadow-sm dark:shadow-none">
        <h3 className="font-serif text-lg mb-2 text-[var(--text)]">💡 Astuce</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Cette liste est générée automatiquement à partir de votre planning repas. 
          Cochez les articles au fur et à mesure de vos achats !
        </p>
      </div>
    </div>
  );
}
