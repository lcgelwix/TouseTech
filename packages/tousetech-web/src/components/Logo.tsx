export default function Logo() {
  return (
    <svg
      viewBox="0 0 280 320"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="100%" stopColor="#050518" />
        </radialGradient>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="strokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="140" cy="140" r="125" fill="url(#glowGrad)" />

      {/* Subtle outer ring */}
      <circle cx="140" cy="140" r="112" fill="none" stroke="rgba(167,139,250,0.25)" strokeWidth="1" />

      {/* Main badge circle */}
      <circle cx="140" cy="140" r="108" fill="url(#bgGrad)" />
      <circle cx="140" cy="140" r="108" fill="none" stroke="url(#strokeGrad)" strokeWidth="2" />

      {/* T — horizontal bar */}
      <rect x="70" y="108" width="140" height="16" rx="3" fill="white" />
      {/* T — vertical bar */}
      <rect x="124" y="108" width="32" height="90" rx="3" fill="white" />

      {/* Circuit nodes at T endpoints */}
      <circle cx="70" cy="116" r="7" fill="#7c3aed" stroke="white" strokeWidth="2" />
      <circle cx="210" cy="116" r="7" fill="#7c3aed" stroke="white" strokeWidth="2" />
      <circle cx="140" cy="198" r="7" fill="#7c3aed" stroke="white" strokeWidth="2" />

      {/* Circuit traces — left */}
      <line x1="63" y1="116" x2="50" y2="116" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50" y1="116" x2="50" y2="138" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="50" cy="138" r="3" fill="#a78bfa" />

      {/* Circuit traces — right */}
      <line x1="217" y1="116" x2="230" y2="116" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="230" y1="116" x2="230" y2="138" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="230" cy="138" r="3" fill="#a78bfa" />

      {/* Circuit traces — bottom */}
      <line x1="140" y1="205" x2="140" y2="220" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="140" y1="220" x2="122" y2="220" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="122" cy="220" r="3" fill="#a78bfa" />

      {/* Wordmark */}
      <text
        x="140"
        y="293"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="26"
        fill="white"
        letterSpacing="6"
      >
        TOUSETECH
      </text>
    </svg>
  );
}
