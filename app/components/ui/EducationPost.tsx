import { education } from '@/app/data/certifications'
import TechnologyTag from './TechnologyTag'
import Reveal from './Reveal'

export default function EducationPost() {
  return (
    <Reveal>
      <article className="rounded-card border border-hairline bg-surface p-5 md:p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-primary-text">{education.heading}</p>
        <h3 className="mt-1.5 text-base font-semibold text-white md:text-lg">{education.degree}</h3>
        <p className="mt-0.5 text-sm text-muted">
          {education.school} · {education.location} · {education.year}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-2">
          {education.subjects.map((subject) => (
            <TechnologyTag key={subject} label={subject.replace(/\s+/g, '')} size="sm" />
          ))}
        </div>

        <p className="mt-4 border-t border-hairline pt-3 text-sm text-muted">{education.prep.note}</p>
      </article>
    </Reveal>
  )
}
