import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'
import { FileText, LogOut, User } from 'lucide-react'

const Navbar = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = () => {
    navigate('/')
    dispatch(logout())
  }

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
            <FileText size={16} className="text-white" />
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">BuildResume</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-sm text-slate-500">
            Welcome, <span className="font-semibold text-slate-700">{user?.name}</span>
          </span>
          <Link to="/app/profile" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all">
            <User size={15} />
            <span className="hidden sm:block">Profile</span>
          </Link>
          <button onClick={logoutUser} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all">
            <LogOut size={15} />
            <span className="hidden sm:block">Sign Out</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar