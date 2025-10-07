import React from 'react'
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, Car, ArrowLeft } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-8 animate-fade-in-up"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Welcome Back
                </h1>
                <p className="text-gray-600 mt-2">Sign in to your Vango account</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50/50"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-gray-50/50"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-orange-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:ring-orange-200 transition-all duration-200 hover-lift disabled:opacity-50 disabled:cursor-not-allowed" 
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-pink-200/30 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoginPage;
