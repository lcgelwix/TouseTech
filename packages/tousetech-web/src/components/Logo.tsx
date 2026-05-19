export default function Logo() {
  return (
    <svg
      viewBox="0 0 260 290"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* White circle border */}
      <circle cx="130" cy="105" r="90" fill="none" stroke="white" strokeWidth="3.5" />

      {/* T1 — white, starts higher, crossbar blends into T2 */}
      <rect x="68" y="45" width="94" height="22" rx="2.5" fill="white" />
      <rect x="106" y="67" width="18" height="82" rx="2.5" fill="white" />

      {/* T2 — blue, crossbar flush with T1 crossbar at same height */}
      <rect x="92" y="45" width="94" height="22" rx="2.5" fill="#2563eb" />
      <rect x="130" y="67" width="18" height="82" rx="2.5" fill="#2563eb" />

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
