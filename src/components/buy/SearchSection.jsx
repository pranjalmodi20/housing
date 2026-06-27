import React from 'react';
import { motion } from 'framer-motion';
import SearchBox from '../common/SearchBox/SearchBox';

const SearchSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-indigo-900 pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-primary-300 bg-primary-500/15 border border-primary-500/20 rounded-full backdrop-blur-sm">
            45,000+ Verified Properties
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Find Your Dream <span className="bg-gradient-to-r from-primary-300 to-indigo-300 bg-clip-text text-transparent">Home to Buy</span>
          </h1>
          <p className="text-base sm:text-lg text-primary-200/80 max-w-2xl mx-auto">
            Browse thousands of RERA-approved properties across top cities. Transparent pricing, verified listings.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="w-full">
          <SearchBox />
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;
