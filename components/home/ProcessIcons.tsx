/** Minimal 128×128 step icons drawn in the handoff prototype. */

const frame = (
  <rect x="14" y="14" width="100" height="100" rx="22" fill="#0B0B20" stroke="#8AD5FF" strokeOpacity="0.30" strokeWidth="1.5" />
);

export function PlanIcon() {
  return (
    <svg viewBox="0 0 128 128" width="100%" height="100%" role="img" aria-label="Plan" className="block">
      {frame}
      <rect x="44" y="34" width="40" height="54" rx="6" fill="#241147" stroke="#7C5CFF" strokeWidth="2.5" />
      <rect x="55" y="28" width="18" height="10" rx="3" fill="#AA97FF" />
      <rect x="52" y="50" width="24" height="3.6" rx="1.8" fill="#8AD5FF" />
      <rect x="52" y="60" width="24" height="3.6" rx="1.8" fill="#AA97FF" opacity="0.7" />
      <rect x="52" y="70" width="15" height="3.6" rx="1.8" fill="#AA97FF" opacity="0.7" />
      <circle cx="83" cy="87" r="15" fill="#8AD5FF" />
      <path d="M76 87 l5 5 l9 -10" fill="none" stroke="#0B0B20" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExecuteIcon() {
  return (
    <svg viewBox="0 0 128 128" width="100%" height="100%" role="img" aria-label="Execute" className="block">
      {frame}
      <path d="M53 48 L40 64 L53 80" fill="none" stroke="#8AD5FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 48 L88 64 L75 80" fill="none" stroke="#8AD5FF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 44 L58 84" fill="none" stroke="#AA97FF" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function MaintainIcon() {
  return (
    <svg viewBox="0 0 128 128" width="100%" height="100%" role="img" aria-label="Maintain" className="block">
      {frame}
      <path d="M64 32 L86 42 L86 64 C86 78 76 88 64 94 C52 88 42 78 42 64 L42 42 Z" fill="#241147" stroke="#7C5CFF" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M54 64 l7 7 l15 -17" fill="none" stroke="#8AD5FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
