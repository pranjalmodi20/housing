import React, { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ placeholder = 'Search city, locality, project...', defaultTab = 'buy' }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('Bangalore');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (city) params.append('city', city);
    navigate(`/search?tab=${activeTab}&${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl bg-white dark:bg-slate-800 rounded-3xl shadow-xl shadow-black/10 p-2 border border-slate-100/50 dark:border-slate-700/50">
      {/* Tabs */}
      <div className="flex space-x-1.5 mb-2 border-b border-slate-100/80 dark:border-slate-750 pb-2 px-2">
        {['buy', 'rent', 'commercial', 'plots', 'pg'].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4.5 py-1.5 text-xs font-bold rounded-lg uppercase tracking-wide transition-all ${
              activeTab === tab
                ? 'bg-primary-700 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-850 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2">
        {/* City selection */}
        <div className="relative sm:w-44 flex-shrink-0 flex items-center bg-slate-50 dark:bg-slate-700 px-3.5 py-2.5 rounded-2xl">
          <MapPin className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-700 dark:text-slate-200 focus:outline-none appearance-none cursor-pointer pr-5"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
          <ChevronDown className="absolute right-3 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>

        {/* Text Input */}
        <div className="relative flex-1 flex items-center bg-slate-50 dark:bg-slate-700 px-3.5 py-2.5 rounded-2xl">
          <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-primary-700 to-indigo-750 hover:from-primary-600 hover:to-indigo-650 text-white font-semibold rounded-2xl transition-all shadow-md flex items-center justify-center space-x-1.5 whitespace-nowrap"
        >
          <Search className="w-4 h-4" />
          <span className="text-sm">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
