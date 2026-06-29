import Nav from '../Component/Nav.jsx'
import Hero from '../Component/heroComponent/Hero.jsx'
import About from '../Component/About.jsx'
import Skills from '../Component/Skills.jsx'
import Projects from '../Component/Projects.jsx'
import Contact from '../Component/Contact.jsx'
import Footer from '../Component/Footer.jsx'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}