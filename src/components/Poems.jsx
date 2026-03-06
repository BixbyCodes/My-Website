import { useState } from 'react'

const poems = [
  {
    title: 'Kaun Hoon Mai',
    tag: 'identity',
    preview: 'Kaun hoon main\nAdhura sa, khoya sa hoon main\nBichhadta hoon apno se\nDarta hoon sapno se...',
    full: `Kaun hoon main
Adhura sa, khoya sa hoon main
Bichhadta hoon apno se
Darta hoon sapno se
Kaun hoon main

Dhoondhta hoon uske nazron mein
Dhoondhta hoon patton mein
Dhoondhta hoon un lehron mein
Dhoondhta hoon is jag mein
Dhoondhta hoon har pal mein
Dhoondhta hoon uske sapnon mein
Kaun hoon main

Kisi ka saya hoon
Ya kisi ki niyat
Kisi ka pal hoon
Ya kisi ki shuruaat
Kisi ka paimana hoon
Ya kisi ki shikayat
Hoon kisi ka sapna
Ya hoon main kisi ka apna
Kaun hoon main

Aasmaan mein udta panchi hoon main
Lehron mein behta paani hoon main
Sadkon par bikhri pattiyan hoon main
Shayad bas ek sawaal hoon main —

Kaun hoon main`,
  },
  {
    title: 'I Slept Through the Hours',
    tag: 'dreams',
    preview: 'I slept through the hours.\nI got the calmness but lost the charmness.\nI got the sleep but loop continues...',
    full: `I slept through the hours.
I got the calmness but lost the charmness.
I got the sleep but loop continues.
I got the happiness but lost the daylight shines.
I got the dreams in the night,
But lost the hopes in the daytime.

Lost the time to work through.
Lost the paint while taking the nap.
Nap cost more than the heavy dreams.
Heavy dreams, struggles in the real-world games.
Dreams got lost in the foggy night, that cost more than just a bottle of wine.

Everyone has two faces.
You sleep, another face rise.
He wants to achieve, you want to sleep.
He wants to do, you want to undo.

The loop continues.
And I sleep through the daytime.`,
  },
  {
    title: 'What a Penguin',
    tag: 'courage',
    preview: 'Penguin penguin what a penguin\nPenguin is a hope\nPenguin is a sky\nPenguin got wings to touch the sky...',
    full: `Penguin penguin what a penguin
Penguin is a hope
Penguin is a sky
Penguin got wings to
Touch the sky

Penguin got the herd
To make him cry
Penguin got friends
To make him a lie
Penguin got the air
To touch the sky
Penguin got the little legs
To make him small fry

Penguin sees the mountains
Penguin can't lose his almonds
Penguin got the gods
To make him false
Penguin got the family
To raise the bar
Penguin got the courage
To sit apart

Penguin try to change
To win the mountains
Penguin got small legs
Penguin got small wings
Penguin starts the climb
Lost his half limb`,
  },
  {
    title: 'Its Been Years',
    tag: 'time & loss',
    preview: 'But i am still stuck in the past\nStuck in the past or rust in the past\nThoughts in the dark, or thoughts are dark...',
    full: `But i am still stuck in the past
Stuck in the past or rust in the past
Thoughts in the dark, or thoughts are dark
Past is the past or i am passed

Its been years, still i got in the past
Past been past or i been lost
Who lost whom
I lost her or lost myself
She lost me or she lost her broken chain

Its been years, still i got in the past
Nights are dark or im dark
Thoughts been dark or life getting dark
Life getting dark or im going to dark
Dark is dark or i am dark

She got happiness or i got emptiness
She got friends or i got hunters
She got a boy or i lost every toy
She got everything or i got

Lost or lost, still got in the past
Past or past, still got so much things to lost`,
  },
]

function PoemCard({ poem, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`card reveal delay-${index % 3}`} style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setOpen(!open)}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(232,160,32,0.25)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = open ? 'rgba(232,160,32,0.25)' : 'var(--border)'}
    >
      <div style={{ padding: '1.75rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 600, color: 'var(--ink)' }}>{poem.title}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: 'var(--gold)', border: '1px solid rgba(232,160,32,0.3)', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>{poem.tag}</span>
          <span style={{ color: 'var(--gold)', fontSize: '0.9rem', transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>↓</span>
        </div>
      </div>
      <div style={{ padding: '1.5rem 2rem', maxHeight: open ? '600px' : '100px', overflow: 'hidden', transition: 'max-height 0.5s ease' }}>
        <p style={{
          fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '1rem',
          lineHeight: 2.1, color: 'var(--ink2)', whiteSpace: 'pre-line',
        }}>{open ? poem.full : poem.preview}</p>
      </div>
      {!open && (
        <div style={{ padding: '0.75rem 2rem', borderTop: '1px solid var(--border)' }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>READ FULL POEM →</span>
        </div>
      )}
    </div>
  )
}

export default function Poems() {
  return (
    <section className="section" id="poems">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">// chapter iv</p>
          <h2 className="section-title">Words from <em>the night.</em></h2>
          <div className="divider" />
        </div>
        <p className="reveal" style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink2)', maxWidth: '520px', lineHeight: 1.8, marginBottom: '3rem' }}>
          I write about anything — whatever comes to mind. No filter. Just honest words about identity, time, dreams, and the beautiful mess of being alive.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))', gap: '1.25rem' }}>
          {poems.map((p, i) => <PoemCard key={p.title} poem={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
