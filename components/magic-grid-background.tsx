"use client";

import { motion, useReducedMotion } from "framer-motion";

const squares = [
  [2, 3],
  [7, 1],
  [11, 5],
  [16, 2],
  [22, 6],
  [28, 3],
  [33, 8],
  [4, 10],
  [9, 13],
  [15, 9],
  [20, 14],
  [26, 11],
  [31, 15],
  [36, 12],
  [1, 18],
  [6, 22],
  [12, 19],
  [18, 24],
  [24, 20],
  [30, 25],
  [35, 21],
  [3, 29],
  [10, 31],
  [17, 28],
  [23, 33],
  [29, 30],
  [34, 35]
];

export function MagicGridBackground() {
  const reduceMotion = useReducedMotion();
  const cell = 44;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      <svg
        className="absolute inset-0 h-full w-full opacity-100 [mask-image:radial-gradient(ellipse_at_45%_20%,black_0%,black_48%,transparent_86%)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="magic-grid" width={cell} height={cell} patternUnits="userSpaceOnUse">
            <path
              d={`M ${cell} 0 L 0 0 0 ${cell}`}
              fill="none"
              stroke="rgba(242,245,234,0.16)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#magic-grid)" />
        {squares.map(([x, y], index) => (
          <motion.rect
            key={`${x}-${y}`}
            x={x * cell}
            y={y * cell}
            width={cell - 1}
            height={cell - 1}
            fill="rgba(216,255,87,0.28)"
            initial={reduceMotion ? { opacity: 0.14 } : { opacity: 0.02 }}
            animate={
              reduceMotion
                ? { opacity: 0.14 }
                : {
                    opacity: [0.02, 0.34, 0.02],
                    transition: {
                      duration: 4.8,
                      delay: (index % 9) * 0.42,
                      repeat: Infinity,
                      repeatDelay: 3.2,
                      ease: "easeInOut"
                    }
                  }
            }
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_15%,rgba(216,255,87,0.14),transparent_34%),linear-gradient(180deg,rgba(7,8,6,0)_0%,rgba(7,8,6,0.5)_64%,#070806_92%)]" />
    </div>
  );
}
