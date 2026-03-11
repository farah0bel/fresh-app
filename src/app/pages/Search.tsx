import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '../components/ui/input';
import { Chip } from '../components/Chip';
import { RecipeCard } from '../components/RecipeCard';
import { SectionHeader } from '../components/SectionHeader';
import { recipes } from '../data/mockData';
import { Search as SearchIcon, Clock, ChefHat, Sparkles } from 'lucide-react';

const difficultyFilters = ['Facile', 'Moyen', 'Difficile'];
const timeFilters = ['< 30 min', '30-60 min', '> 60 min'];

export function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showAllResults, setShowAllResults] = useState(false);

  const filteredRecipes = recipes.filter((recipe) => {
    // Search query filter
    if (searchQuery && !recipe.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Difficulty filter
    if (selectedDifficulty && recipe.difficulty !== selectedDifficulty) {
      return false;
    }

    // Time filter
    if (selectedTime) {
      if (selectedTime === '< 30 min' && recipe.time >= 30) return false;
      if (selectedTime === '30-60 min' && (recipe.time < 30 || recipe.time > 60)) return false;
      if (selectedTime === '> 60 min' && recipe.time <= 60) return false;
    }

    return true;
  });

  // Categorize recipes
  const quickRecipes = recipes.filter(r => r.time < 30);
  const easyRecipes = recipes.filter(r => r.difficulty === 'Facile');
  const breakfastRecipes = recipes.filter(r => r.category === 'Breakfast');
  const mainDishes = recipes.filter(r => r.category === 'Plats principaux' || r.category === 'Soupes');
  const desserts = recipes.filter(r => r.category === 'Desserts');

  const hasActiveFilters = searchQuery || selectedDifficulty || selectedTime;

  return (
    <div className="max-w-[600px] mx-auto pb-6">
      {/* Search Header with gradient background */}
      <div className="sticky top-0 z-40 bg-gradient-to-br from-[var(--color-red)]/5 to-[var(--color-teal)]/5 backdrop-blur-sm border-b border-[var(--border)] px-4 py-4">
        <div className="mb-3 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-light)]" />
          <Input
            type="text"
            placeholder="Couscous, tajine, makroudh..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 rounded-[var(--radius-lg)] bg-card border-[var(--border)] shadow-sm"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex gap-4 items-center">
          {/* Time Filter */}
          <div className="flex items-center gap-2 flex-1">
            <Clock className="w-4 h-4 text-[var(--text-secondary)] flex-shrink-0" />
            <div className="flex gap-1.5 overflow-x-auto hide-scrollbar">
              {timeFilters.map((filter) => (
                <Chip
                  key={filter}
                  variant="orange"
                  active={selectedTime === filter}
                  onClick={() => setSelectedTime(selectedTime === filter ? null : filter)}
                >
                  {filter}
                </Chip>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-2 flex-1">
            <ChefHat className="w-4 h-4 text-[var(--text-secondary)] flex-shrink-0" />
            <div className="flex gap-1.5 overflow-x-auto hide-scrollbar">
              {difficultyFilters.map((filter) => (
                <Chip
                  key={filter}
                  variant="red"
                  active={selectedDifficulty === filter}
                  onClick={() => setSelectedDifficulty(selectedDifficulty === filter ? null : filter)}
                >
                  {filter}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results or Carousels */}
      {hasActiveFilters ? (
        <div className="px-4 pt-6">
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl mb-2 text-[var(--text)]">Aucun résultat</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Essayez d'ajuster vos filtres ou votre recherche
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <p className="text-sm text-[var(--text-secondary)]">
                  {filteredRecipes.length} recette{filteredRecipes.length > 1 ? 's' : ''} trouvée{filteredRecipes.length > 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    {...recipe}
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-8 pt-6">
          {/* Quick Recipes Carousel */}
          <section>
            <div className="px-4">
              <SectionHeader
                title="⚡ Recettes rapides"
                subtitle="Prêt en moins de 30 minutes"
              />
            </div>
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="flex gap-4 pb-4">
                {quickRecipes.map((recipe) => (
                  <div key={recipe.id} className="w-64 flex-shrink-0">
                    <RecipeCard
                      {...recipe}
                      onClick={() => navigate(`/recipe/${recipe.id}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Easy Recipes Carousel */}
          <section>
            <div className="px-4">
              <SectionHeader
                title="👨‍🍳 Faciles pour débuter"
                subtitle="Parfait pour les cuisiniers en herbe"
              />
            </div>
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="flex gap-4 pb-4">
                {easyRecipes.map((recipe) => (
                  <div key={recipe.id} className="w-64 flex-shrink-0">
                    <RecipeCard
                      {...recipe}
                      onClick={() => navigate(`/recipe/${recipe.id}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Breakfast Carousel */}
          {breakfastRecipes.length > 0 && (
            <section>
              <div className="px-4">
                <SectionHeader
                  title="🌅 Petit-déjeuner"
                  subtitle="Commencez la journée en beauté"
                />
              </div>
              <div className="overflow-x-auto -mx-4 px-4">
                <div className="flex gap-4 pb-4">
                  {breakfastRecipes.map((recipe) => (
                    <div key={recipe.id} className="w-64 flex-shrink-0">
                      <RecipeCard
                        {...recipe}
                        onClick={() => navigate(`/recipe/${recipe.id}`)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Main Dishes Carousel */}
          <section>
            <div className="px-4">
              <SectionHeader
                title="🍽️ Plats & Repas"
                subtitle="Déjeuner et dîner savoureux"
              />
            </div>
            <div className="overflow-x-auto -mx-4 px-4">
              <div className="flex gap-4 pb-4">
                {mainDishes.map((recipe) => (
                  <div key={recipe.id} className="w-64 flex-shrink-0">
                    <RecipeCard
                      {...recipe}
                      onClick={() => navigate(`/recipe/${recipe.id}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Desserts Carousel */}
          {desserts.length > 0 && (
            <section>
              <div className="px-4">
                <SectionHeader
                  title="🍰 Desserts & Douceurs"
                  subtitle="Terminez en beauté"
                />
              </div>
              <div className="overflow-x-auto -mx-4 px-4">
                <div className="flex gap-4 pb-4">
                  {desserts.map((recipe) => (
                    <div key={recipe.id} className="w-64 flex-shrink-0">
                      <RecipeCard
                        {...recipe}
                        onClick={() => navigate(`/recipe/${recipe.id}`)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Explore More */}
          <section className="px-4 pb-6">
            <div className="bg-gradient-to-br from-[var(--color-teal)]/10 to-[var(--color-red)]/10 rounded-[var(--radius-xl)] p-8 text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-[var(--color-teal)]" />
              <h3 className="font-serif text-2xl mb-2 text-[var(--text)]">
                Plus de 25 000 recettes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Utilisez les filtres ci-dessus pour explorer notre immense collection
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}