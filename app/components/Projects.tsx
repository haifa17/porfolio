import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <ProjectCard
            title="Stock Management System"
            description="A robust inventory management application that handles both inbound and outbound operations. It incorporates barcode scanning and weight-based tracking to ensure precision, and leverages Twilio’s API to send real-time WhatsApp notifications for operational updates and alerts."
            tags={["Next.js", "TypeScript", "Prima", "Twilio"]}
            image="/placeholder.svg?height=400&width=600"
            demoUrl="https://stock-management-zeta-jade.vercel.app/"
            repoUrl="https://github.com/haifa17/Stock_Management"
          />
          <ProjectCard
            title="Smart Restaurant Dashboard"
            description="Developed a smart restaurant management dashboard as part of a freelance engagement, enabling full control over menus, categories, products, and orders with real-time updates and notifications."
            tags={["Next.js", "TypeScript", "Prima", "Clerk"]}
            image="/placeholder.svg?height=400&width=600"
            // demoUrl="https://example.com"
            // repoUrl="https://github.com"
          />
          <ProjectCard
            title="L'Etoile Mobile"
            description="A responsive web application built as a service-focused landing page for mobile number portability. It features a secure admin dashboard for handling user submissions, including portability requests and contact inquiries, as well as an AI-powered chatbot to provide real-time assistance and improve user engagement."
            tags={["Next.js", "TypeScript", "Framer Motion", "Prisma"]}
            image="/placeholder.svg?height=400&width=600"
            demoUrl="https://letoile-mobile.vercel.app/"
            repoUrl="https://github.com/haifa17/letoile_mobile"
          />
          <ProjectCard
            title="H2A GROUP"
            description="Developed a modern startup website as part of a freelance engagement, showcasing company services and expertise. Built with Next.js for performance and scalability, and integrated Three.js for interactive 3D experiences."
            tags={[
              "Next.js",
              "TypeScript",
              "Three.js",
              "Tailwind CSS",
              "Framer Motion",
              "Infinite Scrolling",
            ]}
            image="/placeholder.svg?height=400&width=600"
            // demoUrl="https://h2-a.vercel.app/"
            // repoUrl="https://github.com"
          />
          <ProjectCard
            title="Portfolio Website"
            description="This portfolio website built with Next.js and Tailwind CSS."
            tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
            image="/placeholder.svg?height=400&width=600"
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
        </div>
      </div>
    </section>
  );
}
