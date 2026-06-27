import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PlusCircle, LogIn, Compass } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isTopLandingDark = location.pathname === '/' && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Buy', href: '/buy' },
    { name: 'Rent', href: '/rent' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Plots', href: '/plots' },
    { name: 'PG', href: '/pg' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/75 dark:bg-slate-900/75 shadow-sm py-3 nav-scrolled'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 transform group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5 animate-pulse" />
                </div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-slate-800 dark:text-white">
                  Home<span className="text-primary-700 dark:text-primary-400">Verse</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-semibold text-sm transition-colors relative group py-2 ${
                    isActive(link.href)
                      ? `text-primary-900 ${isTopLandingDark ? 'dark:text-primary-400' : 'dark:text-primary-200'}`
                      : `text-slate-800 hover:text-primary-900 ${isTopLandingDark ? 'dark:text-primary-400 dark:hover:text-primary-300' : 'dark:text-slate-100 dark:hover:text-primary-200'}`
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-900 transition-all duration-300 ${
                    isTopLandingDark ? 'dark:bg-primary-400' : 'dark:bg-primary-200'
                  } ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Actions (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Login/Signup Button */}
              <Link to="/login" className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 font-semibold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                isTopLandingDark ? 'text-slate-800 dark:text-primary-400' : 'text-slate-800 dark:text-slate-200'
              }`}>
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>

              {/* Post Property Button */}
              <button className="flex items-center space-x-2 px-4.5 py-2.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary-500/20 hover:shadow-primary-500/35 transform hover:-translate-y-0.5 transition-all">
                <PlusCircle className="w-4 h-4" />
                <span>Add Property</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle main menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive(link.href)
                        ? `text-primary-800 bg-primary-50 ${isTopLandingDark ? 'dark:text-primary-400 dark:bg-primary-950/20' : 'dark:text-primary-350 dark:bg-primary-950/40'}`
                        : `text-slate-800 hover:bg-slate-50 hover:text-primary-800 ${isTopLandingDark ? 'dark:text-primary-400 dark:hover:bg-slate-800 dark:hover:text-primary-300' : 'dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-primary-300'}`
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col space-y-3 px-3">
                  <Link to="/login" className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-base hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full ${
                    isTopLandingDark ? 'text-slate-800 dark:text-primary-400' : 'text-slate-800 dark:text-slate-200'
                  }`}>
                    <LogIn className="w-5 h-5" />
                    <span>Login</span>
                  </Link>
                  <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-700 to-indigo-700 text-white font-semibold text-base rounded-xl shadow-md w-full">
                    <PlusCircle className="w-5 h-5" />
                    <span>Add Property</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
