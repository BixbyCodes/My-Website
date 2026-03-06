const stats = [
  { n: '300', label: 'km/h decisions' },
  { n: '∞', label: 'races watched' },
  { n: '5am', label: 'wake up for race' },
  { n: '🏎', label: 'always. f1.' },
]

export default function F1() {
  return (
    <section className="section" id="f1" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 60% at 85% 50%, rgba(224,85,85,0.04), transparent)',
        pointerEvents: 'none',
      }} />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

          <div>
            <div className="reveal">
              <p className="section-label">// chapter v</p>
              <h2 className="section-title">Life at <em>300 km/h.</em></h2>
              <div className="divider" />
            </div>
            <div className="reveal delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "Formula 1 isn't just a sport to me — it's a philosophy. Watching drivers make split-second decisions at 300km/h, calculating risk, reading the track, trusting their instincts — it's a form of intelligence that genuinely fascinates me.",
                "The same way I think about code. Every decision has a consequence. Every millisecond matters. You have to commit fully, or not at all.",
              ].map((t, i) => (
                <p key={i} style={{ color: 'var(--ink2)', fontSize: '0.93rem', lineHeight: 1.9 }}>{t}</p>
              ))}
            </div>
            <div className="reveal delay-2" style={{
              marginTop: '2rem',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderLeft: '3px solid var(--red)', borderRadius: '0 16px 16px 0',
              padding: '1.4rem 1.75rem',
            }}>
              <p style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.7 }}>
                "To finish first, first you have to finish."
              </p>
              <cite style={{ display: 'block', fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--ink3)', marginTop: '0.6rem' }}>
                — The oldest rule in motorsport
              </cite>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map((s, i) => (
              <div key={i} className={`card reveal delay-${i}`} style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.8rem', fontWeight: 900, color: 'var(--red)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.n}</div>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--ink3)', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
