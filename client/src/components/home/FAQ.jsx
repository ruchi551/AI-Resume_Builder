import React, { useState } from 'react'

const faqs = [
  { q: 'Is ResumeAI really free to use?', a: 'Yes — the free plan lets you create up to 3 resumes with all 4 templates, PDF download, and public sharing. No credit card required. AI features like writing enhancement and ATS scoring are part of the Pro plan.' },
  { q: 'What does ATS-optimized mean?', a: 'ATS stands for Applicant Tracking System — software most companies use to filter resumes before a human reads them. Our templates use clean formatting that ATS systems can parse correctly, and our AI helps you use keywords that match job descriptions.' },
  { q: 'Can I upload my existing resume?', a: 'Yes! Upload any PDF resume and our AI will extract all your information — personal details, work experience, education, skills, and projects — and populate the builder automatically. Then you can edit and enhance everything from there.' },
  { q: 'How does the AI photo enhancement work?', a: 'When you upload a profile photo, our AI powered by ImageKit can automatically remove the background, crop to face, and optimize the image for a clean professional look on your resume.' },
  { q: 'Can I share my resume with recruiters?', a: 'Yes — every resume has a public sharing option. When enabled, you get a unique link you can include in emails or on LinkedIn. The live resume always shows your most current version.' },
  { q: 'Which template should I choose?', a: 'For most industries, Modern or Classic works best. If you\'re in a creative field, Minimal or Minimal+Photo gives a distinctive edge. The Executive template (coming soon) is ideal for senior roles with 10+ years experience.' },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div id="faq" style={{ background: '#111118', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#A89BFF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            <span style={{ width: 20, height: 1, background: '#7B6EF6', display: 'inline-block' }} />
            FAQ
            <span style={{ width: 20, height: 1, background: '#7B6EF6', display: 'inline-block' }} />
          </div>
          <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#F0EFF8' }}>
            Common questions
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '20px 0', cursor: 'pointer' }}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
              <span style={{ fontSize: 16, fontWeight: 500, color: '#F0EFF8' }}>{faq.q}</span>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                border: openIndex === i ? '1px solid #7B6EF6' : '1px solid rgba(255,255,255,0.12)',
                background: openIndex === i ? 'rgba(123,110,246,0.2)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, color: '#A89BFF', flexShrink: 0,
                transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                transition: 'all 0.2s'
              }}>+</div>
            </div>
            {openIndex === i && (
              <p style={{ fontSize: 14, color: '#8B8A99', lineHeight: 1.7, marginTop: 12 }}>{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
