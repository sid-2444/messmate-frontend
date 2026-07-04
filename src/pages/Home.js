import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaDatabase,
  FaReact,
  FaLock,
  FaUsers
} from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-cyan-100">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium mb-8">

              🚀 MERN Stack Authentication Project

            </span>

            <h1 className="text-6xl font-black leading-tight text-slate-800">

              Smart Hostel &

              <span className="block text-indigo-600">

                Mess Management

              </span>

            </h1>

            <p className="text-slate-600 text-lg leading-8 mt-8 max-w-xl">

              A modern authentication system powered by React,
              Express, MongoDB, JWT and bcrypt with secure login,
              protected routes and responsive design.

            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3 shadow-xl"
              >

                Login

                <FaArrowRight />

              </Link>

              <Link
                to="/signup"
                className="bg-white hover:bg-slate-50 transition px-8 py-4 rounded-xl shadow-xl font-semibold"
              >

                Create Account

              </Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-100">

              <h2 className="text-3xl font-bold mb-8">

                Why MessMate?

              </h2>

              <div className="space-y-8">

                <Feature
                  icon={<FaShieldAlt />}
                  title="JWT Authentication"
                  desc="Secure login using JSON Web Tokens."
                  color="bg-indigo-100 text-indigo-600"
                />

                <Feature
                  icon={<FaDatabase />}
                  title="MongoDB Database"
                  desc="Reliable user storage with Mongoose."
                  color="bg-cyan-100 text-cyan-600"
                />

                <Feature
                  icon={<FaReact />}
                  title="Modern React"
                  desc="Responsive frontend with React Router."
                  color="bg-sky-100 text-sky-600"
                />

                <Feature
                  icon={<FaLock />}
                  title="Password Hashing"
                  desc="bcrypt encryption protects user passwords."
                  color="bg-emerald-100 text-emerald-600"
                />

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <StatCard
            title="JWT Protected"
            value="100%"
            subtitle="Secure Routes"
          />

          <StatCard
            title="MongoDB"
            value="NoSQL"
            subtitle="Database"
          />

          <StatCard
            title="Authentication"
            value="bcrypt"
            subtitle="Password Security"
          />

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-slate-900 text-white mt-24">

  <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center">

    <div>

      <h2 className="text-3xl font-bold">

        MessMate

      </h2>

      <p className="text-slate-400 mt-2">

        Secure JWT Authentication Platform

      </p>

    </div>

    <div className="text-slate-400 mt-6 md:mt-0">

      © 2026 Siddhanth Samarai

    </div>

  </div>

</footer>

    </div>
  );
}

function Feature({ icon, title, desc, color }) {
  return (
    <div className="flex gap-5">

      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${color}`}>

        {icon}

      </div>

      <div>

        <h3 className="font-bold text-lg">

          {title}

        </h3>

        <p className="text-slate-500">

          {desc}

        </p>

      </div>

    </div>
  );
}

function StatCard({ title, value, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg p-8 text-center"
    >

      <div className="text-5xl font-black text-indigo-600">

        {value}

      </div>

      <div className="font-bold mt-4">

        {title}

      </div>

      <div className="text-slate-500 mt-2">

        {subtitle}

      </div>

    </motion.div>
  );
}

export default Home;