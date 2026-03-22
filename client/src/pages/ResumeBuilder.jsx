import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Briefcase, ChevronLeft, ChevronRight, Download, Eye, EyeOff, FileText, FolderOpen, GraduationCap, Save, Share2, Sparkles, User } from 'lucide-react'
import PersonalInfoForm from '../components/PersonalInfoForm'
import ResumePreview from '../components/ResumePreview'
import TemplateSelector from '../components/TemplateSelector'
import ColorPicker from '../components/ColorPicker'
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import ProjectForm from '../components/ProjectForm'
import SkillsForm from '../components/SkillsForm'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ResumeBuilder = () => {
  const { resumeId } = useParams()
  const { token } = useSelector(state => state.auth)

  const [resumeData, setResumeData] = useState({
    _id: '', title: '', personal_info: {},
    professional_summary: '', experience: [],
    education: [], project: [], skills: [],
    template: 'classic', accent_color: '#4F46E5', public: false,
  })

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [removeBackground, setRemoveBackground] = useState(false)

  const sections = [
    { id: 'personal', name: 'Personal', icon: User },
    { id: 'summary', name: 'Summary', icon: FileText },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'projects', name: 'Projects', icon: FolderOpen },
    { id: 'skills', name: 'Skills', icon: Sparkles },
  ]

  const activeSection = sections[activeSectionIndex]
  const progress = (activeSectionIndex / (sections.length - 1)) * 100

  const loadExistingResume = async () => {
    try {
      const { data } = await api.get('/api/resumes/get/' + resumeId, { headers: { Authorization: token } })
      if (data.resume) { setResumeData(data.resume); document.title = data.resume.title }
    } catch (error) { console.log(error.message) }
  }

  useEffect(() => { loadExistingResume() }, [])

  const changeResumeVisibility = async () => {
    try {
      const formData = new FormData()
      formData.append('resumeId', resumeId)
      formData.append('resumeData', JSON.stringify({ public: !resumeData.public }))
      const { data } = await api.put('/api/resumes/update', formData, { headers: { Authorization: token } })
      setResumeData({ ...resumeData, public: !resumeData.public })
      toast.success(data.message)
    } catch (error) { console.error(error) }
  }

  const handleShare = () => {
    const url = window.location.href.split('/app/')[0] + '/view/' + resumeId
    if (navigator.share) { navigator.share({ url, text: 'My Resume' }) }
    else { navigator.clipboard.writeText(url); toast.success('Link copied!') }
  }

  const saveResume = async () => {
    try {
      let updated = structuredClone(resumeData)
      if (typeof resumeData.personal_info.image === 'object') delete updated.personal_info.image
      const formData = new FormData()
      formData.append('resumeId', resumeId)
      formData.append('resumeData', JSON.stringify(updated))
      removeBackground && formData.append('removeBackground', 'yes')
      typeof resumeData.personal_info.image === 'object' && formData.append('image', resumeData.personal_info.image)
      const { data } = await api.put('/api/resumes/update', formData, { headers: { Authorization: token } })
      setResumeData(data.resume)
      toast.success(data.message)
    } catch (error) { console.error(error) }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <Link to="/app" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft size={15} /> Back to Dashboard
        </Link>
        <h1 className="text-sm font-semibold text-slate-700 truncate max-w-xs hidden sm:block">
          {resumeData.title || 'Resume Builder'}
        </h1>
        <div className="flex items-center gap-2">
          {resumeData.public && (
            <button onClick={handleShare} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-sky-600 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200 transition-colors">
              <Share2 size={13} /> Share
            </button>
          )}
          <button onClick={changeResumeVisibility} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors">
            {resumeData.public ? <Eye size={13} /> : <EyeOff size={13} />}
            {resumeData.public ? 'Public' : 'Private'}
          </button>
          <button onClick={() => window.print()} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors">
            <Download size={13} /> Download
          </button>
          <button onClick={() => toast.promise(saveResume(), { loading: 'Saving…', success: 'Saved!', error: 'Error saving' })} className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm">
            <Save size={13} /> Save
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left - Form Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Progress bar */}
              <div className="h-1 bg-slate-100">
                <div className="h-full bg-indigo-600 transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>

              <div className="p-5">
                {/* Section tabs */}
                <div className="flex items-center gap-1 mb-5 overflow-x-auto pb-1">
                  {sections.map((section, i) => {
                    const Icon = section.icon
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSectionIndex(i)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${activeSectionIndex === i
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                        }`}
                      >
                        <Icon size={12} />
                        {section.name}
                      </button>
                    )
                  })}
                </div>

                {/* Toolbar */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <TemplateSelector selectedTemplate={resumeData.template} onChange={template => setResumeData(prev => ({ ...prev, template }))} />
                    <ColorPicker selectedColor={resumeData.accent_color} onChange={color => setResumeData(prev => ({ ...prev, accent_color: color }))} />
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => setActiveSectionIndex(p => Math.max(p - 1, 0))} disabled={activeSectionIndex === 0} className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all disabled:opacity-30">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={() => setActiveSectionIndex(p => Math.min(p + 1, sections.length - 1))} disabled={activeSectionIndex === sections.length - 1} className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all disabled:opacity-30">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Form sections */}
                <div className="space-y-4">
                  {activeSection.id === 'personal' && <PersonalInfoForm data={resumeData.personal_info} onChange={data => setResumeData(prev => ({ ...prev, personal_info: data }))} removeBackground={removeBackground} setRemoveBackground={setRemoveBackground} />}
                  {activeSection.id === 'summary' && <ProfessionalSummaryForm data={resumeData.professional_summary} onChange={data => setResumeData(prev => ({ ...prev, professional_summary: data }))} setResumeData={setResumeData} />}
                  {activeSection.id === 'experience' && <ExperienceForm data={resumeData.experience} onChange={data => setResumeData(prev => ({ ...prev, experience: data }))} />}
                  {activeSection.id === 'education' && <EducationForm data={resumeData.education} onChange={data => setResumeData(prev => ({ ...prev, education: data }))} />}
                  {activeSection.id === 'projects' && <ProjectForm data={resumeData.project} onChange={data => setResumeData(prev => ({ ...prev, project: data }))} />}
                  {activeSection.id === 'skills' && <SkillsForm data={resumeData.skills} onChange={data => setResumeData(prev => ({ ...prev, skills: data }))} />}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Preview Panel */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Preview</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-indigo-400" />
                </div>
              </div>
              <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder
