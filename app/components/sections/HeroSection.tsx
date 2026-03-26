"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { HeroPhoto } from "@/app/components/ui/HeroPhoto";
import { SOCIAL_ICON_MAP } from "@/app/components/ui/SocialIcons";
import profileData from "@/app/data/profile.json";

const HERO_SOCIALS = ["GitHub", "LinkedIn", "YouTube", "Medium"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection() {
  const socialLinks = profileData.social.filter((s) => HERO_SOCIALS.includes(s.platform));

  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      {/* Subtle background radial gradient focused left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(155, 114, 207, 0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="content-container"
        style={{
          width: "100%",
          paddingTop: "8rem",
          paddingBottom: "6rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "center",
        }}
      >
        {/* LEFT: Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
        >
          {/* Eyebrow */}
          <motion.span
            variants={itemVariants}
            className="section-eyebrow"
            style={{ marginBottom: 0 }}
          >
            Full Stack Developer
          </motion.span>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "var(--font-size-hero)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
            }}
          >
            Vivek
            <br />
            <span className="text-gradient">Malhan</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "var(--font-size-sm)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-text-secondary)",
            }}
          >
            Developer · Blogger · YouTuber
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "var(--font-size-lg)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: "48ch",
            }}
          >
            Crafting high-performance web and mobile experiences at{" "}
            <span style={{ color: "var(--color-accent-gold)", fontWeight: 500 }}>
              Publicis Sapient
            </span>
            . Passionate about Generative AI, AI Agents, React ecosystems, and sharing knowledge through
            writing and video.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}
          >
            <Link href="#projects" className="btn-primary">
              See My Work
            </Link>
            <Link href="#contact" className="btn-secondary">
              Get In Touch
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}
            aria-label="Social links"
          >
            {socialLinks.map((link) => {
              const Icon = SOCIAL_ICON_MAP[link.platform];
              return Icon ? (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  style={{
                    color: "var(--color-text-muted)",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    display: "flex",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-accent-gold)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={20} />
                </a>
              ) : null;
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT: Photo + particle halo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <HeroPhoto />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ color: "var(--color-text-muted)" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #hero .content-container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #hero .content-container > div:last-child {
            order: -1;
          }
          #hero .content-container > div:first-child {
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
