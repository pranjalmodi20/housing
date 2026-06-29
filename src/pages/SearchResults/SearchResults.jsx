import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { properties } from '../../data/dummyData';
import PropertyCard from '../../components/common/PropertyCard';
import FilterSidebar from '../../components/common/FilterSidebar';
import { Search, MapPin, SlidersHorizontal, ArrowUpDown, Grid, List, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock additional rent, commercial, and plots listings for search pages
const extraSearchListings = [
  {
    id: 101,
    title: 'Prestige Boulevard Apartment',
    price: 32000,
    priceLabel: '₹32,000 / mo',
    bhk: 2,
    type: 'Apartment',
    locality: 'Whitefield',
    city: 'Bangalore',
    area: 1250,
    badge: 'Verified',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'rent',
    bathrooms: 2,
    furnishing: 'Semi-Furnished'
  },
  {
    id: 102,
    title: 'Sunset Sea View Penthouse',
    price: 85000,
    priceLabel: '₹85,000 / mo',
    bhk: 3,
    type: 'Penthouse',
    locality: 'Bandra West',
    city: 'Mumbai',
    area: 2100,
    badge: 'Exclusive',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'rent',
    bathrooms: 3,
    furnishing: 'Fully Furnished'
  },
  {
    id: 103,
    title: 'DLF phase 5 Modern Flat',
    price: 45000,
    priceLabel: '₹45,000 / mo',
    bhk: 3,
    type: 'Apartment',
    locality: 'Sector 54',
    city: 'Delhi NCR',
    area: 1750,
    badge: 'Newly Listed',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'rent',
    bathrooms: 3,
    furnishing: 'Semi-Furnished'
  },
  {
    id: 104,
    title: 'Marvel Bounty Cozy Villa',
    price: 65000,
    priceLabel: '₹65,000 / mo',
    bhk: 4,
    type: 'Villa',
    locality: 'Koregaon Park',
    city: 'Pune',
    area: 3200,
    badge: 'Verified',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'rent',
    bathrooms: 4,
    furnishing: 'Unfurnished'
  },
  // Commercial
  {
    id: 201,
    title: 'Modern Retail Shop',
    price: 18500000,
    priceLabel: '₹1.85 Cr',
    bhk: 0,
    type: 'Shop',
    locality: 'Koramangala',
    city: 'Bangalore',
    area: 1200,
    badge: 'High Footfall',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'commercial'
  },
  {
    id: 202,
    title: 'Spacious Logistics Warehouse',
    price: 350000,
    priceLabel: '₹3.5 Lakhs / mo',
    bhk: 0,
    type: 'Warehouse',
    locality: 'Bhiwandi',
    city: 'Mumbai',
    area: 15000,
    badge: 'Rented Out',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    verified: false,
    tab: 'commercial'
  },
  // Plots
  {
    id: 301,
    title: 'Premium BMRDA Plot',
    price: 4800000,
    priceLabel: '₹48 Lakhs',
    bhk: 0,
    type: 'Plot',
    locality: 'Devanahalli',
    city: 'Bangalore',
    area: 2400,
    badge: 'BMRDA Approved',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'plots'
  },
  // PG
  {
    id: 401,
    title: 'Stanza Living Premium PG',
    price: 12000,
    priceLabel: '₹12,000 / mo',
    bhk: 1,
    type: 'PG',
    locality: 'Whitefield',
    city: 'Bangalore',
    area: 250,
    badge: 'Co-Living',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'pg'
  },
  {
    id: 501,
    title: 'DLF The Crest New Phase',
    price: 31000000,
    priceLabel: '₹3.10 Cr',
    bhk: 3,
    type: 'Apartment',
    locality: 'Sector 54',
    city: 'Delhi NCR',
    area: 2400,
    badge: 'New Launch',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'new-launch',
    bathrooms: 3,
    furnishing: 'Unfurnished'
  },
  {
    id: 601,
    title: 'Prestige Lakeside Project',
    price: 48500000,
    priceLabel: '₹4.85 Cr onwards',
    bhk: 4,
    type: 'Project',
    locality: 'Whitefield',
    city: 'Bangalore',
    area: 4200,
    badge: 'Project',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    verified: true,
    tab: 'projects',
    bathrooms: 4,
    furnishing: 'Semi-Furnished'
  }
];

const tabLabels = {
  buy: 'Buy',
  rent: 'Rent',
  'new-launch': 'New Launch',
  commercial: 'Commercial',
  plots: 'Plots/Land',
  pg: 'PG',
  projects: 'Projects',
};

const tabIntentLabels = {
  buy: 'Sale',
  rent: 'Rent',
  'new-launch': 'New Launch',
  commercial: 'Commercial',
  plots: 'Plots/Land',
  pg: 'PG',
  projects: 'Projects',
};

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const tab = searchParams.get('tab') === 'plots-land' ? 'plots' : (searchParams.get('tab') || 'buy');
  const urlCity = searchParams.get('city') || '';
  const urlLocation = searchParams.get('location') || searchParams.get('query') || '';
  const urlType = searchParams.get('type') || '';
  const urlBhk = searchParams.get('bhk') || '';
  const urlBudget = searchParams.get('budget') || '';

  const [filteredListings, setFilteredListings] = useState([]);
  const [sortedListings, setSortedListings] = useState([]);
  const [sortOption, setSortOption] = useState('popular');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState(urlLocation);

  // Combine listings
  const allListings = [
    ...properties.map(p => ({ ...p, tab: p.type === 'Office' ? 'commercial' : 'buy' })),
    ...extraSearchListings
  ];

  useEffect(() => {
    setSearchQuery(urlLocation);
  }, [urlLocation]);

  useEffect(() => {
    // Filter logic
    let temp = allListings.filter((item) => {
      // Filter by Active Tab
      if (item.tab !== tab) return false;

      // Filter by City
      if (urlCity && item.city.toLowerCase() !== urlCity.toLowerCase()) return false;

      // Filter by Location Query
      if (urlLocation && !item.locality.toLowerCase().includes(urlLocation.toLowerCase()) && !item.title.toLowerCase().includes(urlLocation.toLowerCase())) {
        return false;
      }

      // Filter by Type
      if (urlType && item.type.toLowerCase() !== urlType.toLowerCase()) return false;

      // Filter by BHK
      if (urlBhk) {
        const bhkVal = parseInt(urlBhk);
        if (item.bhk !== bhkVal) return false;
      }

      return true;
    });

    setFilteredListings(temp);
  }, [tab, urlCity, urlLocation, urlType, urlBhk, urlBudget]);

  useEffect(() => {
    // Sorting logic
    let temp = [...filteredListings];
    if (sortOption === 'price-low') {
      temp.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      temp.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      temp.sort((a, b) => b.rating - a.rating);
    }
    setSortedListings(temp);
  }, [filteredListings, sortOption]);

  const handleApplyFilters = (filters) => {
    // Merge new filters into url params
    const nextParams = new URLSearchParams(searchParams);
    if (filters.bhk && filters.bhk.length > 0) {
      nextParams.set('bhk', filters.bhk[0].replace(/\D/g, ''));
    } else {
      nextParams.delete('bhk');
    }

    if (filters.types && filters.types.length > 0) {
      nextParams.set('type', filters.types[0]);
    } else {
      nextParams.delete('type');
    }

    setSearchParams(nextParams);
  };

  const handleTextSearch = (e) => {
    e.preventDefault();
    const nextParams = new URLSearchParams(searchParams);
    if (searchQuery) nextParams.set('location', searchQuery);
    else nextParams.delete('location');
    setSearchParams(nextParams);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Status Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-white">
              {sortedListings.length} Properties for {tabIntentLabels[tab] || 'Sale'}
              {urlCity && ` in ${urlCity}`}
            </h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
              Home Verse &gt; Search &gt; {tabLabels[tab] || tab}
            </p>
          </div>

          {/* Quick Search Input */}
          <form onSubmit={handleTextSearch} className="flex items-center space-x-2 bg-white dark:bg-slate-800 p-1.5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/60 max-w-md w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search other locations..."
                className="w-full pl-9 pr-3 py-2 bg-transparent text-sm focus:outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400"
              />
            </div>
            <button type="submit" className="px-5 py-2 rounded-xl bg-primary-700 hover:bg-primary-600 text-white text-xs font-semibold shadow-sm transition-colors">
              Find
            </button>
          </form>
        </div>

        {/* Toolbar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Tab:</span>
            <div className="flex items-center space-x-1.5 bg-slate-50 dark:bg-slate-950 p-1 rounded-xl">
              {['buy', 'rent', 'new-launch', 'commercial', 'plots', 'pg', 'projects'].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    const nextParams = new URLSearchParams(searchParams);
                    nextParams.set('tab', t);
                    setSearchParams(nextParams);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                    tab === t
                      ? 'bg-primary-700 text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {tabLabels[t] || t}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Sorting selection */}
            <div className="relative flex items-center space-x-2 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-xl border border-transparent">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-600 dark:text-slate-350 focus:outline-none cursor-pointer appearance-none pr-4"
              >
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[10px]">▼</span>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFiltersMobile(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar filters (Desktop only) */}
          <div className="hidden lg:block w-80 shrink-0 sticky top-24 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
            <FilterSidebar onApplyFilters={handleApplyFilters} />
          </div>

          {/* Listings List */}
          <div className="flex-1 w-full">
            {sortedListings.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {sortedListings.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-12 text-center shadow-sm flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-950/20 rounded-full flex items-center justify-center text-primary-600 mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-slate-800 dark:text-white mb-2">
                  No Properties Found
                </h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto mb-6">
                  We couldn't find any listings matching your search filters in {urlCity || 'this city'}. Try resetting your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchParams({ tab });
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 bg-primary-700 hover:bg-primary-600 text-white font-semibold text-sm rounded-xl shadow-md transition-colors"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer / Modal */}
      <AnimatePresence>
        {showFiltersMobile && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFiltersMobile(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white dark:bg-slate-800 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <span className="font-display font-bold text-base text-slate-800 dark:text-white">Filters</span>
                <button
                  onClick={() => setShowFiltersMobile(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 h-[calc(100vh-60px)]">
                <FilterSidebar
                  onApplyFilters={handleApplyFilters}
                  onClose={() => setShowFiltersMobile(false)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchResults;
