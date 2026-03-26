"use client";

import { motion, useTransform, useSpring } from "framer-motion";
import { useScrollProgress } from "@/app/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();
  const smoothProgress = useSpring(progress, { stiffness: 100, damping: 20 });
  const width = useTransform(smoothProgress, [0, 100], ["0%", "100%"]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-100 h-[2px]"
      style={{ background: "var(--color-border)" }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full"
        style={{
          width,
          background:
            "linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-purple))",
        }}
      />
    </div>
  );
}
