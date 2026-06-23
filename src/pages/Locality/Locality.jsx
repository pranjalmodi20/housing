import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../../data/dummyData';
import PropertyCard from '../../components/common/PropertyCard';
import { motion } from 'framer-motion';
import { MapPin, Building2, TrendingUp, ShieldCheck, Heart, Star, Compass } from 'lucide-react';

const mockLocalities = {
  whitefield: {
    name: 'Whitefield',
    city: 'Bangalore',
    priceRange: '₹18,000 - ₹35,000/mo',
    avgPrice: '₹9,500/sqft',
    demand: 'High',
    rating: 4.8,
    connectivity: 'Excellent (Metro Active)',
    safety: 'Very Safe',
    desc: 'Whitefield is a major IT hub and residential suburb located in the eastern region of Bangalore. Home to key tech parks like ITPB, it attracts professionals looking for high-quality housing societies.'
  },
  'bandra-west': {
    name: 'Bandra West',
    city: 'Mumbai',
    priceRange: '₹45,000 - ₹90,000/mo',
    avgPrice: '₹35,000/sqft',
    demand: 'Extremely High',
    rating: 4.9,
    connectivity: 'Superb (Sea Link access)',
    safety: 'Highly Secured',
    desc: 'Known as the Queen of Suburbs, Bandra West is Mumbai\'s most fashionable district. Offers sea views, rich café culture, celebrity residences, and top-tier luxury apartments.'
  },
  'gurgaon-sec-54': {
    name: 'Gurgaon Sec 54',
    city: 'Delhi NCR',
    priceRange: '₹25,000 - ₹55,000/mo',
    avgPrice: '₹14,000/sqft',
    demand: 'High',
    rating: 4.7,
    connectivity: 'Excellent (Rapid Metro)',
    safety: 'Safe Gated Zones',
    desc: 'Sector 54 is located along the premium Golf Course Road corridor in Gurgaon, offering top-tier luxury residential towers, green landscapes, and quick connection to business centers.'
  },
  'koregaon-park': {
    name: 'Koregaon Park',
    city: 'Pune',
    priceRange: '₹20,000 - ₹42,000/mo',
    avgPrice: '₹11,000/sqft',
    demand: 'Moderate-High',
    rating: 4.8,
    connectivity: 'Very Good',
    safety: 'Very Safe',
    desc: 'Koregaon Park is a prestigious commercial and residential neighborhood in Pune, well-known for lush green lanes, premium villas, wellness hubs, and dynamic nightlife.'
  }
};

const Locality = () => {
  const { localityName } = useParams();
  const navigate = useNavigate();
  const [locData, setLocData] = useState(null);
  const [locListings, setLocListings] = useState([]);

  useEffect(() => {
    const key = localityName && mockLocalities[localityName.toLowerCase()] ? localityName.toLowerCase() : 'whitefield';
    const data = mockLocalities[key];
    setLocData(data);

    // Filter properties listed in this locality
    const matches = properties.filter((p) => p.locality.toLowerCase().includes(data.name.toLowerCase()));
    setLocListings(matches);
  }, [localityName]);

  if (!locData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-slate-50 dark:bg-slate-950">
        <div className="text-center text-slate-500">Loading Locality profile...</div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Locality Header Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-105 dark:border-slate-850 p-6 sm:p-10 rounded-3xl shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40 px-3 py-1 rounded-lg uppercase tracking-wider">
                {locData.city} Neighborhood
              </span>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-white mt-3">
                {locData.name} Locality Review
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-2 text-xs font-semibold text-slate-400">
                <span className="text-yellow-500 flex items-center space-x-0.5">★ <span>{locData.rating} Review Rating</span></span>
                <span>•</span>
                <span>Demand: {locData.demand}</span>
              </div>
            </div>

            <button 
              onClick={() => navigate(`/search?location=${locData.name}`)}
              className="px-6 py-2.5 bg-primary-700 hover:bg-primary-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              Search Properties Here
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 border-t border-slate-100 dark:border-slate-800 mt-8 pt-6">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Average Rate</span>
              <span className="font-display font-bold text-slate-700 dark:text-white text-sm block mt-1">{locData.avgPrice}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Connectivity Index</span>
              <span className="font-display font-bold text-slate-700 dark:text-white text-sm block mt-1">{locData.connectivity}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Safety Profile</span>
              <span className="font-display font-bold text-slate-700 dark:text-white text-sm block mt-1">{locData.safety}</span>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 mt-6 pt-6">
            <h3 className="font-display font-bold text-sm text-slate-850 dark:text-white mb-2">Locality Overview</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {locData.desc}
            </p>
          </div>
        </div>

        {/* Listings Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">Active Properties in {locData.name}</h2>
              <p className="text-xs text-slate-500 mt-1">Verified homes and flats available to rent or purchase</p>
            </div>
            <span className="text-xs font-bold text-slate-400">{locListings.length} Listings found</span>
          </div>

          {locListings.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {locListings.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-850">
              <Building2 className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400">No properties currently listed in this locality.</p>
              <p className="text-xs text-slate-400 mt-1">Check nearby localities or clear filters to view wider area search results.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Locality;
