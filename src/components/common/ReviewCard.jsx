import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/60 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[180px]">
      <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-200 dark:text-slate-750/30 pointer-events-none" />
      
      <div className="relative z-10 mb-4">
        {/* Rating stars */}
        <div className="flex space-x-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(review.rating || 5) ? 'fill-yellow-450 text-yellow-450' : 'text-slate-200 dark:text-slate-700'
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed italic pr-4">
          "{review.quote || review.comment || 'Excellent service, found exactly what I was looking for without any issues.'}"
        </p>
      </div>

      {/* User profile info */}
      <div className="relative z-10 flex items-center space-x-3 pt-3.5 border-t border-slate-100 dark:border-slate-750">
        <img
          src={review.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
          alt={review.name}
          className="w-9 h-9 rounded-full object-cover border border-slate-100 dark:border-slate-700"
        />
        <div>
          <h4 className="font-display font-bold text-slate-800 dark:text-white text-xs">
            {review.name}
          </h4>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase">
            {review.role || 'Verified Tenant'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
