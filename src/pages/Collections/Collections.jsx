import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../../data/dummyData';
import PropertyCard from '../../components/common/PropertyCard';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Heart, Grid } from 'lucide-react';

const mockCollections = {
  1: {
    title: 'Fully Furnished Homes',
    desc: 'Premium move-in ready rental apartments equipped with all essential appliances, modular kitchens, wardrobes, and designer fittings.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    color: 'from-purple-900/80 to-slate-950/90',
    filterKey: 'furnishing',
    filterValue: 'Fully Furnished'
  },
  2: {
    title: 'Zero Deposit Properties',
    desc: 'Rent verified premium homes without paying large security deposit advances. Safe, affordable, and flexible renting packages.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    color: 'from-blue-900/80 to-slate-950/90',
    filterKey: 'deposit',
    filterValue: 'Zero'
  },
  3: {
    title: 'Gated Society Apartments',
    desc: 'Secure residential societies equipped with luxury amenities, 24x7 gatekeepers, swimming pools, fitness gyms, and children play zones.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    color: 'from-green-900/80 to-slate-950/90',
    filterKey: 'gated',
    filterValue: true
  },
  4: {
    title: 'Pet Friendly Rentals',
    desc: 'Curated home designs and villas welcoming your dogs, cats, and pets with private garden compounds and spacious balconies.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
    color: 'from-orange-900/80 to-slate-950/90',
    filterKey: 'petFriendly',
    filterValue: true
  }
};

const Collections = () => {
  const { colId } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [matchingListings, setMatchingListings] = useState([]);

  useEffect(() => {
    const activeId = colId && mockCollections[colId] ? colId : '1';
    const colData = mockCollections[activeId];
    setCollection(colData);

    // Mock filtering based on collection details
    let matches = [];
    if (activeId === '1') {
      matches = properties.filter((p) => p.furnishing === 'Fully Furnished' || p.id === 102 || p.id === 106);
    } else if (activeId === '2') {
      matches = properties.slice(0, 3); // Mock matching items
    } else if (activeId === '3') {
      matches = properties.filter((p) => p.type === 'Apartment');
    } else {
      matches = properties.slice(2, 5); // Mock matching items
    }
    setMatchingListings(matches);
  }, [colId]);

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

        {/* Listings Grid */}
        <section>
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center">
              <Grid className="w-4.5 h-4.5 text-primary-500 mr-2" />
              Available Properties ({matchingListings.length})
            </h2>
          </div>

          {matchingListings.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchingListings.map((p) => (
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
