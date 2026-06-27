import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Store, Warehouse, LandPlot, ArrowRight, Bed, Maximize, IndianRupee } from 'lucide-react';
import SearchBox from '../../components/common/SearchBox/SearchBox';

const commercialTypes = [
  { id: 1, name: 'Office Spaces', count: '4,200+', icon: Building2, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Retail Shops', count: '2,800+', icon: Store, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Warehouses', count: '1,500+', icon: Warehouse, image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Commercial Land', count: '900+', icon: LandPlot, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80' },
];

const commercialListings = [
  { id: 1, title: 'Noida Cyber Hub Space', price: '₹4.50 Cr', area: '3,500 sqft', type: 'Office', city: 'Delhi NCR', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', furnishing: 'Fully Furnished' },
  { id: 2, title: 'BKC Premium Office', price: '₹8.2 Cr', area: '5,200 sqft', type: 'Office', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80', furnishing: 'Warm Shell' },
  { id: 3, title: 'MG Road Retail Space', price: '₹2.1 Cr', area: '1,200 sqft', type: 'Shop', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', furnishing: 'Semi-Furnished' },
  { id: 4, title: 'Logistic Park Warehouse', price: '₹3.5 Cr', area: '8,000 sqft', type: 'Warehouse', city: 'Pune', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80', furnishing: 'Bare Shell' },
];

const Commercial = () => {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      {/* Hero Search */}
      <section className="relative bg-gradient-to-b from-slate-900 via-primary-950 to-indigo-950 pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-primary-300 bg-primary-500/15 border border-primary-500/20 rounded-full">12,000+ Commercial Properties</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">Find Premium <span className="bg-gradient-to-r from-primary-300 to-indigo-300 bg-clip-text text-transparent">Commercial Spaces</span></h1>
            <p className="text-base text-primary-200/80 max-w-2xl mx-auto">Offices, retail shops, warehouses, and commercial land across India's business hubs</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="w-full">
            <SearchBox />
          </motion.div>
        </div>
      </section>

      {/* Commercial Categories */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Browse By Type</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Commercial Categories</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <motion.div key={type.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} whileHover={{ y: -5 }} className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all">
                  <img src={type.image} alt={type.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon className="w-5 h-5 text-primary-300" />
                      <h3 className="font-display font-bold text-lg">{type.name}</h3>
                    </div>
                    <p className="text-xs text-slate-300">{type.count} Properties</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-between items-end mb-10">
            <div>
              <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Featured</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Premium Commercial Spaces</h2>
            </div>
            <a href="/search?tab=commercial" className="text-primary-600 font-semibold text-sm hover:underline flex items-center">View All <ArrowRight className="w-4 h-4 ml-1" /></a>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialListings.map((item, idx) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -5 }} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="h-44 overflow-hidden"><img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
                <div className="p-5">
                  <span className="text-[10px] font-bold text-primary-600 uppercase bg-primary-50 dark:bg-primary-950/30 px-2 py-0.5 rounded-md">{item.type}</span>
                  <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mt-2 truncate">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.city} • {item.area}</p>
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
                    <span className="font-display font-extrabold text-primary-700 dark:text-primary-400">{item.price}</span>
                    <span className="text-[10px] text-slate-400 font-semibold">{item.furnishing}</span>
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

export default Commercial;
