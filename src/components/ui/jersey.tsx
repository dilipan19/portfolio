"use client";

import { motion } from "framer-motion";

type JerseyProps = {
  name: string;
  number: string;
};

export function Jersey({ name, number }: JerseyProps) {
  return (
    <motion.div
      className="relative mx-auto aspect-[0.78] w-full max-w-[420px]"
      aria-label={`Manchester United inspired home jersey with ${name} and number ${number}`}
      animate={{ y: [0, -16, 0], rotate: [-1.2, 1.2, -1.2] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-8 rounded-full bg-united-red/30 blur-3xl" aria-hidden="true" />
      <div className="absolute inset-x-10 bottom-3 h-10 rounded-full bg-black/70 blur-xl" aria-hidden="true" />

      <svg
        viewBox="0 0 430 540"
        role="img"
        className="relative z-10 h-full w-full drop-shadow-[0_28px_70px_rgba(0,0,0,0.72)]"
      >
        <defs>
          <linearGradient id="shirtBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5483B" />
            <stop offset="42%" stopColor="#DA291C" />
            <stop offset="100%" stopColor="#8F1711" />
          </linearGradient>
          <linearGradient id="sleeveShade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          <radialGradient id="fabricLight" cx="38%" cy="18%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
            <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <pattern id="knit" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 4H8M4 0V8" stroke="#FFFFFF" strokeOpacity="0.055" strokeWidth="1" />
          </pattern>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        <path
          d="M136 66L181 37H249L294 66L376 104L348 206L307 193L319 485C319 503 304 518 286 518H144C126 518 111 503 111 485L123 193L82 206L54 104L136 66Z"
          fill="url(#shirtBody)"
          filter="url(#softShadow)"
        />
        <path d="M136 66L78 96L54 104L82 206L123 193L130 95Z" fill="url(#sleeveShade)" opacity="0.98" />
        <path d="M294 66L352 96L376 104L348 206L307 193L300 95Z" fill="url(#sleeveShade)" opacity="0.98" />
        <path
          d="M136 66L181 37H249L294 66C276 92 249 105 215 105C181 105 154 92 136 66Z"
          fill="#070707"
        />
        <path
          d="M169 45C180 76 196 91 215 91C234 91 250 76 261 45"
          fill="none"
          stroke="#C8A45D"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M136 66L181 37H249L294 66L376 104L348 206L307 193L319 485C319 503 304 518 286 518H144C126 518 111 503 111 485L123 193L82 206L54 104L136 66Z"
          fill="url(#fabricLight)"
        />
        <path
          d="M136 66L181 37H249L294 66L376 104L348 206L307 193L319 485C319 503 304 518 286 518H144C126 518 111 503 111 485L123 193L82 206L54 104L136 66Z"
          fill="url(#knit)"
          opacity="0.72"
        />

        <path d="M119 185L310 185" stroke="#C8A45D" strokeOpacity="0.58" strokeWidth="3" />
        <path d="M116 466H314" stroke="#050505" strokeOpacity="0.7" strokeWidth="12" />
        <path d="M95 120L80 188" stroke="#C8A45D" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" />
        <path d="M335 120L350 188" stroke="#C8A45D" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" />

        <text
          x="215"
          y="198"
          textAnchor="middle"
          fontFamily="Barlow Condensed, Impact, sans-serif"
          fontSize="31"
          fontWeight="700"
          letterSpacing="2"
          fill="#FFFFFF"
        >
          {name.toUpperCase()}
        </text>
        <text
          x="215"
          y="355"
          textAnchor="middle"
          fontFamily="Barlow Condensed, Impact, sans-serif"
          fontSize="152"
          fontWeight="700"
          fill="#FFFFFF"
          stroke="#C8A45D"
          strokeWidth="3"
          paintOrder="stroke"
        >
          {number}
        </text>

        <g opacity="0.82">
          <path d="M149 254C172 239 194 231 215 231C236 231 258 239 281 254" fill="none" stroke="#FFFFFF" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M145 405C172 419 195 426 215 426C235 426 258 419 285 405" fill="none" stroke="#000000" strokeOpacity="0.2" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}
