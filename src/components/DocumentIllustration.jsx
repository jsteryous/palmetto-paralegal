export default function DocumentIllustration() {
  return (
    <svg
      viewBox="0 0 620 560"
      className="h-auto w-full"
      role="img"
      aria-labelledby="document-illustration-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="document-illustration-title">
        Sample title search report showing chain of title, flagged exceptions, and deliverables
      </title>

      <defs>
        <linearGradient id="paper" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#faf7f2" />
        </linearGradient>
        <linearGradient id="header-band" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f3d2e" />
          <stop offset="100%" stopColor="#194f3a" />
        </linearGradient>
        <filter id="paper-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#0f3d2e" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Backdrop paper stack */}
      <rect x="36" y="70" width="260" height="400" rx="22" fill="#e4d7c1" opacity="0.55" />
      <rect x="58" y="52" width="260" height="400" rx="22" fill="#f3ede3" />

      {/* Main document */}
      <g filter="url(#paper-shadow)">
        <rect x="80" y="34" width="460" height="472" rx="24" fill="url(#paper)" stroke="#dcebe3" />
      </g>

      {/* Header band */}
      <rect x="80" y="34" width="460" height="76" rx="24" fill="url(#header-band)" />
      <rect x="80" y="86" width="460" height="24" fill="url(#header-band)" />
      <text x="108" y="72" fill="#faf7f2" fontSize="16" fontWeight="700" fontFamily="Fraunces, Georgia, serif" letterSpacing="0.5">
        Title Search Report
      </text>
      <text x="108" y="95" fill="#b8d6c5" fontSize="11" fontWeight="600" fontFamily="Manrope, Segoe UI, sans-serif" letterSpacing="2">
        GREENVILLE COUNTY · SC
      </text>
      {/* Seal */}
      <g transform="translate(488, 72)">
        <circle r="26" fill="#0a2a20" stroke="#2f7f5c" strokeWidth="1.5" />
        <circle r="20" fill="none" stroke="#b8d6c5" strokeWidth="0.6" strokeDasharray="2 2" />
        <path d="M-6 0c1.5-4 1.5-7 0-10c-1.5 3-1.5 6 0 10Z M6 0c-1.5-4-1.5-7 0-10c1.5 3 1.5 6 0 10Z M-9 3c2 -1 4 -3 6 -6c-3 1 -5 3 -6 6Z M9 3c-2 -1 -4 -3 -6 -6c3 1 5 3 6 6Z" fill="#8abca2" />
        <rect x="-1.2" y="0" width="2.4" height="8" fill="#8abca2" />
        <path d="M-8 10h16" stroke="#8abca2" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Parcel row */}
      <g fontFamily="Manrope, Segoe UI, sans-serif">
        <text x="108" y="142" fill="#4b5a53" fontSize="10" fontWeight="700" letterSpacing="1.8">PARCEL</text>
        <text x="108" y="162" fill="#0f3d2e" fontSize="14" fontWeight="700">0547.00-03-018.02</text>

        <text x="272" y="142" fill="#4b5a53" fontSize="10" fontWeight="700" letterSpacing="1.8">SEARCH PERIOD</text>
        <text x="272" y="162" fill="#0f3d2e" fontSize="14" fontWeight="700">40 years</text>

        <text x="412" y="142" fill="#4b5a53" fontSize="10" fontWeight="700" letterSpacing="1.8">STATUS</text>
        <g transform="translate(412, 148)">
          <rect x="0" y="0" width="92" height="22" rx="11" fill="#dcebe3" />
          <circle cx="12" cy="11" r="4" fill="#2f7f5c" />
          <text x="22" y="15" fill="#0f3d2e" fontSize="11" fontWeight="700">Cleared</text>
        </g>
      </g>

      <line x1="108" y1="184" x2="512" y2="184" stroke="#dcebe3" strokeWidth="1" />

      {/* Chain of title timeline */}
      <text x="108" y="210" fill="#0f3d2e" fontSize="12" fontWeight="700" fontFamily="Manrope, Segoe UI, sans-serif" letterSpacing="1.6">
        CHAIN OF TITLE
      </text>

      <g fontFamily="Manrope, Segoe UI, sans-serif">
        {/* vertical line */}
        <line x1="120" y1="232" x2="120" y2="344" stroke="#b8d6c5" strokeWidth="2" strokeDasharray="3 4" />

        {/* Node 1 */}
        <circle cx="120" cy="236" r="6" fill="#0f3d2e" />
        <text x="138" y="232" fill="#4b5a53" fontSize="10" fontWeight="700" letterSpacing="1.2">2024 · DEED BOOK 4821 / PG 119</text>
        <text x="138" y="250" fill="#0f3d2e" fontSize="13" fontWeight="600">Palmetto Ridge Holdings LLC</text>

        {/* Node 2 */}
        <circle cx="120" cy="286" r="6" fill="#2f7f5c" />
        <text x="138" y="282" fill="#4b5a53" fontSize="10" fontWeight="700" letterSpacing="1.2">2011 · DEED BOOK 2456 / PG 77</text>
        <text x="138" y="300" fill="#0f3d2e" fontSize="13" fontWeight="600">M. &amp; L. Hartwell (Warranty)</text>

        {/* Node 3 */}
        <circle cx="120" cy="336" r="6" fill="#5a9d7e" />
        <text x="138" y="332" fill="#4b5a53" fontSize="10" fontWeight="700" letterSpacing="1.2">1996 · DEED BOOK 1108 / PG 42</text>
        <text x="138" y="350" fill="#0f3d2e" fontSize="13" fontWeight="600">Anderson Family Trust</text>
      </g>

      {/* Findings / Exceptions card */}
      <g>
        <rect x="100" y="376" width="420" height="108" rx="14" fill="#f1f6f3" stroke="#dcebe3" />
        <text x="116" y="398" fill="#0f3d2e" fontSize="11" fontWeight="700" fontFamily="Manrope, Segoe UI, sans-serif" letterSpacing="1.6">
          FINDINGS &amp; EXCEPTIONS
        </text>

        {/* check row 1 */}
        <g transform="translate(116, 414)">
          <circle cx="8" cy="8" r="8" fill="#2f7f5c" />
          <path d="M4 8.5l3 3 6-6" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="26" y="12" fill="#0f3d2e" fontSize="12" fontWeight="600" fontFamily="Manrope, Segoe UI, sans-serif">Deed chain verified · no gaps</text>
        </g>

        {/* check row 2 */}
        <g transform="translate(116, 438)">
          <circle cx="8" cy="8" r="8" fill="#2f7f5c" />
          <path d="M4 8.5l3 3 6-6" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="26" y="12" fill="#0f3d2e" fontSize="12" fontWeight="600" fontFamily="Manrope, Segoe UI, sans-serif">Tax status current (2025)</text>
        </g>

        {/* flag row */}
        <g transform="translate(116, 462)">
          <circle cx="8" cy="8" r="8" fill="#c98a3a" />
          <text x="8" y="12" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="Manrope, Segoe UI, sans-serif">!</text>
          <text x="26" y="12" fill="#0f3d2e" fontSize="12" fontWeight="600" fontFamily="Manrope, Segoe UI, sans-serif">Open mortgage · Book 3901 / Pg 220 (flagged for attorney review)</text>
        </g>
      </g>

      {/* Decorative palmetto motif */}
      <g opacity="0.08" transform="translate(504, 426)">
        <path d="M0 -28c3 8 3 16 0 28c-3-12-3-20 0-28Z" fill="#0f3d2e" />
        <path d="M-18 -14c8 2 14 8 18 22c-10-2-16-10-18-22Z" fill="#0f3d2e" />
        <path d="M18 -14c-8 2-14 8-18 22c10-2 16-10 18-22Z" fill="#0f3d2e" />
      </g>
    </svg>
  );
}
