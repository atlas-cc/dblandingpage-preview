export function DBLogo({
  className = "",
  showWordmark = false
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Disruptive Brands">
      <svg
        aria-hidden="true"
        className="h-7 w-auto"
        viewBox="0 0 118 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="7" width="9" height="40" fill="#D8FF57" />
        <path
          d="M14 7H38C55 7 67 16 67 27C67 38 55 47 38 47H14V38H37C47 38 55 34 55 27C55 20 47 16 37 16H14V7Z"
          fill="currentColor"
        />
        <path
          d="M73 7H96C106 7 112 13 112 21C112 26 109 30 104 32C110 34 114 39 114 45C114 53 108 54 97 54H73V7ZM83 16V28H94C99 28 102 26 102 22C102 18 99 16 94 16H83ZM83 36V45H96C101 45 104 44 104 40C104 37 101 36 96 36H83Z"
          fill="currentColor"
        />
      </svg>
      {showWordmark ? (
        <span className="font-black tracking-[0.18em] text-current">DISRUPTIVE BRANDS</span>
      ) : null}
    </span>
  );
}
