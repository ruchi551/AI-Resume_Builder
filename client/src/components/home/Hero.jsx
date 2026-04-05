import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

const Hero = () => {
  const { user } = useSelector((state) => state.auth)
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div style={{ background: '#0A0A0F', color: '#F0EFF8', fontFamily: "'Instrument Sans', sans-serif" }}>

      {/* NAVBAR */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(10,10,15,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0 2rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#F0EFF8', fontFamily: "'Clash Display', sans-serif", fontSize: '20px', fontWeight: 600 }}>
          <div style={{ width: 32, height: 32, background: '#7B6EF6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          BuildResume
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[['Features', '#features'], ['Templates', '#templates'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => (
            <a key={label} href={href} style={{ color: '#8B8A99', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#F0EFF8'}
              onMouseLeave={e => e.target.style.color = '#8B8A99'}>
              {label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {!user ? (
            <>
              <Link to="/app?state=login" className="hidden md:block" style={{
                padding: '8px 18px', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8, background: 'transparent', color: '#F0EFF8',
                fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s'
              }}>Sign in</Link>
              <Link to="/app?state=register" style={{
                padding: '8px 20px', borderRadius: 8, background: '#7B6EF6',
                color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none',
                border: 'none', transition: 'all 0.2s'
              }}>Get Started Free</Link>
            </>
          ) : (
            <Link to="/app" style={{
              padding: '8px 20px', borderRadius: 8, background: '#7B6EF6',
              color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none'
            }}>Dashboard</Link>
          )}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}
            style={{ padding: 8, background: 'transparent', border: 'none', color: '#F0EFF8', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, background: '#0A0A0F', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
          {[['Features', '#features'], ['Templates', '#templates'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              style={{ color: '#F0EFF8', fontSize: 20, fontWeight: 600, textDecoration: 'none', fontFamily: "'Clash Display', sans-serif" }}>{label}</a>
          ))}
          {!user ? (
            <>
              <Link to="/app?state=login" onClick={() => setMenuOpen(false)} style={{ color: '#8B8A99', fontSize: 16, textDecoration: 'none' }}>Sign in</Link>
              <Link to="/app?state=register" onClick={() => setMenuOpen(false)} style={{ padding: '12px 32px', background: '#7B6EF6', color: '#fff', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>Get Started Free</Link>
            </>
          ) : (
            <Link to="/app" onClick={() => setMenuOpen(false)} style={{ padding: '12px 32px', background: '#7B6EF6', color: '#fff', borderRadius: 10, fontWeight: 600, textDecoration: 'none' }}>Dashboard</Link>
          )}
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 'none', color: '#F0EFF8', fontSize: 28, cursor: 'pointer' }}>×</button>
        </div>
      )}

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 2rem 4rem', position: 'relative' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 16px', background: 'rgba(123,110,246,0.12)',
          border: '1px solid rgba(123,110,246,0.3)', borderRadius: 100,
          fontSize: 13, color: '#A89BFF', fontWeight: 500, marginBottom: '2rem'
        }}>
          <span style={{ width: 6, height: 6, background: '#7B6EF6', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Trusted by 10,000+ job seekers
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 700, letterSpacing: '-0.03em',
          maxWidth: 860, marginBottom: '1.5rem', lineHeight: 1.08, color: '#F0EFF8'
        }}>
          The resume builder that{' '}
          <span style={{
            background: 'linear-gradient(135deg, #A89BFF, #C4B5FD)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>gets you hired faster</span>
        </h1>

        <p style={{ fontSize: 18, color: '#8B8A99', maxWidth: 520, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Create a polished, ATS-optimized resume in minutes with AI assistance, beautiful templates, and real-time preview.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/app" style={{
            padding: '14px 32px', borderRadius: 10, background: '#7B6EF6',
            color: '#fff', fontSize: 16, fontWeight: 600, textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 8, border: 'none', transition: 'all 0.2s'
          }}>
            <Zap size={16} /> Build My Resume — It's Free
          </Link>
          <a href="#templates" style={{
            padding: '14px 28px', borderRadius: 10, background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)', color: '#F0EFF8',
            fontSize: 16, fontWeight: 500, textDecoration: 'none', transition: 'all 0.2s'
          }}>See Templates</a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#8B8A99', fontSize: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
          <span><strong style={{ color: '#F0EFF8' }}>4.9★</strong> rating</span>
          <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.12)' }} />
          <span><strong style={{ color: '#F0EFF8' }}>94%</strong> ATS pass rate</span>
          <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.12)' }} />
          <span>No credit card needed</span>
          <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.12)' }} />
          <span><strong style={{ color: '#F0EFF8' }}>2 min</strong> to build</span>
        </div>

        {/* RESUME MOCKUP */}
        <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          {/* ATS Badge */}
          <div style={{
            position: 'absolute', bottom: 40, left: -10, zIndex: 10,
            background: '#111118', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 12, padding: '14px 18px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
          }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#22C55E', fontFamily: "'Clash Display', sans-serif", lineHeight: 1 }}>94%</div>
            <div style={{ fontSize: 11, color: '#8B8A99', marginTop: 2 }}>ATS Score</div>
          </div>
          {/* AI Badge */}
          <div style={{
            position: 'absolute', top: 40, right: -10, zIndex: 10,
            background: '#111118', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 12, padding: '12px 16px',
            display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
          }}>
            <div style={{ width: 32, height: 32, background: 'rgba(123,110,246,0.2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✨</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#F0EFF8' }}>AI Enhanced</div>
              <div style={{ fontSize: 11, color: '#8B8A99' }}>Summary improved</div>
            </div>
          </div>

          {/* Window */}
          <div style={{
            background: '#111118', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)'
          }}>
            {/* Title bar */}
            <div style={{ background: '#16161F', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28CA41', display: 'inline-block' }} />
              <span style={{ flex: 1, textAlign: 'center', fontSize: 12, color: '#8B8A99' }}>BuildResume Builder</span>
            </div>
            {/* Content */}
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: 460 }}>
              {/* Sidebar */}
              <div style={{ background: '#16161F', borderRight: '1px solid rgba(255,255,255,0.08)', padding: '24px 20px' }}>
                <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8B8A99', marginBottom: 16, fontWeight: 600 }}>Sections</p>
                {[['👤', 'Personal Info', true], ['📄', 'Summary', false], ['💼', 'Experience', false], ['🎓', 'Education', false], ['🚀', 'Projects', false], ['⚡', 'Skills', false]].map(([icon, label, active]) => (
                  <div key={label} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 10px', borderRadius: 8, marginBottom: 4,
                    fontSize: 13, cursor: 'pointer',
                    background: active ? 'rgba(123,110,246,0.15)' : 'transparent',
                    color: active ? '#A89BFF' : '#8B8A99'
                  }}>
                    <span style={{ width: 28, height: 28, borderRadius: 6, background: active ? 'rgba(123,110,246,0.2)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{icon}</span>
                    {label}
                  </div>
                ))}
                <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8B8A99', marginBottom: 12, fontWeight: 600 }}>Template</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <div style={{ width: 36, height: 44, background: 'rgba(123,110,246,0.3)', border: '2px solid #7B6EF6', borderRadius: 6 }} />
                    {[1, 2, 3].map(i => <div key={i} style={{ width: 36, height: 44, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6 }} />)}
                  </div>
                </div>
              </div>
              {/* Resume preview (white) */}
              <div style={{ background: '#fff', padding: '32px 28px', textAlign: 'left' }}>
                <div style={{ textAlign: 'center', paddingBottom: 20, borderBottom: '2px solid #7B6EF6', marginBottom: 20 }}>
                  <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 22, color: '#1a1a2e', fontWeight: 700, marginBottom: 4 }}>Alex Johnson</div>
                  <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>Senior Full Stack Developer</div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: 12, fontSize: 10, color: '#888', flexWrap: 'wrap' }}>
                    <span>alex@example.com</span><span>+1 234 567 890</span><span>San Francisco, CA</span>
                  </div>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7B6EF6', borderBottom: '1px solid rgba(123,110,246,0.3)', paddingBottom: 4, marginBottom: 10, fontFamily: "'Clash Display', sans-serif" }}>Professional Summary</div>
                <p style={{ fontSize: 10, color: '#555', lineHeight: 1.6, marginBottom: 16 }}>Results-driven Full Stack Developer with 5+ years building scalable web applications. Delivered solutions that increased user engagement by 40%.</p>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7B6EF6', borderBottom: '1px solid rgba(123,110,246,0.3)', paddingBottom: 4, marginBottom: 10, fontFamily: "'Clash Display', sans-serif" }}>Experience</div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#1a1a2e', fontFamily: "'Clash Display', sans-serif" }}>Senior Full Stack Developer</span>
                    <span style={{ fontSize: 9, color: '#999' }}>Jun 2023 — Present</span>
                  </div>
                  <div style={{ fontSize: 10, color: '#555', marginBottom: 3 }}>TechCorp Inc. · San Francisco</div>
                  <div style={{ fontSize: 9, color: '#777', lineHeight: 1.5 }}>Led development of microservices serving 2M+ users. Reduced API latency by 35%.</div>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7B6EF6', borderBottom: '1px solid rgba(123,110,246,0.3)', paddingBottom: 4, marginBottom: 10, marginTop: 16, fontFamily: "'Clash Display', sans-serif" }}>Skills</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map(s => (
                    <span key={s} style={{ padding: '3px 10px', background: 'rgba(123,110,246,0.1)', color: '#534AB7', borderRadius: 20, fontSize: 9, fontWeight: 600, border: '1px solid rgba(123,110,246,0.2)' }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY LOGOS */}
      <div style={{ padding: '3.5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <p style={{ fontSize: 12, color: '#8B8A99', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1.5rem' }}>Candidates hired at top companies</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.4 }}>
          {['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Netflix'].map(co => (
            <span key={co} style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 18, fontWeight: 600, color: '#F0EFF8', letterSpacing: '-0.02em' }}>{co}</span>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Instrument+Sans:wght@400;500;600&display=swap');
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </div>
  )
}

export default Hero
