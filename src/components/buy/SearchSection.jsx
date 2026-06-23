import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown, Home, Bed, IndianRupee, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const cities = ['Mumbai', 'Bangalore', 'Delhi NCR', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'];
const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Independent House', 'Plot'];
const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
const budgetOptions = ['Under 20 Lakhs', '20 - 50 Lakhs', '50 Lakhs - 1 Cr', '1 - 2 Cr', '2 - 5 Cr', '5 Cr+'];

const SearchSection = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('Bangalore');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bhk, setBhk] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('tab', 'buy');
    if (city) params.append('city', city);
    if (location) params.append('location', location);
    if (propertyType) params.append('type', propertyType);
    if (bhk) params.append('bhk', bhk);
    if (budget) params.append('budget', budget);
    navigate(`/search?${params.toString()}`);
  };

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

        <motion.form onSubmit={handleSearch} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="w-full">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-black/25 p-2.5 sm:p-3.5">
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <div className="relative sm:w-44 flex-shrink-0">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-500 pointer-events-none" />
                <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none cursor-pointer">
                  {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Search locality, project, or landmark..." className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="w-full pl-11 pr-8 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none cursor-pointer">
                  <option value="">Property Type</option>
                  {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              <div className="relative flex-1">
                <Bed className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select value={bhk} onChange={(e) => setBhk(e.target.value)} className="w-full pl-11 pr-8 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none cursor-pointer">
                  <option value="">BHK Type</option>
                  {bhkOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              <div className="relative flex-1">
                <IndianRupee className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <select value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full pl-11 pr-8 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none cursor-pointer">
                  <option value="">Budget</option>
                  {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
              <button type="submit" className="flex items-center justify-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transform hover:-translate-y-0.5 transition-all whitespace-nowrap">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default SearchSection;
