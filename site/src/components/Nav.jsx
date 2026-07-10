import { useEffect, useState } from 'react'
import { links } from '../links'

const sections = [
  { id: 'music', label: 'Music' },
  { id: 'about', label: 'About' },
  { id: 'connect', label: 'Connect' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl tracking-wide text-cream hover:text-whiskey transition-colors"
        >
          ZACH HAYWOOD
        </a>

        <ul className="hidden gap-8 font-cond text-lg uppercase tracking-wider text-cream/80 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-whiskey transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={links.spotify}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-sm border border-whiskey px-4 py-2 font-cond text-sm uppercase tracking-widest text-whiskey hover:bg-whiskey hover:text-ink transition-colors md:inline-block"
        >
          Listen Now
        </a>

        <button
          className="text-cream md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-cream mb-1.5" />
          <span className="block h-0.5 w-6 bg-cream mb-1.5" />
          <span className="block h-0.5 w-6 bg-cream" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 font-cond text-lg uppercase tracking-wider">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} onClick={() => setOpen(false)}>
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={links.spotify} target="_blank" rel="noreferrer" className="text-whiskey">
                Listen Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
