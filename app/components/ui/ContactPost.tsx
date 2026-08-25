import Image from 'next/image'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { FiMail, FiDownload } from 'react-icons/fi'
import { profile } from '@/app/data/profile'
import Reveal from './Reveal'

export default function ContactPost() {
  return (
    <Reveal>
      <article className="rounded-card border border-primary/20 bg-navy/50 p-6 shadow-glow md:p-8">
        <div className="flex items-start gap-3">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full border border-hairline object-cover object-top"
          />
          <div>
            <span className="text-sm font-semibold text-white">{profile.name}</span>
            <span className="ml-2 font-mono text-xs text-muted">{profile.handle}</span>
          </div>
        </div>

        <p className="mt-4 whitespace-pre-line text-lg font-medium leading-relaxed text-white md:text-xl">
          {profile.contactPost.text}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary/90"
          >
            <FiMail size={15} />
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-pill border border-hairline px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-primary/40 hover:text-primary"
          >
            <FaLinkedinIn size={14} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-pill border border-hairline px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-primary/40 hover:text-primary"
          >
            <FaGithub size={15} />
            GitHub
          </a>
          <a
            href={profile.resume}
            className="inline-flex items-center gap-2 rounded-pill border border-hairline px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-primary/40 hover:text-primary"
          >
            <FiDownload size={15} />
            Download Resume
          </a>
        </div>
      </article>
    </Reveal>
  )
}
