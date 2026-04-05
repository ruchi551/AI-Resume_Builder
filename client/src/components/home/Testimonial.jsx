import React from 'react'

const testimonials = [
  { initials: 'BM', color: 'rgba(123,110,246,0.2)', textColor: '#A89BFF', name: 'Briar Martin', role: 'Software Engineer at Google', text: '"Landed my dream role at Google after using ResumeAI. The AI suggestions made my descriptions so much more impactful. The ATS score feature alone is worth it."' },
  { initials: 'PS', color: 'rgba(34,197,94,0.15)', textColor: '#22C55E', name: 'Priya Sharma', role: 'Product Manager at Amazon', text: '"Uploaded my old Word doc and got a beautifully formatted version in under 2 minutes. My callback rate doubled in the first week."', highlight: true },
  { initials: 'MC', color: 'rgba(245,158,11,0.15)', textColor: '#F59E0B', name: 'Marcus Chen', role: 'UX Designer at Meta', text: '"The templates look incredibly professional. Every recruiter commented on how clean my resume was. Got 3 offers in 2 months."' },
  { initials: 'AJ', color: 'rgba(239,68,68,0.15)', textColor: '#EF4444', name: 'Avery Johnson', role: 'Data Analyst at Netflix', text: '"ResumeAI helped me switch careers entirely. The AI rewrote my summaries to highlight transferable skills perfectly."' },
  { initials: 'JL', color: 'rgba(99,102,241,0.2)', textColor: '#818CF8', name: 'Jordan Lee', role: 'Frontend Developer at Stripe', text: '"The public sharing link is genius. I just send recruiters my live resume link — no PDF attachment needed. Feels so modern."' },
  { initials: 'DW', color: 'rgba(20,184,166,0.15)', textColor: '#14B8A6', name: 'Derek Walsh', role: 'Backend Engineer at Shopify', text: '"Finally a resume builder that gets it. Clean, fast, and the AI photo background removal saved me so much time."' },
]

const Testimonial = () => {
  return (
    <div style={{ background: '#111118', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#A89BFF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
          <span style={{ width: 20, height: 1, background: '#7B6EF6', display: 'inline-block' }} />
          Testimonials
        </div>
        <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#F0EFF8' }}>
          Real people, real results
        </h2>
        <p style={{ fontSize: 17, color: '#8B8A99', maxWidth: 480, lineHeight: 1.7, marginBottom: '3rem' }}>
          Over 10,000 professionals have used ResumeAI to land interviews and offers.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: '#16161F',
              border: t.highlight ? '1px solid rgba(123,110,246,0.3)' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: 24, transition: 'all 0.2s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = t.highlight ? 'rgba(123,110,246,0.3)' : 'rgba(255,255,255,0.08)'}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#F59E0B', fontSize: 14 }}>★</span>)}
              </div>
              <p style={{ fontSize: 14, color: '#F0EFF8', lineHeight: 1.7, marginBottom: 18 }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: t.color, color: t.textColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#F0EFF8' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#8B8A99' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
