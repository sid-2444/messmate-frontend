import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from "react-hot-toast";
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Toaster
        position="top-right"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-100 px-6">
              <LoginForm />
            </div>
          }
        />

        <Route
          path="/signup"
          element={
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-50 to-cyan-100 px-6">
              <SignupForm />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;