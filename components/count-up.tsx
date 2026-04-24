"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const parsed = useMemo(() => {
    const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);
    if (!match) return null;
    return {
      prefix: match[1],
      number: Number(match[2].replace(/,/g, "")),
      suffix: match[3],
      decimals: match[2].includes(".") ? 1 : 0
    };
  }, [value]);

  useEffect(() => {
    if (!inView || reduceMotion || !parsed) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const total = 42;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 4);
      const current = parsed.number * Math.min(progress, 1);
      const formatted = current.toLocaleString("en-US", {
        maximumFractionDigits: parsed.decimals,
        minimumFractionDigits: parsed.decimals
      });
      setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
      if (frame < total) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, parsed, reduceMotion, value]);

  return <span ref={ref}>{display}</span>;
}
