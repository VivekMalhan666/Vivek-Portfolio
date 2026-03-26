"use client";

import Link from "next/link";
import { SOCIAL_ICON_MAP } from "@/app/components/ui/SocialIcons";
import profileData from "@/app/data/profile.json";

const FOOTER_SOCIALS = ["GitHub", "LinkedIn", "YouTube", "Medium"];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = profileData.social.filter((s) =>
    FOOTER_SOCIALS.includes(s.platform)
  );

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-bg-secondary)",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max-width)",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 5vw, 3rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.75rem",
        }}
      >
        {/* Brand */}
        <Link
          href="#hero"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          VM<span style={{ color: "var(--color-accent-gold)" }}>.</span>
        </Link>

        {/* Social links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
          aria-label="Social media links"
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
                title={link.label}
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
                <Icon size={18} />
              </a>
            ) : null;
          })}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          © {currentYear} {profileData.name}. Crafted with care.
        </p>
      </div>
    </footer>
  );
}
