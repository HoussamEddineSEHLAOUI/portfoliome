import { skillGroups } from '@/app/data/skills'
import TechnologyTag from './TechnologyTag'
import Reveal from './Reveal'

export default function StackSection() {
  return (
    <div className="rounded-card border border-hairline bg-surface p-5 md:p-6">
      <div className="flex flex-col gap-6">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <TechnologyTag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
