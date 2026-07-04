import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaShieldAlt,
  FaCheckCircle,
  FaSignOutAlt,
  FaUser,
  FaClock
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

function Dashboard() {

  const { logout } = useAuth();

  const token = localStorage.getItem("token");

  const decoded = token ? jwtDecode(token) : {};

  const username = decoded.username || "User";

  const loginDate = new Date().toLocaleDateString();

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-100">

      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Header */}

        <motion.div

          initial={{opacity:0,y:-20}}

          animate={{opacity:1,y:0}}

          className="bg-white rounded-3xl shadow-xl p-10 mb-10"

        >

          <div className="flex justify-between items-center flex-wrap gap-6">

            <div className="flex items-center gap-6">

              <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">

                {username.charAt(0).toUpperCase()}

              </div>

              <div>

                <h1 className="text-4xl font-black text-slate-800">

                  Welcome back,

                  <span className="text-indigo-600">

                    {" "}{username}

                  </span>

                  👋

                </h1>

                <p className="text-slate-500 mt-2">

                  Authentication successful.

                </p>

              </div>

            </div>


          </div>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          <Card

            icon={<FaUserCircle/>}

            title="Username"

            value={username}

            color="bg-indigo-100 text-indigo-600"

          />

          <Card

            icon={<FaShieldAlt/>}

            title="Authentication"

            value="JWT Verified"

            color="bg-emerald-100 text-emerald-600"

          />

          <Card

            icon={<FaClock/>}

            title="Last Login"

            value={loginDate}

            color="bg-cyan-100 text-cyan-600"

          />

        </div>

        {/* Profile */}

        <motion.div

          initial={{opacity:0,y:20}}

          animate={{opacity:1,y:0}}

          transition={{delay:.2}}

          className="bg-white rounded-3xl shadow-xl mt-10 p-10"

        >

          <h2 className="text-3xl font-bold mb-8">

            Profile Information

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Info

              icon={<FaUser/>}

              label="Username"

              value={username}

            />

            <Info

              icon={<FaCheckCircle/>}

              label="Status"

              value="Authenticated"

            />

          </div>

        </motion.div>

      </div>

    </div>

  );

}

function Card({

  icon,

  title,

  value,

  color

}){

  return(

    <motion.div

      whileHover={{

        y:-8,

        scale:1.03

      }}

      className="bg-white rounded-3xl shadow-lg p-8"

    >

      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${color}`}>

        {icon}

      </div>

      <h3 className="mt-6 text-slate-500">

        {title}

      </h3>

      <h2 className="text-2xl font-bold mt-2">

        {value}

      </h2>

    </motion.div>

  )

}

function Info({

  icon,

  label,

  value

}){

  return(

    <div className="flex items-center gap-5 bg-slate-50 rounded-2xl p-6">

      <div className="text-2xl text-indigo-600">

        {icon}

      </div>

      <div>

        <div className="text-slate-500">

          {label}

        </div>

        <div className="font-bold text-xl">

          {value}

        </div>

      </div>

    </div>

  )

}

export default Dashboard;