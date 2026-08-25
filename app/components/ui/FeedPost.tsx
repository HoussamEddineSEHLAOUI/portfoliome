import Image from 'next/image'
import type { ReactNode } from 'react'
import { profile } from '@/app/data/profile'
import TechnologyTag from './TechnologyTag'
import InteractionBar from './InteractionBar'

export default function FeedPost({
  badge,
  tags,
  children,
}: {
  badge?: string
  tags?: string[]
  children: ReactNode
}) {
  return (
    <article className="rounded-card border border-hairline bg-surface p-5 transition-colors duration-300 hover:border-white/[0.14] md:p-6">
      <div className="flex items-start gap-3">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-full border border-hairline object-cover object-top"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <span className="text-sm font-semibold text-white">{profile.name}</span>
            <span className="font-mono text-xs text-muted">{profile.handle}</span>
            {badge && (
              <span className="ml-auto rounded-pill border border-hairline bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-muted">
                {badge}
              </span>
            )}
          </div>
          <div className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-white/90">{children}</div>
          {tags && tags.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TechnologyTag key={tag} label={tag} size="sm" />
              ))}
            </div>
          )}
          <InteractionBar />
        </div>
      </div>
    </article>
  )
}
