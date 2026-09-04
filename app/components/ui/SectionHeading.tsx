export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-6 md:mb-8">
      {eyebrow && (
        <p className="mb-1.5 font-mono text-xs uppercase tracking-wider text-primary-text">{eyebrow}</p>
      )}
      <h2 className="text-xl font-bold text-white md:text-2xl">{title}</h2>
      {subtitle && <p className="mt-1.5 text-sm text-muted">{subtitle}</p>}
    </div>
  )
}
