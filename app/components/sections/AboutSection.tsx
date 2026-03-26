"use client";

import { motion } from "framer-motion";
import profileData from "@/app/data/profile.json";

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "2", label: "NPM Packages" },
  { value: "∞", label: "Cups of Coffee" },
];

const FUN_FACTS = [
  { icon: "🎙️", text: "Part-time Radio Jockey (RJ) — yes, the voice too." },
  { icon: "✍️", text: "Writes technical deep-dives on Medium." },
  { icon: "🎥", text: "Creates coding & dev vlogs on YouTube." },
  { icon: "🌙", text: "Known as 'The Night Crawler' — delivers overnight." },
  { icon: "📡", text: "Inner-source contributor at Publicis Sapient." },
];

const TESTIMONIALS = [
  {
    quote:
      '"Vivek is an exceptional engineer. His technical prowess, dedication, and contributions to inner-source initiatives have been invaluable to the team."',
    name: "Vasu Nagpal",
    role: "Manager, Publicis Sapient",
  },
  {
    quote:
      '"I nicknamed him The Night Crawler — if you gave Vivek a task before leaving for the day, it would be done and polished by morning."',
    name: "Vishnumoorthi Bhat",
    role: "Ex. Manager, Publicis Sapient",
  },
  {
    quote:
      '"Vivek is our go-to person for app and web analytics. Articulate, hard-working, and an excellent team player."',
    name: "Team Feedback",
    role: "Publicis Sapient",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-wrapper" aria-label="About Vivek Malhan">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          width: "35vw",
          height: "50%",
          background:
            "radial-gradient(ellipse 70% 80% at 0% 50%, rgba(155, 114, 207, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="content-container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">The Person Behind the Code</h2>
        </motion.div>

        {/* Bio + facts grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "start",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <p
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
              }}
            >
              {profileData.bio}
            </p>
            <p
              style={{
                fontSize: "var(--font-size-base)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
              }}
            >
              Outside of code, I&apos;m a storyteller. Whether it&apos;s through a radio mic,
              a Medium article, or a YouTube video — I believe in sharing what I learn with
              the world. Technology is most powerful when it&apos;s understood by everyone.
            </p>

            {/* Contact pill */}
            <a
              href={`mailto:${profileData.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.5rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--color-border-accent)",
                color: "var(--color-accent-gold)",
                fontSize: "0.85rem",
                fontFamily: "var(--font-jetbrains)",
                letterSpacing: "0.04em",
                textDecoration: "none",
                background: "rgba(232, 201, 126, 0.05)",
                width: "fit-content",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(232, 201, 126, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(232, 201, 126, 0.05)";
              }}
            >
              ✉ {profileData.email}
            </a>
          </motion.div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
          >
            {FUN_FACTS.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.2, duration: 0.6 }}
                className="glass-card"
                style={{
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }} aria-hidden="true">
                  {fact.icon}
                </span>
                <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  {fact.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card"
              style={{
                padding: "1.75rem 1.25rem",
                textAlign: "center",
              }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                style={{
                  display: "block",
                  fontFamily: "var(--font-playfair)",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--color-accent-gold)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </motion.span>
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="section-eyebrow"
            style={{ textAlign: "center", display: "block", marginBottom: "1.5rem" }}
          >
            What People Say
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: "1.25rem",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card"
                style={{ padding: "1.75rem" }}
              >
                <p
                  style={{
                    fontSize: "var(--font-size-sm)",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "1.25rem",
                  }}
                >
                  {t.quote}
                </p>
                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {t.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-jetbrains)",
                    }}
                  >
                    {t.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #about .content-container > div:first-of-type + div {
            grid-template-columns: 1fr !important;
          }
          #about [style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
