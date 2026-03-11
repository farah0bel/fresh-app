interface RecipePlaceholderProps {
  category: string;
  className?: string;
}

const categoryGradients: Record<string, { from: string; to: string; emoji: string }> = {
  'Desserts': { from: '#F4845F', to: '#F79D84', emoji: '🍰' },
  'Cakes': { from: '#F4845F', to: '#F79D84', emoji: '🍰' },
  'Cookies': { from: '#F4845F', to: '#F79D84', emoji: '🍪' },
  'Main Dishes': { from: '#E8372A', to: '#F06B62', emoji: '🍖' },
  'Beef': { from: '#E8372A', to: '#F06B62', emoji: '🥩' },
  'Pork': { from: '#E8372A', to: '#F06B62', emoji: '🥓' },
  'Breakfast': { from: '#F7B731', to: '#F9CC6B', emoji: '🥞' },
  'Soups': { from: '#38ADA9', to: '#6BD5D1', emoji: '🍜' },
  'Chowders': { from: '#38ADA9', to: '#6BD5D1', emoji: '🍲' },
  'Salads': { from: '#78E08F', to: '#A3EBB1', emoji: '🥗' },
  'Breads': { from: '#D4A574', to: '#E2C09E', emoji: '🍞' },
  'Pizza': { from: '#D4A574', to: '#E2C09E', emoji: '🍕' },
  'Cocktails': { from: '#9B59B6', to: '#BF7FD3', emoji: '🍹' },
  'Beverages': { from: '#9B59B6', to: '#BF7FD3', emoji: '🥤' },
  'Italian': { from: '#E77F67', to: '#F0A595', emoji: '🍝' },
  'Mexican': { from: '#E77F67', to: '#F0A595', emoji: '🌮' },
  'Indian': { from: '#E77F67', to: '#F0A595', emoji: '🍛' },
  'Healthy': { from: '#2A9D8F', to: '#3DB8A9', emoji: '🥑' },
  'Vegetarian': { from: '#2A9D8F', to: '#3DB8A9', emoji: '🥬' },
  'Vegan': { from: '#2A9D8F', to: '#3DB8A9', emoji: '🌱' },
};

const defaultGradient = { from: '#C4C4BC', to: '#D6D6CE', emoji: '🍽' };

export function RecipePlaceholder({ category, className = '' }: RecipePlaceholderProps) {
  const gradient = categoryGradients[category] || defaultGradient;

  return (
    <div
      className={`flex items-center justify-center rounded-[var(--radius-lg)] ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
      }}
    >
      <span className="text-6xl">{gradient.emoji}</span>
    </div>
  );
}
