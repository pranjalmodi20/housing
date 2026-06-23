import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight } from 'lucide-react';

const luxuryHomes = [
  { id: 1, title: 'Palazzo Versace Residences', price: '₹12.5 Cr', area: '6,800 sqft', city: 'Hyderabad', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Trump Tower Mumbai', price: '₹18 Cr', area: '4,200 sqft', city: 'Mumbai', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Embassy Lake Terraces', price: '₹8.5 Cr', area: '5,500 sqft', city: 'Bangalore', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' },
];

const LuxuryHomes = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-primary-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Exclusive Collection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Luxury Homes</h2>
            <p className="text-slate-400 mt-2">India's finest ultra-premium residences for the discerning buyer</p>
          </div>
          <a href="/collections/luxury" className="hidden sm:flex items-center space-x-1.5 text-amber-400 font-semibold text-sm hover:underline">
            <span>Explore Collection</span><ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {luxuryHomes.map((home, idx) => (
            <motion.div key={home.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6 }} className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer">
              <img src={home.image} alt={home.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="px-3 py-1 rounded-lg bg-amber-500/90 text-white text-[10px] font-bold uppercase tracking-wide mb-3 inline-block">Ultra Luxury</span>
                <h3 className="font-display text-xl font-bold mb-1">{home.title}</h3>
                <p className="text-xs text-slate-300 mb-3">{home.city} • {home.area}</p>
                <span className="font-display text-2xl font-extrabold text-amber-400">{home.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryHomes;
