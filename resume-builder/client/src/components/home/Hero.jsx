import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {

  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5">

        <h1 className="text-2xl font-bold text-blue-600">
          ResumeAI
        </h1>

        <div className="hidden md:flex gap-8 text-slate-700">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4">

          {!user && (
            <>
              <Link
                to="/app?state=login"
                className="px-6 py-2 border border-slate-300 rounded-full hover:bg-slate-100 transition"
              >
                Login
              </Link>

              <Link
                to="/app?state=register"
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </>
          )}

          {user && (
            <Link
              to="/app"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Dashboard
            </Link>
          )}

        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

      </nav>


      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/70 flex flex-col items-center justify-center gap-10 text-white text-xl">

          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>

          {!user && (
            <>
              <Link to="/app?state=login">Login</Link>
              <Link to="/app?state=register">Register</Link>
            </>
          )}

          {user && (
            <Link to="/app">Dashboard</Link>
          )}

          <button
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2 bg-blue-600 rounded"
          >
            Close
          </button>

        </div>
      )}


      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 items-center px-6 md:px-20 pt-20 gap-10">

        {/* LEFT */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">

            Build your resume with

            <span className="block text-blue-600">
              AI in seconds
            </span>

          </h1>

          <p className="text-lg text-slate-600 mt-6 max-w-lg">
            Create professional resumes easily with AI powered writing
            assistance and modern templates.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              to="/app"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Start Building
            </Link>

            <button className="px-8 py-3 border rounded-lg hover:bg-slate-100">
              View Templates
            </button>

          </div>

          <p className="mt-6 text-slate-500">
            ⭐ Trusted by 10,000+ job seekers
          </p>

        </div>


        {/* RIGHT RESUME CARD */}
        <div className="flex justify-center">

          <div className="bg-white shadow-2xl rounded-xl p-6 w-[320px]">

            <h3 className="font-semibold text-lg">
              John Doe
            </h3>

            <p className="text-sm text-slate-500">
              Full Stack Developer
            </p>

            <div className="mt-4 space-y-2">
              <div className="h-2 bg-slate-200 rounded w-full"></div>
              <div className="h-2 bg-slate-200 rounded w-5/6"></div>
              <div className="h-2 bg-slate-200 rounded w-4/6"></div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="h-2 bg-slate-200 rounded w-full"></div>
              <div className="h-2 bg-slate-200 rounded w-3/4"></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;