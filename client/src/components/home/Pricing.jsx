import React from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Free', price: '$0', period: '/ forever',
    desc: 'Everything you need to get started building a great resume.',
    features: ['3 resumes', 'All 4 templates', 'PDF download', 'Public sharing link'],
    missing: ['AI writing assistance', 'ATS score checker', 'AI photo enhancement'],
    cta: 'Get Started Free', link: '/app?state=register', primary: false
  },
  {
    name: 'Pro', price: '$9', period: '/ month',
    desc: 'Full AI power for serious job seekers who want results fast.',
    features: ['Unlimited resumes', 'All templates + new ones', 'PDF download', 'Public sharing link', 'AI writing assistance', 'ATS score checker', 'AI photo enhancement'],
    missing: [],
    cta: 'Start Pro — $9/mo', link: '/app?state=register', primary: true, popular: true
  },
  {
    name: 'Team', price: '$29', period: '/ month',
    desc: 'For career coaches and recruiters managing multiple candidates.',
    features: ['Everything in Pro', 'Up to 10 team members', 'Shared template library', 'Analytics dashboard', 'Priority support', 'Custom branding'],
    missing: [],
    cta: 'Contact Sales', link: '/app?state=register', primary: false
  },
]

const Pricing = () => {
  return (
    <section id="pricing" style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#A89BFF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
        <span style={{ width: 20, height: 1, background: '#7B6EF6', display: 'inline-block' }} />
        Pricing
      </div>
      <h2 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', color: '#F0EFF8' }}>
        Simple, transparent pricing
      </h2>
      <p style={{ fontSize: 17, color: '#8B8A99', maxWidth: 440, lineHeight: 1.7, marginBottom: '3rem' }}>
        Start free. Upgrade when you're ready to unlock AI features.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, alignItems: 'start' }}>
        {plans.map((plan, i) => (
          <div key={i} style={{
            background: plan.popular ? 'linear-gradient(160deg, rgba(123,110,246,0.08), #111118)' : '#111118',
            border: plan.popular ? '1px solid #7B6EF6' : '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20, padding: '32px 28px', position: 'relative'
          }}>
            {plan.popular && (
              <div style={{
                position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                background: '#7B6EF6', color: '#fff', padding: '4px 16px',
                borderRadius: 20, fontSize: 11, fontWeight: 700,
                letterSpacing: '0.05em', textTransform: 'uppercase',
                fontFamily: "'Instrument Sans', sans-serif", whiteSpace: 'nowrap'
              }}>Most Popular</div>
            )}
            <div style={{ fontSize: 14, fontWeight: 600, color: '#8B8A99', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, fontFamily: "'Instrument Sans', sans-serif" }}>{plan.name}</div>
            <div style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 44, fontWeight: 700, color: '#F0EFF8', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 4 }}>
              {plan.price} <span style={{ fontSize: 18, color: '#8B8A99', fontWeight: 400 }}>{plan.period}</span>
            </div>
            <p style={{ fontSize: 14, color: '#8B8A99', marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>{plan.desc}</p>
            <ul style={{ listStyle: 'none', marginBottom: 28 }}>
              {plan.features.map((f, j) => (
                <li key={j} style={{ fontSize: 14, color: '#8B8A99', padding: '6px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: '#22C55E', fontWeight: 700, fontSize: 13 }}>✓</span> {f}
                </li>
              ))}
              {plan.missing.map((f, j) => (
                <li key={`m${j}`} style={{ fontSize: 14, color: '#8B8A99', padding: '6px 0', display: 'flex', alignItems: 'center', gap: 10, opacity: 0.4 }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 700, fontSize: 13 }}>✕</span> {f}
                </li>
              ))}
            </ul>
            <Link to={plan.link} style={{
              display: 'block', width: '100%', padding: '12px', borderRadius: 10,
              fontSize: 15, fontWeight: 600, cursor: 'pointer',
              fontFamily: "'Instrument Sans', sans-serif", transition: 'all 0.2s',
              textAlign: 'center', textDecoration: 'none',
              background: plan.primary ? '#7B6EF6' : 'transparent',
              border: plan.primary ? '1px solid #7B6EF6' : '1px solid rgba(255,255,255,0.12)',
              color: plan.primary ? '#fff' : '#F0EFF8'
            }}>{plan.cta}</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
