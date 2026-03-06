const certs = [
  { icon: '🎓', name: 'Full Stack Web Development', issuer: 'Udemy — Angela Yu', status: 'done', label: '✓ Completed' },
  { icon: '☕', name: 'Data Structures & Algorithms in Java', issuer: 'Apna College', status: 'done', label: '✓ Completed' },
  { icon: '☁️', name: 'Cloud Certification', issuer: 'In Progress', status: 'progress', label: '⟳ In Progress' },
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
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">// chapter vii</p>
          <h2 className="section-title">Always <em>learning.</em></h2>
          <div className="divider" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.1rem' }}>
          {certs.map((c, i) => (
            <div key={i} className={`card reveal delay-${i % 4}`} style={{ padding: '1.5rem' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(232,160,32,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: '0.65rem' }}>{c.icon}</div>
              <div style={{ fontWeight: 500, color: 'var(--ink)', fontSize: '0.875rem', marginBottom: '0.3rem', lineHeight: 1.4 }}>{c.name}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--ink3)', marginBottom: '0.75rem' }}>{c.issuer}</div>
              <span style={{
                fontFamily: 'JetBrains Mono', fontSize: '0.62rem',
                padding: '0.2rem 0.6rem', borderRadius: '6px',
                background: c.status === 'done' ? 'rgba(80,200,120,0.08)' : 'rgba(232,160,32,0.08)',
                border: `1px solid ${c.status === 'done' ? 'rgba(80,200,120,0.2)' : 'rgba(232,160,32,0.2)'}`,
                color: c.status === 'done' ? 'var(--green)' : 'var(--gold)',
              }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
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
