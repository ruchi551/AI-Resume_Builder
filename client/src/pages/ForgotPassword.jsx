import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, FileText, ArrowLeft } from 'lucide-react'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await api.post('/api/users/forgot-password', { email })
            toast.success(data.message)
            setSent(true)
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

                {sent ? (
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail size={28} className="text-green-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Check your email</h1>
                        <p className="text-slate-500 text-sm mb-6">
                            We sent a password reset link to <strong>{email}</strong>. It expires in 1 hour.
                        </p>
                        <Link to="/app?state=login" className="text-indigo-600 font-semibold text-sm">
                            Back to Sign In
                        </Link>
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-slate-900 mb-1">Forgot password?</h1>
                        <p className="text-slate-500 text-sm mb-8">Enter your email and we'll send you a reset link.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                                <div className="relative">
                                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input type="email" placeholder="you@example.com"
                                        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400"
                                        value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <button type="submit" disabled={loading}
                                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold rounded-lg text-sm transition-all">
                                {loading ? 'Sending...' : 'Send Reset Link'}
                            </button>
                        </form>

                        <p className="text-center mt-6">
                            <Link to="/app?state=login" className="text-sm text-slate-500 flex items-center justify-center gap-1 hover:text-slate-800">
                                <ArrowLeft size={14} /> Back to Sign In
                            </Link>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default ForgotPassword