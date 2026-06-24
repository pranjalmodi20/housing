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
      {/* Background — 99acres-inspired light cream with architectural silhouettes */}
      <div className="absolute inset-0 bg-[#F5F4F1] overflow-hidden">
        {/* Soft layered gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8] via-[#F5F4F1] to-[#EDE9E3]" />
        {/* Secondary subtle diagonal gradient to add color complexity */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/[0.02] via-transparent to-indigo-500/[0.02] mix-blend-multiply pointer-events-none" />

        {/* Floating abstract blurred blobs for depth */}
        <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] rounded-full bg-primary-500/[0.02] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.03] blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-700/[0.015] blur-[160px] pointer-events-none" />

        {/* Curved decorative arc — top */}
        <div className="absolute top-0 left-0 right-0 h-[50%]">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none" style={{ opacity: 0.05 }}>
            <path d="M0,192 C360,320 1080,64 1440,192 L1440,320 L0,320 Z" fill="#1F4D3D" />
          </svg>
        </div>

        {/* Curved decorative arc — middle flowing curve */}
        <div className="absolute top-0 left-0 right-0 h-[60%] pointer-events-none">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none" style={{ opacity: 0.02 }}>
            <path d="M0,100 C400,280 1040,120 1440,240 L1440,320 L0,320 Z" fill="#1F4D3D" />
          </svg>
        </div>

        {/* Curved decorative arc — bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%]">
          <svg viewBox="0 0 1440 320" className="absolute top-0 w-full" preserveAspectRatio="none" style={{ opacity: 0.03 }}>
            <path d="M0,128 C480,0 960,256 1440,128 L1440,0 L0,0 Z" fill="#6E8B74" />
          </svg>
        </div>

        {/* Architectural city skyline silhouette — centered bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full transition-opacity duration-500"
          viewBox="0 0 1440 220"
          preserveAspectRatio="xMidYMax meet"
          style={{ opacity: 0.05, filter: 'url(#city-blur)' }}
        >
          <defs>
            <filter id="city-blur">
              <feGaussianBlur stdDeviation="0.8" />
            </filter>
          </defs>
          {/* Skyline buildings with varied heights and widths */}
          <rect x="50" y="130" width="35" height="90" rx="2" fill="#1F4D3D" />
          <rect x="95" y="25" width="24" height="195" rx="2" fill="#1F4D3D" />
          <rect x="130" y="100" width="50" height="120" rx="2" fill="#1F4D3D" />
          <rect x="190" y="65" width="28" height="155" rx="2" fill="#1F4D3D" />
          <rect x="228" y="140" width="45" height="80" rx="2" fill="#1F4D3D" />
          <rect x="285" y="35" width="32" height="185" rx="2" fill="#1F4D3D" />
          <rect x="328" y="115" width="55" height="105" rx="2" fill="#1F4D3D" />
          <rect x="395" y="85" width="22" height="135" rx="2" fill="#1F4D3D" />
          <rect x="428" y="60" width="38" height="160" rx="2" fill="#1F4D3D" />
          <rect x="478" y="125" width="50" height="95" rx="2" fill="#1F4D3D" />
          <rect x="540" y="30" width="26" height="190" rx="2" fill="#1F4D3D" />
          <rect x="578" y="110" width="42" height="110" rx="2" fill="#1F4D3D" />
          <rect x="630" y="70" width="30" height="150" rx="2" fill="#1F4D3D" />
          <rect x="670" y="135" width="48" height="85" rx="2" fill="#1F4D3D" />
          <rect x="730" y="40" width="28" height="180" rx="2" fill="#1F4D3D" />
          <rect x="770" y="100" width="50" height="120" rx="2" fill="#1F4D3D" />
          <rect x="830" y="25" width="24" height="195" rx="2" fill="#1F4D3D" />
          <rect x="865" y="115" width="38" height="105" rx="2" fill="#1F4D3D" />
          <rect x="915" y="75" width="28" height="145" rx="2" fill="#1F4D3D" />
          <rect x="955" y="130" width="45" height="90" rx="2" fill="#1F4D3D" />
          <rect x="1010" y="45" width="32" height="175" rx="2" fill="#1F4D3D" />
          <rect x="1052" y="105" width="52" height="115" rx="2" fill="#1F4D3D" />
          <rect x="1115" y="70" width="25" height="150" rx="2" fill="#1F4D3D" />
          <rect x="1150" y="125" width="40" height="95" rx="2" fill="#1F4D3D" />
          <rect x="1200" y="35" width="26" height="185" rx="2" fill="#1F4D3D" />
          <rect x="1238" y="110" width="48" height="110" rx="2" fill="#1F4D3D" />
          <rect x="1295" y="70" width="30" height="150" rx="2" fill="#1F4D3D" />
          <rect x="1335" y="140" width="44" height="80" rx="2" fill="#1F4D3D" />
          {/* Small antenna/spire details matching tower heights and centers */}
          <rect x="105" y="13" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="299" y="23" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="551" y="18" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="742" y="28" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="840" y="13" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="1024" y="33" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="1211" y="23" width="4" height="12" rx="1" fill="#1F4D3D" />
        </svg>

        {/* Soft radial glow — upper left */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-primary-500/[0.04] blur-3xl" />

        {/* Soft radial glow — lower right */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.03] blur-3xl" />

        {/* Very faint dotted grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(31,77,61,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Subtle premium paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.006] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary-800 bg-primary-500/10 border border-primary-500/15 rounded-full">
            India's #1 Premium Property Portal
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-[-0.02em] max-w-3xl mx-auto">
            Discover Your{' '}
            <span className="bg-gradient-to-r from-primary-700 to-indigo-600 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>
          <p className="text-lg font-medium text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
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
                      ? 'bg-white text-primary-700 shadow-lg shadow-primary-500/10'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-white/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-2 flex flex-col sm:flex-row gap-2 search-bar-container">
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
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary-700/8 text-slate-600 hover:bg-primary-700/15 hover:text-slate-800 border border-primary-700/10 transition-all"
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
