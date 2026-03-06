const projects = [
  {
    num: '01', featured: true,
    name: 'ListHub',
    desc: 'Full-stack community listing platform with CRUD functionality, real-time UI updates, Google OAuth via Passport.js, voting system, comment sections, and dedicated listing detail pages.',
    stats: ['500+ entries', '–35% registration drop-off', '<200ms query time'],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Passport.js', 'JWT'],
    link: 'https://listhub-kdmh.vercel.app',
  },
  {
    num: '02',
    name: 'Wanderlust',
    desc: 'Airbnb-style rental platform supporting 500+ listings with session-based OAuth, Cloudinary image upload, and Mapbox geolocation for interactive property search.',
    stats: ['1000+ concurrent users', '99% uptime', '95% API test coverage'],
    tech: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
    link: 'https://wanderlust-airbnd-clone.onrender.com',
  },
  {
    num: '03',
    name: 'Amazon Clone',
    desc: 'E-commerce platform with 50+ product categories, secure Firebase authentication, and optimized checkout flow reducing cart completion time by 40%.',
    stats: ['99.5% uptime', '–40% cart time', '–30% render time'],
    tech: ['React.js', 'Firebase', 'Context API', 'Firestore'],
    link: 'https://clobe-4c9e5.web.app',
  },
  {
    num: '04',
    name: 'WonderLost',
    desc: 'Real-time stock trading simulation for 5000+ stocks with JWT-secured accounts, React.memo optimization, and Express caching achieving 2.5s load times.',
    stats: ['5000+ stocks', '–40% load time', '200+ secured accounts'],
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'https://wonderlost.onrender.com',
  },
  {
    num: '05',
    name: 'HSS',
    desc: 'Interior design firm client website achieving 95+ Lighthouse mobile score across 5+ screen sizes, with CSS animations and 3 revision cycles delivered on schedule.',
    stats: ['95+ Lighthouse score', '5+ screen sizes', 'Client project'],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p className="section-label">// chapter iii</p>
          <h2 className="section-title">Things I've <em>shipped.</em></h2>
          <div className="divider" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {projects.map((p, i) => (
            <div key={p.num} className={`card reveal delay-${i % 3}`}
              style={{ padding: '2rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.borderColor = 'var(--border2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              {/* Gold left bar on hover */}
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
                background: p.featured ? 'var(--gold)' : 'var(--border2)',
                borderRadius: '0 2px 2px 0',
              }} />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'var(--ink4)', letterSpacing: '0.1em' }}>{p.num}{p.featured ? ' / FEATURED' : ''}</span>
                  {p.featured && <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: 'var(--gold)', border: '1px solid rgba(232,160,32,0.3)', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>★ LIVE</span>}
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.6rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '0.65rem' }}>{p.name}</h3>
                <p style={{ color: 'var(--ink2)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1rem', maxWidth: '580px' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  {p.stats.map(s => <span key={s} style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', padding: '0.22rem 0.7rem', borderRadius: '6px', background: 'var(--gold-dim)', border: '1px solid rgba(232,160,32,0.2)', color: 'var(--gold)' }}>{s}</span>)}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tech.map(t => <span key={t} style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', padding: '0.22rem 0.6rem', borderRadius: '6px', background: 'var(--surface2)', border: '1px solid var(--border2)', color: 'var(--ink3)' }}>{t}</span>)}
                </div>
              </div>

              <a href={p.link} target="_blank" rel="noopener" style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'var(--gold)',
                textDecoration: 'none', padding: '0.5rem 1.1rem',
                border: '1px solid rgba(232,160,32,0.3)', borderRadius: '8px',
                whiteSpace: 'nowrap', alignSelf: 'start', marginTop: '1.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-dim)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
              >Live ↗</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
