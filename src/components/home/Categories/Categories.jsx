import React from 'react';
import { motion } from 'framer-motion';
import { Home, Key, Building2, Compass, Users } from 'lucide-react';
import { categories } from '../../../data/dummyData';

const iconMap = { Home, Key, Building2, Compass, Users };

const cardColors = [
  'from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-100 dark:border-purple-800/30 hover:border-purple-300 dark:hover:border-purple-600',
  'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-100 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600',
  'from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-100 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-600',
  'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-100 dark:border-amber-800/30 hover:border-amber-300 dark:hover:border-amber-600',
  'from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 border-rose-100 dark:border-rose-800/30 hover:border-rose-300 dark:hover:border-rose-600',
];

const iconColors = [
  'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400',
  'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400',
  'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400',
  'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400',
  'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400',
];

const Categories = () => {
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
            Explore
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            What Are You Looking For?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto">
            Browse through our diverse categories to find exactly what you need
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Home;
            return (
              <motion.a
                key={cat.id}
                href={cat.link}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group p-6 rounded-2xl bg-gradient-to-br border-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl ${cardColors[idx]}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${iconColors[idx]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-800 dark:text-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{cat.count}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
