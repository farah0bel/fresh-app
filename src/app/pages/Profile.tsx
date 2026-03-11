import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Chip } from '../components/Chip';
import { Switch } from '../components/ui/switch';
import { User, Crown, Bell, Globe, Moon, LogOut, CreditCard } from 'lucide-react';

export function Profile() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('fr');

  const userDiets = ['Halal', 'Sans gluten'];
  const userAllergies = ['Arachides', 'Fruits de mer'];
  const availableDiets = ['Halal', 'Casher', 'Vegan', 'Végétarien', 'Sans gluten', 'Sans lactose', 'Diabète', 'Paléo'];

  const [selectedDiets, setSelectedDiets] = useState(userDiets);

  const toggleDiet = (diet: string) => {
    setSelectedDiets((prev) =>
      prev.includes(diet) ? prev.filter((d) => d !== diet) : [...prev, diet]
    );
  };

  const handleSignOut = () => {
    navigate('/sign-in');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="max-w-[600px] mx-auto px-4 py-6 space-y-6">
      {/* User Header */}
      <div className="bg-card rounded-[var(--radius-lg)] p-6 shadow-sm dark:shadow-none">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-teal)] to-[var(--color-teal-light)] flex items-center justify-center text-white">
            <User className="w-10 h-10" />
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-2xl mb-1 text-[var(--text)]">Farah Benali</h2>
            <p className="text-sm text-[var(--text-secondary)]">farah.benali@email.fr</p>
            <div className="flex items-center gap-2 mt-2">
              <Crown className="w-4 h-4 text-[var(--color-orange)]" />
              <span className="text-xs font-semibold text-[var(--color-orange)]">Premium</span>
            </div>
          </div>
        </div>
        <Button
          onClick={() => {/* Open upgrade modal */}}
          variant="outline"
          className="w-full border-[var(--color-red)] text-[var(--color-red)] hover:bg-[var(--color-red)]/10 rounded-[var(--radius-lg)]"
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Gérer mon abonnement
        </Button>
      </div>

      {/* Dietary Preferences */}
      <div className="bg-card rounded-[var(--radius-lg)] p-6 shadow-sm dark:shadow-none">
        <h3 className="font-serif text-xl mb-4 text-[var(--text)]">Préférences alimentaires</h3>
        
        <div className="mb-4">
          <label className="text-sm font-semibold mb-2 block text-[var(--text)]">Régimes</label>
          <div className="flex flex-wrap gap-2">
            {availableDiets.map((diet) => (
              <Chip
                key={diet}
                variant="teal"
                active={selectedDiets.includes(diet)}
                onClick={() => toggleDiet(diet)}
              >
                {diet}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold mb-2 block text-[var(--text)]">Allergies</label>
          <div className="flex flex-wrap gap-2">
            {userAllergies.map((allergy) => (
              <div
                key={allergy}
                className="px-4 py-2 bg-[var(--color-red)]/10 border border-[var(--color-red)] rounded-full text-sm font-semibold text-[var(--color-red)]"
              >
                {allergy}
              </div>
            ))}
            <button className="px-4 py-2 border-2 border-dashed border-[var(--border)] rounded-full text-sm text-[var(--text-light)] hover:border-[var(--color-red)] hover:text-[var(--color-red)] transition-colors">
              + Ajouter
            </button>
          </div>
        </div>
      </div>

      {/* Substitutions */}
      <div className="bg-card rounded-[var(--radius-lg)] p-6 shadow-sm dark:shadow-none">
        <h3 className="font-serif text-xl mb-4 text-[var(--text)]">Substitutions personnalisées</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-medium text-[var(--text)]">Beurre → Huile d'olive</p>
              <p className="text-xs text-[var(--text-secondary)]">Pour toutes les recettes</p>
            </div>
            <button className="text-sm text-[var(--color-red)] hover:text-[var(--color-red-dark)]">
              Retirer
            </button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-sm font-medium text-[var(--text)]">Lait → Lait d'amande</p>
              <p className="text-xs text-[var(--text-secondary)]">Pour toutes les recettes</p>
            </div>
            <button className="text-sm text-[var(--color-red)] hover:text-[var(--color-red-dark)]">
              Retirer
            </button>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full mt-4 border-[var(--color-teal)] text-[var(--color-teal)] hover:bg-[var(--color-teal)]/10 rounded-[var(--radius-lg)]"
        >
          + Ajouter une substitution
        </Button>
      </div>

      {/* Settings */}
      <div className="bg-card rounded-[var(--radius-lg)] p-6 shadow-sm dark:shadow-none">
        <h3 className="font-serif text-xl mb-4 text-[var(--text)]">Paramètres</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[var(--text-secondary)]" />
              <div>
                <p className="text-sm font-medium text-[var(--text)]">Notifications</p>
                <p className="text-xs text-[var(--text-secondary)]">Recevoir les suggestions</p>
              </div>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-[var(--text-secondary)]" />
              <div>
                <p className="text-sm font-medium text-[var(--text)]">Mode sombre</p>
                <p className="text-xs text-[var(--text-secondary)]">Thème de l'application</p>
              </div>
            </div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[var(--text-secondary)]" />
              <div>
                <p className="text-sm font-medium text-[var(--text)]">Langue</p>
                <p className="text-xs text-[var(--text-secondary)]">Français</p>
              </div>
            </div>
            <button className="text-sm text-[var(--color-teal)] hover:text-[var(--color-teal-light)]">
              Changer
            </button>
          </div>
        </div>
      </div>

      {/* Sign Out */}
      <Button
        onClick={handleSignOut}
        variant="outline"
        className="w-full border-[var(--color-red)] text-[var(--color-red)] hover:bg-[var(--color-red)]/10 rounded-[var(--radius-lg)]"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Déconnexion
      </Button>

      {/* Version */}
      <p className="text-center text-xs text-[var(--text-light)] pb-4">
        Version 1.0.0 • Fresh by Elegance du Goût
      </p>
    </div>
  );
}