/**
 * Minimal 128×128 step icons drawn in the handoff prototype.
 *
 * Every colour here is a design token rather than the literal the prototype
 * used, so the icons follow the theme instead of pasting three near-black
 * tiles onto a white page. SVG presentation attributes resolve var() the same
 * way CSS properties do.
 *
 *   tile / knockout  -> --color-surface-raised   (was #0B0B20)
 *   cyan accents     -> --color-gradient-1       (was #8AD5FF)
 *   lilac accents    -> --color-brand-200        (was #AA97FF)
 *   outline violet   -> --color-brand-400        (was #7C5CFF)
 *   filled body      -> --color-brand-950        (was #241147)
 *
 * Two things keep the three consistent inside identical tiles:
 *
 * Weight. The brackets are drawn at stroke 5; the clipboard and shield were at
 * 2.5, which is why they read as thin rather than small. Both are now drawn at
 * 4.5 with their details thickened to match, so all three carry the same line.
 *
 * Size. `glyph()` scales each about the tile centre so the bounding boxes land
 * at a common ~58 across — the shield is also drawn wider than the original,
 * which was a tall narrow crest that no amount of scaling squared up.
 */

/** Scale a glyph about the tile centre, from its own bounding-box centre. */
function glyph(scale: number, cx: number, cy: number) {
  return `translate(64,64) scale(${scale}) translate(${-cx},${-cy})`;
}

const frame = (
  <rect x="14" y="14" width="100" height="100" rx="22" fill="var(--color-surface-raised)" stroke="var(--color-gradient-1)" strokeOpacity="0.30" strokeWidth="1.5" />
);

export function PlanIcon() {
  return (
    <svg viewBox="0 0 128 128" width="100%" height="100%" role="img" aria-label="Plan" className="block">
      {frame}
      <g transform={glyph(1.0, 71, 65.5)}>
      <rect x="42" y="34" width="44" height="54" rx="7" fill="var(--color-brand-950)" stroke="var(--color-brand-400)" strokeWidth="4.5" />
      <rect x="54" y="27" width="20" height="11" rx="3.5" fill="var(--color-brand-200)" />
      <rect x="51" y="50" width="26" height="5" rx="2.5" fill="var(--color-gradient-1)" />
      <rect x="51" y="61" width="26" height="5" rx="2.5" fill="var(--color-brand-200)" opacity="0.7" />
      <rect x="51" y="72" width="16" height="5" rx="2.5" fill="var(--color-brand-200)" opacity="0.7" />
      <circle cx="84" cy="88" r="16" fill="var(--color-gradient-1)" />
      <path d="M76.5 88 l5 5 l9.5 -10.5" fill="none" stroke="var(--color-surface-raised)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function ExecuteIcon() {
  return (
    <svg viewBox="0 0 128 128" width="100%" height="100%" role="img" aria-label="Execute" className="block">
      {frame}
      <g transform={glyph(1.2, 64, 64)}>
      <path d="M53 48 L40 64 L53 80" fill="none" stroke="var(--color-gradient-1)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 48 L88 64 L75 80" fill="none" stroke="var(--color-gradient-1)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M70 44 L58 84" fill="none" stroke="var(--color-brand-200)" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function MaintainIcon() {
  return (
    <svg viewBox="0 0 128 128" width="100%" height="100%" role="img" aria-label="Maintain" className="block">
      {frame}
      <g transform={glyph(1.16, 64, 63.5)}>
      <path d="M64 30 L89 41 L89 64 C89 79 78 90 64 97 C50 90 39 79 39 64 L39 41 Z" fill="var(--color-brand-950)" stroke="var(--color-brand-400)" strokeWidth="4.5" strokeLinejoin="round" />
      <path d="M52 64 l8 8 l17 -19" fill="none" stroke="var(--color-gradient-1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
