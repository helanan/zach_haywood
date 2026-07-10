import { links, tracks } from '../links'

const artModules = import.meta.glob('../assets/tracks/*.jpg', { eager: true, import: 'default' })

function artUrl(filename) {
  const match = Object.entries(artModules).find(([path]) => path.endsWith(filename))
  return match?.[1]
}

export default function Music() {
  return (
    <section id="music" className="bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-cond text-lg uppercase tracking-[0.35em] text-whiskey">Music</p>
        <h2 className="mt-2 font-display text-4xl text-cream sm:text-5xl">Discography</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <a
              key={track.title}
              href={links.spotify}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-md border border-white/10 bg-surface transition-transform hover:-translate-y-1"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={artUrl(track.art)}
                  alt={track.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-cond text-2xl uppercase tracking-wide text-cream">
                  {track.title}
                </h3>
                <p className="mt-1 font-body text-sm uppercase tracking-widest text-muted">
                  {track.type}
                  {track.year && ` · ${track.year}`}
                </p>
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-cond text-xs uppercase tracking-widest text-whiskey opacity-0 transition-opacity group-hover:opacity-100">
                Listen
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={links.spotify}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-rust px-7 py-3 font-cond text-lg uppercase tracking-widest text-cream hover:bg-whiskey hover:text-ink transition-colors"
          >
            Spotify
          </a>
          <a
            href={links.appleMusic}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-cream/40 px-7 py-3 font-cond text-lg uppercase tracking-widest text-cream hover:border-whiskey hover:text-whiskey transition-colors"
          >
            Apple Music
          </a>
        </div>
      </div>
    </section>
  )
}
