import { FolderOpen, Plus, Trash2 } from 'lucide-react'
import React from 'react'

const ProjectForm = ({ data, onChange }) => {
  const addProject = () => onChange([...data, { name: '', type: '', description: '' }])
  const removeProject = (i) => onChange(data.filter((_, index) => index !== i))
  const updateProject = (index, field, value) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated)
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Projects</h3>
          <p className="text-xs text-slate-500 mt-0.5">Showcase your notable work</p>
        </div>
        <button onClick={addProject} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors">
          <Plus size={13} /> Add Project
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-10 text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
          <FolderOpen size={32} className="mx-auto mb-3 text-slate-300" />
          <p className="text-sm font-medium">No projects added yet</p>
          <p className="text-xs mt-1">Click "Add Project" to get started</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((project, index) => (
            <div key={index} className="p-4 border border-slate-200 rounded-xl space-y-3 bg-slate-50/50">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Project {index + 1}</span>
                <button onClick={() => removeProject(index)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
              <div className="grid gap-2.5">
                <input value={project.name || ''} onChange={e => updateProject(index, 'name', e.target.value)} type="text" placeholder="Project Name" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
                <input value={project.type || ''} onChange={e => updateProject(index, 'type', e.target.value)} type="text" placeholder="Project Type (e.g. Web App)" className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white" />
                <textarea rows={4} value={project.description || ''} onChange={e => updateProject(index, 'description', e.target.value)}
                  placeholder="Describe your project, technologies used, and impact…"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white resize-none" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectForm