import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown, Check, X } from 'lucide-react';

const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
const budgetOptions = ['Under 20 Lakhs', '20 - 50 Lakhs', '50 Lakhs - 1 Cr', '1 - 2 Cr', '2 Cr+'];
const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Independent House', 'Plot'];
const possessionOptions = ['Ready to Move', 'Within 1 Year', 'Within 3 Years', '3+ Years'];

const FilterSidebar = ({ onApplyFilters, onClose }) => {
  const [selectedBhk, setSelectedBhk] = useState(new Set());
  const [selectedTypes, setSelectedTypes] = useState(new Set());
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedPossession, setSelectedPossession] = useState('');

  const toggleSetOption = (set, setSetter, val) => {
    const next = new Set(set);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    setSetter(next);
  };

  const handleClearAll = () => {
    setSelectedBhk(new Set());
    setSelectedTypes(new Set());
    setSelectedBudget('');
    setSelectedPossession('');
  };

  const handleApply = () => {
    if (onApplyFilters) {
      onApplyFilters({
        bhk: Array.from(selectedBhk),
        types: Array.from(selectedTypes),
        budget: selectedBudget,
        possession: selectedPossession,
      });
    }
    if (onClose) onClose();
  };

  return (
    <div className="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-3xl p-6 shadow-md flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-4.5 h-4.5 text-primary-600 dark:text-primary-400" />
            <h2 className="font-display font-extrabold text-lg text-slate-800 dark:text-white">Filters</h2>
          </div>
          <button
            onClick={handleClearAll}
            className="text-xs text-slate-400 hover:text-primary-600 font-semibold"
          >
            Clear All
          </button>
        </div>

        {/* BHk selection */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-3">BHK Type</h3>
          <div className="flex flex-wrap gap-2">
            {bhkOptions.map((bhk) => {
              const isSelected = selectedBhk.has(bhk);
              return (
                <button
                  key={bhk}
                  type="button"
                  onClick={() => toggleSetOption(selectedBhk, setSelectedBhk, bhk)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    isSelected
                      ? 'bg-primary-700 border-primary-700 text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-650 dark:text-slate-350 border-slate-205/60 dark:border-slate-650'
                  }`}
                >
                  {bhk}
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-3">Budget Range</h3>
          <select
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-700 text-sm text-slate-700 dark:text-slate-200 focus:outline-none px-3.5 py-3 rounded-xl border border-transparent"
          >
            <option value="">Select Budget</option>
            {budgetOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-3">Property Type</h3>
          <div className="flex flex-wrap gap-2">
            {propertyTypes.map((type) => {
              const isSelected = selectedTypes.has(type);
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleSetOption(selectedTypes, setSelectedTypes, type)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    isSelected
                      ? 'bg-primary-700 border-primary-700 text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-650 dark:text-slate-305 border-slate-205/60 dark:border-slate-650'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Possession Status */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-3">Possession Status</h3>
          <div className="flex flex-wrap gap-2">
            {possessionOptions.map((opt) => {
              const isSelected = selectedPossession === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedPossession(isSelected ? '' : opt)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    isSelected
                      ? 'bg-primary-700 border-primary-700 text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-700 text-slate-650 dark:text-slate-305 border-slate-205/60 dark:border-slate-650'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer trigger */}
      <button
        onClick={handleApply}
        className="w-full py-3.5 bg-gradient-to-r from-primary-700 to-indigo-750 hover:from-primary-600 hover:to-indigo-650 text-white font-semibold rounded-2xl transition-all shadow-md mt-6"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
