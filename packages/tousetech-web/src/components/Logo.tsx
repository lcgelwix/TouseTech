export default function Logo() {
  return (
    <svg
      viewBox="0 0 130 120"
      width="72"
      height="65"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* White T — diagonal left edge, stem left-aligned, pointed bottom */}
      <path
        d="M0 26 L30 0 L90 0 L60 26 L45 26 L45 100 L15 120 L0 100 Z"
        fill="#FFFFFF"
      />
      {/* Blue T — diagonal left slat, stem left-aligned under crossbar, pointed bottom */}
      <path
        d="M70 0 L130 0 L100 26 L85 26 L85 100 L55 120 L40 100 L40 26 Z"
        fill="#007BFF"
      />
    </svg>
  );
}
