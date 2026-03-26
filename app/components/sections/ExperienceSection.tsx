"use client";

import { motion } from "framer-motion";
import experienceData from "@/app/data/experience.json";

interface Bullet {
  text: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string | null;
  location: string;
  bullets: Bullet[];
  technologies: string[];
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "Present";
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ExperienceSection() {
  const experiences = experienceData as Experience[];

  return (
    <section id="experience" className="section-wrapper" aria-label="Work Experience">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: "20%",
          width: "35vw",
          height: "55%",
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(232, 201, 126, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="content-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <span className="section-eyebrow">Career Path</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Building products at scale across agencies, startups, and everything in between.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "760px",
          }}
        >
          {/* Vertical line */}
          <div className="timeline-line" />

          {/* Entries */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", paddingLeft: "3rem" }}>
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                style={{ position: "relative" }}
              >
                {/* Timeline dot */}
                <div
                  className="timeline-dot"
                  style={{
                    position: "absolute",
                    left: "-1.875rem",
                    top: "0.35rem",
                  }}
                />

                <div className="glass-card" style={{ padding: "1.75rem 2rem" }}>
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--color-text-primary)",
                          letterSpacing: "-0.02em",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "var(--color-accent-gold)",
                          }}
                        >
                          {exp.company}
                        </span>
                        <span style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
                          ·
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--color-text-muted)",
                            fontFamily: "var(--font-jetbrains)",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontFamily: "var(--font-jetbrains)",
                          color: "var(--color-text-muted)",
                          letterSpacing: "0.04em",
                          display: "block",
                        }}
                      >
                        {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--color-text-muted)",
                          opacity: 0.7,
                        }}
                      >
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.65rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        style={{
                          fontSize: "var(--font-size-sm)",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.65,
                          paddingLeft: "1rem",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "0.5em",
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "var(--color-accent-gold)",
                            opacity: 0.5,
                          }}
                        />
                        {b.text}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "0.7rem",
                          fontFamily: "var(--font-jetbrains)",
                          letterSpacing: "0.04em",
                          color: "var(--color-accent-violet)",
                          background: "rgba(155, 114, 207, 0.08)",
                          border: "1px solid rgba(155, 114, 207, 0.15)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0.2rem 0.6rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
