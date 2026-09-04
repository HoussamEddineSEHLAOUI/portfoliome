import type { CapitalMarketsTopic } from '@/app/data/capitalMarkets'
import TechnologyTag from './TechnologyTag'
import Reveal from './Reveal'

export default function CapitalMarketsCard({ topic, delay = 0 }: { topic: CapitalMarketsTopic; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-card border border-primary/20 bg-navy/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow md:p-6">
        <p className="font-mono text-[11px] uppercase tracking-wider text-primary-text">{topic.title}</p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/85">{topic.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {topic.tags.map((tag) => (
            <TechnologyTag key={tag} label={tag} size="sm" />
          ))}
        </div>
      </article>
    </Reveal>
  )
}
