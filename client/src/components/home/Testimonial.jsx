import React from 'react'
import { Star } from 'lucide-react'

const cardsData = [
  { image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200', name: 'Briar Martin', handle: '@briarmartin', text: 'Landed my dream job at a top tech firm. The AI suggestions were incredibly on point.' },
  { image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200', name: 'Avery Johnson', handle: '@averywrites', text: 'The templates are beautiful and professional. Recruiters noticed the difference immediately.' },
  { image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200', name: 'Jordan Lee', handle: '@jordantalks', text: 'Uploaded my old resume and got a polished version back in under 2 minutes. Incredible.' },
  { image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200', name: 'Marcus Chen', handle: '@marcusdesigns', text: 'The ATS optimization feature alone is worth it. My callback rate doubled after using ResumeAI.' },
  { image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200', name: 'Priya Sharma', handle: '@priyaworks', text: "Clean, fast, professional. I've recommended this to everyone in my network looking for work." },
  { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200', name: 'Derek Walsh', handle: '@derekwalsh', text: 'Finally a resume builder that feels modern. The color customization and templates are top-tier.' },
]

const Card = ({ card }) => (
  <div className="w-72 shrink-0 mx-3 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-200">
    <div className="flex items-center gap-3 mb-3">
      <img className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100" src={card.image} alt={card.name} />
      <div>
        <p className="text-sm font-semibold text-slate-800">{card.name}</p>
        <p className="text-xs text-slate-400">{card.handle}</p>
      </div>
    </div>
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
    </div>
    <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
  </div>
)

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-xs font-semibold mb-4">
          <Star size={12} /> Testimonials
        </div>
        <h2 className="text-4xl font-800 text-slate-900 tracking-tight mb-4" style={{ fontWeight: 800 }}>
          Trusted by job seekers everywhere
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">See what our users say after landing interviews with ResumeAI-crafted resumes.</p>
      </div>

      {/* Row 1 */}
      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        <div className="flex animate-marquee-fwd">
          {[...cardsData, ...cardsData].map((card, i) => <Card key={i} card={card} />)}
        </div>
        <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      </div>

      {/* Row 2 */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        <div className="flex animate-marquee-rev">
          {[...cardsData, ...cardsData].map((card, i) => <Card key={i} card={card} />)}
        </div>
        <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      </div>

      <style>{`
        @keyframes marquee-fwd { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-rev { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee-fwd { animation: marquee-fwd 30s linear infinite; min-width: 200%; }
        .animate-marquee-rev { animation: marquee-rev 30s linear infinite; min-width: 200%; }
      `}</style>
    </section>
  )
}

export default Testimonial
