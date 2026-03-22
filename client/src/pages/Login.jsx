import { Lock, Mail, User2Icon, FileText } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const [state, setState] = React.useState(urlState || 'login')
  const [formData, setFormData] = React.useState({ name: '', email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post(`/api/users/${state}`, formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const isLogin = state === 'login'

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-800 to-indigo-900 flex-col items-center justify-center p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <FileText size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">ResumeAI</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            Your career starts<br />with a great resume
          </h2>
          <p className="text-slate-300 max-w-xs mx-auto leading-relaxed">
            Join thousands of professionals who've landed their dream jobs using ResumeAI.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            {[['10K+', 'Users'], ['94%', 'ATS Pass Rate'], ['4.9★', 'Rating']].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{val}</div>
                <div className="text-xs text-slate-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <FileText size={16} className="text-white" />
            </div>
            <span className="font-bold text-slate-900">ResumeAI</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-1">
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-slate-500 text-sm mb-8">
            {isLogin ? 'Sign in to access your resumes' : 'Start building your professional resume today'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <User2Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" name="name" placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none transition-all"
                    value={formData.name} onChange={handleChange} required />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" name="email" placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none transition-all"
                  value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                {isLogin && (
                  <button type="button" className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">Forgot password?</button>
                )}
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="password" name="password" placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 outline-none transition-all"
                  value={formData.password} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit"
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg text-sm transition-all shadow-sm mt-2">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setState(isLogin ? 'register' : 'login')}
              className="text-indigo-600 hover:text-indigo-700 font-semibold">
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>

          <p className="text-center mt-6">
            <Link to="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">← Back to home</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login