import { Home, Search, Camera, MessageCircle, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';
import { cn } from './ui/utils';

const tabs = [
  { path: '/', label: 'Accueil', Icon: Home },
  { path: '/search', label: 'Recettes', Icon: Search },
  { path: '/vision', label: 'Scanner', Icon: Camera },
  { path: '/chat', label: 'Chef IA', Icon: MessageCircle },
  { path: '/profile', label: 'Profil', Icon: User },
];

export function TabBar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-[var(--border)] safe-area-bottom z-50">
      <div className="max-w-[600px] mx-auto">
        <div className="grid grid-cols-5 h-16">
          {tabs.map(({ path, label, Icon }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 transition-colors",
                  "min-w-[44px] min-h-[44px]"
                )}
              >
                <Icon
                  className="w-6 h-6"
                  style={{
                    color: isActive
                      ? 'var(--color-tab-icon-selected)'
                      : 'var(--color-tab-icon-default)',
                  }}
                />
                <span
                  className="text-[10px] font-sans font-medium"
                  style={{
                    color: isActive
                      ? 'var(--color-tab-icon-selected)'
                      : 'var(--color-tab-icon-default)',
                  }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}