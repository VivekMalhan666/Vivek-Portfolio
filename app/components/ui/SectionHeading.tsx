"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  const prefersReduced = useReducedMotion();

  const shouldAnimate = !prefersReduced && isInView;
  const textAlignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div ref={ref} className={`mb-16 ${textAlignClass} max-w-2xl`}>
      {label && (
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: "var(--color-accent-cyan)" }}
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-bold leading-tight mb-4"
        style={{
          fontSize: "var(--font-size-3xl)",
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="leading-relaxed"
          style={{
            fontSize: "var(--font-size-lg)",
            color: "var(--color-text-secondary)",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
