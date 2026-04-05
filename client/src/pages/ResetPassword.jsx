import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Lock, FileText } from 'lucide-react'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ResetPassword = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirm) return toast.error('Passwords do not match')
        if (password.length < 6) return toast.error('Password must be at least 6 characters')
        setLoading(true)
        try {
            const { data } = await api.post('/api/users/reset-password', { token, password })
            toast.success(data.message)
            navigate('/app?state=login')
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <FileText size={16} className="text-white" />
                    </div>
                    <span className="font-bold text-slate-900">BuildResume</span>
                </div>

                <h1 className="text-2xl font-bold text-slate-900 mb-1">Set new password</h1>
                <p className="text-slate-500 text-sm mb-8">Must be at least 6 characters.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">New Password</label>
                        <div className="relative">
                            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input type="password" placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400"
                                value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm Password</label>
                        <div className="relative">
                            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input type="password" placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400"
                                value={confirm} onChange={e => setConfirm(e.target.value)} required />
                        </div>
                    </div>
                    <button type="submit" disabled={loading}
                        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold rounded-lg text-sm transition-all">
                        {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>

                <p className="text-center mt-6">
                    <Link to="/app?state=login" className="text-xs text-slate-400 hover:text-slate-600">← Back to Sign In</Link>
                </p>
            </div>
        </div>
    )
}

export default ResetPassword