export default function Logo() {
  return (
    <svg
      viewBox="0 0 260 290"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#2563eb" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* White circle border */}
      <circle cx="130" cy="105" r="90" fill="none" stroke="white" strokeWidth="3.5" />

      {/* White T — crossbar has diagonal right edge where blue begins */}
      <polygon points="68,55 138,55 124,77 68,77" fill="white" />
      <rect x="103" y="77" width="18" height="78" rx="2" fill="white" />

      {/* Blue T — matching diagonal left edge, gradient + glow for depth */}
      <g filter="url(#blueGlow)">
        <polygon points="138,55 186,55 186,77 124,77" fill="url(#blueGrad)" />
        <rect x="130" y="77" width="18" height="78" rx="2" fill="url(#blueGrad)" />
      </g>

      {/* Wordmark */}
      <text
        x="130"
        y="244"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontWeight="800"
        fontSize="36"
      >
        <tspan fill="#ffffff">Touse</tspan><tspan fill="#2563eb">Tech</tspan>
      </text>
    </svg>
  );
}
