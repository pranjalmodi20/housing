import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, Mic, Target, Check, Loader2, MapPin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { id: 'buy', label: 'Buy' },
  { id: 'rent', label: 'Rent' },
  { id: 'new-launch', label: 'New Launch', hasDot: true },
  { id: 'commercial', label: 'Commercial' },
  { id: 'plots-land', label: 'Plots/Land' },
  { id: 'pg', label: 'PG' },
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

const propertyTypesByTab = {
  buy: ['Flat/Apartment', 'Builder Floor', 'Independent House/Villa', 'Residential Land', '1 RK/ Studio Apartment', 'Farm House', 'Serviced Apartments', 'Other'],
  rent: ['Flat/Apartment', 'Builder Floor', 'Independent House/Villa', '1 RK/ Studio Apartment', 'Serviced Apartments', 'Other'],
  'new-launch': ['Flat/Apartment', 'Builder Floor', 'Independent House/Villa', 'Residential Land', 'Other'],
  commercial: ['Office Space', 'Retail Shop', 'Showroom', 'Warehouse/Godown', 'Industrial Land/Shed', 'Other'],
  'plots-land': ['Residential Plots', 'Agricultural Land', 'Commercial Land', 'Industrial Land', 'Other'],
  pg: ['Single Room', 'Double Sharing', 'Triple Sharing', 'Co-living space', 'Other'],
  projects: ['Flat/Apartment', 'Independent House/Villa', 'Builder Floor', 'Other']
};

const tabRoutes = {
  buy: '/buy',
  rent: '/rent',
  'new-launch': '/new-launch',
  commercial: '/commercial',
  'plots-land': '/plots',
  pg: '/pg',
  projects: '/projects',
};

const budgetOptionsBuy = ['Under 20 Lakhs', '20 - 50 Lakhs', '50 Lakhs - 1 Cr', '1 - 2 Cr', '2 - 5 Cr', '5 Cr+'];
const budgetOptionsRent = ['Under 5,000/mo', '5,000 - 10,000/mo', '10,000 - 15,000/mo', '15,000 - 25,000/mo', '25,000 - 50,000/mo', '50,000/mo+'];

const bedroomOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
const constructionOptions = ['Ready to Move', 'Under Construction', 'New Launch'];
const postedByOptions = ['Owner', 'Agent', 'Builder'];

const SearchBox = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to resolve active tab based on route on mount
  const getTabFromPath = (path) => {
    if (path.startsWith('/buy')) return 'buy';
    if (path.startsWith('/rent')) return 'rent';
    if (path.startsWith('/new-launch')) return 'new-launch';
    if (path.startsWith('/commercial')) return 'commercial';
    if (path.startsWith('/plots')) return 'plots-land';
    if (path.startsWith('/pg')) return 'pg';
    if (path.startsWith('/projects')) return 'projects';
    return 'buy'; // default for landing/home
  };

  // States
  const [activeTab, setActiveTab] = useState(() => getTabFromPath(location.pathname));
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

  // Reset filters when tab switches
  useEffect(() => {
    setSelectedPropertyTypes([]);
    setSelectedBudget('');
    setSelectedBedrooms([]);
    setSelectedStatus([]);
    setSelectedPostedBy([]);
  }, [activeTab]);

  // Sync active tab with location route changes
  useEffect(() => {
    setActiveTab(getTabFromPath(location.pathname));
  }, [location.pathname]);

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
      params.append('tab', activeTab === 'plots-land' ? 'plots' : activeTab);
      params.append('category', category);
      if (searchQuery && searchQuery !== 'Listening...' && searchQuery !== 'Detecting Location...') {
        params.append('location', searchQuery);
      }
      if (selectedPropertyTypes.length > 0) {
        params.append('type', selectedPropertyTypes[0]);
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

  // Determine configuration/filters to show
  const currentPropertyTypes = propertyTypesByTab[activeTab] || propertyTypesByTab.buy;
  const isRentOrPg = activeTab === 'rent' || activeTab === 'pg';
  const currentBudgetOptions = isRentOrPg ? budgetOptionsRent : budgetOptionsBuy;

  const showBedroomFilter = activeTab !== 'commercial' && activeTab !== 'plots-land' && activeTab !== 'pg';
  const showStatusFilter = activeTab !== 'pg';

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-6 relative text-left">
      {/* Top Tabs Row */}
      <div className="flex items-center border-b border-slate-100 pb-4 mb-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-4 sm:gap-6 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                navigate(tabRoutes[tab.id]);
              }}
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
                  layoutId="sharedTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-700"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}

          {/* Right side Post Property link */}
          <div className="flex items-center border-l border-slate-200 pl-4 sm:pl-6">
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

      {/* Filter Dropdowns Row */}
      <div ref={filterRowRef} className="flex items-center gap-2.5 flex-wrap border-t border-slate-100 pt-4">
        
        {/* Property Type Dropdown */}
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
                  {currentPropertyTypes.map((item) => (
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
                {currentBudgetOptions.map((opt) => (
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

        {/* Bedroom Dropdown */}
        {showBedroomFilter && (
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
        )}

        {/* Construction Status Dropdown */}
        {showStatusFilter && (
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
        )}

        {/* Posted By Dropdown */}
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
    </div>
  );
};

export default SearchBox;
