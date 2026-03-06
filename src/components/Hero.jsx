import { useEffect, useState } from 'react'

const pills = ['MERN Stack', 'F1 Fan', 'Universe', 'Poet', 'Movies', 'Stargazer']

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])

  const fade = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ${delay}s ease, transform 0.8s ${delay}s ease`,
  })

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 2.5rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(232,160,32,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(102,136,204,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating star dots */}
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: i % 3 === 0 ? '2px' : '1px',
          height: i % 3 === 0 ? '2px' : '1px',
          borderRadius: '50%',
          background: i % 5 === 0 ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
          top: `${10 + (i * 47) % 80}%`,
          left: `${5 + (i * 37) % 90}%`,
          animation: `twinkle ${2 + (i % 3)}s ${i * 0.3}s ease-in-out infinite alternate`,
        }} />
      ))}

      <style>{`
        @keyframes twinkle { from { opacity: 0.2 } to { opacity: 0.8 } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
      `}</style>

      <div style={{ maxWidth: '1140px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>

        {/* LEFT — text */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <p style={{ ...fade(0.1), fontFamily: 'JetBrains Mono', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            ✦ Developer · Writer · Dreamer · Stargazer
          </p>

          <h1 style={{ ...fade(0.2), fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem, 9vw, 8rem)', fontWeight: 700, lineHeight: 0.9, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            <span style={{ display: 'block', color: 'var(--ink)' }}>Utsav</span>
            <span style={{ display: 'block', color: 'var(--gold)', fontStyle: 'italic' }}>Tripathi</span>
          </h1>

          <p style={{ ...fade(0.3), fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--ink2)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            Building things by day, writing poems by night.
          </p>

          <p style={{ ...fade(0.35), fontSize: '0.9rem', color: 'var(--ink2)', lineHeight: 1.9, maxWidth: '500px', marginBottom: '2rem' }}>
            Full Stack Developer from India. I build production-grade web apps —
            and when the screen turns off, I write about the universe, people,
            and everything in between. Completed <span style={{ color: 'var(--ink)', fontWeight: 500 }}>100 Days Learn in Public</span> on X.
          </p>

          <div style={{ ...fade(0.4), display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {pills.map(p => (
              <span key={p} style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.68rem', letterSpacing: '0.05em',
                padding: '0.35rem 1rem', borderRadius: '999px',
                border: '1px solid var(--border2)', color: 'var(--ink3)',
                background: 'var(--surface)',
              }}>{p}</span>
            ))}
          </div>

          <div style={{ ...fade(0.5), display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-gold">View Projects</a>
            <a href="#poems" className="btn btn-ghost">Read My Poems</a>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div style={{ ...fade(0.4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', animation: 'float 6s ease-in-out infinite' }}>
          <div style={{
            position: 'relative',
            width: '260px',
          }}>
            {/* Decorative rings */}
            <div style={{
              position: 'absolute', inset: '-12px',
              borderRadius: '50% 50% 44% 44%',
              border: '1px solid rgba(232,160,32,0.1)',
            }} />
            <div style={{
              position: 'absolute', inset: '-22px',
              borderRadius: '50% 50% 42% 42%',
              border: '1px solid rgba(232,160,32,0.05)',
            }} />
            {/* Gold gradient frame */}
            <div style={{
              padding: '3px',
              borderRadius: '130px 130px 110px 110px',
              background: 'linear-gradient(160deg, var(--gold) 0%, rgba(232,160,32,0.1) 50%, transparent 100%)',
            }}>
              <img
                src="/photo.png"
                alt="Utsav Tripathi"
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  objectPosition: 'center 10%',
                  borderRadius: '127px 127px 107px 107px',
                  display: 'block',
                }}
              />
            </div>
          </div>
          <span style={{
            fontFamily: 'JetBrains Mono', fontSize: '0.62rem',
            color: 'var(--ink4)', letterSpacing: '0.08em',
          }}>📍 somewhere in the mountains</span>
        </div>

      </div>

      {/* Scroll hint */}
      <div style={{
        ...fade(0.8),
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: 'var(--ink4)', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(var(--gold), transparent)', animation: 'float 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
