

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Key, Building2, Compass, Users } from 'lucide-react';
import { categories } from '../../../data/dummyData';

const iconMap = { Home, Key, Building2, Compass, Users };

const cardColors = [
  // Buy Home (Soft Green)
  'from-emerald-50/80 to-green-50/80 dark:from-emerald-950/20 dark:to-green-950/20 border-emerald-100 dark:border-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-600',
  // Rent Home (Soft Blue)
  'from-blue-50/80 to-sky-50/80 dark:from-blue-950/20 dark:to-sky-950/20 border-blue-100 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600',
  // Commercial (Soft Mint/Sage Green)
  'from-teal-50/80 to-emerald-50/30 dark:from-teal-950/20 dark:to-emerald-950/20 border-teal-100 dark:border-teal-800/30 hover:border-teal-300 dark:hover:border-teal-600',
  // Plots / Land (Soft Brown/Beige)
  'from-amber-50/80 to-stone-100/50 dark:from-amber-950/15 dark:to-stone-900/25 border-amber-100 dark:border-amber-800/30 hover:border-amber-300 dark:hover:border-amber-600',
  // PG / Co-Living (Soft Pink)
  'from-rose-50/80 to-pink-50/80 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-100 dark:border-rose-800/30 hover:border-rose-300 dark:hover:border-rose-600',
];

const iconColors = [
  // Buy Home (Soft Green)
  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  // Rent Home (Soft Blue)
  'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  // Commercial (Soft Mint/Sage Green)
  'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  // Plots / Land (Soft Brown/Beige)
  'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  // PG / Co-Living (Soft Pink)
  'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
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
