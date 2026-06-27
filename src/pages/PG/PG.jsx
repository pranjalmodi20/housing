import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Utensils, ShieldCheck, Star, Heart, ArrowRight, MapPin } from 'lucide-react';
import SearchBox from '../../components/common/SearchBox/SearchBox';

const pgListings = [
  { id: 1, title: 'ZoloStay Premium', type: 'Co-living', gender: 'Unisex', price: '₹8,500/mo', locality: 'Koramangala', city: 'Bangalore', occupancy: 'Single', meals: true, wifi: true, rating: 4.6, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Stanza Living Horizon', type: 'PG', gender: 'Male', price: '₹7,000/mo', locality: 'Hinjewadi', city: 'Pune', occupancy: 'Double', meals: true, wifi: true, rating: 4.4, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'OYO Life Nest', type: 'Co-living', gender: 'Female', price: '₹9,200/mo', locality: 'Andheri', city: 'Mumbai', occupancy: 'Single', meals: false, wifi: true, rating: 4.3, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Colive Alpha', type: 'Co-living', gender: 'Unisex', price: '₹12,000/mo', locality: 'Whitefield', city: 'Bangalore', occupancy: 'Single', meals: true, wifi: true, rating: 4.8, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'NestAway HomeBase', type: 'PG', gender: 'Male', price: '₹6,500/mo', locality: 'Sector 62', city: 'Delhi NCR', occupancy: 'Triple', meals: true, wifi: true, rating: 4.1, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Setting Space Studio', type: 'Co-living', gender: 'Female', price: '₹10,500/mo', locality: 'Gachibowli', city: 'Hyderabad', occupancy: 'Single', meals: false, wifi: true, rating: 4.5, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
];

const PG = () => {
  const [genderFilter, setGenderFilter] = useState('All');
  const filtered = genderFilter === 'All' ? pgListings : pgListings.filter((p) => p.gender === genderFilter);

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-sky-900 via-primary-900 to-indigo-900 pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden text-white">
        <div className="absolute top-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-sky-300 bg-sky-500/15 border border-sky-500/20 rounded-full">15,000+ PG & Co-living Spaces</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"><span className="text-white">Find</span> <span className="bg-gradient-to-r from-sky-300 to-primary-300 bg-clip-text text-transparent">PG & Co-living</span></h1>
            <p className="text-base text-sky-200/80 max-w-2xl mx-auto">Verified PGs, hostels, and co-living spaces with meals, WiFi, and security</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="w-full text-slate-800">
            <SearchBox />
          </motion.div>
        </div>
      </section>

      {/* Filter + Listings */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="text-sm font-bold text-slate-700 dark:text-white">Filter:</span>
            {['All', 'Male', 'Female', 'Unisex'].map((g) => (
              <button key={g} onClick={() => setGenderFilter(g)} className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${genderFilter === g ? 'bg-primary-700 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}`}>{g}</button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((pg, idx) => (
              <motion.div key={pg.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -5 }} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={pg.image} alt={pg.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase shadow-sm ${pg.gender === 'Male' ? 'bg-blue-500 text-white' : pg.gender === 'Female' ? 'bg-pink-500 text-white' : 'bg-primary-600 text-white'}`}>{pg.gender}</span>
                  <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-black/40 px-2 py-0.5 rounded text-white text-[10px] font-bold"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><span>{pg.rating}</span></div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-800 dark:text-white">{pg.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center"><MapPin className="w-3 h-3 mr-1 text-primary-500" />{pg.locality}, {pg.city}</p>
                    </div>
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">{pg.type}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[11px] text-slate-500 dark:text-slate-400 mb-4 font-medium">
                    <span className="flex items-center space-x-1"><Users className="w-3.5 h-3.5" /><span>{pg.occupancy}</span></span>
                    {pg.meals && <span className="flex items-center space-x-1"><Utensils className="w-3.5 h-3.5" /><span>Meals</span></span>}
                    {pg.wifi && <span className="flex items-center space-x-1"><Wifi className="w-3.5 h-3.5" /><span>WiFi</span></span>}
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex justify-between items-center">
                    <span className="font-display font-extrabold text-lg text-primary-700 dark:text-primary-400">{pg.price}</span>
                    <button className="px-4 py-2 bg-primary-700 hover:bg-primary-600 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors">View Details</button>
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

export default PG;
