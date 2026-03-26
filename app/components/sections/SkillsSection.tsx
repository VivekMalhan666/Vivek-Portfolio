"use client";

import { motion } from "framer-motion";
import skillsData from "@/app/data/skills.json";

interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export function SkillsSection() {
  const categories = skillsData as SkillCategory[];

  return (
    <section id="skills" className="section-wrapper" aria-label="Skills">
      {/* Subtle right-side glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: "30%",
          width: "40vw",
          height: "60%",
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(232, 201, 126, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="content-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <span className="section-eyebrow">What I Bring</span>
          <h2 className="section-title">My Craft &amp; Expertise</h2>
          <p className="section-subtitle">
            I don&apos;t just use tools — I master them. Here&apos;s the stack I&apos;ve built real
            products with, and the communities I contribute to.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: catIdx * 0.08,
              }}
              className="glass-card"
              style={{ padding: "2rem" }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.875rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.75rem",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                  aria-hidden="true"
                >
                  {cat.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {cat.category}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Thin divider */}
              <div
                style={{
                  height: "1px",
                  background: "var(--color-border)",
                  marginBottom: "1.25rem",
                }}
              />

              {/* Skill pills */}
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                role="list"
                aria-label={`${cat.category} skills`}
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    role="listitem"
                    className="skill-pill"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            marginTop: "clamp(3rem, 6vw, 5rem)",
            textAlign: "center",
            padding: "2.5rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            background:
              "linear-gradient(135deg, rgba(232, 201, 126, 0.04), rgba(155, 114, 207, 0.04))",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "var(--font-size-xl)",
              fontStyle: "italic",
              color: "var(--color-text-secondary)",
              maxWidth: "55ch",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            "The best code is written with empathy — for the user, the team, and the next developer
            who reads it."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
