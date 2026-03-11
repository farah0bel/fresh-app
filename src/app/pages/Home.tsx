import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { RecipeCard } from '../components/RecipeCard';
import { SectionHeader } from '../components/SectionHeader';
import { recipes } from '../data/mockData';
import { Camera, Search, Calendar, MessageCircle, ShoppingCart, Sparkles, Check } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const featuredRecipes = recipes.slice(0, 6);

  const features = [
    {
      icon: Camera,
      title: 'Scan frigo intelligent',
      description: 'Notre IA reconnaît vos ingrédients en un clic',
      color: 'var(--color-red)',
      action: '/vision',
    },
    {
      icon: Search,
      title: '25 000+ recettes',
      description: 'Adaptées à vos goûts et contraintes alimentaires',
      color: 'var(--color-teal)',
      action: '/search',
    },
    {
      icon: Calendar,
      title: 'Planning intelligent',
      description: 'Organisez vos repas de la semaine en quelques clics',
      color: 'var(--color-orange)',
      action: '/plan',
    },
    {
      icon: MessageCircle,
      title: 'Discutez avec Chef Farah',
      description: 'Votre chef personnel disponible 24/7',
      color: 'var(--color-teal)',
      action: '/chat',
    },
    {
      icon: ShoppingCart,
      title: 'Liste de courses',
      description: 'Générez automatiquement votre liste de courses',
      color: 'var(--color-red)',
      action: '/list',
    },
    {
      icon: Sparkles,
      title: '11 régimes',
      description: 'Halal, casher, vegan, diabète... adaptez à vos besoins',
      color: 'var(--color-orange)',
      action: '/profile',
    },
  ];

  const pricingTiers = [
    {
      name: 'Gratuit',
      price: '0€',
      features: ['100 recettes illustrées', 'Recherche basique', 'Chat limité', '1 profil', 'Scan ticket', 'Liste de courses'],
      cta: 'Commencer',
      variant: 'outline' as const,
    },
    {
      name: 'Premium',
      price: '4,99€',
      period: '/mois',
      features: ['2 000 recettes illustrées', 'Scan frigo IA', 'Planning repas', 'Chat illimité', '25 recettes/mois'],
      cta: 'Essai 14j gratuit',
      variant: 'default' as const,
      recommended: true,
    },
    {
      name: 'Famille',
      price: '7,99€',
      period: '/mois',
      features: ['5 000 recettes illustrées', 'Jusqu\'à 6 profils', 'Tout Premium inclus', 'Support prioritaire', '50 recettes/mois'],
      cta: 'Essai 14j gratuit',
      variant: 'outline' as const,
      badge: 'Meilleure valeur',
    },
  ];

  return (
    <div className="max-w-[600px] mx-auto">
      {/* Hero Section */}
      <section className="px-6 py-12 text-center">
        <h1 className="font-serif text-5xl mb-4 leading-tight text-[var(--text)]">
          Votre frigo. Vos recettes. Ce soir.
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
          Scannez, découvrez, cuisinez. L'IA qui transforme vos ingrédients en délices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            onClick={() => navigate('/sign-in')}
            className="bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white rounded-[var(--radius-lg)] h-12 px-8"
          >
            Commencer gratuitement
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate('/search')}
            className="border-[var(--color-red)] text-[var(--color-red)] hover:bg-[var(--color-red)]/10 rounded-[var(--radius-lg)] h-12 px-8"
          >
            Voir comment ça marche
          </Button>
        </div>
        <p className="text-sm text-[var(--text-light)]">
          Plan gratuit · Sans carte bancaire · FR/EN
        </p>
      </section>

      {/* Quick Actions - NEW: Planning & Shopping moved here */}
      <section className="px-6 mb-8">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/plan')}
            className="bg-gradient-to-br from-[var(--color-teal)]/10 to-[var(--color-teal)]/5 hover:from-[var(--color-teal)]/20 hover:to-[var(--color-teal)]/10 rounded-[var(--radius-lg)] p-4 text-left transition-all hover:scale-[1.02] border border-[var(--color-teal)]/20"
          >
            <Calendar className="w-8 h-8 mb-2 text-[var(--color-teal)]" />
            <h3 className="font-sans font-bold text-sm mb-1 text-[var(--text)]">Planning Repas</h3>
            <p className="text-xs text-[var(--text-secondary)]">Organisez votre semaine</p>
          </button>
          <button
            onClick={() => navigate('/list')}
            className="bg-gradient-to-br from-[var(--color-orange)]/10 to-[var(--color-orange)]/5 hover:from-[var(--color-orange)]/20 hover:to-[var(--color-orange)]/10 rounded-[var(--radius-lg)] p-4 text-left transition-all hover:scale-[1.02] border border-[var(--color-orange)]/20"
          >
            <ShoppingCart className="w-8 h-8 mb-2 text-[var(--color-orange)]" />
            <h3 className="font-sans font-bold text-sm mb-1 text-[var(--text)]">Liste de Courses</h3>
            <p className="text-xs text-[var(--text-secondary)]">Courses automatiques</p>
          </button>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="px-6 mb-12">
        <SectionHeader title="Recettes du moment" />
        <div className="overflow-x-auto -mx-6 px-6">
          <div className="flex gap-4 pb-4">
            {featuredRecipes.map((recipe) => (
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

      {/* 3 Steps */}
      <section className="px-6 mb-12">
        <SectionHeader title="3 étapes, zéro stress" />
        <div className="space-y-6">
          {[
            { 
              step: '1', 
              title: 'Scannez votre frigo', 
              desc: 'Notre IA reconnaît vos ingrédients', 
              image: 'https://images.unsplash.com/photo-1643494847705-74808059bf07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZyaWdlcmF0b3IlMjBvcGVuJTIwZm9vZCUyMGluc2lkZXxlbnwxfHx8fDE3NzMyMzI5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              action: '/vision'
            },
            { 
              step: '2', 
              title: 'Choisissez une recette', 
              desc: 'Suggestions personnalisées selon vos goûts', 
              image: 'https://images.unsplash.com/photo-1590587754541-a3a4f2e0d06f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNpcGUlMjBib29rJTIwY29va2luZ3xlbnwxfHx8fDE3NzMyMzI5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              action: '/search'
            },
            { 
              step: '3', 
              title: 'Cuisinez facilement', 
              desc: 'Instructions étape par étape avec Chef Farah', 
              // TODO: Replace with actual photo of chef in kitchen
              image: 'https://images.unsplash.com/photo-1769955817432-641929f613f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczMjMyMzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              action: '/chat'
            },
          ].map((item) => (
            <div 
              key={item.step} 
              className="flex gap-4 items-start bg-card rounded-[var(--radius-lg)] overflow-hidden shadow-sm dark:shadow-none hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => navigate(item.action)}
            >
              {/* Image thumbnail */}
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="flex-1 py-4 pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-teal)] text-white flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl text-[var(--text)]">{item.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 mb-12">
        <SectionHeader title="Tout ce dont vous avez besoin" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate(feature.action)}
                className="bg-card rounded-[var(--radius-lg)] p-6 shadow-sm dark:shadow-none hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Icon className="w-8 h-8 mb-4" style={{ color: feature.color }} />
                <h3 className="font-sans font-bold text-lg mb-2 text-[var(--text)]">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 mb-12 pt-6">
        <SectionHeader title="Choisissez votre plan" />
        <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto sm:max-w-none sm:grid-cols-3 mt-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-card rounded-[var(--radius-xl)] p-6 shadow-sm dark:shadow-none border-2 transition-all relative flex flex-col"
              style={
                tier.recommended 
                  ? { borderColor: 'var(--color-teal)' } 
                  : { borderColor: 'transparent' }
              }
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-teal)] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  Recommandé
                </div>
              )}
              {(tier as any).badge && !tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-orange)] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {(tier as any).badge}
                </div>
              )}
              <h3 className="font-serif text-2xl mb-2 text-[var(--text)] mt-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="font-serif text-4xl text-[var(--text)]">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm text-[var(--text-secondary)]">{tier.period}</span>
                )}
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.variant}
                className={
                  tier.variant === 'default'
                    ? 'w-full bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white rounded-[var(--radius-lg)]'
                    : 'w-full border-[var(--color-red)] text-[var(--color-red)] hover:bg-[var(--color-red)]/10 rounded-[var(--radius-lg)]'
                }
                onClick={() => navigate('/sign-in')}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 pb-12 text-center">
        <div className="bg-gradient-to-br from-[var(--color-red)] to-[var(--color-red-light)] rounded-[var(--radius-xl)] p-12 text-white">
          <h2 className="font-serif text-3xl mb-4">Prêt à transformer votre cuisine ?</h2>
          <p className="text-lg mb-6 opacity-90">Rejoignez des milliers de familles qui cuisinent mieux</p>
          <Button
            onClick={() => navigate('/sign-in')}
            className="bg-white text-[var(--color-red)] hover:bg-gray-100 rounded-[var(--radius-lg)] h-12 px-8"
          >
            Commencer maintenant
          </Button>
        </div>
      </section>
    </div>
  );
}