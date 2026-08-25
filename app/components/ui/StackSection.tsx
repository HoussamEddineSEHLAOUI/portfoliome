import { skillGroups } from '@/app/data/skills'
import TechnologyTag from './TechnologyTag'
import Reveal from './Reveal'

export default function StackSection() {
  const allTags = skillGroups.flatMap((group) => group.tags)

  return (
    <div className="rounded-card border border-hairline bg-transparent p-5 md:p-6">
      <Reveal>
        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map((tag) => (
            <TechnologyTag key={tag} label={tag} floating />
          ))}
        </div>
      </Reveal>
    </div>
  )
}
