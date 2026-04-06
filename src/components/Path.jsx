export default function Path() {
  return (
    <section className="section" id="path">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">// chapter vi</p>
          <h2 className="section-title">Two paths, <em>one life.</em></h2>
          <div className="divider" />
        </div>
        <p className="reveal" style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink2)', maxWidth: '520px', lineHeight: 1.8, marginBottom: '4rem' }}>
          Everyone gets handed Path 1 — the safe, predictable one. I'm still figuring out Path 2. But I know it exists, and I know it's mine.
        </p>

        <div className="reveal" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '24px', padding: '3rem 3rem 2.5rem', overflow: 'hidden' }}>

          {/* PATH 1 */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--blue)', border: '1px solid rgba(96,165,250,0.3)', background: 'rgba(96,165,250,0.06)', padding: '0.25rem 0.7rem', borderRadius: '6px' }}>PATH 1</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'var(--ink4)' }}>the expected road</span>
            </div>

            {/* Timeline */}
            <div style={{ position: 'relative', padding: '1rem 0' }}>
              {/* Line */}
              <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '1px', background: 'linear-gradient(90deg, rgba(96,165,250,0.6), rgba(96,165,250,0.15))', transform: 'translateY(-50%)' }} />

              {/* Stops */}
              <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                {[
                  { label: 'Get into\nCollege', done: true },
                  { label: 'Get\nPlacement', done: true },
                  { label: 'Switch to\nBetter Job', done: false },
                  { label: 'Just a\nRegular Guy', done: false, dim: true },
                ].map((stop, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', opacity: stop.dim ? 0.3 : 1 }}>
                    <div style={{
                      width: '12px', height: '12px', borderRadius: '50%',
                      background: stop.done ? 'var(--blue)' : 'var(--bg)',
                      border: `2px solid ${stop.done ? 'var(--blue)' : 'rgba(96,165,250,0.35)'}`,
                      boxShadow: stop.done ? '0 0 12px rgba(96,165,250,0.4)' : 'none',
                      zIndex: 1,
                    }} />
                    <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: stop.done ? 'var(--blue)' : 'var(--ink3)', textAlign: 'center', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{stop.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PATH 2 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--accent)', border: '1px solid rgba(167,139,250,0.3)', background: 'rgba(167,139,250,0.06)', padding: '0.25rem 0.7rem', borderRadius: '6px' }}>PATH 2</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'var(--ink4)' }}>the one I'm choosing</span>
            </div>

            <div style={{ position: 'relative', height: '120px' }}>
              <svg viewBox="0 0 900 100" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Curved dashed path */}
                <path d="M 20 50 C 80 50, 100 80, 200 80 C 320 80, 360 25, 480 25 C 600 25, 660 75, 780 55 C 840 45, 870 35, 900 20"
                  stroke="url(#g1)" strokeWidth="1.5" fill="none" strokeDasharray="7 5" />
                {/* Dots */}
                <circle cx="20" cy="50" r="5" fill="#a78bfa" filter="url(#glow)" />
                <circle cx="350" cy="30" r="4" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0.6" />
                <circle cx="750" cy="58" r="4" fill="none" stroke="#67e8f9" strokeWidth="1" strokeOpacity="0.35" />
                <defs>
                  <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>
              </svg>

              {/* Labels */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%' }}>
                <div style={{ position: 'absolute', left: '0%', top: '55%', transform: 'translateX(-10px) translateY(8px)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--accent)', lineHeight: 1.5 }}>Leave<br />the script</p>
                </div>
                <div style={{ position: 'absolute', left: '37%', top: '5%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--ink2)', lineHeight: 1.5 }}>Build<br />something real</p>
                </div>
                <div style={{ position: 'absolute', left: '80%', top: '40%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--cyan)', opacity: 0.6, lineHeight: 1.5, fontStyle: 'italic' }}>This path will<br />reveal with time ✦</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div style={{ borderTop: '1px solid var(--border)', marginTop: '2rem', paddingTop: '1.75rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink3)' }}>
              "I don't know where Path 2 leads. But I know Path 1 was never really mine."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
