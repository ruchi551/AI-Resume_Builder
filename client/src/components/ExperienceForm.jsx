import { Briefcase, Loader2, Plus, Sparkles, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ExperienceForm = ({ data, onChange }) => {
  const { token } = useSelector(state => state.auth)
  const [generatingIndex, setGeneratingIndex] = useState(-1)

  const addExperience = () => onChange([...data, { company: '', position: '', start_date: '', end_date: '', description: '', is_current: false }])
  const removeExperience = (i) => onChange(data.filter((_, index) => index !== i))
  const updateExperience = (index, field, value) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated)
  }

  const generateDescription = async (index) => {
    setGeneratingIndex(index)
    const exp = data[index]
    const prompt = `enhance this job description ${exp.description} for the position of ${exp.position} at ${exp.company}.`
    try {
      const { data: res } = await api.post('api/ai/enhance-job-desc', { userContent: prompt }, { headers: { Authorization: token } })
      updateExperience(index, 'description', res.enhancedContent)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setGeneratingIndex(-1)
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Professional Experience</h3>
          <p className="text-xs text-slate-500 mt-0.5">Add your work history</p>
        </div>
        <button onClick={addExperience} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors">
          <Plus size={13} /> Add Experience
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-10 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
          <Briefcase size={32} className="mx-auto mb-3 text-slate-300" />
          <p className="text-sm font-medium">No experience added yet</p>
          <p className="text-xs mt-1">Click "Add Experience" to get started</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((experience, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-xl space-y-3 bg-slate-50/50">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Experience {index + 1}</span>
                <button onClick={() => removeExperience(index)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-2.5">
                <input value={experience.company || ''} onChange={e => updateExperience(index, 'company', e.target.value)} type="text" placeholder="Company Name" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
                <input value={experience.position || ''} onChange={e => updateExperience(index, 'position', e.target.value)} type="text" placeholder="Job Title" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
                <input value={experience.start_date || ''} onChange={e => updateExperience(index, 'start_date', e.target.value)} type="month" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
                <input value={experience.end_date || ''} onChange={e => updateExperience(index, 'end_date', e.target.value)} type="month" disabled={experience.is_current} className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white disabled:bg-slate-100 disabled:text-slate-400" />
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={experience.is_current || false} onChange={e => updateExperience(index, 'is_current', e.target.checked)} className="rounded border-slate-300 text-indigo-600" />
                <span className="text-xs text-slate-600">Currently working here</span>
              </label>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-slate-600">Job Description</label>
                  <button onClick={() => generateDescription(index)} disabled={generatingIndex === index || !experience.position || !experience.company}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 disabled:opacity-40 transition-colors">
                    {generatingIndex === index ? <Loader2 size={11} className="animate-spin" /> : <Sparkles size={11} />}
                    AI Enhance
                  </button>
                </div>
                <textarea value={experience.description || ''} onChange={e => updateExperience(index, 'description', e.target.value)} rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white resize-none"
                  placeholder="Describe your responsibilities and achievements…" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceForm