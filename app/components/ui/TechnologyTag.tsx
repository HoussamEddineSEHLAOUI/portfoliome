export default function TechnologyTag({
  label,
  size = 'md',
}: {
  label: string
  size?: 'sm' | 'md'
}) {
  const sizing = size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-pill border border-hairline bg-white/[0.02] font-mono ${sizing} text-muted transition-colors duration-200 hover:border-primary/40 hover:text-primary`}
    >
      #{label}
    </span>
  )
}
