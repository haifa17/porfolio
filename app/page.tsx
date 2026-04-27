import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { FloatingNav } from "@/components/layout/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";
import ExperienceSection from "./components/Experience";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <SmoothScroll>
        <MouseFollower />
        <ScrollProgress />
        <FloatingNav />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </SmoothScroll>
    </div>
  );
}
