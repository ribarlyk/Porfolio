"use client";

import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Counts up from 0 to `to` when it enters the viewport. */
export function Counter({ to, suffix = "", duration = 1400, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            if (reduce) {
              setVal(to);
              return;
            }
            const t0 = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - t0) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * to));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    const fallback = setTimeout(() => {
      if (!started.current) {
        started.current = true;
        setVal(to);
      }
    }, 1600);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}
