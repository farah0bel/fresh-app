/**
 * LogosDemo - Page de démonstration des variantes du logo Fresh
 * 
 * Cette page affiche toutes les variantes du logo pour validation visuelle.
 * Accessible via /logos-demo (route de développement)
 */

import { FreshLogo } from '../components/FreshLogo';

export function LogosDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl mb-3 text-[var(--text)]">
            Fresh Logo - Variantes
          </h1>
          <p className="text-[var(--text-secondary)]">
            4 variantes intégrées et fonctionnelles
          </p>
        </div>

        {/* Grid des variantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* VARIANTE 1 : Logo Full */}
          <div className="bg-card rounded-[var(--radius-lg)] p-8 shadow-sm dark:shadow-none">
            <h2 className="font-serif text-2xl mb-4 text-[var(--text)]">
              Variante 1 : Logo Full
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Logo aquarelle complet avec fond beige. Utilisé sur SignIn et marketing.
            </p>
            
            <div className="flex flex-col items-center gap-6 bg-gradient-to-br from-[var(--background)] to-[var(--muted)] p-8 rounded-[var(--radius-lg)]">
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">160px (SignIn)</p>
                <FreshLogo size={160} variant="full" />
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">120px</p>
                <FreshLogo size={120} variant="full" />
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">80px</p>
                <FreshLogo size={80} variant="full" />
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-[var(--muted)] rounded-[var(--radius-md)]">
              <p className="text-xs font-mono text-[var(--text-secondary)]">
                {'<FreshLogo size={160} variant="full" />'}
              </p>
            </div>
          </div>

          {/* VARIANTE 2 : Icon Medium */}
          <div className="bg-card rounded-[var(--radius-lg)] p-8 shadow-sm dark:shadow-none">
            <h2 className="font-serif text-2xl mb-4 text-[var(--text)]">
              Variante 2 : Icon Medium
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              SVG inspiré du logo, sans fond. Pour app header et loading states.
            </p>
            
            <div className="flex flex-col items-center gap-6 bg-gradient-to-br from-[var(--background)] to-[var(--muted)] p-8 rounded-[var(--radius-lg)]">
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">100px</p>
                <FreshLogo size={100} variant="medium" />
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">80px</p>
                <FreshLogo size={80} variant="medium" />
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">60px</p>
                <FreshLogo size={60} variant="medium" />
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-[var(--muted)] rounded-[var(--radius-md)]">
              <p className="text-xs font-mono text-[var(--text-secondary)]">
                {'<FreshLogo size={80} variant="medium" />'}
              </p>
            </div>
          </div>

          {/* VARIANTE 3 : Icon Small */}
          <div className="bg-card rounded-[var(--radius-lg)] p-8 shadow-sm dark:shadow-none">
            <h2 className="font-serif text-2xl mb-4 text-[var(--text)]">
              Variante 3 : Icon Small
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Flat design ultra-simplifié. Optimisé pour favicon et app icon mobile.
            </p>
            
            <div className="flex flex-col items-center gap-6 bg-gradient-to-br from-[var(--background)] to-[var(--muted)] p-8 rounded-[var(--radius-lg)]">
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">64px</p>
                <FreshLogo size={64} variant="small" />
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">32px</p>
                <FreshLogo size={32} variant="small" />
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">16px (favicon)</p>
                <FreshLogo size={16} variant="small" />
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-[var(--muted)] rounded-[var(--radius-md)]">
              <p className="text-xs font-mono text-[var(--text-secondary)]">
                {'<FreshLogo size={64} variant="small" />'}
              </p>
            </div>
            
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500 rounded-[var(--radius-md)]">
              <p className="text-xs text-green-700 dark:text-green-400">
                ✅ Reste lisible même en 16x16px !
              </p>
            </div>
          </div>

          {/* VARIANTE 4 : Logotype */}
          <div className="bg-card rounded-[var(--radius-lg)] p-8 shadow-sm dark:shadow-none">
            <h2 className="font-serif text-2xl mb-4 text-[var(--text)]">
              Variante 4 : Logotype
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Texte "Fresh" en DM Serif Display. Pour accompagner les icons.
            </p>
            
            <div className="flex flex-col items-center gap-6 bg-gradient-to-br from-[var(--background)] to-[var(--muted)] p-8 rounded-[var(--radius-lg)]">
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">120px</p>
                <FreshLogo size={120} variant="logotype" />
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">80px</p>
                <FreshLogo size={80} variant="logotype" />
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[var(--text-light)] mb-2">60px</p>
                <FreshLogo size={60} variant="logotype" />
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-[var(--muted)] rounded-[var(--radius-md)]">
              <p className="text-xs font-mono text-[var(--text-secondary)]">
                {'<FreshLogo size={120} variant="logotype" />'}
              </p>
            </div>
          </div>
        </div>

        {/* Combinaisons */}
        <div className="mt-12">
          <h2 className="font-serif text-3xl mb-6 text-center text-[var(--text)]">
            Combinaisons recommandées
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Header avec icon + texte */}
            <div className="bg-card rounded-[var(--radius-lg)] p-8 shadow-sm dark:shadow-none">
              <h3 className="font-sans font-semibold mb-4 text-[var(--text)]">
                Header : Icon Small + Logotype
              </h3>
              <div className="flex items-center gap-3 justify-center bg-gradient-to-br from-[var(--background)] to-[var(--muted)] p-6 rounded-[var(--radius-lg)]">
                <FreshLogo size={40} variant="small" />
                <FreshLogo size={80} variant="logotype" />
              </div>
              <div className="mt-4 p-3 bg-[var(--muted)] rounded-[var(--radius-md)]">
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  {'<FreshLogo size={40} variant="small" />'}
                  <br />
                  {'<FreshLogo size={80} variant="logotype" />'}
                </p>
              </div>
            </div>

            {/* Footer simple */}
            <div className="bg-card rounded-[var(--radius-lg)] p-8 shadow-sm dark:shadow-none">
              <h3 className="font-sans font-semibold mb-4 text-[var(--text)]">
                Footer : Logotype seul
              </h3>
              <div className="flex flex-col items-center gap-2 bg-gradient-to-br from-[var(--background)] to-[var(--muted)] p-6 rounded-[var(--radius-lg)]">
                <FreshLogo size={100} variant="logotype" />
                <p className="text-xs text-[var(--text-secondary)]">
                  by Elegance du Goût
                </p>
              </div>
              <div className="mt-4 p-3 bg-[var(--muted)] rounded-[var(--radius-md)]">
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  {'<FreshLogo size={100} variant="logotype" />'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tests mode dark/light */}
        <div className="mt-12">
          <h2 className="font-serif text-3xl mb-6 text-center text-[var(--text)]">
            Compatibilité thème
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mode Light */}
            <div className="rounded-[var(--radius-lg)] p-8 bg-white border-2 border-gray-200">
              <h3 className="font-sans font-semibold mb-4 text-gray-900">
                Mode Light
              </h3>
              <div className="flex items-center justify-center gap-6">
                <FreshLogo size={80} variant="full" />
                <FreshLogo size={80} variant="medium" />
                <FreshLogo size={80} variant="small" />
              </div>
            </div>

            {/* Mode Dark */}
            <div className="rounded-[var(--radius-lg)] p-8 bg-gray-900 border-2 border-gray-700">
              <h3 className="font-sans font-semibold mb-4 text-white">
                Mode Dark
              </h3>
              <div className="flex items-center justify-center gap-6">
                <FreshLogo size={80} variant="full" />
                <FreshLogo size={80} variant="medium" />
                <FreshLogo size={80} variant="small" />
              </div>
            </div>
          </div>
        </div>

        {/* Specs techniques */}
        <div className="mt-12 bg-card rounded-[var(--radius-lg)] p-8 shadow-sm dark:shadow-none">
          <h2 className="font-serif text-2xl mb-6 text-[var(--text)]">
            Spécifications techniques
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text)]">Variante</th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text)]">Format</th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text)]">Fond</th>
                  <th className="text-left py-3 px-4 font-semibold text-[var(--text)]">Usage principal</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Logo Full</td>
                  <td className="py-3 px-4">PNG (aquarelle)</td>
                  <td className="py-3 px-4">Beige circulaire</td>
                  <td className="py-3 px-4">SignIn, marketing, splash screen</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Icon Medium</td>
                  <td className="py-3 px-4">SVG</td>
                  <td className="py-3 px-4">Transparent</td>
                  <td className="py-3 px-4">App header, loading, watermark</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Icon Small</td>
                  <td className="py-3 px-4">SVG (flat)</td>
                  <td className="py-3 px-4">Transparent</td>
                  <td className="py-3 px-4">Favicon, app icon, notifications</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Logotype</td>
                  <td className="py-3 px-4">Texte (DM Serif)</td>
                  <td className="py-3 px-4">Transparent</td>
                  <td className="py-3 px-4">Accompagner icons, footer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-[var(--text-secondary)] text-sm">
          <p>Fresh Logo System v1.0</p>
          <p className="mt-1">4 variantes · Mode light/dark · Responsive · Optimisé</p>
          <p className="mt-4 text-xs text-[var(--text-light)]">
            Page de démonstration · <a href="/" className="text-[var(--color-teal)] hover:underline">Retour à l'app</a>
          </p>
        </div>
      </div>
    </div>
  );
}
