import { Loader2, Sparkles } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
  const { token } = useSelector(state => state.auth)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateSummary = async () => {
    try {
      setIsGenerating(true)
      const prompt = `enhance my professional summary "${data}"`
      const response = await api.post('/api/ai/enhance-pro-sum', { userContent: prompt }, { headers: { Authorization: token } })
      setResumeData(prev => ({ ...prev, professional_summary: response.data.enhancedContent }))
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Professional Summary</h3>
          <p className="text-xs text-slate-500 mt-0.5">A compelling overview of your career</p>
        </div>
        <button disabled={isGenerating} onClick={generateSummary}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 disabled:opacity-50 transition-colors">
          {isGenerating ? <Loader2 size={13} className="animate-spin" /> : <Sparkles size={13} />}
          {isGenerating ? 'Enhancing…' : 'AI Enhance'}
        </button>
      </div>
      <textarea value={data || ''} onChange={e => onChange(e.target.value)} rows={7}
        className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none resize-none transition-all leading-relaxed"
        placeholder="Write a compelling professional summary…" />
      <p className="text-xs text-slate-400 text-center">💡 Keep it 3–4 sentences. Focus on impact and achievements.</p>
    </div>
  )
}

export default ProfessionalSummaryForm