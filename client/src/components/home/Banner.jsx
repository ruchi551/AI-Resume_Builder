import React from 'react'
import { Sparkles } from 'lucide-react'

const Banner = () => {
  return (
    <div className="w-full py-2.5 text-sm text-center bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-slate-200">
      <p className="flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-500 text-white">
          <Sparkles size={10} /> New
        </span>
        AI-powered resume enhancement is now live
      </p>
    </div>
  )
}

export default Banner
