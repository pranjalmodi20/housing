import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { User, Mail, Lock, Phone, UserPlus, ShieldCheck, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      try {
        const success = register(name, email, phone, password);
        if (success) {
          navigate('/');
        } else {
          setError('Could not create account.');
        }
      } catch (err) {
        setError('Something went wrong. Please check your network.');
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
              Create a free account to unlock premium filters
            </h2>
            <p className="text-sm text-purple-200/80 mt-4 leading-relaxed">
              Track pricing updates, save specific search parameters, get daily matching alerts, and verify property legal docs.
            </p>
          </div>

          <div className="relative z-10 mt-12 space-y-4 text-xs text-purple-200/90 border-t border-white/10 pt-6">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Free instant credit score checks</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Digital document vaults</span>
            </div>
          </div>
        </div>

        {/* Right column (Register Form) */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div>
            <h3 className="font-display font-extrabold text-2xl text-slate-800 dark:text-white">Create Account</h3>
            <p className="text-xs text-slate-400 mt-1">Get started in seconds with zero hidden charges</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs p-3 rounded-xl mt-6 font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1 block">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-650 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 mt-2"
            >
              {loading ? (
                <span>Registering...</span>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Register Account</span>
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-6 border-t border-slate-100 dark:border-slate-800 pt-4">
            <p className="text-xs text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 hover:underline font-bold">Sign In</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
