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
            Still Country
          </h2>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            Zach Haywood writes the kind of country songs that don't ask permission —
            playing dive bars, back porches, and honky-tonks around St. Augustine, Florida
            and beyond. Tattooed and unpolished, his catalog runs from{' '}
            <span className="text-whiskey">"Bottom Shelf's Fine"</span> to{' '}
            <span className="text-whiskey">"middle of no where"</span> — songs about the
            towns everybody's from and nobody talks about.
          </p>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            No major label polish, no committee-written hooks — just outlaw country made
            for the bottom shelf and the back roads.
          </p>
        </div>
      </div>
    </section>
  )
}
