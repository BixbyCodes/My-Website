import { useEffect, useState } from 'react'

const pills = ['MERN Stack', 'F1 Fan', 'Universe', 'Movies', 'Stargazer']

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

      {/* Animated orbs */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'orbFloat1 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '0%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(103,232,249,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'orbFloat2 10s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '35%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(244,114,182,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'orbFloat3 12s ease-in-out infinite',
      }} />

      {/* Floating star dots with varied animations */}
      {[...Array(24)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: i % 4 === 0 ? '3px' : i % 3 === 0 ? '2px' : '1px',
          height: i % 4 === 0 ? '3px' : i % 3 === 0 ? '2px' : '1px',
          borderRadius: '50%',
          background: i % 5 === 0 ? 'var(--accent)' : i % 7 === 0 ? 'var(--cyan)' : i % 11 === 0 ? 'var(--red)' : 'rgba(255,255,255,0.35)',
          top: `${8 + (i * 41) % 84}%`,
          left: `${3 + (i * 37) % 94}%`,
          animation: `twinkle ${2 + (i % 4)}s ${i * 0.2}s ease-in-out infinite alternate`,
          boxShadow: i % 4 === 0 ? `0 0 6px ${i % 5 === 0 ? 'rgba(167,139,250,0.5)' : 'rgba(103,232,249,0.4)'}` : 'none',
        }} />
      ))}

      <style>{`
        @keyframes twinkle { from { opacity: 0.15 } to { opacity: 0.85 } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes orbFloat1 { 0%,100% { transform: translate(0,0) } 50% { transform: translate(30px,-20px) } }
        @keyframes orbFloat2 { 0%,100% { transform: translate(0,0) } 50% { transform: translate(-20px,25px) } }
        @keyframes orbFloat3 { 0%,100% { transform: translate(0,0) } 50% { transform: translate(15px,-30px) } }
        @keyframes borderGlow {
          0%,100% { border-color: rgba(167,139,250,0.15); }
          50% { border-color: rgba(103,232,249,0.2); }
        }
      `}</style>

      {/* Main row */}
      <div style={{ maxWidth: '1140px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>

        {/* LEFT — text */}
        <div style={{ flex: '1', minWidth: '300px' }}>

          <p style={{ ...fade(0.1), fontFamily: 'JetBrains Mono', fontSize: '0.65rem', letterSpacing: '0.25em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            ✦ Developer · Writer · Dreamer · Stargazer
          </p>

          <h1 className="glow-text" style={{ ...fade(0.2), fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem, 9vw, 8rem)', fontWeight: 700, lineHeight: 0.9, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            <span style={{ display: 'block', color: 'var(--ink)' }}>Utsav</span>
            <span style={{ display: 'block', fontStyle: 'italic', background: 'linear-gradient(135deg, var(--accent), var(--cyan), var(--accent2))', backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Tripathi</span>
          </h1>

          <style>{`
            @keyframes gradientShift {
              0%,100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>

          <p style={{ ...fade(0.3), fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--ink2)', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            Building things by day, writing poems by night.
          </p>

          <p style={{ ...fade(0.35), fontSize: '0.9rem', color: 'var(--ink2)', lineHeight: 1.9, maxWidth: '500px', marginBottom: '2rem' }}>
            Full Stack Developer from India. I build production-grade web apps —
            and when the screen turns off, I write about the universe, people,
            and everything in between. Completed <span style={{ color: 'var(--ink)', fontWeight: 500 }}>100 Days Learn in Public</span> on X.
          </p>

          <div style={{ ...fade(0.4), display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {pills.map((p, idx) => (
              <span key={p} style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.68rem', letterSpacing: '0.05em',
                padding: '0.35rem 1rem', borderRadius: '999px',
                border: '1px solid var(--border2)', color: 'var(--ink3)',
                background: 'var(--surface)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s',
                animation: `gentleFloat ${3 + (idx % 3) * 0.5}s ${idx * 0.2}s ease-in-out infinite`,
              }}>{p}</span>
            ))}
          </div>

          <div style={{ ...fade(0.5), display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a className="btn btn-gold" href="https://drive.google.com/drive/folders/13UEkroTlHfCKAdC03nU9cFCJbITcP_kB" target="_blank" rel="noopener noreferrer">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              View Résumé
            </a>
            <a href="#projects" className="btn btn-gold">View Projects</a>
            <a href="#certifications" className="btn btn-gold">Certificates</a>
          </div>

        </div>

        {/* RIGHT — photo */}
        <div style={{ ...fade(0.4), display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', animation: 'float 6s ease-in-out infinite' }}>
          <div style={{ position: 'relative', width: '260px' }}>
            {/* Animated orbit rings */}
            <div style={{
              position: 'absolute', inset: '-12px',
              borderRadius: '50% 50% 44% 44%',
              border: '1px solid rgba(167,139,250,0.15)',
              animation: 'borderGlow 4s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', inset: '-22px',
              borderRadius: '50% 50% 42% 42%',
              border: '1px solid rgba(103,232,249,0.08)',
              animation: 'borderGlow 4s 1s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', inset: '-34px',
              borderRadius: '50% 50% 40% 40%',
              border: '1px solid rgba(244,114,182,0.05)',
              animation: 'borderGlow 4s 2s ease-in-out infinite',
            }} />
            <div style={{
              padding: '3px',
              borderRadius: '130px 130px 110px 110px',
              background: 'linear-gradient(160deg, var(--accent) 0%, rgba(103,232,249,0.3) 50%, transparent 100%)',
            }}>
              <img
                src="/photo.png"
                alt="Utsav Tripathi"
                style={{
                  width: '100%', height: '320px',
                  objectFit: 'cover', objectPosition: 'center 10%',
                  borderRadius: '127px 127px 107px 107px',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating accent dots around photo */}
            <div style={{
              position: 'absolute', top: '15%', right: '-18px',
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 10px rgba(167,139,250,0.5)',
              animation: 'pulseDot 3s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: '25%', left: '-14px',
              width: '4px', height: '4px', borderRadius: '50%',
              background: 'var(--cyan)',
              boxShadow: '0 0 8px rgba(103,232,249,0.5)',
              animation: 'pulseDot 3s 1s ease-in-out infinite',
            }} />
          </div>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'var(--ink4)', letterSpacing: '0.08em' }}>
            📍 somewhere in the mountains
          </span>
        </div>

      </div>

      {/* Scroll hint */}
      <div style={{
        ...fade(0.8),
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: 'var(--ink4)', letterSpacing: '0.15em' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(var(--accent), transparent)', animation: 'float 2s ease-in-out infinite' }} />
      </div>

    </section>
  )
}