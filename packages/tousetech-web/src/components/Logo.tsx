export default function Logo() {
  return (
    <svg
      viewBox="0 0 64 56"
      width="50"
      height="44"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* White T — crossbar is 22px tall (39% of height), clearly visible */}
      <path
        d="M0,22 L14,0 L36,0 L22,22 L18,22 L18,54 L6,56 L0,54 Z"
        fill="#FFFFFF"
      />

      {/* Blue T — 6px diagonal slat gap from white */}
      <path
        d="M42,0 L64,0 L50,22 L46,22 L46,54 L34,56 L28,54 L28,22 Z"
        fill="#007BFF"
      />
    </svg>
  );
}
