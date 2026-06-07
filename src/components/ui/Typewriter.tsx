"use client";

import React, { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursor?: boolean;
}

/**
 * Types `text` out one character at a time once it mounts. Respects
 * reduced-motion (renders the full string immediately) and re-runs whenever
 * the text changes (e.g. on language switch).
 */
export function Typewriter({ text, speed = 70, startDelay = 250, className = "", cursor = true }: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setCount(0);
    setDone(false);

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      setDone(true);
      return;
    }

    const chars = [...text];
    let i = 0;

    const typeNext = () => {
      i += 1;
      setCount(i);
      if (i < chars.length) {
        timer.current = setTimeout(typeNext, speed);
      } else {
        setDone(true);
      }
    };

    timer.current = setTimeout(typeNext, startDelay);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [text, speed, startDelay]);

  const shown = [...text].slice(0, count).join("");

  return (
    <span className={`typewriter ${className}`.trim()} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      {cursor && <span className={`tw-caret ${done ? "blink" : ""}`} aria-hidden="true" />}
    </span>
  );
}
