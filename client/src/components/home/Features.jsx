import React from 'react'
import { Zap, Brain, Shield, DownloadCloud, Palette, FileSearch } from 'lucide-react'

const features = [
  {
    icon: Brain,
    color: 'indigo',
    title: 'AI-Powered Writing',
    desc: 'Intelligent suggestions enhance your job descriptions, summaries, and skills automatically.',
  },
  {
    icon: Palette,
    color: 'violet',
    title: 'Professional Templates',
    desc: 'Choose from handcrafted templates designed to impress modern hiring teams.',
  },
  {
    icon: FileSearch,
    color: 'sky',
    title: 'ATS Optimization',
    desc: 'Ensure your resume passes applicant tracking systems with smart keyword guidance.',
  },
  {
    icon: DownloadCloud,
    color: 'cyan',
    title: 'One-Click Export',
    desc: 'Download pixel-perfect PDFs ready to send to any recruiter or job portal.',
  },
  {
    icon: Shield,
    color: 'slate',
    title: 'Secure & Private',
    desc: 'Your data is encrypted and never shared. You own your resume, always.',
  },
  {
    icon: Zap,
    color: 'amber',
    title: 'Instant Upload',
    desc: 'Upload an existing resume and let AI parse and improve it in seconds.',
  },
]

const colorMap = {
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-100', hover: 'hover:border-indigo-300 hover:shadow-indigo-50' },
  violet: { bg: 'bg-violet-50', icon: 'text-violet-600', border: 'border-violet-100', hover: 'hover:border-violet-300 hover:shadow-violet-50' },
  sky: { bg: 'bg-sky-50', icon: 'text-sky-600', border: 'border-sky-100', hover: 'hover:border-sky-300 hover:shadow-sky-50' },
  cyan: { bg: 'bg-cyan-50', icon: 'text-cyan-600', border: 'border-cyan-100', hover: 'hover:border-cyan-300 hover:shadow-cyan-50' },
  slate: { bg: 'bg-slate-100', icon: 'text-slate-600', border: 'border-slate-200', hover: 'hover:border-slate-300 hover:shadow-slate-50' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-100', hover: 'hover:border-amber-300 hover:shadow-amber-50' },
}

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-xs font-semibold mb-4">
            <Zap size={12} /> Everything You Need
          </div>
          <h2 className="text-4xl font-800 text-slate-900 tracking-tight mb-4" style={{ fontWeight: 800 }}>
            Built for serious job seekers
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Every tool you need to craft a resume that stands out — powered by AI, refined by design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const c = colorMap[f.color]
            const Icon = f.icon
            return (
              <div
                key={i}
                className={`group p-6 rounded-xl border ${c.border} ${c.hover} hover:shadow-md transition-all duration-200 bg-white`}
              >
                <div className={`w-10 h-10 ${c.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={20} className={c.icon} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
