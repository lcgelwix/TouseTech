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

      {/*
        White T:
        - Crossbar: chamfered top-left corner, diagonal right edge (the "split")
        - 4px gap between white crossbar right edge and blue crossbar left edge (at top and bottom)
        - Stem: connects flush to crossbar, chamfered bottom-left outer corner
      */}
      <path d="M 71,55 L 130,55 L 118,77 L 68,77 L 68,58 Z" fill="white" />
      <path d="M 100,77 L 100,152 L 103,155 L 118,155 L 118,77 Z" fill="white" />

      {/*
        Blue T:
        - Crossbar: 4px gap from white (starts at x=134 top, x=122 bottom), diagonal left edge,
          chamfered top-right corner
        - Stem: connects flush to crossbar, chamfered bottom-right outer corner
        - 10px gap between white stem right (x=118) and blue stem left (x=128)
      */}
      <g filter="url(#blueGlow)">
        <path d="M 134,55 L 183,55 L 186,58 L 186,77 L 122,77 Z" fill="url(#blueGrad)" />
        <path d="M 128,77 L 128,155 L 143,155 L 146,152 L 146,77 Z" fill="url(#blueGrad)" />
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
