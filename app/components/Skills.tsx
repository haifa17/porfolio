import { SectionHeading } from "@/components/section-heading";
import { SkillBadge } from "@/components/skill-badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading title="My Skills" subtitle="Technologies I work with" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
          <SkillBadge name="JavaScript" level={70} />
          <SkillBadge name="TypeScript" level={85} />
          <SkillBadge name="Next.js" level={95} />
          <SkillBadge name="Node.js" level={80} />
          <SkillBadge name="HTML/CSS" level={95} />
          <SkillBadge name="Tailwind CSS" level={90} />
          <SkillBadge name="React Query" level={70} />
          <SkillBadge name="Zustand" level={70} />
          <SkillBadge name="Framer Motion" level={85} />
          <SkillBadge name="GSAP" level={70} />
          <SkillBadge name="RESTful APIs" level={85} />
          <SkillBadge name="PostgreSQL/MySQL" level={70} />
          <SkillBadge name="MongoDB" level={70} />
          <SkillBadge name="Git" level={85} />
          <SkillBadge name="NextAuth" level={80} />
          <SkillBadge name="Clerk" level={85} />
        </div>
      </div>
    </section>
  );
}
