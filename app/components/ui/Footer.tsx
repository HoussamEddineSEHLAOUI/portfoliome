import { profile } from '@/app/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-feed flex-col items-center gap-3 px-4 py-10 text-center md:px-8">
        <div>
          <p className="text-sm font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-muted">{profile.role}</p>
        </div>
        <p className="font-mono text-xs text-muted">{profile.website}</p>
        <nav aria-label="Social links" className="flex items-center gap-2 text-sm text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-primary">
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-primary">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${profile.email}`} className="transition-colors duration-200 hover:text-primary">
            Email
          </a>
        </nav>
        <p className="mt-2 text-xs text-muted/80">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
