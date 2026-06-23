import React from 'react';
import { SearchSection, FeaturedProjects, NewLaunches, LuxuryHomes, TopCities } from '../../components/buy';
import { localities, collections } from '../../data/dummyData';
import { motion } from 'framer-motion';
import LocalityCard from '../../components/common/LocalityCard';

const Buy = () => {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      <SearchSection />
      <FeaturedProjects />
      <NewLaunches />
      <LuxuryHomes />
      <TopCities />

      {/* Top Localities */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Investment Hotspots</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Top Localities to Buy</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localities.slice(0, 8).map((l, idx) => (
              <motion.div key={l.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
                <LocalityCard locality={l} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Curated</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Property Collections</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((col, idx) => (
              <motion.a key={col.id} href={`/collections/${col.id}`} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} whileHover={{ y: -5 }} className="relative h-56 rounded-2xl overflow-hidden cursor-pointer group">
                <img src={col.image} alt={col.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${col.color}`} />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display font-bold text-lg">{col.title}</h3>
                  <p className="text-xs text-white/70 mt-0.5">{col.count}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;
