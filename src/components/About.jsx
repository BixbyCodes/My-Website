const interests = [
  
  { icon: '🏎️', title: 'Formula 1', desc: 'Fascinated by how drivers make the right decision at 300km/h. That\'s a kind of intelligence I deeply admire.' },
  { icon: '🌌', title: 'The Universe', desc: 'Stars, astrology, the cosmos — I love everything about this universe and how small yet connected we all are.' },
  { icon: '🌙', title: 'Dreams', desc: 'Dreams have always fascinated me. The way the sleeping mind creates entire worlds — it\'s endlessly beautiful.' },
  { icon: '🎬', title: 'Movies', desc: 'A good film hits different. Cinema captures emotion, time, and human nature in 2 hours flat.' },
  { icon: '📱', title: 'Reels Scrolling', desc: 'After all the code, poems, F1 and stars — sometimes you just scroll. And honestly, that\'s okay too.' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div className="reveal">
              <p className="section-label">// chapter i</p>
              <h2 className="section-title">More than<br /><em>just code.</em></h2>
              <div className="divider" />
            </div>

            <div className="reveal delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {[
                <>I'm a <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Full Stack Developer</strong> with 2+ years of experience building and shipping production-grade web apps. B.Tech CS student at ABES Engineering College, expected 2027.</>,
                <>Published <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>30+ technical articles on Medium</strong> reaching 5000+ developers globally. Completed the <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>100 Days Learn in Public</strong> challenge on <a href="https://x.com/bixbycodes" target="_blank" style={{ color: 'var(--accent)', textDecoration: 'none' }}>X (@bixbycodes)</a>.</>,
                <>But honestly? I'm just someone endlessly curious about the world. I write code the same way I write poems — with intention, with feeling, and with a lot of late nights.</>,
                <>I'm fascinated by <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>how people think</strong>. By dreams. By the fact that we're tiny specks in an infinite universe — and somehow, here we are, building things and telling stories.</>,
              ].map((text, i) => (
                <p key={i} style={{ color: 'var(--ink2)', lineHeight: 1.9, fontSize: '0.93rem' }}>{text}</p>
              ))}
            </div>
          </div>

          {/* Right — interests */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {interests.map((item, i) => (
              <div key={i} className={`card reveal delay-${i % 4}`}
                style={{ padding: '1.4rem', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(167,139,250,0.35)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{item.icon}</div>
                <div style={{ fontFamily: 'Cormorant Garamond', fontSize: '1rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>{item.title}</div>
                <div style={{ fontSize: '0.76rem', color: 'var(--ink3)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}