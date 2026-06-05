export default function Logo() {
  return (
    <svg
      viewBox="0 0 65 60"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TouseTech logo"
      role="img"
    >
      {/* White T — exact paths from reference, scaled 0.5x */}
      <path
        d="M0,10 L15,0 L45,0 L30,10 L23,10 L23,50 L8,60 L0,50 Z"
        fill="#FFFFFF"
      />
      {/* Blue T — overlaps white, creating the diagonal split */}
      <path
        d="M35,0 L65,0 L50,10 L43,10 L43,50 L28,60 L20,50 L20,10 Z"
        fill="#007BFF"
      />
    </svg>
  );
}
