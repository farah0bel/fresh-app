import { useNavigate, useParams } from 'react-router';
import { Button } from '../components/ui/button';
import { RecipePlaceholder } from '../components/RecipePlaceholder';
import { RecipeCard } from '../components/RecipeCard';
import { recipes } from '../data/mockData';
import { ArrowLeft, Heart, Calendar, Share2, Clock, ChefHat, Users, DollarSign, Lock } from 'lucide-react';

export function RecipeDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="max-w-[600px] mx-auto px-4 py-12 text-center">
        <h2 className="font-serif text-2xl mb-4 text-[var(--text)]">Recette non trouvée</h2>
        <Button onClick={() => navigate('/search')}>Retour aux recettes</Button>
      </div>
    );
  }

  const difficultyColors = {
    'Facile': 'text-[var(--color-teal)]',
    'Moyen': 'text-[var(--color-orange)]',
    'Difficile': 'text-[var(--color-red)]',
  };

  // Get suggested recipes based on category (mock personalization based on dietary habits)
  const suggestedRecipes = recipes
    .filter(r => r.id !== recipe.id && (r.category === recipe.category || Math.random() > 0.5))
    .slice(0, 3);

  return (
    <div className="max-w-[600px] mx-auto pb-6">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-40 bg-card border-b border-[var(--border)] px-4 h-14 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 hover:bg-[var(--muted)] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-[var(--text)]" />
        </button>
        <h1 className="font-serif text-xl text-[var(--text)]">Recette</h1>
      </div>

      {/* Hero Image */}
      <div className="relative h-[220px]">
        {recipe.image ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <RecipePlaceholder category={recipe.category} className="w-full h-full rounded-b-[var(--radius-lg)]" />
        )}
        {recipe.isPremium && (
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-white">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-semibold">Premium</span>
          </div>
        )}
      </div>

      <div className="px-4">
        {/* Title & Category */}
        <div className="py-6 border-b border-[var(--border)]">
          <h1 className="font-serif text-3xl mb-2 text-[var(--text)]">{recipe.title}</h1>
          <p className="text-sm text-[var(--text-secondary)]">{recipe.category}</p>
        </div>

        {/* Metadata */}
        <div className="py-6 border-b border-[var(--border)]">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-[var(--text-secondary)]" />
              <p className="text-xs text-[var(--text-light)] mb-1">Temps</p>
              <p className="text-sm font-semibold text-[var(--text)]">{recipe.time} min</p>
            </div>
            <div className="text-center">
              <div className={difficultyColors[recipe.difficulty]}>
                <ChefHat className="w-6 h-6 mx-auto mb-2" />
              </div>
              <p className="text-xs text-[var(--text-light)] mb-1">Difficulté</p>
              <p className={`text-sm font-semibold ${difficultyColors[recipe.difficulty]}`}>
                {recipe.difficulty}
              </p>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-[var(--text-secondary)]" />
              <p className="text-xs text-[var(--text-light)] mb-1">Portions</p>
              <p className="text-sm font-semibold text-[var(--text)]">{recipe.portions}</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-6 h-6 mx-auto mb-2 text-[var(--text-secondary)]" />
              <p className="text-xs text-[var(--text-light)] mb-1">Coût</p>
              <p className="text-sm font-semibold text-[var(--text)]">{recipe.cost}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="py-6 border-b border-[var(--border)]">
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-3 rounded-[var(--radius-lg)] border-[var(--border)] hover:border-[var(--color-red)] hover:bg-[var(--color-red)]/10"
            >
              <Heart className="w-5 h-5 text-[var(--color-red)]" />
              <span className="text-xs text-[var(--text)]">Favori</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/plan')}
              className="flex flex-col items-center gap-2 h-auto py-3 rounded-[var(--radius-lg)] border-[var(--border)] hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/10"
            >
              <Calendar className="w-5 h-5 text-[var(--color-teal)]" />
              <span className="text-xs text-[var(--text)]">Au menu</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-3 rounded-[var(--radius-lg)] border-[var(--border)] hover:border-[var(--color-orange)] hover:bg-[var(--color-orange)]/10"
            >
              <Share2 className="w-5 h-5 text-[var(--color-orange)]" />
              <span className="text-xs text-[var(--text)]">Partager</span>
            </Button>
          </div>
        </div>

        {/* Ingredients */}
        <div className="py-6 border-b border-[var(--border)]">
          <h2 className="font-serif text-2xl mb-4 text-[var(--text)]">Ingrédients</h2>
          <div className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--color-teal)] mt-2 flex-shrink-0" />
                <div className="flex-1 flex justify-between items-baseline">
                  <span className="text-sm text-[var(--text)]">{ingredient.name}</span>
                  <span className="text-sm font-semibold text-[var(--text-secondary)] ml-2">
                    {ingredient.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="py-6 border-b border-[var(--border)]">
          <h2 className="font-serif text-2xl mb-4 text-[var(--text)]">Préparation</h2>
          <div className="space-y-4">
            {recipe.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-teal)] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-sm text-[var(--text)] leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition */}
        <div className="py-6">
          <h2 className="font-serif text-2xl mb-4 text-[var(--text)]">Informations nutritionnelles</h2>
          <div className="bg-[var(--muted)] rounded-[var(--radius-lg)] p-4">
            <p className="text-xs text-[var(--text-secondary)] mb-3">Par portion</p>
            <div className="grid grid-cols-2 gap-4">
              {recipe.nutrition.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-sm text-[var(--text-secondary)] font-mono">{item.label}</span>
                  <span className="text-sm font-semibold text-[var(--text)] font-mono">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chef Farah Tip */}
        <div className="bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-light)] rounded-[var(--radius-lg)] p-6 text-white mb-6">
          <div className="flex gap-3">
            <div className="text-3xl flex-shrink-0">👨‍🍳</div>
            <div>
              <p className="font-sans font-semibold mb-2">Astuce de Chef Farah</p>
              <p className="text-sm opacity-90">
                Pour encore plus de saveur, laissez mariner votre viande avec les épices pendant 30 minutes avant la cuisson. 
                Le résultat sera spectaculaire ! 🌟
              </p>
            </div>
          </div>
        </div>

        {/* Personalized Suggestions */}
        {suggestedRecipes.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl text-[var(--text)]">Recommandé pour vous</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/search')}
                className="text-[var(--color-teal)] hover:bg-[var(--color-teal)]/10"
              >
                Tout voir
              </Button>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Basé sur vos préférences alimentaires : Halal, Sans gluten
            </p>
            <div className="space-y-4">
              {suggestedRecipes.map((suggestedRecipe) => (
                <div key={suggestedRecipe.id} onClick={() => navigate(`/recipe/${suggestedRecipe.id}`)}>
                  <RecipeCard {...suggestedRecipe} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}