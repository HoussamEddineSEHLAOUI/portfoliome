import { FaGithub } from 'react-icons/fa6'
import { FiArrowRight } from 'react-icons/fi'
import type { Project } from '@/app/data/projects'
import TechnologyTag from './TechnologyTag'
import Reveal from './Reveal'

export default function ProjectPost({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { name, description, highlight, architecture, decisions, technologies, githubUrl, metric } = project

  return (
    <Reveal delay={delay}>
      <article className="rounded-card border border-hairline bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow-sm md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="mt-1 text-sm text-muted">{description}</p>
          </div>
          {metric && (
            <span className="shrink-0 rounded-pill border border-primary/25 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary-text">
              {metric}
            </span>
          )}
        </div>

        {highlight && (
          <p className="mt-4 border-l-2 border-primary/60 pl-3 text-sm leading-relaxed text-white/80">
            {highlight}
          </p>
        )}

        {architecture && architecture.length > 0 && (
          <div className="no-scrollbar mt-4 flex items-center gap-2 overflow-x-auto py-1">
            {architecture.map((piece, i) => (
              <div key={piece} className="flex shrink-0 items-center gap-2">
                <span className="whitespace-nowrap rounded-lg border border-hairline bg-navy/40 px-3 py-1.5 font-mono text-xs text-white/80">
                  {piece}
                </span>
                {i < architecture.length - 1 && <FiArrowRight className="shrink-0 text-muted" size={13} />}
              </div>
            ))}
          </div>
        )}

        {decisions && decisions.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-muted">Key engineering decisions</p>
            <ul className="flex flex-col gap-1.5">
              {decisions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <TechnologyTag key={tech} label={tech} size="sm" />
            ))}
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-pill border border-hairline px-3.5 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:border-primary/40 hover:text-primary"
          >
            <FaGithub size={13} />
            GitHub
          </a>
        </div>
      </article>
    </Reveal>
  )
}
