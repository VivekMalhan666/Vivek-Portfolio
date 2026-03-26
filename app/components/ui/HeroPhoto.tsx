"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroPhoto() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ambient glow ring — slow spin */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "min(480px, 90vw)",
          height: "min(480px, 90vw)",
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, rgba(155, 114, 207, 0.18), rgba(232, 201, 126, 0.08), rgba(155, 114, 207, 0.18))",
          animation: "spin-slow 12s linear infinite",
        }}
      />

      {/* Middle glow ring */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "min(400px, 78vw)",
          height: "min(400px, 78vw)",
          borderRadius: "50%",
          border: "1px solid rgba(232, 201, 126, 0.12)",
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Inner glow ring */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "min(340px, 66vw)",
          height: "min(340px, 66vw)",
          borderRadius: "50%",
          border: "1px solid rgba(155, 114, 207, 0.15)",
          animation: "glow-pulse 4s ease-in-out infinite 1s",
        }}
      />

      {/* Warm radial glow behind photo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "min(360px, 70vw)",
          height: "min(360px, 70vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(155, 114, 207, 0.2) 0%, rgba(232, 201, 126, 0.06) 50%, transparent 70%)",
          filter: "blur(20px)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />

      {/* Photo frame with animated blob clip-path */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        style={{
          position: "relative",
          zIndex: 10,
          width: "min(300px, 58vw)",
          height: "min(300px, 58vw)",
        }}
      >
        {/* Animated blob shape wrapper */}
        <div
          style={{
            width: "100%",
            height: "100%",
            animation: "blob-morph 10s ease-in-out infinite, float-gentle 6s ease-in-out infinite",
            overflow: "hidden",
            border: "1px solid rgba(232, 201, 126, 0.2)",
            boxShadow:
              "0 0 80px rgba(155, 114, 207, 0.3), 0 0 160px rgba(155, 114, 207, 0.1), inset 0 0 40px rgba(232, 201, 126, 0.05)",
          }}
        >
          <Image
            src="/images/vivek.png"
            alt="Vivek Malhan — Full Stack Developer"
            fill
            priority
            sizes="(max-width: 768px) 58vw, 300px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* Golden accent corner badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: "absolute",
            bottom: "-0.5rem",
            right: "-1.5rem",
            background: "linear-gradient(135deg, rgba(232, 201, 126, 0.15), rgba(155, 114, 207, 0.15))",
            border: "1px solid rgba(232, 201, 126, 0.25)",
            borderRadius: "999px",
            padding: "0.4rem 1rem",
            backdropFilter: "blur(12px)",
            fontSize: "0.72rem",
            fontFamily: "var(--font-jetbrains)",
            letterSpacing: "0.12em",
            color: "var(--color-accent-gold)",
            whiteSpace: "nowrap",
          }}
        >
          ● Available for Projects
        </motion.div>
      </motion.div>
    </div>
  );
}
