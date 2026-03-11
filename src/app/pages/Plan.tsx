import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight, Plus, ShoppingCart } from 'lucide-react';
import { RecipePlaceholder } from '../components/RecipePlaceholder';

interface MealSlot {
  id: string;
  recipeId?: string;
  recipeName?: string;
  recipeCategory?: string;
}

interface DayPlan {
  date: Date;
  breakfast: MealSlot;
  lunch: MealSlot;
  dinner: MealSlot;
}

const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

export function Plan() {
  const navigate = useNavigate();
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date(2026, 2, 9)); // March 9, 2026 (Monday)

  const weekDays: DayPlan[] = daysOfWeek.map((_, index) => {
    const date = new Date(currentWeekStart);
    date.setDate(date.getDate() + index);
    return {
      date,
      breakfast: { id: `breakfast-${index}` },
      lunch: index === 0 ? { 
        id: `lunch-${index}`, 
        recipeId: '1', 
        recipeName: 'Couscous Royal',
        recipeCategory: 'Plats principaux'
      } : { id: `lunch-${index}` },
      dinner: index === 2 ? { 
        id: `dinner-${index}`, 
        recipeId: '4', 
        recipeName: 'Chorba aux Légumes',
        recipeCategory: 'Soupes'
      } : { id: `dinner-${index}` },
    };
  });

  const handlePreviousWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeekStart(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeekStart(newDate);
  };

  const formatDateRange = () => {
    const end = new Date(currentWeekStart);
    end.setDate(end.getDate() + 6);
    return `${currentWeekStart.getDate()} - ${end.getDate()} ${end.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`;
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      {/* Week Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePreviousWeek}
          className="rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h2 className="font-serif text-xl text-[var(--text)]">{formatDateRange()}</h2>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNextWeek}
          className="rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Week Grid */}
      <div className="overflow-x-auto -mx-4 px-4 mb-6">
        <div className="min-w-[800px]">
          <div className="grid grid-cols-8 gap-2 mb-2">
            <div className="font-sans font-semibold text-sm text-[var(--text-secondary)]"></div>
            {daysOfWeek.map((day, index) => {
              const date = weekDays[index].date;
              const isToday = date.toDateString() === new Date().toDateString();
              return (
                <div
                  key={day}
                  className={`text-center ${isToday ? 'text-[var(--color-teal)]' : 'text-[var(--text)]'}`}
                >
                  <div className="font-sans font-semibold text-sm">{day}</div>
                  <div className={`text-xs ${isToday ? 'font-bold' : 'text-[var(--text-light)]'}`}>
                    {date.getDate()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Meal Rows */}
          {['breakfast', 'lunch', 'dinner'].map((mealType) => {
            const mealLabels = {
              breakfast: 'Petit-déj',
              lunch: 'Déjeuner',
              dinner: 'Dîner',
            };

            return (
              <div key={mealType} className="grid grid-cols-8 gap-2 mb-2">
                <div className="flex items-center font-sans font-medium text-sm text-[var(--text-secondary)]">
                  {mealLabels[mealType as keyof typeof mealLabels]}
                </div>
                {weekDays.map((day, index) => {
                  const meal = day[mealType as keyof Omit<DayPlan, 'date'>] as MealSlot;
                  return (
                    <div key={index} className="aspect-square">
                      {meal.recipeId ? (
                        <div
                          onClick={() => navigate(`/recipe/${meal.recipeId}`)}
                          className="h-full bg-card rounded-[var(--radius-lg)] overflow-hidden cursor-pointer hover:shadow-md transition-shadow border border-[var(--border)]"
                        >
                          <RecipePlaceholder 
                            category={meal.recipeCategory || 'Default'} 
                            className="h-2/3"
                          />
                          <div className="p-2">
                            <p className="text-xs font-sans font-medium line-clamp-2 text-[var(--text)]">
                              {meal.recipeName}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => navigate('/search')}
                          className="w-full h-full bg-card border-2 border-dashed border-[var(--border)] rounded-[var(--radius-lg)] flex items-center justify-center hover:border-[var(--color-teal)] hover:bg-[var(--color-teal)]/5 transition-all group"
                        >
                          <Plus className="w-6 h-6 text-[var(--text-light)] group-hover:text-[var(--color-teal)]" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Generate Shopping List Button */}
      <div className="fixed bottom-20 right-4 md:right-8">
        <Button
          onClick={() => navigate('/list')}
          className="bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white rounded-full h-14 px-6 shadow-lg"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Générer la liste de courses
        </Button>
      </div>

      {/* Info Card */}
      <div className="bg-card rounded-[var(--radius-lg)] p-6 shadow-sm dark:shadow-none">
        <h3 className="font-serif text-lg mb-2 text-[var(--text)]">Comment ça marche ?</h3>
        <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-teal)]">•</span>
            Cliquez sur + pour ajouter une recette à un repas
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-teal)]">•</span>
            Parcourez les semaines avec les flèches
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-teal)]">•</span>
            Générez automatiquement votre liste de courses
          </li>
        </ul>
      </div>
    </div>
  );
}
