import Navbar from './components/ui/Navbar'
import ProfileHeader from './components/ui/ProfileHeader'
import IntroPost from './components/ui/IntroPost'
import SectionHeading from './components/ui/SectionHeading'
import Timeline from './components/ui/Timeline'
import ProjectPost from './components/ui/ProjectPost'
import CapitalMarketsCard from './components/ui/CapitalMarketsCard'
import StackSection from './components/ui/StackSection'
import EducationPost from './components/ui/EducationPost'
import CertificationPost from './components/ui/CertificationPost'
import ContactPost from './components/ui/ContactPost'
import Footer from './components/ui/Footer'
import { projects } from './data/projects'
import { capitalMarketsTopics } from './data/capitalMarkets'
import { certifications } from './data/certifications'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="mx-auto max-w-feed px-4 md:px-8">
        <section id="home">
          <ProfileHeader />
          <IntroPost />
        </section>

        <section id="experience" className="mt-16 md:mt-24">
          <SectionHeading eyebrow="Experience" title="Engineering Journey" />
          <Timeline />
        </section>

        <section id="projects" className="mt-16 md:mt-24">
          <SectionHeading eyebrow="Projects" title="Things I've Built" />
          <div className="flex flex-col gap-5">
            {projects.map((project, i) => (
              <ProjectPost key={project.id} project={project} delay={i * 0.06} />
            ))}
          </div>
        </section>

        <section id="beyond-code" className="mt-16 md:mt-24">
          <SectionHeading
            eyebrow="Beyond Code"
            title="Beyond Code"
            subtitle="Exploring the systems behind financial markets."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {capitalMarketsTopics.map((topic, i) => (
              <CapitalMarketsCard key={topic.id} topic={topic} delay={i * 0.06} />
            ))}
          </div>
        </section>

        <section id="stack" className="mt-16 md:mt-24">
          <SectionHeading eyebrow="Stack" title="Tech Stack" />
          <StackSection />
        </section>

        <section id="education" className="mt-16 md:mt-24">
          <SectionHeading eyebrow="Education" title="Engineering foundation" />
          <EducationPost />
        </section>

        <section id="certifications" className="mt-10 md:mt-12">
          <SectionHeading eyebrow="Certifications" title="Verified credentials" />
          <div className="flex flex-col gap-4">
            {certifications.map((cert, i) => (
              <CertificationPost key={cert.id} certification={cert} delay={i * 0.06} />
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16 mt-16 md:mb-24 md:mt-24">
          <SectionHeading eyebrow="Contact" title="Let's build something" />
          <ContactPost />
        </section>
      </main>
      <Footer />
    </>
  )
}
