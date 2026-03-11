import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Chip } from '../components/Chip';
import { RecipeCard } from '../components/RecipeCard';
import { Camera, Loader2, Sparkles, Receipt } from 'lucide-react';
import { recipes } from '../data/mockData';

export function Vision() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const [detectedIngredients, setDetectedIngredients] = useState<string[]>([]);
  const [scanMode, setScanMode] = useState<'fridge' | 'receipt'>('fridge');

  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
      setHasScanned(true);
      if (scanMode === 'fridge') {
        setDetectedIngredients([
          'Poulet',
          'Tomates',
          'Oignons',
          'Pois chiches',
          'Carottes',
          'Courgettes',
        ]);
      } else {
        setDetectedIngredients([
          'Agneau',
          'Pruneaux',
          'Amandes',
          'Cannelle',
          'Miel',
          'Oignons',
        ]);
      }
    }, 2500);
  };

  const suggestedRecipes = recipes.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {!hasScanned ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          {/* Mode Toggle */}
          <div className="w-full max-w-md mb-6">
            <div className="bg-[var(--muted)] rounded-[var(--radius-lg)] p-1 flex gap-1">
              <button
                onClick={() => setScanMode('fridge')}
                className={`flex-1 py-3 px-4 rounded-[var(--radius-lg)] font-sans font-semibold text-sm transition-all ${
                  scanMode === 'fridge'
                    ? 'bg-card text-[var(--text)] shadow-sm'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                <Camera className="w-4 h-4 inline-block mr-2" />
                Scan frigo
              </button>
              <button
                onClick={() => setScanMode('receipt')}
                className={`flex-1 py-3 px-4 rounded-[var(--radius-lg)] font-sans font-semibold text-sm transition-all ${
                  scanMode === 'receipt'
                    ? 'bg-card text-[var(--text)] shadow-sm'
                    : 'text-[var(--text-secondary)]'
                }`}
              >
                <Receipt className="w-4 h-4 inline-block mr-2" />
                Scan ticket
              </button>
            </div>
          </div>

          {/* Camera View Placeholder */}
          <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[var(--radius-xl)] overflow-hidden mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              {!isScanning ? (
                <div className="text-center text-white/60">
                  {scanMode === 'fridge' ? (
                    <Camera className="w-20 h-20 mx-auto mb-4" />
                  ) : (
                    <Receipt className="w-20 h-20 mx-auto mb-4" />
                  )}
                  <p className="text-lg font-sans">
                    {scanMode === 'fridge' 
                      ? 'Pointez votre caméra vers votre frigo'
                      : 'Pointez votre caméra vers votre ticket de caisse'}
                  </p>
                </div>
              ) : (
                <div className="text-center text-white">
                  <Loader2 className="w-20 h-20 mx-auto mb-4 animate-spin" />
                  <p className="text-lg font-sans">Analyse en cours...</p>
                  <p className="text-sm mt-2 opacity-60">
                    {scanMode === 'fridge'
                      ? 'Reconnaissance IA des ingrédients'
                      : 'Lecture automatique du ticket'}
                  </p>
                </div>
              )}
            </div>

            {/* Scan Grid Overlay */}
            {!isScanning && (
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border border-white/20" />
                ))}
              </div>
            )}
          </div>

          {/* Scan Button */}
          <Button
            onClick={handleScan}
            disabled={isScanning}
            className="bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white rounded-full w-20 h-20 p-0"
          >
            {isScanning ? (
              <Loader2 className="w-8 h-8 animate-spin" />
            ) : (
              <Camera className="w-8 h-8" />
            )}
          </Button>

          <p className="text-sm text-[var(--text-secondary)] mt-6 text-center max-w-sm">
            {scanMode === 'fridge'
              ? 'Notre IA reconnaît automatiquement les ingrédients dans votre frigo et vous suggère des recettes'
              : 'Scannez votre ticket de caisse pour ajouter automatiquement les ingrédients à votre liste'}
          </p>
        </div>
      ) : (
        <div className="max-w-[600px] mx-auto px-4 py-6">
          {/* Results Header */}
          <div className="bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-light)] rounded-[var(--radius-xl)] p-6 mb-6 text-white">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-serif text-2xl mb-2">
                  {scanMode === 'fridge' 
                    ? 'Super ! J\'ai trouvé des ingrédients'
                    : 'Ticket de caisse analysé !'}
                </h2>
                <p className="text-sm opacity-90">
                  {scanMode === 'fridge'
                    ? 'Voici ce que j\'ai détecté dans votre frigo. Cliquez pour retirer un ingrédient.'
                    : 'Tous vos ingrédients ont été détectés. Cliquez pour en retirer un.'}
                </p>
              </div>
            </div>
          </div>

          {/* Detected Ingredients */}
          <div className="mb-8">
            <h3 className="font-serif text-xl mb-4 text-[var(--text)]">Ingrédients détectés</h3>
            <div className="flex flex-wrap gap-2">
              {detectedIngredients.map((ingredient) => (
                <Chip
                  key={ingredient}
                  variant="teal"
                  active
                  onClick={() => setDetectedIngredients(detectedIngredients.filter((i) => i !== ingredient))}
                >
                  {ingredient}
                </Chip>
              ))}
            </div>
          </div>

          {/* Suggested Recipes */}
          <div className="mb-8">
            <h3 className="font-serif text-xl mb-4 text-[var(--text)]">Recettes suggérées</h3>
            <div className="space-y-4">
              {suggestedRecipes.map((recipe) => (
                <div key={recipe.id} onClick={() => navigate(`/recipe/${recipe.id}`)}>
                  <RecipeCard {...recipe} />
                </div>
              ))}
            </div>
          </div>

          {/* Chef Farah Message */}
          <div className="bg-card rounded-[var(--radius-lg)] p-6 shadow-sm dark:shadow-none">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-light)] flex items-center justify-center text-white flex-shrink-0">
                <span className="text-xl">👨‍🍳</span>
              </div>
              <div>
                <p className="font-sans font-semibold mb-1 text-[var(--text)]">Chef Farah</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Excellent choix d'ingrédients ! Le couscous ou la chorba seraient parfaits pour ce soir. Besoin d'aide pour choisir ? 😊
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/chat')}
                  className="mt-3 border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)]/10 rounded-[var(--radius-lg)]"
                >
                  Discuter avec Chef Farah
                </Button>
              </div>
            </div>
          </div>

          {/* New Scan Button */}
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => {
                setHasScanned(false);
                setDetectedIngredients([]);
              }}
              className="border-[var(--color-red)] text-[var(--color-red)] hover:bg-[var(--color-red)]/10 rounded-[var(--radius-lg)]"
            >
              <Camera className="w-4 h-4 mr-2" />
              Nouveau scan
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}