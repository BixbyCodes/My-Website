const groups = [
  { label: 'Languages', tags: ['JavaScript ES6+', 'Java', 'Python', 'C'] },
  { label: 'Frontend', tags: ['React.js', 'Redux', 'TailwindCSS', 'HTML5', 'CSS3', 'Bootstrap'] },
  { label: 'Backend', tags: ['Node.js', 'Express.js', 'REST APIs', 'WordPress'] },
  { label: 'Databases', tags: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'Firebase', 'Firestore'] },
  { label: 'Security & Auth', tags: ['JWT', 'OAuth 2.0', 'Passport.js', 'Bcrypt', 'CORS'] },
  { label: 'Tools & Platforms', tags: ['Git & GitHub', 'Vercel', 'Render', 'Postman', 'Cloudinary', 'Mapbox'] },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p className="section-label">// chapter ii</p>
          <h2 className="section-title">What I <em>build with.</em></h2>
          <div className="divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {groups.map((g, i) => (
            <div key={g.label} className={`card reveal delay-${i % 4}`}
              style={{ padding: '1.75rem' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(232,160,32,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.1rem' }}>{g.label}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {g.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'JetBrains Mono', fontSize: '0.72rem',
                    padding: '0.3rem 0.8rem', borderRadius: '8px',
                    background: 'var(--bg2)', border: '1px solid var(--border2)',
                    color: 'var(--ink2)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
