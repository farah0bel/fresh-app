import { Clock, ChefHat, Lock } from 'lucide-react';
import { RecipePlaceholder } from './RecipePlaceholder';
import { cn } from './ui/utils';

interface RecipeCardProps {
  id: string;
  title: string;
  category: string;
  time: number;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  image?: string;
  isPremium?: boolean;
  onClick?: () => void;
  className?: string;
}

export function RecipeCard({
  title,
  category,
  time,
  difficulty,
  image,
  isPremium,
  onClick,
  className,
}: RecipeCardProps) {
  const difficultyColors = {
    'Facile': 'text-[var(--color-teal)]',
    'Moyen': 'text-[var(--color-orange)]',
    'Difficile': 'text-[var(--color-red)]',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-card rounded-[var(--radius-lg)] overflow-hidden cursor-pointer transition-transform hover:scale-105 active:scale-95",
        "shadow-sm dark:shadow-none",
        className
      )}
    >
      <div className="relative aspect-square">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <RecipePlaceholder category={category} className="w-full h-full" />
        )}
        {isPremium && (
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-2">
            <Lock className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-serif text-lg line-clamp-2">{title}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{category}</p>
        <div className="flex items-center gap-4 text-xs text-[var(--text-light)]">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{time} min</span>
          </div>
          <div className={cn("flex items-center gap-1", difficultyColors[difficulty])}>
            <ChefHat className="w-3.5 h-3.5" />
            <span>{difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
