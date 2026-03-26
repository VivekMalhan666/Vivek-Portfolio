import type {
  Profile,
  SkillCategory,
  Project,
  Experience,
  ContactInfo,
} from "@/app/types";

import profileData from "@/app/data/profile.json";
import skillsData from "@/app/data/skills.json";
import projectsData from "@/app/data/projects.json";
import experienceData from "@/app/data/experience.json";
import contactData from "@/app/data/contact.json";

export function getProfile(): Profile {
  return profileData as Profile;
}

export function getSkills(): SkillCategory[] {
  return skillsData as SkillCategory[];
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => p.featured);
}

export function getExperience(): Experience[] {
  return experienceData as Experience[];
}

export function getContactInfo(): ContactInfo {
  return contactData as ContactInfo;
}
