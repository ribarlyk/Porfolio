"use client";

import React, { useRef } from "react";

interface MagneticProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  strength?: number;
}

/** Button that subtly follows the cursor (disabled for reduced-motion). */
export function Magnetic({ children, strength = 0.4, className, ...rest }: MagneticProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={className} {...rest}>
      {children}
    </button>
  );
}

/** Pointer-tracking glow for cards (sets --mx/--my CSS vars). */
export function useGlow() {
  return React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);
}
