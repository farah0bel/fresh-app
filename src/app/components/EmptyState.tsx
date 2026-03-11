interface EmptyStateProps {
  emoji: string;
  title: string;
  description?: string;
}

export function EmptyState({ emoji, title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-6xl mb-4">{emoji}</div>
      <h3 className="text-xl font-serif mb-2 text-[var(--text)]">{title}</h3>
      {description && (
        <p className="text-sm text-[var(--text-secondary)] max-w-sm">{description}</p>
      )}
    </div>
  );
}
