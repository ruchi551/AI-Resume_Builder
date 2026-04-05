import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, ArrowLeft, Save } from 'lucide-react'
import api from '../configs/api'
import toast from 'react-hot-toast'
import { login } from '../app/features/authSlice'

const Profile = () => {
    const { user, token } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        newPassword: '',
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await api.put('/api/users/update-profile', formData, {
                headers: { Authorization: token }
            })
            dispatch(login({ token, user: data.user }))
            toast.success(data.message)
            setFormData(prev => ({ ...prev, password: '', newPassword: '' }))
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message)
        }
        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="max-w-2xl mx-auto px-6 py-10">
                <Link to="/app" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-8 transition-colors">
                    <ArrowLeft size={15} /> Back to Dashboard
                </Link>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">My Profile</h1>
                    <p className="text-slate-500 mt-1 text-sm">Update your account details.</p>
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-8 p-6 bg-white rounded-xl border border-slate-200">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900 text-lg">{user?.name}</p>
                        <p className="text-slate-500 text-sm">{user?.email}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
                        <h2 className="font-semibold text-slate-900 text-base mb-4">Personal Information</h2>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                            <div className="relative">
                                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="text" name="name" value={formData.name} onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="email" name="email" value={formData.email} onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400" />
                            </div>
                        </div>
                    </div>

                    {/* Change Password */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
                        <h2 className="font-semibold text-slate-900 text-base mb-4">Change Password</h2>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Current Password</label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="password" name="password" value={formData.password} onChange={handleChange}
                                    placeholder="Enter current password"
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">New Password</label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange}
                                    placeholder="Enter new password"
                                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400" />
                            </div>
                        </div>
                        <p className="text-xs text-slate-400">Leave password fields empty if you don't want to change it.</p>
                    </div>

                    <button type="submit" disabled={loading}
                        className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold rounded-lg text-sm transition-all">
                        <Save size={15} />
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Profile
