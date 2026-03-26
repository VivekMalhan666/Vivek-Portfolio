import { HeroSection } from "@/app/components/sections/HeroSection";
import { AboutSection } from "@/app/components/sections/AboutSection";
import { SkillsSection } from "@/app/components/sections/SkillsSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";
import { ExperienceSection } from "@/app/components/sections/ExperienceSection";
import { ContactSection } from "@/app/components/sections/ContactSection";

// This page is statically generated at build time
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
