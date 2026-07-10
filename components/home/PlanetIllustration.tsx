/** Violet planet with orbit rings — hero illustration from the handoff. */
export default function PlanetIllustration() {
  return (
    <svg
      viewBox="0 0 600 520"
      role="img"
      aria-label="Violet planet with orbit rings"
      className="block h-auto w-full max-w-[540px] overflow-visible"
    >
      <defs>
        <radialGradient id="clHalo" cx="50%" cy="46%" r="56%">
          <stop offset="0%" stopColor="#5605FF" stopOpacity="0.55" />
          <stop offset="58%" stopColor="#5605FF" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#5605FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="clPlanet" cx="38%" cy="33%" r="74%">
          <stop offset="0%" stopColor="#B79BFF" />
          <stop offset="44%" stopColor="#6A2BFF" />
          <stop offset="100%" stopColor="#1E0563" />
        </radialGradient>
        <linearGradient id="clRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8AD5FF" />
          <stop offset="100%" stopColor="#E0AEFF" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="600" height="520" fill="url(#clHalo)" />
      <g transform="translate(300 252)">
        <ellipse rx="270" ry="126" fill="none" stroke="url(#clRing)" strokeWidth="1.6" opacity="0.55" transform="rotate(-24)" />
        <ellipse rx="264" ry="128" fill="none" stroke="url(#clRing)" strokeWidth="1.2" opacity="0.26" transform="rotate(20)" />
      </g>
      <circle cx="300" cy="252" r="172" fill="url(#clHalo)" />
      <circle cx="300" cy="252" r="124" fill="url(#clPlanet)" />
      <circle cx="300" cy="252" r="124" fill="none" stroke="url(#clRing)" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="258" cy="212" rx="44" ry="26" fill="#ffffff" opacity="0.20" />
      <circle cx="510" cy="236" r="10" fill="url(#clRing)" />
      <circle cx="92" cy="332" r="6" fill="#E0AEFF" opacity="0.85" />
      <g fill="#CFE8FF">
        <circle cx="122" cy="118" r="2.6" opacity="0.8" />
        <circle cx="470" cy="120" r="2" opacity="0.7" />
        <circle cx="522" cy="360" r="2.6" opacity="0.75" />
        <circle cx="182" cy="424" r="2" opacity="0.7" />
        <circle cx="360" cy="70" r="1.8" opacity="0.6" />
        <circle cx="60" cy="220" r="1.8" opacity="0.6" />
      </g>
    </svg>
  );
}
