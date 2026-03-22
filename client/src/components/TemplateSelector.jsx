import { Check, Layout } from 'lucide-react'
import React, { useState } from 'react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const templates = [
    { id: 'classic', name: 'Classic', preview: 'Clean, traditional layout with clear sections.' },
    { name: 'Modern', id: 'modern', preview: 'Sleek design with strategic use of accent color.' },
    { id: 'minimal-image', name: 'Minimal + Photo', preview: 'Sidebar layout with profile image support.' },
    { id: 'minimal', name: 'Minimal', preview: 'Ultra-clean, content-forward design.' },
  ]

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-all">
        <Layout size={13} />
        <span className="max-sm:hidden">Template</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-20 bg-white rounded-xl border border-slate-200 shadow-xl p-3 w-64 space-y-2">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">Choose Template</p>
          {templates.map(template => (
            <button key={template.id} onClick={() => { onChange(template.id); setIsOpen(false) }}
              className={`w-full text-left p-3 rounded-lg border transition-all ${selectedTemplate === template.id ? 'border-indigo-400 bg-indigo-50' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-slate-800">{template.name}</span>
                {selectedTemplate === template.id && (
                  <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Check size={11} className="text-white" />
                  </div>
                )}
              </div>
              <p className="text-xs text-slate-400">{template.preview}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default TemplateSelector