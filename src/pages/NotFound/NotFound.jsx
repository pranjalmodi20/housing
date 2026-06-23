import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center px-4 py-24 transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-lg"
      >
        <div className="relative mb-8">
          <span className="font-display font-extrabold text-[120px] sm:text-[160px] text-slate-100 dark:text-slate-800/50 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary-100 dark:bg-primary-950/30 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
        </div>

        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-600 text-white font-semibold text-sm rounded-xl shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/search?tab=buy"
            className="flex items-center space-x-2 px-6 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm rounded-xl transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search Properties</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
