import { links } from '../links'

export default function Connect() {
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
            <div className="mt-8 rounded-md border border-dashed border-cream/20 p-8 text-center">
              <p className="font-cond text-xl uppercase tracking-wide text-cream/70">
                No shows on the books right now
              </p>
              <p className="mt-2 font-body text-muted">
                Follow on Instagram or Facebook — new dates get posted there first.
              </p>
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
