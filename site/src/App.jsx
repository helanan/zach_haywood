import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Music from './components/Music'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grain-overlay" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Music />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
