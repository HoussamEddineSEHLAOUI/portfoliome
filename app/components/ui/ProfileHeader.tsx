import Image from 'next/image'
import { FiMapPin, FiArrowRight } from 'react-icons/fi'
import { profile } from '@/app/data/profile'
import TechnologyTag from './TechnologyTag'
import Reveal from './Reveal'

export default function ProfileHeader() {
  return (
    <Reveal className="pt-10 md:pt-14">
      <div className="flex flex-col items-center text-center">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={112}
          height={112}
          priority
          className="h-24 w-24 rounded-full border-2 border-hairline object-cover object-top md:h-28 md:w-28"
        />

        <h1 className="mt-5 text-2xl font-bold text-white md:text-3xl">{profile.name}</h1>
        <p className="mt-0.5 font-mono text-sm text-muted">{profile.handle}</p>
        <p className="mt-3 text-base font-medium text-white/90">{profile.role}</p>

        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{profile.positioning}</p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <FiMapPin size={14} />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {profile.status}
          </span>
        </div>

        <div className="no-scrollbar mt-6 flex max-w-full flex-wrap justify-center gap-2 overflow-x-auto px-4 md:flex-wrap">
          {profile.heroTags.map((tag) => (
            <TechnologyTag key={tag} label={tag} />
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-pill bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary/90"
          >
            View my work
            <FiArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-pill border border-hairline px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-primary/40 hover:text-primary"
          >
            Let&apos;s connect
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-lg grid-cols-2 gap-px overflow-hidden rounded-card border border-hairline bg-hairline md:grid-cols-4">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-3 py-4 text-center">
              <div className="font-mono text-lg font-semibold text-white">{stat.value}</div>
              <div className="mt-0.5 text-[11px] leading-tight text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
