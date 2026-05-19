export default function Logo() {
  return (
    <svg
      viewBox="0 0 260 240"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* T1 — back, ghosted white (cascading behind) */}
      <rect x="44" y="36" width="96" height="18" rx="3" fill="rgba(255,255,255,0.30)" />
      <rect x="83" y="36" width="18" height="88" rx="3" fill="rgba(255,255,255,0.30)" />

      {/* T2 — front, blue, offset right+down */}
      <rect x="68" y="60" width="96" height="18" rx="3" fill="#2563eb" />
      <rect x="107" y="60" width="18" height="88" rx="3" fill="#2563eb" />

      {/* Small blue accent square on T2 top-right corner */}
      <rect x="156" y="52" width="10" height="10" rx="2" fill="#2563eb" />

      {/* Wordmark */}
      <text
        x="116"
        y="195"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontWeight="800"
        fontSize="38"
      >
        <tspan fill="#ffffff">Touse</tspan><tspan fill="#2563eb">Tech</tspan>
      </text>
    </svg>
  );
}
