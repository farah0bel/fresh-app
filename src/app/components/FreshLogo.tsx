/**
 * FreshLogo Component
 * 
 * Variantes du logo Fresh basées sur le logo aquarelle officiel.
 * 4 variantes disponibles : full, medium, small, logotype
 */

import logoFull from 'figma:asset/1d42715fbc9d1264a6b8cdd3f1af43a32f996963.png';

interface FreshLogoProps {
  size?: number;
  variant?: 'full' | 'medium' | 'small' | 'logotype';
}

export function FreshLogo({ size = 160, variant = 'full' }: FreshLogoProps) {
  
  // VARIANTE 1 : Logo Full (aquarelle complet avec fond beige)
  if (variant === 'full') {
    return (
      <div className="flex flex-col items-center gap-3">
        <img
          src={logoFull}
          alt="Fresh Logo"
          style={{ width: size, height: size }}
          className="object-contain"
        />
      </div>
    );
  }

  // VARIANTE 2 : Icon Medium (frigo simplifié sans fond, pour app header)
  if (variant === 'medium') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Frigo principal teal */}
        <rect
          x="30"
          y="15"
          width="40"
          height="70"
          rx="3"
          fill="#2A9D8F"
        />
        {/* Porte ouverte (effet profondeur) */}
        <rect
          x="32"
          y="17"
          width="18"
          height="66"
          rx="2"
          fill="#52C5AB"
          fillOpacity="0.4"
        />
        {/* Poignée */}
        <rect
          x="48"
          y="48"
          width="2"
          height="10"
          rx="1"
          fill="#FFFFFF"
        />
        {/* Étagères blanches */}
        <line x1="35" y1="35" x2="65" y2="35" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="35" y1="55" x2="65" y2="55" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="35" y1="70" x2="65" y2="70" stroke="#FFFFFF" strokeWidth="1.5" />
        
        {/* Légumes dans le frigo */}
        {/* Tomate rouge */}
        <circle cx="55" cy="45" r="7" fill="#E8372A" />
        <circle cx="53" cy="43" r="2" fill="#FFFFFF" fillOpacity="0.6" />
        {/* Laitue/légume vert */}
        <circle cx="42" cy="65" r="5" fill="#52C5AB" />
        <circle cx="47" cy="63" r="4" fill="#45B39D" />
        {/* Carotte/légume orange */}
        <circle cx="58" cy="27" r="3" fill="#FF9F66" />
        <rect x="59" y="27" width="5" height="2" fill="#52C5AB" />
      </svg>
    );
  }

  // VARIANTE 3 : Icon Small (flat design ultra-simplifié pour favicon)
  if (variant === 'small') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Frigo teal simplifié */}
        <rect
          x="25"
          y="10"
          width="50"
          height="80"
          rx="4"
          fill="#2A9D8F"
        />
        {/* Porte du frigo (effet ouvert) */}
        <rect
          x="27"
          y="12"
          width="23"
          height="76"
          rx="2"
          fill="#52C5AB"
          fillOpacity="0.3"
        />
        {/* Poignée */}
        <rect
          x="48"
          y="48"
          width="2"
          height="12"
          rx="1"
          fill="#FFFFFF"
        />
        {/* Étagères blanches (2 lignes nettes) */}
        <line x1="30" y1="35" x2="70" y2="35" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="30" y1="60" x2="70" y2="60" stroke="#FFFFFF" strokeWidth="2" />
        
        {/* Tomate rouge (point focal) */}
        <circle cx="60" cy="47" r="8" fill="#E8372A" />
        {/* Reflet sur tomate */}
        <circle cx="58" cy="45" r="2.5" fill="#FFFFFF" fillOpacity="0.7" />
        
        {/* Petit légume vert */}
        <circle cx="40" cy="70" r="5" fill="#52C5AB" />
      </svg>
    );
  }

  // VARIANTE 4 : Logotype (texte "Fresh" uniquement)
  if (variant === 'logotype') {
    return (
      <h1
        className="font-serif text-[var(--text)]"
        style={{ fontSize: size * 0.75 }}
      >
        Fresh
      </h1>
    );
  }

  // Par défaut : full
  return (
    <img
      src={logoFull}
      alt="Fresh Logo"
      style={{ width: size, height: size }}
      className="object-contain"
    />
  );
}