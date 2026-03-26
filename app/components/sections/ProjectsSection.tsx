"use client";

import { motion } from "framer-motion";
import { GitHubIcon, ExternalLinkIcon, NPMIcon } from "@/app/components/ui/SocialIcons";
import projectsData from "@/app/data/projects.json";

interface ProjectLink {
  label: string;
  url: string;
  type: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  links: ProjectLink[];
  featured: boolean;
}

function getLinkIcon(type: string) {
  if (type === "github") return <GitHubIcon size={14} />;
  if (type === "live" || type === "demo") return <ExternalLinkIcon size={14} />;
  return <NPMIcon size={14} />;
}

export function ProjectsSection() {
  const projects = projectsData as Project[];
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-wrapper" aria-label="Projects">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "0",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "40%",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(155, 114, 207, 0.05) 0%, transparent 70%)",
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
          <span className="section-eyebrow">What I&apos;ve Built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            From published NPM packages to full-stack clones — things I&apos;ve shipped and
            learned from.
          </p>
        </motion.div>

        {/* Featured — larger cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>

        {/* Other projects — smaller cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + featured.length} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ textAlign: "center", marginTop: "clamp(3rem, 5vw, 4rem)" }}
        >
          <a
            href="https://github.com/VivekMalhan666"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: "inline-flex" }}
          >
            <GitHubIcon size={16} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      className="glass-card"
      style={{
        padding: featured ? "2rem" : "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100%",
      }}
    >
      {/* Featured badge */}
      {featured && (
        <span
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-accent-gold)",
            fontFamily: "var(--font-jetbrains)",
            background: "rgba(232, 201, 126, 0.08)",
            border: "1px solid rgba(232, 201, 126, 0.15)",
            borderRadius: "var(--radius-full)",
            padding: "0.25rem 0.75rem",
          }}
        >
          Featured
        </span>
      )}

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: featured ? "1.3rem" : "1.1rem",
          fontWeight: 700,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "var(--font-size-sm)",
          color: "var(--color-text-secondary)",
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "0.72rem",
              fontFamily: "var(--font-jetbrains)",
              letterSpacing: "0.04em",
              color: "var(--color-text-muted)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              padding: "0.2rem 0.6rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--color-accent-gold)",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              {getLinkIcon(link.type)}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
