import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800 to-indigo-900 rounded-2xl px-10 py-16 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-indigo-500/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-800 text-white tracking-tight mb-4" style={{ fontWeight: 800 }}>
              Ready to land your next role?
            </h2>
            <p className="text-slate-300 max-w-lg mx-auto mb-8 text-lg">
              Build a professional resume that stands out and gets you past the ATS.
            </p>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-all shadow-lg"
            >
              Get Started Free <ArrowRight size={16} />
            </Link>
            <p className="text-slate-400 text-sm mt-4">No credit card required · Free forever plan</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
