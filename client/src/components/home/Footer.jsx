import React from 'react'
import { FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ background: '#111118', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '4rem 2rem 2rem', color: '#8B8A99', fontFamily: "'Instrument Sans', sans-serif" }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem', marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#F0EFF8', fontFamily: "'Clash Display', sans-serif", fontSize: 20, fontWeight: 600, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, background: '#7B6EF6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={16} color="white" />
              </div>
              BuildResume
            </Link>
            <p style={{ fontSize: 14, color: '#8B8A99', lineHeight: 1.7, maxWidth: 260 }}>
              Helping job seekers build better resumes with AI-powered tools designed for the modern hiring landscape.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8B8A99', marginBottom: 16 }}>Product</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[['Features', '#features'], ['Templates', '#templates'], ['Pricing', '#pricing'], ['Changelog', '#']].map(([label, href]) => (
                <li key={label} style={{ marginBottom: 10 }}>
                  <a href={href} style={{ fontSize: 14, color: '#8B8A99', textDecoration: 'none' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8B8A99', marginBottom: 16 }}>Resources</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Resume Tips', 'Blog', 'Community', 'About'].map(label => (
                <li key={label} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ fontSize: 14, color: '#8B8A99', textDecoration: 'none' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8B8A99', marginBottom: 16 }}>Legal</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map(label => (
                <li key={label} style={{ marginBottom: 10 }}>
                  <a href="#" style={{ fontSize: 14, color: '#8B8A99', textDecoration: 'none' }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: '#8B8A99', flexWrap: 'wrap', gap: 12 }}>
          <span>© 2025 BuildResume. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Twitter', 'LinkedIn', 'GitHub'].map(link => (
              <a key={link} href="#" style={{ color: '#8B8A99', textDecoration: 'none' }}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer