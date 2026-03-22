import { GraduationCap, Plus, Trash2 } from 'lucide-react'
import React from 'react'

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => onChange([...data, { institution: '', degree: '', field: '', graduation_date: '', gpa: '' }])
  const removeEducation = (i) => onChange(data.filter((_, index) => index !== i))
  const updateEducation = (index, field, value) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated)
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Education</h3>
          <p className="text-xs text-slate-500 mt-0.5">Add your academic background</p>
        </div>
        <button onClick={addEducation} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors">
          <Plus size={13} /> Add Education
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-10 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
          <GraduationCap size={32} className="mx-auto mb-3 text-slate-300" />
          <p className="text-sm font-medium">No education added yet</p>
          <p className="text-xs mt-1">Click "Add Education" to get started</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-xl space-y-3 bg-slate-50/50">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Education {index + 1}</span>
                <button onClick={() => removeEducation(index)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-2.5">
                <input value={education.institution || ''} onChange={e => updateEducation(index, 'institution', e.target.value)} type="text" placeholder="Institution Name" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
                <input value={education.degree || ''} onChange={e => updateEducation(index, 'degree', e.target.value)} type="text" placeholder="Degree (e.g. Bachelor's)" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
                <input value={education.field || ''} onChange={e => updateEducation(index, 'field', e.target.value)} type="text" placeholder="Field of Study" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
                <input value={education.graduation_date || ''} onChange={e => updateEducation(index, 'graduation_date', e.target.value)} type="month" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
              </div>
              <input value={education.gpa || ''} onChange={e => updateEducation(index, 'gpa', e.target.value)} type="text" placeholder="GPA (optional)" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EducationForm