import { cn } from "./ui/utils";

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  variant?: 'red' | 'teal' | 'orange' | 'default';
  onClick?: () => void;
  className?: string;
}

export function Chip({ children, active = false, variant = 'default', onClick, className }: ChipProps) {
  const variantStyles = {
    red: active 
      ? 'bg-[var(--color-red)] text-white border-[var(--color-red)]'
      : 'bg-transparent text-[var(--color-red)] border-[var(--color-red)]',
    teal: active
      ? 'bg-[var(--color-teal)] text-white border-[var(--color-teal)]'
      : 'bg-transparent text-[var(--color-teal)] border-[var(--color-teal)]',
    orange: active
      ? 'bg-[var(--color-orange)] text-white border-[var(--color-orange)]'
      : 'bg-transparent text-[var(--color-orange)] border-[var(--color-orange)]',
    default: active
      ? 'bg-[var(--color-charcoal)] text-white border-[var(--color-charcoal)]'
      : 'bg-transparent text-[var(--color-text)] border-[var(--border)]',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-[var(--radius-full)] border transition-all",
        "text-sm font-semibold whitespace-nowrap",
        "hover:opacity-80 active:scale-95",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
