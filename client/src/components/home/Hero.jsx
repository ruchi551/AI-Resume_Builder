import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Zap, Shield, Star } from "lucide-react";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
              <FileText size={16} className="text-white" />
            </div>
            <span className="text-lg text-slate-900 tracking-tight" style={{ fontWeight: 700 }}>ResumeAI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Features", "Pricing"].map((item) => (
              <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {!user ? (
              <>
                <Link to="/app?state=login"
                  className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 transition-all">
                  Sign in
                </Link>
                <Link to="/app?state=register"
                  className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all">
                  Get Started <ArrowRight size={14} />
                </Link>
              </>
            ) : (
              <Link to="/app"
                className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all">
                Dashboard
              </Link>
            )}
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setMenuOpen(true)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center gap-8">
          {["Home", "Features", "Pricing"].map((item) => (
            <a key={item} href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
              className="text-white text-xl font-semibold" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          {!user ? (
            <>
              <Link to="/app?state=login" className="text-slate-400 text-lg" onClick={() => setMenuOpen(false)}>Sign in</Link>
              <Link to="/app?state=register" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold" onClick={() => setMenuOpen(false)}>Get Started</Link>
            </>
          ) : (
            <Link to="/app" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          )}
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setMenuOpen(false)}>×</button>
        </div>
      )}

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="grid md:grid-cols-2 items-center gap-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-xs font-semibold mb-6">
              <Zap size={12} /> AI-Powered Resume Builder
            </div>
            <h1 className="text-5xl md:text-6xl leading-[1.08] text-slate-900 tracking-tight mb-6" style={{ fontWeight: 800 }}>
              Build resumes that
              <span className="block text-indigo-600 mt-1">get you hired</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-md">
              Create polished, professional resumes in minutes with AI-assisted writing and beautiful templates trusted by recruiters.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link to="/app"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm transition-all">
                Start Building Free <ArrowRight size={16} />
              </Link>
              <button className="px-6 py-3 border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all">
                View Templates
              </button>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <span className="font-medium text-slate-700">4.9/5</span> rating
              </div>
              <div className="w-px h-4 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-indigo-500" />
                No credit card needed
              </div>
              <div className="w-px h-4 bg-slate-200" />
              <span>10,000+ users</span>
            </div>
          </div>

          {/* Right - Resume Card Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200 border border-slate-200 w-80 overflow-hidden">
                <div className="bg-gradient-to-br from-slate-800 to-indigo-900 p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-400/40 flex items-center justify-center text-sm font-bold">JD</div>
                    <div>
                      <div className="font-semibold text-sm">John Doe</div>
                      <div className="text-xs text-slate-300">Full Stack Developer</div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-white/20 rounded-full w-full" />
                    <div className="h-1.5 bg-white/20 rounded-full w-4/5" />
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  {["Experience", "Education", "Skills"].map((section) => (
                    <div key={section}>
                      <div className="text-[10px] font-semibold text-indigo-600 uppercase tracking-widest mb-2">{section}</div>
                      <div className="space-y-1.5">
                        <div className="h-2 bg-slate-100 rounded w-full" />
                        <div className="h-2 bg-slate-100 rounded w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-6 bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-2.5 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">AI Writing Active</span>
              </div>
              <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-2.5">
                <div className="text-xs text-slate-500">ATS Score</div>
                <div className="text-lg font-bold text-indigo-600">94%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;