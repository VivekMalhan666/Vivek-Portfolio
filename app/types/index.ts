// ============================================================
// Portfolio Data Interfaces — Updated for Cinematic Redesign
// ============================================================

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  avatar: string;
  resumeUrl: string;
  social: SocialLink[];
}

/** USP-style skills: no proficiency percentage */
export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
  type: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  links: ProjectLink[];
  featured: boolean;
}

export interface ExperienceBullet {
  text: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string | null;
  location: string;
  bullets: ExperienceBullet[];
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  social: SocialLink[];
  availability: string;
}

export interface NavItem {
  label: string;
  href: string;
}
