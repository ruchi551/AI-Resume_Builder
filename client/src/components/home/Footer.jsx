import React from 'react'
import { FileText } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <FileText size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg">ResumeAI</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Making every job seeker competitive with AI-powered resume tools designed for the modern hiring landscape.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Product</p>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'Features', 'Pricing', 'Templates'].map(link => (
                <li key={link}><a href="/" className="hover:text-indigo-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Resources</p>
            <ul className="space-y-2.5 text-sm">
              {['Blog', 'Community', 'Careers', 'About'].map(link => (
                <li key={link}><a href="/" className="hover:text-indigo-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Legal</p>
            <ul className="space-y-2.5 text-sm">
              {['Privacy', 'Terms', 'Security'].map(link => (
                <li key={link}><a href="/" className="hover:text-indigo-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2025 ResumeAI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[
              { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
              { label: 'Twitter', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
            ].map(icon => (
              <a key={icon.label} href="#" className="hover:text-indigo-400 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
