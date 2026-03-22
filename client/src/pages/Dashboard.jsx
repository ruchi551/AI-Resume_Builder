import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const Dashboard = () => {
  const { user, token } = useSelector(state => state.auth)
  const colors = ['#4F46E5', '#7C3AED', '#0369A1', '#0E7490', '#BE123C', '#B45309']
  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get('/api/users/resumes', { headers: { Authorization: token } })
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
    try {
      event.preventDefault()
      const { data } = await api.post('/api/resumes/create', { title }, { headers: { Authorization: token } })
      setAllResumes([...allResumes, data.resume])
      setTitle(''); setShowCreateResume(false)
      navigate(`/app/builder/${data.resume._id}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const uploadResume = async (event) => {
    event.preventDefault(); setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', { title, resumeText }, { headers: { Authorization: token } })
      setTitle(''); setResume(null); setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {
      event.preventDefault()
      const { data } = await api.put('/api/resumes/update', { resumeId: editResumeId, resumeData: { title } }, { headers: { Authorization: token } })
      setAllResumes(allResumes.map(r => r._id === editResumeId ? { ...r, title } : r))
      setTitle(''); setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const deleteResume = async (resumeId) => {
    try {
      if (!window.confirm('Are you sure you want to delete this resume?')) return
      const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, { headers: { Authorization: token } })
      setAllResumes(allResumes.filter(r => r._id !== resumeId))
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => { loadAllResumes() }, [])

  const ModalWrapper = ({ onClose, onSubmit, title: modalTitle, children }) => (
    <div onClick={onClose} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div onClick={e => e.stopPropagation()} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-7 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-5">{modalTitle}</h2>
        {children}
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
          <XIcon size={16} />
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1">Dashboard</p>
          <h1 className="text-3xl font-bold text-slate-900">My Resumes</h1>
          <p className="text-slate-500 mt-1 text-sm">Create, manage, and share your professional resumes.</p>
        </div>

        {/* Action Cards */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <button
            onClick={() => setShowCreateResume(true)}
            className="group flex flex-col items-center justify-center w-44 h-48 bg-white border-2 border-dashed border-slate-200 rounded-xl hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-50 transition-all duration-200"
          >
            <div className="w-12 h-12 bg-indigo-50 group-hover:bg-indigo-100 rounded-xl flex items-center justify-center mb-3 transition-colors">
              <PlusIcon size={22} className="text-indigo-600" />
            </div>
            <span className="text-sm font-semibold text-slate-600 group-hover:text-indigo-600 transition-colors">New Resume</span>
            <span className="text-xs text-slate-400 mt-0.5">Start from scratch</span>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="group flex flex-col items-center justify-center w-44 h-48 bg-white border-2 border-dashed border-slate-200 rounded-xl hover:border-violet-400 hover:shadow-md hover:shadow-violet-50 transition-all duration-200"
          >
            <div className="w-12 h-12 bg-violet-50 group-hover:bg-violet-100 rounded-xl flex items-center justify-center mb-3 transition-colors">
              <UploadCloudIcon size={22} className="text-violet-600" />
            </div>
            <span className="text-sm font-semibold text-slate-600 group-hover:text-violet-600 transition-colors">Upload Resume</span>
            <span className="text-xs text-slate-400 mt-0.5">Import existing PDF</span>
          </button>
        </div>

        {allResumes.length > 0 && (
          <div className="mb-4">
            <hr className="border-slate-200 mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allResumes.map((resume, index) => {
                const baseColor = colors[index % colors.length]
                return (
                  <button
                    key={index}
                    onClick={() => navigate(`/app/builder/${resume._id}`)}
                    className="relative group flex flex-col items-center justify-center w-full h-48 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-200"
                    style={{ borderColor: baseColor + '40' }}
                  >
                    <div className="absolute inset-0 rounded-xl opacity-5" style={{ background: baseColor }} />
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: baseColor + '15' }}>
                      <FilePenLineIcon size={22} style={{ color: baseColor }} />
                    </div>
                    <p className="text-sm font-semibold px-3 text-center line-clamp-2 mb-1" style={{ color: baseColor }}>
                      {resume.title}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {new Date(resume.updatedAt).toLocaleDateString()}
                    </p>
                    {/* Hover actions */}
                    <div
                      onClick={e => e.stopPropagation()}
                      className="absolute top-2 right-2 hidden group-hover:flex items-center gap-0.5"
                    >
                      <button onClick={() => deleteResume(resume._id)} className="p-1.5 rounded-lg bg-white/80 hover:bg-red-50 text-slate-500 hover:text-red-500 transition-colors">
                        <TrashIcon size={13} />
                      </button>
                      <button onClick={() => { setEditResumeId(resume._id); setTitle(resume.title) }} className="p-1.5 rounded-lg bg-white/80 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 transition-colors">
                        <PencilIcon size={13} />
                      </button>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Create Modal */}
        {showCreateResume && (
          <ModalWrapper onClose={() => { setShowCreateResume(false); setTitle('') }} onSubmit={createResume} title="Create New Resume">
            <form onSubmit={createResume} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Resume Title</label>
                <input onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="e.g. Software Engineer Resume" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none" required />
              </div>
              <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-colors">Create Resume</button>
            </form>
          </ModalWrapper>
        )}

        {/* Upload Modal */}
        {showUploadResume && (
          <ModalWrapper onClose={() => { setShowUploadResume(false); setTitle('') }} title="Upload Existing Resume">
            <form onSubmit={uploadResume} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Resume Title</label>
                <input onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="e.g. Marketing Manager Resume" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none" required />
              </div>
              <label htmlFor="resume-input" className="block">
                <div className="border-2 border-dashed border-slate-200 hover:border-indigo-300 rounded-xl p-8 text-center cursor-pointer transition-colors">
                  {resume ? (
                    <p className="text-sm font-medium text-indigo-600">{resume.name}</p>
                  ) : (
                    <>
                      <UploadCloud size={28} className="mx-auto text-slate-300 mb-2" />
                      <p className="text-sm text-slate-500">Click to upload PDF</p>
                      <p className="text-xs text-slate-400 mt-1">Max 10MB</p>
                    </>
                  )}
                </div>
                <input type="file" id="resume-input" accept=".pdf" hidden onChange={e => setResume(e.target.files[0])} />
              </label>
              <button disabled={isLoading} className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                {isLoading && <LoaderCircleIcon size={16} className="animate-spin" />}
                {isLoading ? 'Uploading...' : 'Upload & Parse Resume'}
              </button>
            </form>
          </ModalWrapper>
        )}

        {/* Edit Title Modal */}
        {editResumeId && (
          <ModalWrapper onClose={() => { setEditResumeId(''); setTitle('') }} title="Rename Resume">
            <form onSubmit={editTitle} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">New Title</label>
                <input onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Resume title" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none" required />
              </div>
              <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-colors">Update Title</button>
            </form>
          </ModalWrapper>
        )}
      </div>
    </div>
  )
}

export default Dashboard
