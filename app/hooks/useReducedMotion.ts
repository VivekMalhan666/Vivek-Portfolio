"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  // CHANGE: Initialize state with a function to read matchMedia only once on mount
  // This avoids synchronous setState inside useEffect and satisfies the ESLint rule
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    // CHANGE: Only set up the listener for changes, don't call setState synchronously
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
