export default function TechnologyTag({
  label,
  size = 'md',
  floating = false,
}: {
  label: string
  size?: 'sm' | 'md'
  floating?: boolean
}) {
  const sizing = size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
  const className = `inline-flex shrink-0 items-center rounded-pill border border-hairline bg-white/[0.02] font-mono ${sizing} text-muted transition-colors duration-200 hover:border-primary/40 hover:text-primary ${
    floating ? 'hover:animate-float-bounce' : ''
  }`

  return <span className={className}>#{label}</span>
}
