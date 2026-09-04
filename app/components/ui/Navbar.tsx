'use client'

import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaBars, FaXmark } from 'react-icons/fa6'
import { profile } from '@/app/data/profile'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-hairline bg-bg/70 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-feed items-center justify-between px-4 md:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label="HS, Houssam Eddine Sehlaoui — home">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-primary/10 font-mono text-xs font-semibold text-primary-text">
            HS
          </span>
          <span className="hidden text-sm font-medium text-white sm:inline">Houssam</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-pill px-3 py-1.5 text-sm transition-colors duration-200 ${
                  active === link.href ? 'text-white' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors duration-200 hover:text-primary"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors duration-200 hover:text-primary"
          >
            <FaLinkedinIn size={16} />
          </a>
          <a
            href={profile.resume}
            className="rounded-pill border border-hairline px-3.5 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:border-primary/40 hover:text-primary"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="text-white md:hidden"
        >
          {menuOpen ? <FaXmark size={20} /> : <FaBars size={18} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-hairline bg-bg/95 px-4 pb-5 pt-2 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-2 py-2.5 text-sm ${
                    active === link.href ? 'text-white' : 'text-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-4 border-t border-hairline pt-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary">
              <FaGithub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary">
              <FaLinkedinIn size={17} />
            </a>
            <a href={profile.resume} className="ml-auto rounded-pill border border-hairline px-3.5 py-1.5 text-xs font-medium text-white">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
