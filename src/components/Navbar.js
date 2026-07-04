import { Link, useLocation } from "react-router-dom";
import { FaUtensils, FaUserCircle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navLink = (path) =>
    `px-4 py-2 rounded-lg transition-all duration-200 font-medium ${location.pathname === path
      ? "bg-indigo-600 text-white shadow-md"
      : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-extrabold text-slate-800"
        >
          <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md">
            <FaUtensils className="text-white text-lg" />
          </div>

          <span>
            Mess<span className="text-indigo-600">Mate</span>
          </span>
        </Link>

        {/* Center Links */}

        <div className="hidden md:flex items-center gap-3">

          

          {user && (
            <Link to="/dashboard" className={navLink("/dashboard")}>
              Dashboard
            </Link>
          )}
          {user && (
            <Link to="/profile" className={navLink("/profile")}>
              Profile
            </Link>
          )}

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {!user ? (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-100 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <div className="hidden sm:flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-full">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">

                    {user.username.charAt(0).toUpperCase()}

                  </div>

                  <span className="font-semibold">

                    {user.username}

                  </span>

                </div>

              </div>

              <button
                onClick={logout}
                className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition shadow-md"
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;