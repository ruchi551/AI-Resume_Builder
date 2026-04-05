import React from 'react'

const steps = [
  { num: '1', title: 'Create or Upload', desc: 'Start fresh or upload an existing PDF resume — we\'ll parse everything automatically.' },
  { num: '2', title: 'Fill Your Details', desc: 'Add your experience, education, skills and projects using our guided form sections.' },
  { num: '3', title: 'AI Enhancement', desc: 'Let AI polish your writing — enhance descriptions and professional summary in one click.' },
  { num: '4', title: 'Download & Share', desc: 'Export as PDF or share a live link. Your resume is always up-to-date and accessible.' },
]

const HowItWorks = () => {
  return (
    <div style={{ background: '#111118', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#A89BFF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            <span style={{ width: 20, height: 1, background: '#7B6EF6', display: 'inline-block' }} />
            How it works
            <span style={{ width: 20, height: 1, background: '#7B6EF6', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#F0EFF8', margin: '0 auto 1rem' }}>
            From zero to hired in 4 steps
          </h2>
          <p style={{ fontSize: 17, color: '#8B8A99', maxWidth: 440, margin: '0 auto' }}>No design skills required. No experience writing resumes needed.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 0, marginTop: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 28, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), rgba(255,255,255,0.12), transparent)', pointerEvents: 'none' }} />
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 16px' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: '#16161F', border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Clash Display', sans-serif", fontSize: 20, fontWeight: 700,
                color: '#A89BFF', margin: '0 auto 20px', position: 'relative', zIndex: 1
              }}>{step.num}</div>
              <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#F0EFF8' }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: '#8B8A99', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
