import { useState } from 'react'

import certAws from '../assets/cert-aws.png'
import certApna from '../assets/cert-apna.png'
import certUdemy from '../assets/cert-udemy.png'

const certs = [
  {
    number: '01',
    badge: 'AWS Academy',
    issuer: 'Amazon Web Services',
    title: 'Cloud Architecting',
    subtitle: 'Graduate Training Badge',
    meta: ['60 hrs', 'April 2026'],
    link: 'https://www.credly.com/go/xAi5ttJP',
    linkLabel: 'View Badge',
    accent: '#a78bfa',
    image: certAws,
  },
  {
    number: '02',
    badge: 'Apna College',
    issuer: 'Shradha Khapra',
    title: 'Alpha — DSA with Java',
    subtitle: 'Certificate of Completion',
    meta: ['Data Structures & Algorithms'],
    link: null,
    linkLabel: null,
    accent: '#67e8f9',
    image: certApna,
  },
  {
    number: '03',
    badge: 'Udemy',
    issuer: 'Dr. Angela Yu',
    title: 'Full-Stack Web Development Bootcamp',
    subtitle: 'The Complete Course',
    meta: ['61.5 hrs', 'Sept 2025'],
    link: 'https://ude.my/UC-23571fbe-097c-44ca-841a-e7bfcb0e9fbd',
    linkLabel: 'View Certificate',
    accent: '#f472b6',
    image: certUdemy,
  },
]

const achievements = [
  { icon: '⭐', name: '4-Star Java Coder', issuer: 'HackerRank', status: 'done', label: '✓ Achieved' },
  { icon: '💻', name: '120+ Problems Solved', issuer: 'CodeChef', status: 'done', label: '✓ Active' },
  { icon: '🧠', name: '80+ Problems Solved', issuer: 'LeetCode', status: 'done', label: '✓ Active' },
  { icon: '✍️', name: '30+ Technical Articles', issuer: 'Medium — 5000+ Readers', status: 'done', label: '✓ Published' },
  { icon: '📣', name: '100 Days Learn in Public', issuer: 'X (@bixbycodes)', status: 'done', label: '✓ Completed' },
]

export function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">// chapter vii</p>
          <h2 className="section-title">Always <em>learning.</em></h2>
          <div className="divider" />
        </div>

        {/* Certificate cards with images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          {certs.map((c, i) => (
            <CertCard key={i} cert={c} index={i} />
          ))}
        </div>

        {/* Achievements sub-heading */}
        <div className="reveal" style={{ marginBottom: '1.75rem' }}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--ink3)',
            margin: 0,
          }}>
            // achievements & activity
          </p>
        </div>

        {/* Achievements grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.1rem' }}>
          {achievements.map((c, i) => (
            <div
              key={i}
              className={`card reveal delay-${i % 4}`}
              style={{ padding: '1.5rem' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(167,139,250,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: '0.65rem' }}>{c.icon}</div>
              <div style={{ fontWeight: 500, color: 'var(--ink)', fontSize: '0.875rem', marginBottom: '0.3rem', lineHeight: 1.4 }}>{c.name}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--ink3)', marginBottom: '0.75rem' }}>{c.issuer}</div>
              <span style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.62rem',
                padding: '0.2rem 0.6rem', borderRadius: '6px',
                background: c.status === 'done' ? 'rgba(52,211,153,0.08)' : 'rgba(167,139,250,0.08)',
                border: `1px solid ${c.status === 'done' ? 'rgba(52,211,153,0.2)' : 'rgba(167,139,250,0.2)'}`,
                color: c.status === 'done' ? 'var(--green)' : 'var(--accent)',
              }}>{c.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function CertCard({ cert: c, index: i }) {
  const [imgOpen, setImgOpen] = useState(false)

  return (
    <>
      <div
        className={`reveal delay-${i % 4}`}
        style={{
          position: 'relative',
          background: 'var(--surface)',
          border: '1px solid rgba(167,139,250,0.2)',
          borderRadius: '2px',
          overflow: 'hidden',
          transition: 'border-color 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(167,139,250,0.5)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(167,139,250,0.2)'}
      >
        {/* Top accent line */}
        <div style={{
          height: '2px',
          background: `linear-gradient(90deg, ${c.accent}, transparent)`,
          opacity: 0.85,
        }} />

        {/* Certificate image thumbnail */}
        <div
          onClick={() => setImgOpen(true)}
          style={{
            position: 'relative', cursor: 'zoom-in',
            overflow: 'hidden', height: '160px',
            background: 'rgba(0,0,0,0.3)',
          }}
        >
          <img
            src={c.image}
            alt={c.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          {/* Zoom hint */}
          <div style={{
            position: 'absolute', bottom: '0.5rem', right: '0.6rem',
            fontFamily: 'JetBrains Mono', fontSize: '0.55rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            background: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.6)',
            padding: '0.15rem 0.45rem', borderRadius: '3px',
          }}>
            click to expand
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: '1.4rem 1.5rem 1.6rem' }}>

          {/* Watermark number */}
          <span style={{
            position: 'absolute', top: '2.8rem', right: '1.2rem',
            fontSize: '3rem', fontWeight: 300,
            color: 'rgba(167,139,250,0.08)',
            lineHeight: 1, fontStyle: 'italic',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            userSelect: 'none', pointerEvents: 'none',
          }}>
            {c.number}
          </span>

          {/* Badge pill */}
          <span style={{
            display: 'inline-block',
            fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            padding: '0.2rem 0.55rem',
            border: '1px solid rgba(167,139,250,0.25)',
            color: 'rgba(167,139,250,0.7)',
            fontFamily: 'JetBrains Mono, monospace',
            marginBottom: '1rem',
          }}>
            {c.badge}
          </span>

          {/* Issuer */}
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: c.accent, margin: '0 0 0.4rem',
            fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic',
          }}>
            {c.issuer}
          </p>

          {/* Title */}
          <h3 style={{
            fontSize: '1.15rem', fontWeight: 400,
            color: 'var(--ink)', margin: '0 0 0.2rem', lineHeight: 1.3,
            fontFamily: 'Cormorant Garamond, Georgia, serif',
          }}>
            {c.title}
          </h3>

          {/* Subtitle */}
          <p style={{
            fontSize: '0.8rem', color: 'var(--ink3)',
            fontStyle: 'italic', margin: '0 0 0.9rem',
            fontFamily: 'Cormorant Garamond, Georgia, serif',
          }}>
            {c.subtitle}
          </p>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(167,139,250,0.15)', marginBottom: '0.9rem' }} />

          {/* Meta */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: c.link ? '1rem' : 0 }}>
            {c.meta.map((m, j) => (
              <span key={j} style={{
                fontSize: '0.68rem', color: 'var(--ink3)', letterSpacing: '0.06em',
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                {j > 0 && <span style={{ marginRight: '0.4rem', color: 'var(--accent)' }}>·</span>}
                {m}
              </span>
            ))}
          </div>

          {/* Link */}
          {c.link && (
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--accent)', textDecoration: 'none',
                borderBottom: '1px solid rgba(167,139,250,0.35)', paddingBottom: '1px',
                fontFamily: 'JetBrains Mono, monospace',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent2)'
                e.currentTarget.style.borderBottomColor = 'rgba(196,181,253,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.borderBottomColor = 'rgba(167,139,250,0.35)'
              }}
            >
              {c.linkLabel}
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {imgOpen && (
        <div
          onClick={() => setImgOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'zoom-out',
          }}
        >
          <img
            src={c.image}
            alt={c.title}
            style={{
              maxWidth: '90vw', maxHeight: '85vh',
              objectFit: 'contain', borderRadius: '2px',
              border: '1px solid rgba(167,139,250,0.3)',
            }}
          />
          <button
            onClick={() => setImgOpen(false)}
            style={{
              position: 'fixed', top: '1.5rem', right: '1.5rem',
              background: 'none', border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
              width: '2rem', height: '2rem', borderRadius: '50%',
              fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  )
}


// ── Contact section ─────────────────────────────────────────────

const socials = [
  { icon: '✉', label: 'tripathiutsav87@gmail.com', href: 'mailto:tripathiutsav87@gmail.com' },
  { icon: '◈', label: 'linkedin.com/in/BixbyCodes', href: 'https://linkedin.com/in/BixbyCodes' },
  { icon: '𝕏', label: '@bixbycodes', href: 'https://x.com/bixbycodes' },
]

export function Contact() {
  return (
    <section className="section" id="contact" style={{ textAlign: 'center' }}>
      <div className="container">
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <div className="reveal">
            <p className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>// fin</p>
            <h2 className="section-title">Let's <em>connect.</em></h2>
            <div className="divider" style={{ margin: '1.5rem auto' }} />
          </div>
          <p className="reveal delay-1" style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink2)', lineHeight: 1.8, marginBottom: '3rem' }}>
            Whether it's a project, a collaboration, a poem you want to share, or just a conversation about F1 or the universe — I'm always open.
          </p>
          <div className="reveal delay-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {socials.map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.75rem 1.5rem', borderRadius: '12px',
                border: '1px solid var(--border2)', background: 'var(--surface)',
                color: 'var(--ink2)', textDecoration: 'none',
                fontFamily: 'JetBrains Mono', fontSize: '0.75rem',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--ink2)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <span>{s.icon}</span> {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}