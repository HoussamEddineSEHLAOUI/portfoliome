import { FiCheck } from 'react-icons/fi'
import type { Certification } from '@/app/data/certifications'
import Reveal from './Reveal'

export default function CertificationPost({ certification, delay = 0 }: { certification: Certification; delay?: number }) {
  const { name, issuer, year, credentialId } = certification
  return (
    <Reveal delay={delay}>
      <article className="flex items-center gap-4 rounded-card border border-hairline bg-surface p-5 transition-colors duration-300 hover:border-white/[0.14] md:p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
          <FiCheck size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-white">{name}</h3>
          <p className="mt-0.5 text-sm text-muted">
            {issuer} · {year}
          </p>
          {credentialId && (
            <p className="mt-1.5 font-mono text-xs text-muted">
              Credential ID <span className="text-white/70">{credentialId}</span>
            </p>
          )}
        </div>
      </article>
    </Reveal>
  )
}
