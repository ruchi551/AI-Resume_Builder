import React from 'react'
import { Brain, Palette, FileSearch, DownloadCloud, Shield, Zap } from 'lucide-react'

const features = [
  { icon: Brain, emoji: '✨', color: 'rgba(123,110,246,0.15)', title: 'AI Writing Assistant', desc: 'Enhance your summaries and job descriptions with AI that understands what recruiters look for.' },
  { icon: FileSearch, emoji: '📊', color: 'rgba(34,197,94,0.15)', title: 'ATS Optimization', desc: 'Real-time ATS score with specific suggestions to improve your chances of passing automated filters.' },
  { icon: Palette, emoji: '🎨', color: 'rgba(245,158,11,0.15)', title: 'Professional Templates', desc: '4 handcrafted templates — Classic, Modern, Minimal, and Minimal+Photo — all recruiter-approved.' },
  { icon: DownloadCloud, emoji: '📤', color: 'rgba(239,68,68,0.15)', title: 'PDF Upload & Parse', desc: 'Already have a resume? Upload it as PDF and we\'ll extract and organize all your data instantly.' },
  { icon: Zap, emoji: '🔗', color: 'rgba(99,102,241,0.15)', title: 'Public Sharing Link', desc: 'Share a live link to your resume with recruiters — no PDF needed. Toggle visibility anytime.' },
  { icon: Shield, emoji: '🖼️', color: 'rgba(20,184,166,0.15)', title: 'AI Photo Enhancement', desc: 'Upload a profile photo and let AI remove the background and crop perfectly for your resume.' },
]

const Features = () => {
  return (
    <section id="features" style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#A89BFF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
        <span style={{ width: 20, height: 1, background: '#7B6EF6', display: 'inline-block' }} />
        Features
      </div>
      <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', maxWidth: 600, color: '#F0EFF8' }}>
        Everything you need to stand out
      </h2>
      <p style={{ fontSize: 17, color: '#8B8A99', maxWidth: 500, lineHeight: 1.7, marginBottom: '3rem' }}>
        Built for modern job seekers who want results — not just a pretty document.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
        {features.map((f, i) => (
          <div key={i} style={{
            background: '#111118', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, padding: '28px 24px', transition: 'all 0.2s', cursor: 'default'
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 10, background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>
              {f.emoji}
            </div>
            <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 17, fontWeight: 600, marginBottom: 8, color: '#F0EFF8' }}>{f.title}</h3>
            <p style={{ fontSize: 14, color: '#8B8A99', lineHeight: 1.7 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
