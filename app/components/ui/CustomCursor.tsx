"use client";

import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/app/hooks/useMousePosition";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { useState, useEffect } from "react";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const prefersReduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { stiffness: 200, damping: 25, mass: 0.5 };
  const cursorX = useSpring(x - 10, springConfig);
  const cursorY = useSpring(y - 10, springConfig);
  const dotX = useSpring(x - 3, { stiffness: 800, damping: 30 });
  const dotY = useSpring(y - 3, { stiffness: 800, damping: 30 });

  useEffect(() => {
    cursorX.set(x - 10);
    cursorY.set(y - 10);
    dotX.set(x - 3);
    dotY.set(y - 3);
  }, [x, y, cursorX, cursorY, dotX, dotY]);

  useEffect(() => {
    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);
    const checkPointer = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(el).cursor === "pointer"
      );
    };
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mousemove", checkPointer);
    return () => {
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mousemove", checkPointer);
    };
  }, []);

  if (prefersReduced) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full border"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 40 : 20,
          height: isPointer ? 40 : 20,
          borderColor: "var(--color-accent-cyan)",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.15s ease, height 0.15s ease, opacity 0.15s ease",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: 6,
          height: 6,
          background: "var(--color-accent-cyan)",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
