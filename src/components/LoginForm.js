import React, { useState } from "react";
import axios from "../axiosConfig";
import useAuth from "../hooks/useAuth";
import { Navigate, Link } from "react-router-dom";
import {
  FiUser,
  FiLock,
  FiEye,
  FiEyeOff
} from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function LoginForm() {

  const { login } = useAuth();
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await axios.post(
        "/auth/login",
        form
      );

      login(res.data.token);

      toast.success("Welcome back!");

    } catch {

      toast.error("Invalid username or password");

    } finally {

      setLoading(false);

    }

  };

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 40
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      className="w-full max-w-md"

    >

      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white">

        <h1 className="text-4xl font-black text-slate-800">

          Welcome Back

        </h1>

        <p className="text-slate-500 mt-2 mb-8">

          Login to continue

        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Username */}

          <div>

            <label className="text-sm font-medium">

              Username

            </label>

            <div className="mt-2 flex items-center bg-slate-100 rounded-xl px-4">

              <FiUser className="text-slate-400"/>

              <input

                type="text"

                name="username"

                value={form.username}

                onChange={handleChange}

                className="bg-transparent outline-none px-3 py-4 w-full"

                placeholder="Enter username"

              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="text-sm font-medium">

              Password

            </label>

            <div className="mt-2 flex items-center bg-slate-100 rounded-xl px-4">

              <FiLock className="text-slate-400"/>

              <input

                type={
                  showPassword
                    ? "text"
                    : "password"
                }

                name="password"

                value={form.password}

                onChange={handleChange}

                className="bg-transparent outline-none px-3 py-4 w-full"

                placeholder="Enter password"

              />

              <button

                type="button"

                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }

              >

                {

                  showPassword

                  ?

                  <FiEyeOff/>

                  :

                  <FiEye/>

                }

              </button>

            </div>

          </div>

          {/* Remember */}

          <div className="flex justify-between text-sm">

            <label className="flex gap-2">

              <input type="checkbox"/>

              Remember me

            </label>

            <span className="text-indigo-600 cursor-pointer">

              Forgot Password?

            </span>

          </div>

          <button

            disabled={
              loading ||

              !form.username ||

              !form.password
            }

            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-xl disabled:opacity-50"

          >

            {

              loading

              ?

              "Signing In..."

              :

              "Login"

            }

          </button>

        </form>

        <p className="text-center mt-8">

          Don't have an account?

          <Link

            to="/signup"

            className="text-indigo-600 font-semibold ml-2"

          >

            Sign Up

          </Link>

        </p>

      </div>

    </motion.div>

  );

}

export default LoginForm;