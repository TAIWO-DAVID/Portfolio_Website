import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { Skills } from "@/components/skills"
import { ExperienceList } from "@/components/experience-list"
import { LeadershipTabs } from "@/components/leadership-tabs"
import { VolunteeringCerts } from "@/components/volunteering-certs"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

import { projects } from "@/data/projects"
import { experiences } from "@/data/experience"
import { volunteering, certifications } from "@/data/volunteering"
import { personal } from "@/data/personal"

import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-slate-900">
      <SiteHeader />
      <Hero personal={personal} />

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="A selection of projects demonstrating interface craft, accessibility, and performance."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Separator className="my-2" />

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          subtitle="A focused toolset to build fast, maintainable products."
        />
        <div className="mt-8">
          <Reveal>
            <Skills />
          </Reveal>
        </div>
      </section>

      <Separator className="my-2" />

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Roles and contributions"
          subtitle="Companies and teams I’ve partnered with."
        />
        <div className="mt-8">
          <Reveal>
            <ExperienceList items={experiences} />
          </Reveal>
        </div>
      </section>

      <Separator className="my-2" />

      {/* Leadership / Extracurricular */}
      <section id="leadership" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Leadership & Activities"
          title="Beyond the classroom and code"
          subtitle="Highlights from student leadership and campus initiatives."
        />
        <div className="mt-8">
          <Reveal>
            <LeadershipTabs />
          </Reveal>
        </div>
      </section>

      <Separator className="my-2" />

      {/* Volunteering & Certifications */}
      <section id="volunteering" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Service & Credentials"
          title="Volunteering and Certifications"
          subtitle="Teaching, mentorship, and formal certifications."
        />
        <div className="mt-8">
          <Reveal>
            <VolunteeringCerts volunteering={volunteering} certifications={certifications} />
          </Reveal>
        </div>
      </section>

      <Separator className="my-2" />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something"
          subtitle="Available for roles, collaborations, and freelance."
        />
        <div className="mt-8">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer brand={personal.shortName} />
    </main>
  )
}
