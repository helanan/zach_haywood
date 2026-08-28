import logo from '../assets/logo.jpg'

export default function About() {
  return (
    <section id="about" className="relative bg-surface py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[auto_1fr] md:items-center">
        <img
          src={logo}
          alt="Zach Haywood emblem"
          className="mx-auto h-48 w-48 rounded-full border-4 border-whiskey/40 object-cover shadow-2xl md:h-56 md:w-56"
        />
        <div>
          <p className="font-cond text-lg uppercase tracking-[0.35em] text-whiskey">About</p>
          <h2 className="mt-2 font-display text-4xl text-cream sm:text-5xl">
            Zach
          </h2>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            Zach Haywood is a Florida-based singer-songwriter blending raw storytelling,
            Southern roots, and the brass-soaked spirit of New Orleans into a sound built
            for the stage.
          </p>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            With trumpets weaving through guitars and songs about growing older, raising
            hell, losing love, and chasing something bigger, Haywood's music feels both
            familiar and entirely his own.
          </p>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            In 2026, he joined Zach Bryan onstage at Raymond James Stadium in Tampa for a
            performance of <span className="text-whiskey">"Heading South"</span> — a
            defining moment in a journey that's only getting started.
          </p>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            With new music and bigger stages ahead, Zach Haywood is making songs meant to
            be lived — and heard loud.
          </p>
        </div>
      </div>
    </section>
  )
}
