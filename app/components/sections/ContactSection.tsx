"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
  MediumIcon,
  NPMIcon,
  CodepenIcon,
} from "@/app/components/ui/SocialIcons";
import profileData from "@/app/data/profile.json";

const CONTACT_SOCIALS = [
  {
    platform: "GitHub",
    url: "https://github.com/VivekMalhan666",
    label: "GitHub — Open source & projects",
    Icon: GitHubIcon,
    color: "#e8c97e",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/vivek-malhan-156984195/",
    label: "LinkedIn — Connect professionally",
    Icon: LinkedInIcon,
    color: "#0A66C2",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@vivekmalhan",
    label: "YouTube — Dev videos & vlogs",
    Icon: YouTubeIcon,
    color: "#FF0000",
  },
  {
    platform: "Medium",
    url: "https://medium.com/@amalhan43",
    label: "Medium — Technical articles",
    Icon: MediumIcon,
    color: "#e8c97e",
  },
  {
    platform: "NPM",
    url: "https://www.npmjs.com/~vivekmalhan",
    label: "NPM — Published packages",
    Icon: NPMIcon,
    color: "#CB3837",
  },
  {
    platform: "Codepen",
    url: "https://codepen.io/vivekmalhan666/collections/",
    label: "CodePen — UI experiments",
    Icon: CodepenIcon,
    color: "#9b72cf",
  },
];

type FormState = "idle" | "loading" | "success";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Contact">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          bottom: 0,
          transform: "translateX(-50%)",
          width: "70vw",
          height: "50%",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(155, 114, 207, 0.06) 0%, transparent 70%)",
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
          style={{
            textAlign: "center",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <span className="section-eyebrow">Say Hello</span>
          <h2 className="section-title" style={{ maxWidth: "none" }}>
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Whether it&apos;s a project, a collaboration, or just a good conversation — I&apos;d
            love to hear from you.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "start",
          }}
        >
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
                lineHeight: 1.3,
              }}
            >
              Find me across the internet
            </p>

            {CONTACT_SOCIALS.map((social, i) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 + 0.2, duration: 0.5 }}
                className="glass-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${social.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                }}
                aria-label={social.label}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: social.color,
                    flexShrink: 0,
                  }}
                >
                  <social.Icon size={17} />
                </div>
                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {social.platform}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {social.label.split("—")[1]?.trim()}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card"
                  style={{
                    padding: "3rem 2rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <CheckCircle size={48} color="var(--color-accent-gold)" />
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.3rem",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Message sent!
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {/* Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label
                      htmlFor="contact-name"
                      style={{
                        fontSize: "0.78rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-jetbrains)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      style={{
                        padding: "0.85rem 1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border)",
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--color-text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "border-color 0.2s ease",
                        width: "100%",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(232, 201, 126, 0.4)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--color-border)";
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label
                      htmlFor="contact-email"
                      style={{
                        fontSize: "0.78rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-jetbrains)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      style={{
                        padding: "0.85rem 1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border)",
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--color-text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "border-color 0.2s ease",
                        width: "100%",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(232, 201, 126, 0.4)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--color-border)";
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label
                      htmlFor="contact-message"
                      style={{
                        fontSize: "0.78rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-jetbrains)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project or idea..."
                      style={{
                        padding: "0.85rem 1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border)",
                        background: "rgba(255,255,255,0.04)",
                        color: "var(--color-text-primary)",
                        fontSize: "0.9rem",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "inherit",
                        lineHeight: 1.65,
                        transition: "border-color 0.2s ease",
                        width: "100%",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(232, 201, 126, 0.4)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "var(--color-border)";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="btn-primary"
                    style={{ justifyContent: "center", opacity: formState === "loading" ? 0.7 : 1 }}
                  >
                    {formState === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      textAlign: "center",
                    }}
                  >
                    Or email directly:{" "}
                    <a
                      href={`mailto:${profileData.email}`}
                      style={{ color: "var(--color-accent-gold)", textDecoration: "none" }}
                    >
                      {profileData.email}
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #contact .content-container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
