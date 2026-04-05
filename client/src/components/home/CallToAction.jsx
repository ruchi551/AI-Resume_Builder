import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section style={{ background: '#0A0A0F', padding: '6rem 2rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
          color: '#F0EFF8',
          lineHeight: 1.1
        }}>
          Ready to land your next role?
        </h2>
        <p style={{
          fontSize: 18,
          color: '#8B8A99',
          maxWidth: 420,
          margin: '0 auto 2.5rem',
          lineHeight: 1.7
        }}>
          Build a recruiter-ready resume in minutes. Free to start, no credit card needed.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/app" style={{
            padding: '14px 32px',
            borderRadius: 10,
            background: '#7B6EF6',
            color: '#fff',
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8
          }}>
            Build My Resume Free <ArrowRight size={16} />
          </Link>
          <a href="#templates" style={{
            padding: '14px 28px',
            borderRadius: 10,
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            color: '#F0EFF8',
            fontSize: 16,
            fontWeight: 500,
            textDecoration: 'none'
          }}>
            View Templates
          </a>
        </div>
        <p style={{ fontSize: 13, color: '#8B8A99', marginTop: 16 }}>
          Joined by 10,000+ professionals · 4.9★ average rating
        </p>
      </div>
    </section>
  )
}

export default CallToAction