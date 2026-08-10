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
            Once an up-and-coming baseball player from Athens, Georgia, Zach Haywood
            discovered his true calling in music after a simple YouTube video sparked his
            passion. With raw determination and a guitar in hand, he turned that spark into
            a fire, leading to what is now an unstoppable journey across the country. Known
            for his powerful country vocals and gritty sound, Zach blends heartfelt
            lyrics—often starting as poems—with the energy of a full band performance.
          </p>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-cream/80">
            During the early days of the pandemic, Zach and his band, The Hounds, brought
            music to communities by performing 120 live shows from the back of a pickup
            truck, proving that nothing could silence their drive to connect with people.
            Today, they continue to electrify audiences nationwide with original songs and
            dynamic, high-energy shows complete with pyrotechnics and stage presence that
            leaves fans in awe. Deeply influenced by the indie folk-country scene, Zach
            channels faith and authenticity into every note, inspiring others to embrace
            their dreams and keep moving forward, no matter the odds!
          </p>
        </div>
      </div>
    </section>
  )
}
