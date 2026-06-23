import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, TrendingDown, Star } from 'lucide-react';
import { localities } from '../../../data/dummyData';

const PopularLocalities = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Trending
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Popular Localities
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto">
            Discover top-performing neighborhoods with the best appreciation rates
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {localities.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{loc.rating}</span>
                </div>
              </div>

              <h3 className="font-display font-semibold text-lg text-slate-800 dark:text-white mb-0.5">
                {loc.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{loc.city}</p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">Avg. Price</p>
                  <p className="font-display font-bold text-sm text-slate-800 dark:text-white">{loc.priceRange}</p>
                </div>
                <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                  loc.trend === 'up'
                    ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                }`}>
                  {loc.trend === 'up' ? (
                    <TrendingUp className="w-3.5 h-3.5" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5" />
                  )}
                  <span>{loc.percentage}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocalities;
