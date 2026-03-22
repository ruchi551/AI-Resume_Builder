import { Check, Palette } from 'lucide-react'
import React, { useState } from 'react'

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: 'Indigo', value: '#4F46E5' },
    { name: 'Violet', value: '#7C3AED' },
    { name: 'Blue', value: '#2563EB' },
    { name: 'Sky', value: '#0284C7' },
    { name: 'Teal', value: '#0F766E' },
    { name: 'Rose', value: '#E11D48' },
    { name: 'Amber', value: '#D97706' },
    { name: 'Slate', value: '#475569' },
    { name: 'Navy', value: '#1E3A5F' },
    { name: 'Black', value: '#0F172A' },
  ]
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-violet-700 bg-violet-50 hover:bg-violet-100 rounded-lg border border-violet-200 transition-all">
        <Palette size={13} />
        <span className="max-sm:hidden">Color</span>
        <div className="w-3.5 h-3.5 rounded-full border border-white shadow-sm" style={{ background: selectedColor }} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-20 bg-white rounded-xl border border-slate-200 shadow-xl p-3 w-56">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-1">Accent Color</p>
          <div className="grid grid-cols-5 gap-2">
            {colors.map(color => (
              <button key={color.value} title={color.name} onClick={() => { onChange(color.value); setIsOpen(false) }}
                className="relative w-9 h-9 rounded-lg border-2 transition-all hover:scale-110"
                style={{ background: color.value, borderColor: selectedColor === color.value ? '#0F172A' : 'transparent' }}>
                {selectedColor === color.value && <Check size={14} className="absolute inset-0 m-auto text-white" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ColorPicker