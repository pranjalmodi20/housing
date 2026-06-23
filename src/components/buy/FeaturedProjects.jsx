import React from 'react';
import { motion } from 'framer-motion';
import { properties } from '../../data/dummyData';
import PropertyCard from '../common/PropertyCard';

const FeaturedProjects = () => {
  const buyProperties = properties.filter((p) => p.type !== 'Office').slice(0, 8);

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Top Picks</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Featured Projects</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Handpicked residential projects from India's top developers</p>
          </div>
          <a href="/search?tab=buy" className="text-primary-600 dark:text-primary-400 font-semibold text-sm hover:underline whitespace-nowrap">View All →</a>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {buyProperties.map((property, idx) => (
            <motion.div key={property.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
