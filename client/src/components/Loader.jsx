import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 gap-4">
      <div className="w-10 h-10 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
      <p className="text-sm text-slate-400 font-medium">Loading…</p>
    </div>
  )
}

export default Loader