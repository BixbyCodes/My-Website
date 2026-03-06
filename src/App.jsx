import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Poems from './components/Poems'
import F1 from './components/F1'
import Path from './components/Path'
import { Certifications, Contact } from './components/CertsContact'
import { useReveal } from './useReveal'

export default function App() {
  useReveal()

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Poems />
      <F1 />
      <Path />
      <Certifications />
      <Contact />
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'JetBrains Mono',
        fontSize: '0.65rem',
        color: 'var(--ink4)',
        letterSpacing: '0.05em',
      }}>
        <span style={{ color: 'var(--gold)' }}>Utsav Tripathi</span> · Developer by profession, poet by passion, stargazer by nature ✦
      </footer>
    </div>
  )
}
