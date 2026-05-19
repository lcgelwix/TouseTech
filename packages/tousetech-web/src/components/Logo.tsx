export default function Logo() {
  return (
    <svg
      viewBox="0 0 260 290"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* White circle border */}
      <circle cx="130" cy="108" r="90" fill="none" stroke="white" strokeWidth="3.5" />

      {/* T1 — white, left/back */}
      <rect x="76" y="78" width="78" height="17" rx="2.5" fill="white" />
      <rect x="107" y="78" width="16" height="74" rx="2.5" fill="white" />

      {/* T2 — blue, right/front, elevated */}
      <rect x="100" y="60" width="78" height="17" rx="2.5" fill="#2563eb" />
      <rect x="131" y="60" width="16" height="90" rx="2.5" fill="#2563eb" />

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
