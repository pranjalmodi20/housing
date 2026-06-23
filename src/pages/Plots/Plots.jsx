import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, LandPlot, Home, Trees, TrendingUp, ArrowRight, Maximize, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plotTypes = [
  { id: 1, name: 'Residential Plots', desc: 'Build your dream home on your own terms', count: '5,600+', icon: Home, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Agricultural Land', desc: 'Farmhouses and agricultural investments', count: '2,100+', icon: Trees, image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Investment Plots', desc: 'High-growth areas for maximum appreciation', count: '3,400+', icon: TrendingUp, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80' },
];

const plotListings = [
  { id: 1, title: 'BMRDA Approved Plot', area: '2,400 sqft', price: '₹48 Lakhs', city: 'Bangalore', locality: 'Devanahalli', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', type: 'Residential' },
  { id: 2, title: 'Premium Corner Plot', area: '3,600 sqft', price: '₹1.2 Cr', city: 'Gurgaon', locality: 'Sector 81', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80', type: 'Investment' },
  { id: 3, title: 'Farmhouse Land', area: '1 Acre', price: '₹85 Lakhs', city: 'Pune', locality: 'Mulshi', image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80', type: 'Agricultural' },
  { id: 4, title: 'DTCP Plot Near IT Park', area: '1,800 sqft', price: '₹36 Lakhs', city: 'Chennai', locality: 'Guduvanchery', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80', type: 'Residential' },
];

const Plots = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      {/* Hero Search */}
      <section className="relative bg-gradient-to-b from-emerald-900 via-emerald-800 to-primary-900 pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden text-white">
        <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/20 rounded-full">8,000+ Verified Plots & Land</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">Buy <span className="bg-gradient-to-r from-emerald-300 to-primary-300 bg-clip-text text-transparent">Plots & Land</span></h1>
            <p className="text-base text-emerald-200/80 max-w-2xl mx-auto">Residential plots, agricultural land, and investment opportunities</p>
          </motion.div>
          <motion.form initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={(e) => { e.preventDefault(); navigate(`/search?tab=plots&query=${query}`); }} className="flex flex-col sm:flex-row gap-2 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search plot by location, project, or city..." className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-700 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <button type="submit" className="px-8 py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"><Search className="w-4 h-4" /><span>Search</span></button>
          </motion.form>
        </div>
      </section>

      {/* Plot Types */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Explore Plot Categories</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {plotTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <motion.div key={type.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -6 }} className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg">
                  <img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <Icon className="w-6 h-6 text-emerald-400 mb-2" />
                    <h3 className="font-display font-bold text-xl">{type.name}</h3>
                    <p className="text-xs text-slate-300 mt-1">{type.desc}</p>
                    <p className="text-xs text-primary-300 font-bold mt-2">{type.count} listings</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Plots */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-between items-end mb-10">
            <div>
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Featured</span>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-2">Top Plots & Land</h2>
            </div>
            <a href="/search?tab=plots" className="text-primary-600 font-semibold text-sm hover:underline flex items-center">View All <ArrowRight className="w-4 h-4 ml-1" /></a>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plotListings.map((plot, idx) => (
              <motion.div key={plot.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -5 }} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="h-44 overflow-hidden"><img src={plot.image} alt={plot.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-5">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded-md">{plot.type}</span>
                  <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mt-2">{plot.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 flex items-center"><MapPin className="w-3 h-3 mr-1 text-primary-500" />{plot.locality}, {plot.city}</p>
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                    <span className="font-display font-extrabold text-primary-700 dark:text-primary-400">{plot.price}</span>
                    <span className="text-xs text-slate-400 flex items-center"><Maximize className="w-3 h-3 mr-0.5" />{plot.area}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plots;
