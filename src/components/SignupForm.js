import React, { useState } from "react";
import axios from "../axiosConfig";
import { Link, Navigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff
} from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function SignupForm() {

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({

    username: "",

    email: "",

    password: "",

    confirmPassword: ""

  });

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

  const passwordStrong =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(
      form.password
    );

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (form.password !== form.confirmPassword) {

      toast.error("Passwords do not match");

      return;

    }

    setLoading(true);

    try {

      await axios.post("/auth/register", {

        username: form.username,

        email: form.email,

        password: form.password

      });

      toast.success("Registration Successful");

      setForm({

        username: "",

        email: "",

        password: "",

        confirmPassword: ""

      });

    } catch (err) {

      toast.error(

        err.response?.data?.message ||

        "Registration Failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}

      animate={{ opacity: 1, y: 0 }}

      className="w-full max-w-lg"

    >

      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-black text-slate-800">

          Create Account

        </h1>

        <p className="text-slate-500 mt-2 mb-8">

          Join MessMate today

        </p>

        <form

          onSubmit={handleSubmit}

          className="space-y-5"

        >

          {/* Username */}

          <Input

            icon={<FiUser />}

            placeholder="Username"

            name="username"

            value={form.username}

            onChange={handleChange}

          />

          {/* Email */}

          <Input

            icon={<FiMail />}

            placeholder="Email"

            name="email"

            type="email"

            value={form.email}

            onChange={handleChange}

          />

          {/* Password */}

          <div>

            <div className="flex items-center bg-slate-100 rounded-xl px-4">

              <FiLock className="text-slate-400"/>

              <input

                type={showPassword ? "text" : "password"}

                placeholder="Password"

                name="password"

                value={form.password}

                onChange={handleChange}

                className="bg-transparent outline-none px-3 py-4 w-full"

              />

              <button

                type="button"

                onClick={() =>
                  setShowPassword(!showPassword)
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

          {/* Confirm */}

          <Input

            icon={<FiLock />}

            placeholder="Confirm Password"

            type="password"

            name="confirmPassword"

            value={form.confirmPassword}

            onChange={handleChange}

          />

          {/* Password Strength */}

          <div>

            <div className="flex justify-between text-sm mb-2">

              <span>Password Strength</span>

              <span>

                {

                  passwordStrong

                  ?

                  "Strong"

                  :

                  "Weak"

                }

              </span>

            </div>

            <div className="w-full h-2 rounded-full bg-slate-200">

              <div

                className={`h-2 rounded-full transition-all duration-300 ${
                  passwordStrong

                  ?

                  "bg-emerald-500 w-full"

                  :

                  "bg-red-500 w-1/3"

                }`}

              />

            </div>

          </div>

          <button

            disabled={

              loading ||

              !form.username ||

              !form.email ||

              !form.password ||

              !form.confirmPassword ||

              !passwordStrong

            }

            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold disabled:opacity-50"

          >

            {

              loading

              ?

              "Creating Account..."

              :

              "Register"

            }

          </button>

        </form>

        <p className="text-center mt-8">

          Already have an account?

          <Link

            to="/login"

            className="ml-2 text-indigo-600 font-semibold"

          >

            Login

          </Link>

        </p>

      </div>

    </motion.div>

  );

}

function Input({

  icon,

  ...props

}) {

  return (

    <div className="flex items-center bg-slate-100 rounded-xl px-4">

      <div className="text-slate-400">

        {icon}

      </div>

      <input

        {...props}

        className="bg-transparent outline-none px-3 py-4 w-full"

      />

    </div>

  );

}

export default SignupForm;