export const LogoCircle = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 160 160" 
    className={className}
  >
    <defs>
      <linearGradient id="footerBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#1D4ED8"/>
      </linearGradient>

      <radialGradient id="footerGlowBG" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#2563EB" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
      </radialGradient>

      <radialGradient id="footerInnerBG" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#161C2C"/>
        <stop offset="100%" stopColor="#0B0F1A"/>
      </radialGradient>

      <linearGradient id="footerShimmerA" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#60A5FA" stopOpacity="0"/>
        <stop offset="45%"  stopColor="#93C5FD" stopOpacity="0.8"/>
        <stop offset="55%"  stopColor="#FFFFFF"  stopOpacity="1"/>
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"/>
        <animateTransform attributeName="gradientTransform" type="translate"
          values="-160 0;160 0" dur="3s" repeatCount="indefinite"/>
      </linearGradient>

      <clipPath id="footerLetterAClip">
        <polygon points="80,30 106,110 95,110 80,65 65,110 54,110"/>
      </clipPath>

      <filter id="footerGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="footerSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="footerStrongGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="6" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <circle cx="80" cy="80" r="78" fill="#0B0F1A"/>

    <circle cx="80" cy="80" r="72" fill="url(#footerGlowBG)">
      <animate attributeName="r" values="68;76;68" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
    </circle>

    <g transform="translate(80,80)">
      <animateTransform attributeName="transform" type="rotate"
        from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite" additive="sum"/>
      <circle cx="0" cy="0" r="70"
        fill="none" stroke="#2563EB" strokeWidth="1.5"
        strokeDasharray="10 7" opacity="0.55"/>
      <circle cx="70" cy="0" r="5" fill="#60A5FA" filter="url(#footerStrongGlow)" opacity="0.95">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="-70" cy="0" r="3" fill="#2563EB" opacity="0.5"/>
    </g>

    <g transform="translate(80,80)">
      <animateTransform attributeName="transform" type="rotate"
        from="360 0 0" to="0 0 0" dur="16s" repeatCount="indefinite" additive="sum"/>
      <circle cx="0" cy="0" r="56"
        fill="none" stroke="#1D4ED8" strokeWidth="1"
        strokeDasharray="5 12" opacity="0.4"/>
      <circle cx="56" cy="0" r="3.5" fill="#3B82F6" opacity="0.65" filter="url(#footerSoftGlow)"/>
      <circle cx="-56" cy="0" r="2.5" fill="#1D4ED8" opacity="0.4"/>
    </g>

    <circle cx="80" cy="80" r="44" fill="url(#footerInnerBG)" stroke="#2563EB" strokeWidth="2.5" filter="url(#footerSoftGlow)"/>

    <g filter="url(#footerGlow)" opacity="0.4">
      <line x1="80" y1="36" x2="57" y2="105" stroke="#2563EB" strokeWidth="11" strokeLinecap="round"/>
      <line x1="80" y1="36" x2="103" y2="105" stroke="#2563EB" strokeWidth="11" strokeLinecap="round"/>
    </g>

    <line x1="80" y1="36" x2="57" y2="105" stroke="url(#footerBlueGrad)" strokeWidth="8.5" strokeLinecap="round"/>
    <line x1="80" y1="36" x2="103" y2="105" stroke="url(#footerBlueGrad)" strokeWidth="8.5" strokeLinecap="round"/>

    <line x1="64" y1="78" x2="96" y2="78" stroke="#93C5FD" strokeWidth="5.5" strokeLinecap="round"/>

    <g clipPath="url(#footerLetterAClip)">
      <rect x="0" y="20" width="160" height="100" fill="url(#footerShimmerA)" opacity="0.6"/>
    </g>

    <circle cx="80" cy="36" r="5.5" fill="#93C5FD" filter="url(#footerStrongGlow)">
      <animate attributeName="r"       values="4.5;7;4.5"   dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.75;1;0.75"  dur="2.5s" repeatCount="indefinite"/>
    </circle>

    <g fill="#2563EB" opacity="0.5">
      <rect x="78" y="32" width="4" height="8" rx="2"/>
      <rect x="78" y="120" width="4" height="8" rx="2"/>
      <rect x="32" y="78" width="8" height="4" rx="2"/>
      <rect x="120" y="78" width="8" height="4" rx="2"/>
    </g>

    <circle cx="80" cy="80" r="77" fill="none" stroke="#2563EB" strokeWidth="2" opacity="0.25"/>
    <circle cx="80" cy="80" r="75" fill="none" stroke="#60A5FA" strokeWidth="0.5" opacity="0.15"/>

    <path d="M 24,46 A 72,72 0 0,1 136,46" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.2" strokeLinecap="round"/>
  </svg>
);
