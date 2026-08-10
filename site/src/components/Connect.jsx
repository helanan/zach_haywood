import { useEffect, useState } from 'react'
import { links } from '../links'
import threshersPoster from '../assets/tour/threshers-album-release.jpg'
import countryFestPoster from '../assets/tour/st-pete-country-fest.jpg'

const shows = [
  {
    date: 'Fri, Sept 4',
    title: 'Album Release Party — Post-Game Concert',
    venue: 'BayCare Ballpark, Clearwater, FL',
    details: 'Threshers vs. Fort Myers Mussels — Gates open 5:30pm, First pitch 6:30pm',
    poster: threshersPoster,
  },
  {
    date: 'Sun, Nov 22',
    title: 'St. Pete Country Fest 2026',
    venue: 'Vinoy Park, St. Petersburg, FL',
    details: 'Nov 20–22 — headlined by Bailey Zimmerman, Riley Green & Koe Wetzel',
    poster: countryFestPoster,
  },
]

export default function Connect() {
  const [openPoster, setOpenPoster] = useState(null)

  useEffect(() => {
    if (!openPoster) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpenPoster(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [openPoster])

  return (
    <section id="connect" className="relative bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="font-cond text-lg uppercase tracking-[0.35em] text-whiskey">
              On the Road
            </p>
            <h2 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
              Tour Dates
            </h2>
            <div className="mt-8 space-y-6">
              {shows.map((show) => (
                <div
                  key={show.title}
                  className="flex gap-5 rounded-md border border-cream/20 p-5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenPoster(show)}
                    className="flex-none cursor-zoom-in"
                    aria-label={`View larger poster for ${show.title}`}
                  >
                    <img
                      src={show.poster}
                      alt={show.title}
                      className="h-32 w-24 rounded object-cover object-top transition hover:opacity-80"
                    />
                  </button>
                  <div>
                    <p className="font-cond text-lg uppercase tracking-widest text-whiskey">
                      {show.date}
                    </p>
                    <p className="mt-1 font-display text-2xl text-cream">{show.title}</p>
                    <p className="mt-1 font-body text-cream/80">{show.venue}</p>
                    <p className="mt-1 font-body text-sm text-muted">{show.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-cond text-lg uppercase tracking-[0.35em] text-whiskey">Merch</p>
            <h2 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
              Coming Soon
            </h2>
            <div className="mt-8 rounded-md border border-dashed border-cream/20 p-8 text-center">
              <p className="font-cond text-xl uppercase tracking-wide text-cream/70">
                The merch table's still being built
              </p>
              <p className="mt-2 font-body text-muted">
                Check back soon, or follow along for the drop.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-cream/10 pt-16 text-center">
          <p className="font-cond text-lg uppercase tracking-[0.35em] text-whiskey">
            Get in Touch
          </p>
          <h2 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
            Follow Along
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <SocialLink href={links.instagram}>Instagram</SocialLink>
            <SocialLink href={links.facebook}>Facebook</SocialLink>
            <SocialLink href={links.spotify}>Spotify</SocialLink>
            <SocialLink href={links.appleMusic}>Apple Music</SocialLink>
            <SocialLink href={links.email}>Booking</SocialLink>
          </div>
        </div>
      </div>

      {openPoster && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openPoster.title}
          onClick={() => setOpenPoster(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6"
        >
          <button
            type="button"
            onClick={() => setOpenPoster(null)}
            aria-label="Close"
            className="absolute right-6 top-6 font-cond text-3xl text-cream/80 hover:text-whiskey"
          >
            ✕
          </button>
          <img
            src={openPoster.poster}
            alt={openPoster.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-md object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-sm border border-cream/30 px-6 py-3 font-cond text-base uppercase tracking-widest text-cream/90 hover:border-whiskey hover:text-whiskey transition-colors"
    >
      {children}
    </a>
  )
}
