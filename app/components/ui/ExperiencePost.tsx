'use client'

import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import type { Experience } from '@/app/data/experiences'
import TechnologyTag from './TechnologyTag'

export default function ExperiencePost({ experience }: { experience: Experience }) {
  const [open, setOpen] = useState(false)
  const { company, role, period, location, current, post, tags, details } = experience

  return (
    <div className="flex gap-3 md:gap-4">
      <div className="flex w-7 shrink-0 flex-col items-center pt-6 md:w-9">
        <span
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
            current ? 'bg-primary shadow-glow-sm' : 'bg-white/20'
          }`}
        />
      </div>

      <article
        className={`min-w-0 flex-1 rounded-card border p-5 transition-colors duration-300 md:p-6 ${
          current
            ? 'border-primary/30 bg-navy/40 shadow-glow-sm hover:border-primary/50'
            : 'border-hairline bg-surface hover:border-white/[0.14]'
        }`}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-mono text-xs uppercase tracking-wide text-primary-text">{company}</span>
          {current && (
            <span className="rounded-pill border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-primary-text">
              Current
            </span>
          )}
        </div>
        <h3 className="mt-1.5 text-base font-semibold text-white md:text-lg">{role}</h3>
        <p className="mt-0.5 text-sm text-muted">
          {period}
          {location ? ` · ${location}` : ''}
        </p>

        <p className="mt-3 text-[15px] leading-relaxed text-white/85">{post}</p>

        {tags.length > 0 && (
          <div className="mt-3.5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TechnologyTag key={tag} label={tag} size="sm" />
            ))}
          </div>
        )}

        {details && details.length > 0 && (
          <div className="mt-4 border-t border-hairline pt-3">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="flex items-center gap-1.5 text-sm text-muted transition-colors duration-200 hover:text-white"
            >
              {open ? 'Hide details' : 'Show details'}
              <FiChevronDown size={14} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {details.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </article>
    </div>
  )
}
