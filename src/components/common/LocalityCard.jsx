import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LocalityCard = ({ locality }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/locality/${locality.name.toLowerCase()}`);
  };

  const isUp = locality.trend === 'up';

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={handleCardClick}
      className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-display font-bold text-slate-850 dark:text-white text-base leading-tight">
              {locality.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
              {locality.city}
            </p>
          </div>
          {locality.percentage && (
            <div className={`flex items-center space-x-0.5 px-2 py-0.5 rounded-lg text-[10px] font-bold ${
              isUp
                ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
                : 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-450'
            }`}>
              {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              <span>{locality.percentage}</span>
            </div>
          )}
        </div>

        {/* Pricing details */}
        <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-700/60 mb-2">
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span>Average Price</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">{locality.priceRange || locality.rentRange}</span>
          </div>
          {locality.rating && (
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>Locality Rating</span>
              <span className="font-semibold text-amber-500">★ {locality.rating}</span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-2 text-right">
        <span className="text-xs text-primary-750 dark:text-primary-400 font-bold hover:underline inline-flex items-center">
          <span>Explore Locality</span>
          <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
        </span>
      </div>
    </motion.div>
  );
};

export default LocalityCard;
