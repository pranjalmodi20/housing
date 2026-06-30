import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../../data/dummyData';
import PropertyCard from '../../components/common/PropertyCard';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Grid, SlidersHorizontal, CheckCircle2, TrendingUp, MapPin } from 'lucide-react';

const mockCollections = {
  1: {
    title: 'Luxury Living',
    desc: 'Premium villas, penthouses, and large-format homes with high-end finishes, privacy, open views, and lifestyle amenities.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    color: 'from-purple-900/80 to-slate-950/90',
    filters: ['All Luxury', 'Villas', 'Penthouses', 'Above ₹3 Cr'],
    highlights: ['Premium neighbourhoods', 'Large carpet areas', 'Lifestyle amenities'],
    insight: 'Luxury demand is strongest around established gated communities and low-density neighbourhoods.',
    localities: ['Whitefield', 'Bandra West', 'Jubilee Hills', 'ECR']
  },
  2: {
    title: 'Budget-Friendly Homes',
    desc: 'Affordable apartments and compact homes selected for practical budgets, strong connectivity, and everyday convenience.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    color: 'from-blue-900/80 to-slate-950/90',
    filters: ['All Budget', 'Under ₹1 Cr', '1 BHK', 'Apartments'],
    highlights: ['Lower ticket sizes', 'Good rental potential', 'Easy maintenance'],
    insight: 'Budget homes perform best when transport access and social infrastructure are already in place.',
    localities: ['Koramangala', 'Koregaon Park', 'OMR Road', 'Salt Lake']
  },
  3: {
    title: 'Ready to Move In',
    desc: 'Immediate-possession homes for buyers who want finished inventory, real photos, faster inspection, and shorter move-in timelines.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    color: 'from-green-900/80 to-slate-950/90',
    filters: ['All Ready', 'Fully Furnished', 'Apartments', 'Owner Listed'],
    highlights: ['Immediate possession', 'Reduced project risk', 'Site-visit ready'],
    insight: 'Ready homes are useful for buyers who want to compare the actual unit before committing.',
    localities: ['Bandra West', 'Sector 54', 'Gachibowli', 'Koramangala']
  },
  4: {
    title: 'New Launches',
    desc: 'Brand-new residential projects and fresh phases with launch inventory, developer-backed availability, and early-buyer discovery.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    color: 'from-orange-900/80 to-slate-950/90',
    filters: ['All Launches', 'New Launch', 'RERA Approved', 'Under Construction'],
    highlights: ['Fresh inventory', 'Launch-stage pricing', 'Developer projects'],
    insight: 'New launch pages should help users compare project stage, developer reputation, and expected possession.',
    localities: ['Sector 54', 'ECR', 'Whitefield', 'Hyderabad']
  }
};

const Collections = () => {
  const { colId } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [matchingListings, setMatchingListings] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const activeId = colId && mockCollections[colId] ? colId : '1';
    const colData = mockCollections[activeId];
    setCollection(colData);
    setActiveFilter(colData.filters[0]);

    // Demo filtering based on collection purpose
    let matches = [];
    if (activeId === '1') {
      matches = properties.filter((p) => p.price >= 29000000 || ['Villa', 'Penthouse'].includes(p.type));
    } else if (activeId === '2') {
      matches = properties.filter((p) => p.price <= 16500000 || p.bhk <= 2);
    } else if (activeId === '3') {
      matches = properties.filter((p) => p.furnishing === 'Fully Furnished' || p.furnishing === 'Semi-Furnished');
    } else {
      matches = properties.filter((p) => p.badge === 'New Launch' || p.reraApproved);
    }
    setMatchingListings(matches);
  }, [colId]);

  const visibleListings = matchingListings.filter((property) => {
    if (!collection || activeFilter === collection.filters[0]) return true;
    if (activeFilter.includes('Villa')) return property.type === 'Villa';
    if (activeFilter.includes('Penthouse')) return property.type === 'Penthouse';
    if (activeFilter.includes('₹3 Cr')) return property.price >= 30000000;
    if (activeFilter.includes('₹1 Cr')) return property.price <= 10000000;
    if (activeFilter.includes('1 BHK')) return property.bhk === 1;
    if (activeFilter.includes('Apartments')) return property.type === 'Apartment';
    if (activeFilter.includes('Fully Furnished')) return property.furnishing === 'Fully Furnished';
    if (activeFilter.includes('Owner')) return property.verified;
    if (activeFilter.includes('New Launch')) return property.badge === 'New Launch';
    if (activeFilter.includes('RERA')) return property.reraApproved;
    if (activeFilter.includes('Under Construction')) return property.badge === 'New Launch';
    return true;
  });

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-slate-50 dark:bg-slate-950">
        <div className="text-center text-slate-500">Loading Property Collection...</div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Collection Billboard Banner */}
        <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-md mb-12">
          <img src={collection.image} alt={collection.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-t ${collection.color}`} />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white z-10">
            <span className="text-primary-300 font-bold uppercase tracking-wider text-[10px] flex items-center mb-1">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-yellow-400" />
              Curated Property List
            </span>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white">{collection.title}</h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl font-medium leading-relaxed">{collection.desc}</p>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-4 sm:p-5 shadow-sm mb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">
              <SlidersHorizontal className="w-4 h-4 text-primary-600" />
              Refine
            </span>
            {collection.filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary-700 text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-primary-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Collection Context */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4">Why this collection</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {collection.highlights.map((item) => (
                <div key={item} className="flex items-start space-x-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-primary-700/5 border border-primary-700/10 p-4 flex items-start space-x-3">
              <TrendingUp className="w-5 h-5 text-primary-700 dark:text-primary-400 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{collection.insight}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4">Popular localities</h2>
            <div className="space-y-3">
              {collection.localities.map((locality) => (
                <button
                  key={locality}
                  type="button"
                  onClick={() => navigate(`/search?location=${encodeURIComponent(locality)}`)}
                  className="w-full flex items-center justify-between rounded-2xl bg-slate-50 dark:bg-slate-800 px-4 py-3 text-left text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary-600" />
                    <span>{locality}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <section>
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center">
              <Grid className="w-4.5 h-4.5 text-primary-500 mr-2" />
              Available Properties ({visibleListings.length})
            </h2>
          </div>

          {visibleListings.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleListings.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-850">
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400">No properties currently match this collection filter.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Collections;
