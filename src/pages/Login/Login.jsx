import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Mail, Lock, LogIn, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      try {
        const success = login(email, password);
        if (success) {
          navigate('/');
        } else {
          setError('Invalid login details.');
        }
      } catch (err) {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 transition-colors pt-24">
      <div className="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left column (Visual Promo) */}
        <div className="bg-gradient-to-tr from-purple-800 to-indigo-900 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <Compass className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight">HomeVerse</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl mt-12 leading-tight">
              Unlock the best deals in Indian Real Estate
            </h2>
            <p className="text-sm text-purple-200/80 mt-4 leading-relaxed">
              Login to view personalized property recommendations, save listings to wishlists, and contact developers directly.
            </p>
          </div>

          <div className="relative z-10 mt-12 space-y-4 text-xs text-purple-200/90 border-t border-white/10 pt-6">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>100% verified developer network listings</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Zero brokerage support stubs</span>
            </div>
          </div>
        </div>

        {/* Right column (Login Form) */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div>
            <h3 className="font-display font-extrabold text-2xl text-slate-800 dark:text-white">Welcome Back</h3>
            <p className="text-xs text-slate-400 mt-1">Please enter your account details to sign in</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs p-3 rounded-xl mt-6 font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div>
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide block">Password</label>
                <Link to="/forgot-password" className="text-xs text-primary-600 hover:underline font-semibold">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-650 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              {loading ? (
                <span>Verifying...</span>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-8 border-t border-slate-100 dark:border-slate-800 pt-6">
            <p className="text-xs text-slate-400">
              Don't have an account yet?{' '}
              <Link to="/register" className="text-primary-600 hover:underline font-bold">Sign Up Free</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
