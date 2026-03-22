import { Plus, Sparkles, X } from 'lucide-react'
import React, { useState } from 'react'

const SkillsForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState('')

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()])
      setNewSkill('')
    }
  }

  const removeSkill = (i) => onChange(data.filter((_, index) => index !== i))
  const handleKeyPress = (e) => { if (e.key === 'Enter') { e.preventDefault(); addSkill() } }

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-base font-semibold text-slate-900">Skills</h3>
        <p className="text-xs text-slate-500 mt-0.5">Add your technical and soft skills</p>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder="e.g. JavaScript, Leadership, React…"
          className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none"
          value={newSkill} onChange={e => setNewSkill(e.target.value)} onKeyDown={handleKeyPress} />
        <button onClick={addSkill} disabled={!newSkill.trim()}
          className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors disabled:opacity-40">
          <Plus size={14} /> Add
        </button>
      </div>
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, i) => (
            <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-800 border border-indigo-200 rounded-lg text-xs font-medium">
              {skill}
              <button onClick={() => removeSkill(i)} className="hover:bg-indigo-200 rounded-md p-0.5 transition-colors"><X size={11} /></button>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 border-2 border-dashed border-slate-200 rounded-xl text-slate-400">
          <Sparkles size={28} className="mx-auto mb-3 text-slate-300" />
          <p className="text-sm font-medium">No skills added yet</p>
          <p className="text-xs mt-1">Type a skill above and press Enter</p>
        </div>
      )}
      <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg">
        <p className="text-xs text-indigo-700"><strong>Tip:</strong> Aim for 8–12 skills. Mix technical and soft skills.</p>
      </div>
    </div>
  )
}

export default SkillsForm