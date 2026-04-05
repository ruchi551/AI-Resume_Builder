import React from 'react'

const templates = [
  {
    id: 'modern', name: 'Modern', desc: 'Colored header, clean sections', badge: 'Popular',
    preview: (
      <div style={{ width: 160, padding: 12 }}>
        <div style={{ height: 40, borderRadius: 4, background: 'linear-gradient(135deg,#7B6EF6,#A89BFF)', marginBottom: 8 }} />
        {[100, 80, 60, null, 100, 80, 60].map((w, i) => w
          ? <div key={i} style={{ height: 6, borderRadius: 3, background: i === 0 ? 'rgba(123,110,246,0.4)' : '#e5e7eb', marginBottom: 5, width: `${w}%` }} />
          : <div key={i} style={{ height: 8, borderRadius: 3, background: '#7B6EF6', marginBottom: 6, width: '40%', marginTop: 8 }} />
        )}
      </div>
    )
  },
  {
    id: 'classic', name: 'Classic', desc: 'Centered header, traditional',
    preview: (
      <div style={{ width: 160, padding: 12 }}>
        <div style={{ textAlign: 'center', marginBottom: 8, paddingBottom: 8, borderBottom: '2px solid #7B6EF6' }}>
          <div style={{ height: 10, borderRadius: 2, background: '#1a1a2e', width: '60%', margin: '0 auto 5px' }} />
          <div style={{ height: 5, borderRadius: 2, background: '#e5e7eb', width: '80%', margin: '0 auto' }} />
        </div>
        {[null, 100, 80, 60, null, 100, 80].map((w, i) => w
          ? <div key={i} style={{ height: i < 4 ? 5 : 5, borderRadius: 3, background: '#e5e7eb', marginBottom: 4, width: `${w}%` }} />
          : <div key={i} style={{ height: 8, borderRadius: 3, background: '#7B6EF6', marginBottom: 6, width: '40%', marginTop: 8 }} />
        )}
      </div>
    )
  },
  {
    id: 'minimal-image', name: 'Minimal + Photo', desc: 'Sidebar layout, profile image', badge: 'With Photo',
    preview: (
      <div style={{ display: 'flex', width: 160, height: 200 }}>
        <div style={{ width: 55, background: '#f8f9fa', padding: '8px 6px', borderRight: '1px solid #e5e7eb', flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#7B6EF6', margin: '0 auto 8px' }} />
          <div style={{ height: 4, background: '#e5e7eb', borderRadius: 2, marginBottom: 3 }} />
          <div style={{ height: 4, background: '#e5e7eb', borderRadius: 2, width: '80%', marginBottom: 3 }} />
          <div style={{ height: 4, background: '#7B6EF6', borderRadius: 2, width: '60%', margin: '8px 0 4px' }} />
          <div style={{ height: 3, background: '#e5e7eb', borderRadius: 2, marginBottom: 2 }} />
          <div style={{ height: 3, background: '#e5e7eb', borderRadius: 2, width: '70%' }} />
        </div>
        <div style={{ flex: 1, padding: 8 }}>
          <div style={{ height: 8, background: '#1a1a2e', borderRadius: 2, width: '80%', marginBottom: 4 }} />
          <div style={{ height: 5, background: '#e5e7eb', borderRadius: 2, width: '50%', marginBottom: 12 }} />
          <div style={{ height: 4, background: '#7B6EF6', borderRadius: 2, width: '40%', marginBottom: 6 }} />
          <div style={{ height: 3, background: '#e5e7eb', borderRadius: 2, marginBottom: 2 }} />
          <div style={{ height: 3, background: '#e5e7eb', borderRadius: 2, width: '80%', marginBottom: 2 }} />
          <div style={{ height: 3, background: '#e5e7eb', borderRadius: 2, width: '60%' }} />
        </div>
      </div>
    )
  },
  {
    id: 'minimal', name: 'Minimal', desc: 'Ultra-clean, content-first',
    preview: (
      <div style={{ width: 160, padding: 12 }}>
        <div style={{ height: 14, background: '#1a1a2e', borderRadius: 2, width: '70%', marginBottom: 6 }} />
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 12 }}>
          {[30, 25, 35].map((w, i) => <div key={i} style={{ height: 3, background: '#e5e7eb', borderRadius: 2, width: `${w}%` }} />)}
        </div>
        {[null, 100, 80, 60, null, 100, 80].map((w, i) => w
          ? <div key={i} style={{ height: 5, borderRadius: 3, background: '#e5e7eb', marginBottom: 4, width: `${w}%` }} />
          : <div key={i} style={{ height: 6, borderRadius: 3, background: '#7B6EF6', marginBottom: 6, width: '30%', marginTop: 8 }} />
        )}
      </div>
    )
  },
  {
    id: 'executive', name: 'Executive', desc: 'For senior professionals', badge: 'Coming Soon', locked: true,
    preview: (
      <div style={{ width: 160, height: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#16161F' }}>
        <div style={{ fontSize: 28 }}>🔒</div>
        <div style={{ fontSize: 12, color: '#8B8A99' }}>Coming soon</div>
      </div>
    )
  },
]

const TemplatesShowcase = () => {
  return (
    <section id="templates" style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto', overflow: 'hidden' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#A89BFF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
        <span style={{ width: 20, height: 1, background: '#7B6EF6', display: 'inline-block' }} />
        Templates
      </div>
      <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#F0EFF8' }}>
        Pick your style
      </h2>
      <p style={{ fontSize: 17, color: '#8B8A99', maxWidth: 480, lineHeight: 1.7, marginBottom: '3rem' }}>
        Every template is designed to pass ATS filters while looking great to human reviewers.
      </p>

      <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 16 }}>
        {templates.map((tpl) => (
          <div key={tpl.id} style={{
            flex: '0 0 220px', background: '#111118',
            border: tpl.locked ? '1px dashed rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
            transition: 'all 0.2s', opacity: tpl.locked ? 0.6 : 1
          }}
            onMouseEnter={e => { if (!tpl.locked) { e.currentTarget.style.borderColor = '#7B6EF6'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(123,110,246,0.2)' } }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = tpl.locked ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div style={{ height: 280, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              {tpl.preview}
            </div>
            <div style={{ padding: '14px 16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {tpl.badge && (
                <div style={{ display: 'inline-block', padding: '2px 8px', background: 'rgba(123,110,246,0.15)', color: '#A89BFF', borderRadius: 4, fontSize: 10, fontWeight: 600, marginBottom: 6 }}>
                  {tpl.badge}
                </div>
              )}
              <h4 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 14, fontWeight: 600, marginBottom: 4, color: '#F0EFF8' }}>{tpl.name}</h4>
              <p style={{ fontSize: 12, color: '#8B8A99' }}>{tpl.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TemplatesShowcase
