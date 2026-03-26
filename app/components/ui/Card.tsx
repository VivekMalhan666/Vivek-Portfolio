"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hoverable = true, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={onClick}
      className={cn(
        "glass rounded-xl p-6 relative overflow-hidden transition-shadow duration-300",
        hoverable && "cursor-pointer",
        className
      )}
      style={{
        boxShadow: "var(--shadow-card)",
      }}
      onMouseEnter={(e) => {
        if (hoverable)
          (e.currentTarget as HTMLElement).style.boxShadow =
            "var(--shadow-elevated), var(--shadow-glow)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
      }}
    >
      {children}
    </motion.div>
  );
}
