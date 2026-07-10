import hero from '../assets/hero.jpg'
import { links } from '../links'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden">
      <img
        src={hero}
        alt="Zach Haywood"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        <p className="mb-3 font-cond text-lg uppercase tracking-[0.35em] text-whiskey">
          Outlaw Country
        </p>
        <h1 className="font-display text-6xl leading-[0.9] text-cream sm:text-8xl md:text-[9rem]">
          ZACH
          <br />
          HAYWOOD
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg text-cream/80">
          Bottom-shelf whiskey, back roads, and middle-of-nowhere towns —
          real songs for people who've lived them.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={links.spotify}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-rust px-7 py-3 font-cond text-lg uppercase tracking-widest text-cream hover:bg-whiskey hover:text-ink transition-colors"
          >
            Listen Now
          </a>
          <a
            href="#music"
            className="rounded-sm border border-cream/40 px-7 py-3 font-cond text-lg uppercase tracking-widest text-cream hover:border-whiskey hover:text-whiskey transition-colors"
          >
            Hear the Songs
          </a>
        </div>
      </div>
    </section>
  )
}
