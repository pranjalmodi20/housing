import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, Mic, Target, Check, Loader2, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
  { id: 'new-launch', label: 'New Launch', hasDot: true },
  { id: 'commercial', label: 'Commercial' },
  { id: 'plots-land', label: 'Plots/Land' },
  { id: 'projects', label: 'Projects' }
];

const categories = ['All Residential', 'Commercial', 'Plots/Land', 'PG/Co-Living'];

const popularLocalities = [
  'Bandra West, Mumbai',
  'Andheri West, Mumbai',
  'Whitefield, Bangalore',
  'Koramangala, Bangalore',
  'Gurgaon Sector 54, Delhi NCR',
  'Noida Sector 62, Delhi NCR',
  'Koregaon Park, Pune',
  'Jubilee Hills, Hyderabad',
  'ECR, Chennai',
  'Gachibowli, Hyderabad',
  'Salt Lake, Kolkata',
  'New Town, Kolkata'
];

const propertyTypes = [
  'Flat/Apartment',
  'Builder Floor',
  'Independent House/Villa',
  'Residential Land',
  '1 RK/ Studio Apartment',
  'Farm House',
  'Serviced Apartments',
  'Other'
];

const budgetOptions = ['Under 20 Lakhs', '20 - 50 Lakhs', '50 Lakhs - 1 Cr', '1 - 2 Cr', '2 - 5 Cr', '5 Cr+'];
const bedroomOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
const constructionOptions = ['Ready to Move', 'Under Construction', 'New Launch'];
const postedByOptions = ['Owner', 'Agent', 'Builder'];

const Hero = () => {
  const navigate = useNavigate();

  // Primary States
  const [activeTab, setActiveTab] = useState('buy');
  const [category, setCategory] = useState('All Residential');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  // Advanced Filters dropdown toggle
  const [openDropdown, setOpenDropdown] = useState(null); // 'type', 'budget', 'bedroom', 'status', 'posted'

  // Advanced Filter state variables
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedPostedBy, setSelectedPostedBy] = useState([]);

  // Refs for closing dropdowns on click outside
  const categoryRef = useRef(null);
  const searchInputRef = useRef(null);
  const filterRowRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setShowCategoryDropdown(false);
      }
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
      if (filterRowRef.current && !filterRowRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLocalities = popularLocalities.filter((loc) =>
    loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePropertyTypeChange = (type) => {
    setSelectedPropertyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleBedroomChange = (bhk) => {
    setSelectedBedrooms((prev) =>
      prev.includes(bhk) ? prev.filter((item) => item !== bhk) : [...prev, bhk]
    );
  };

  const handleStatusChange = (status) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((item) => item !== status) : [...prev, status]
    );
  };

  const handlePostedByChange = (poster) => {
    setSelectedPostedBy((prev) =>
      prev.includes(poster) ? prev.filter((item) => item !== poster) : [...prev, poster]
    );
  };

  const triggerVoiceSearch = () => {
    setIsListening(true);
    setSearchQuery('Listening...');
    setTimeout(() => {
      setSearchQuery('Noida Sector 62, Delhi NCR');
      setIsListening(false);
      setShowSuggestions(true);
    }, 2000);
  };

  const triggerLocateMe = () => {
    setIsLocating(true);
    setSearchQuery('Detecting Location...');
    setTimeout(() => {
      setSearchQuery('Whitefield, Bangalore');
      setIsLocating(false);
      setShowSuggestions(true);
    }, 1500);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const params = new URLSearchParams();
      params.append('tab', activeTab);
      params.append('category', category);
      if (searchQuery && searchQuery !== 'Listening...' && searchQuery !== 'Detecting Location...') {
        params.append('query', searchQuery);
      }
      if (selectedPropertyTypes.length > 0) {
        params.append('types', selectedPropertyTypes.join(','));
      }
      if (selectedBudget) {
        params.append('budget', selectedBudget);
      }
      if (selectedBedrooms.length > 0) {
        params.append('bhk', selectedBedrooms.join(','));
      }
      if (selectedStatus.length > 0) {
        params.append('status', selectedStatus.join(','));
      }
      if (selectedPostedBy.length > 0) {
        params.append('posted', selectedPostedBy.join(','));
      }
      navigate(`/search?${params.toString()}`);
    }, 800);
  };

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

        {/* Search Widget Container (99acres Inspired layout & dropdown filters) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-full max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-6 relative text-left"
        >
          {/* Top Tabs Row */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 flex-wrap gap-y-4">
            <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative font-semibold text-sm py-2 px-1 transition-colors whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="relative">
                    {tab.label}
                    {tab.hasDot && (
                      <span className="absolute -top-1.5 -right-2 w-1.5 h-1.5 bg-[#D9381E] rounded-full" />
                    )}
                  </span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="heroTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-700"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right side Post Property link */}
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
              <button 
                type="button"
                onClick={() => navigate('/login')} 
                className="flex items-center space-x-1.5 text-slate-700 hover:text-slate-900 font-semibold text-sm cursor-pointer"
              >
                <span>Post Property</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded border border-emerald-200">
                  FREE
                </span>
              </button>
            </div>
          </div>

          {/* Search Input Bar Group */}
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <div className="flex items-center bg-[#F5F4F1] border border-slate-200 rounded-2xl p-2.5 shadow-inner relative">
              {/* Category Dropdown */}
              <div ref={categoryRef} className="relative">
                <button
                  type="button"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 bg-transparent text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <span>{category}</span>
                  {showCategoryDropdown ? (
                    <ChevronUp className="w-4 h-4 text-slate-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </button>
                <AnimatePresence>
                  {showCategoryDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-3 w-52 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 overflow-hidden"
                    >
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setCategory(cat);
                            setShowCategoryDropdown(false);
                          }}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary-700 transition-colors cursor-pointer"
                        >
                          <span>{cat}</span>
                          {category === cat && <Check className="w-3.5 h-3.5 text-primary-700" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Vertical divider */}
              <div className="w-[1px] h-6 bg-slate-250 mx-2" />

              {/* Search text input + Autocomplete suggestions */}
              <div ref={searchInputRef} className="flex-1 flex items-center relative">
                <Search className="absolute left-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder='Search city, locality, or project...'
                  className="w-full bg-transparent pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                />

                {/* Autocomplete suggestions box */}
                <AnimatePresence>
                  {showSuggestions && searchQuery.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-0 right-0 top-full mt-4 bg-white border border-slate-200 rounded-xl shadow-2xl z-35 max-h-60 overflow-y-auto"
                    >
                      {filteredLocalities.length > 0 ? (
                        filteredLocalities.map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => {
                              setSearchQuery(loc);
                              setShowSuggestions(false);
                            }}
                            className="w-full flex items-center space-x-2.5 px-4 py-2.5 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary-700 transition-colors cursor-pointer"
                          >
                            <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span>{loc}</span>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-xs text-slate-400 font-semibold">
                          No localities found
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Icons on the right */}
              <div className="flex items-center space-x-3.5 pr-2">
                <button
                  type="button"
                  onClick={triggerLocateMe}
                  disabled={isLocating}
                  aria-label="Locate me"
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-primary-700 transition-colors cursor-pointer disabled:opacity-60"
                >
                  <Target className={`w-4.5 h-4.5 ${isLocating ? 'animate-spin text-primary-600' : ''}`} />
                </button>
                <button
                  type="button"
                  onClick={triggerVoiceSearch}
                  disabled={isListening}
                  aria-label="Voice search"
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-500 hover:text-primary-700 transition-colors cursor-pointer disabled:opacity-60"
                >
                  <Mic className={`w-4.5 h-4.5 ${isListening ? 'animate-pulse text-red-500' : ''}`} />
                </button>

                {/* Primary styled Search Button */}
                <button
                  type="submit"
                  disabled={isSearching}
                  className="min-w-[90px] flex items-center justify-center px-6 py-2.5 bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer disabled:opacity-60"
                >
                  {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Search'}
                </button>
              </div>
            </div>
          </form>

          {/* Filter Dropdowns Row (Inspired by 99acres filter controls) */}
          <div ref={filterRowRef} className="flex items-center gap-2.5 flex-wrap border-t border-slate-100 pt-4">
            
            {/* Property Type Dropdown (Multi-select) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
                className={`flex items-center space-x-1.5 px-3.5 py-2 border rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedPropertyTypes.length > 0
                    ? 'border-primary-500 bg-primary-50/50 text-primary-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span>
                  {selectedPropertyTypes.length === 0
                    ? 'Property Type'
                    : `Property Type (${selectedPropertyTypes.length})`}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <AnimatePresence>
                {openDropdown === 'type' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 mt-2 w-72 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 p-4"
                  >
                    <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Property Type</span>
                      <button
                        type="button"
                        onClick={() => setSelectedPropertyTypes([])}
                        className="text-[11px] font-bold text-primary-700 hover:text-primary-800 hover:underline cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                      {propertyTypes.map((item) => (
                        <label
                          key={item}
                          className="flex items-center space-x-3 text-xs font-semibold text-slate-700 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedPropertyTypes.includes(item)}
                            onChange={() => handlePropertyTypeChange(item)}
                            className="rounded border-slate-300 bg-white text-primary-700 focus:ring-primary-500 w-4 h-4 transition-colors accent-primary-700 cursor-pointer"
                          />
                          <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Budget Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
                className={`flex items-center space-x-1.5 px-3.5 py-2 border rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedBudget
                    ? 'border-primary-500 bg-primary-50/50 text-primary-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span>{selectedBudget || 'Budget'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <AnimatePresence>
                {openDropdown === 'budget' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => { setSelectedBudget(''); setOpenDropdown(null); }}
                      className="w-full px-4 py-2 text-left text-xs font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-800 cursor-pointer"
                    >
                      Any Budget
                    </button>
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => { setSelectedBudget(opt); setOpenDropdown(null); }}
                        className="w-full flex items-center justify-between px-4 py-2 text-left text-xs font-semibold text-slate-650 hover:bg-slate-50 hover:text-slate-800 cursor-pointer"
                      >
                        <span>{opt}</span>
                        {selectedBudget === opt && <Check className="w-3 h-3 text-primary-700" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bedroom Dropdown (Multi-select) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'bedroom' ? null : 'bedroom')}
                className={`flex items-center space-x-1.5 px-3.5 py-2 border rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedBedrooms.length > 0
                    ? 'border-primary-500 bg-primary-50/50 text-primary-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span>
                  {selectedBedrooms.length === 0
                    ? 'Bedroom'
                    : `Bedroom (${selectedBedrooms.length})`}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <AnimatePresence>
                {openDropdown === 'bedroom' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 p-3.5"
                  >
                    <div className="flex items-center justify-between mb-2 border-b border-slate-100 pb-1.5">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Bedrooms</span>
                      <button
                        type="button"
                        onClick={() => setSelectedBedrooms([])}
                        className="text-[10px] font-bold text-primary-700 hover:text-primary-800 hover:underline cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="space-y-2.5">
                      {bedroomOptions.map((item) => (
                        <label
                          key={item}
                          className="flex items-center space-x-3 text-xs font-semibold text-slate-700 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedBedrooms.includes(item)}
                            onChange={() => handleBedroomChange(item)}
                            className="rounded border-slate-300 bg-white text-primary-700 focus:ring-primary-500 w-4 h-4 transition-colors accent-primary-700 cursor-pointer"
                          />
                          <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Construction Status Dropdown (Multi-select) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'status' ? null : 'status')}
                className={`flex items-center space-x-1.5 px-3.5 py-2 border rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedStatus.length > 0
                    ? 'border-primary-500 bg-primary-50/50 text-primary-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span>
                  {selectedStatus.length === 0
                    ? 'Construction Status'
                    : `Status (${selectedStatus.length})`}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <AnimatePresence>
                {openDropdown === 'status' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 mt-2 w-52 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 p-3.5"
                  >
                    <div className="flex items-center justify-between mb-2 border-b border-slate-100 pb-1.5">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Status</span>
                      <button
                        type="button"
                        onClick={() => setSelectedStatus([])}
                        className="text-[10px] font-bold text-primary-700 hover:text-primary-800 hover:underline cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="space-y-2.5">
                      {constructionOptions.map((item) => (
                        <label
                          key={item}
                          className="flex items-center space-x-3 text-xs font-semibold text-slate-700 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedStatus.includes(item)}
                            onChange={() => handleStatusChange(item)}
                            className="rounded border-slate-300 bg-white text-primary-700 focus:ring-primary-500 w-4 h-4 transition-colors accent-primary-700 cursor-pointer"
                          />
                          <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Posted By Dropdown (Multi-select) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'posted' ? null : 'posted')}
                className={`flex items-center space-x-1.5 px-3.5 py-2 border rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedPostedBy.length > 0
                    ? 'border-primary-500 bg-primary-50/50 text-primary-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                <span>
                  {selectedPostedBy.length === 0
                    ? 'Posted By'
                    : `Posted By (${selectedPostedBy.length})`}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <AnimatePresence>
                {openDropdown === 'posted' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl z-30 p-3.5"
                  >
                    <div className="flex items-center justify-between mb-2 border-b border-slate-100 pb-1.5">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Posted By</span>
                      <button
                        type="button"
                        onClick={() => setSelectedPostedBy([])}
                        className="text-[10px] font-bold text-primary-700 hover:text-primary-800 hover:underline cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="space-y-2.5">
                      {postedByOptions.map((item) => (
                        <label
                          key={item}
                          className="flex items-center space-x-3 text-xs font-semibold text-slate-700 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedPostedBy.includes(item)}
                            onChange={() => handlePostedByChange(item)}
                            className="rounded border-slate-300 bg-white text-primary-700 focus:ring-primary-500 w-4 h-4 transition-colors accent-primary-700 cursor-pointer"
                          />
                          <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Popular:</span>
            {['Whitefield', 'Bandra', 'Koramangala', 'DLF Phase 5'].map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => { setSearchQuery(loc); setShowSuggestions(false); }}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary-700/5 text-slate-700 hover:bg-primary-700/10 hover:text-slate-800 border border-primary-700/10 transition-all cursor-pointer"
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
