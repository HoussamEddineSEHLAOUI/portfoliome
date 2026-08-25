import { experiences } from '@/app/data/experiences'
import ExperiencePost from './ExperiencePost'
import Reveal from './Reveal'

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute bottom-2 left-[13.5px] top-6 w-px bg-hairline md:left-[17.5px]" aria-hidden="true" />
      <div className="flex flex-col gap-5">
        {experiences.map((experience, i) => (
          <Reveal key={experience.id} delay={i * 0.06}>
            <ExperiencePost experience={experience} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
