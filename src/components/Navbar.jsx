import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#poems', label: 'poems' },
  { href: '#f1', label: 'f1' },
  { href: '#path', label: 'path' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2.5rem',
      background: scrolled ? 'rgba(8,8,16,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <a href="#" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.4rem',
        fontStyle: 'italic',
        fontWeight: 600,
        color: 'var(--gold)',
        textDecoration: 'none',
        letterSpacing: '-0.01em',
      }}>UT.</a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.href} style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}>
            <a href={l.href} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              color: 'var(--ink3)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--ink3)'}
            >{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
