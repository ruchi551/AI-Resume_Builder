import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResumePreview from '../components/ResumePreview'
import Loader from '../components/Loader'
import { ArrowLeft, FileText } from 'lucide-react'
import api from '../configs/api'

const Preview = () => {
  const { resumeId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)

  const loadResume = async () => {
    try {
      const { data } = await api.get('/api/resumes/public/' + resumeId)
      setResumeData(data.resume)
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { loadResume() }, [])

  if (isLoading) return <Loader />

  if (!resumeData) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-6">
      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
        <FileText size={28} className="text-slate-400" />
      </div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Resume Not Found</h1>
      <p className="text-slate-500 text-sm mb-8 text-center max-w-xs">
        This resume may have been deleted or set to private by its owner.
      </p>
      <a href="/" className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-colors">
        <ArrowLeft size={15} /> Back to Home
      </a>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
            <FileText size={14} className="text-white" />
          </div>
          <span className="font-bold text-slate-800">ResumeAI</span>
        </div>
        <a href="/" className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors">
          <ArrowLeft size={14} /> Home
        </a>
      </div>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} classes="py-4" />
        </div>
      </div>
    </div>
  )
}

export default Preview