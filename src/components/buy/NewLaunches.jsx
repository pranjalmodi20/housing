import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const launches = [
  { id: 1, title: 'Prestige City', developer: 'Prestige Group', city: 'Bangalore', price: '₹89 Lakhs onwards', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', status: 'Pre-Launch' },
  { id: 2, title: 'Lodha Crown', developer: 'Lodha Group', city: 'Mumbai', price: '₹1.8 Cr onwards', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80', status: 'Newly Launched' },
  { id: 3, title: 'DLF The Arbour', developer: 'DLF Group', city: 'Gurgaon', price: '₹5.99 Cr onwards', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80', status: 'Newly Launched' },
  { id: 4, title: 'Godrej Forest Estate', developer: 'Godrej Properties', city: 'Pune', price: '₹72 Lakhs onwards', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80', status: 'Pre-Launch' },
];

const NewLaunches = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Just Announced</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">New Launches & Pre-Launch</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Be the first to invest in exclusive upcoming residential projects</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {launches.map((project, idx) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} whileHover={{ y: -6 }} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide shadow-sm ${project.status === 'Pre-Launch' ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'}`}>{project.status}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-slate-800 dark:text-white truncate">{project.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{project.developer} • {project.city}</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                  <span className="font-display font-extrabold text-primary-700 dark:text-primary-400 text-sm">{project.price}</span>
                  <span className="text-xs text-primary-600 dark:text-primary-400 font-bold flex items-center hover:underline">Details <ArrowRight className="w-3 h-3 ml-0.5" /></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
