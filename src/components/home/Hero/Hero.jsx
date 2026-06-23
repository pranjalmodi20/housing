import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown, Building, Home, Landmark, TreePine, Users, Loader2 } from 'lucide-react';
import { cities } from '../../../data/dummyData';

const searchTabs = [
  { id: 'buy', label: 'Buy', icon: Home },
  { id: 'rent', label: 'Rent', icon: Building },
  { id: 'commercial', label: 'Commercial', icon: Landmark },
  { id: 'plots', label: 'Plots', icon: TreePine },
  { id: 'pg', label: 'PG', icon: Users },
];

const suggestions = [
  'Whitefield, Bangalore',
  'Bandra West, Mumbai',
  'Koregaon Park, Pune',
  'Gurgaon Sector 54, Delhi NCR',
  'Jubilee Hills, Hyderabad',
  'Koramangala, Bangalore',
  'ECR, Chennai',
  'Andheri West, Mumbai',
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const suggestionsRef = useRef(null);
  const cityRef = useRef(null);

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setIsSearching(true);
    setShowSuggestions(false);
    setTimeout(() => setIsSearching(false), 1500);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
      if (cityRef.current && !cityRef.current.contains(e.target)) {
        setShowCityDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
          alt="Modern luxury home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      </div>

      {/* Animated Floating Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary-300 bg-primary-500/15 border border-primary-500/20 rounded-full backdrop-blur-sm">
            India's #1 Premium Property Portal
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight">
            Discover Your{' '}
            <span className="bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Explore 100,000+ verified properties across 500+ cities. Buy, rent, or invest with confidence.
          </p>
        </motion.div>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-full max-w-3xl mx-auto"
        >
          {/* Tabs */}
          <div className="flex items-center justify-center space-x-1 mb-4">
            {searchTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-primary-700 shadow-lg shadow-white/20'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-black/20 p-2 flex flex-col sm:flex-row gap-2">
            {/* City Selector */}
            <div ref={cityRef} className="relative sm:w-44 flex-shrink-0">
              <button
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-left text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                <div className="flex items-center space-x-2 truncate">
                  <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="truncate">{selectedCity || 'Select City'}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showCityDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showCityDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-30 overflow-hidden">
                  {cities.map((city) => (
                    <button
                      key={city.id}
                      onClick={() => { setSelectedCity(city.name); setShowCityDropdown(false); }}
                      className="w-full px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                    >
                      {city.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Search Input */}
            <div ref={suggestionsRef} className="relative flex-1">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                  placeholder="Search locality, landmark, or project..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-30 overflow-hidden max-h-60 overflow-y-auto">
                  {filteredSuggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setSearchQuery(s); setShowSuggestions(false); }}
                      className="w-full flex items-center space-x-2.5 px-4 py-2.5 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{s}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              disabled={isSearching}
              className="flex items-center justify-center space-x-2 px-7 py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transform hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSearching ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Search className="w-4.5 h-4.5" />
                  <span>Search</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            <span className="text-sm text-slate-400">Popular:</span>
            {['Whitefield', 'Bandra', 'Koramangala', 'DLF Phase 5'].map((loc) => (
              <button
                key={loc}
                onClick={() => setSearchQuery(loc)}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10 backdrop-blur-sm transition-all"
              >
                {loc}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
