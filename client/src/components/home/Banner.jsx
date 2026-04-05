import React from 'react'
import { Sparkles } from 'lucide-react'

const Banner = () => {
  return (
    <div
      className="w-full py-2.5 text-sm text-center text-purple-200 font-medium"
      style={{ background: 'linear-gradient(90deg, #4C1D95, #6D28D9, #4C1D95)' }}
    >
      <p className="flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 text-white">
          <Sparkles size={10} /> New
        </span>
        AI-powered resume enhancement is now live — try it free
      </p>
    </div>
  )
}

export default Banner