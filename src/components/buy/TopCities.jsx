import React from 'react';
import { motion } from 'framer-motion';
import { cities } from '../../data/dummyData';
import CityCard from '../common/CityCard';

const TopCities = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Explore Locations</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Top Cities to Buy Property</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Find verified homes in India's most sought-after real estate markets</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {cities.map((city, idx) => (
            <motion.div key={city.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
              <CityCard city={city} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCities;
