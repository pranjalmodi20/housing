import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Bed, Bath, Maximize, Star, Shield, X, Phone, MessageSquare, Share2 } from 'lucide-react';
import { properties } from '../../../data/dummyData';

const filterChips = ['All', 'Apartment', 'Villa', 'Penthouse', 'Office'];

const badgeColors = {
  Exclusive: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
  Verified: 'bg-gradient-to-r from-emerald-500 to-green-500 text-white',
  'New Launch': 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white',
};

const FeaturedProperties = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [favorites, setFavorites] = useState(new Set());
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filtered = activeFilter === 'All'
    ? properties
    : properties.filter((p) => p.type === activeFilter);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="buy" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <div>
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Handpicked
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
              Featured Properties
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Curated selection of the finest listings across top cities
            </p>
          </div>
          <a
            href="#"
            className="text-primary-600 dark:text-primary-400 font-semibold text-sm hover:underline whitespace-nowrap"
          >
            View All →
          </a>
        </motion.div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveFilter(chip)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === chip
                  ? 'bg-primary-700 text-white shadow-md shadow-primary-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProperty(property)}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {property.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-semibold ${badgeColors[property.badge]}`}>
                    {property.badge}
                  </span>
                )}
                <motion.button
                  onClick={(e) => toggleFavorite(e, property.id)}
                  whileTap={{ scale: 0.8 }}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center shadow-md transition-colors"
                >
                  <Heart
                    className={`w-4.5 h-4.5 transition-colors ${
                      favorites.has(property.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  />
                </motion.button>
                <div className="absolute bottom-3 left-3 flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-xs font-semibold">{property.rating}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-base text-slate-800 dark:text-white mb-1 truncate">
                  {property.title}
                </h3>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-primary-500" />
                  <span className="truncate">{property.locality}, {property.city}</span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {property.bhk > 0 && (
                    <span className="flex items-center space-x-1">
                      <Bed className="w-3.5 h-3.5" />
                      <span>{property.bhk} BHK</span>
                    </span>
                  )}
                  <span className="flex items-center space-x-1">
                    <Bath className="w-3.5 h-3.5" />
                    <span>{property.bathrooms} Bath</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Maximize className="w-3.5 h-3.5" />
                    <span>{property.area.toLocaleString()} ft²</span>
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
                  <span className="font-display font-bold text-lg text-primary-700 dark:text-primary-400">
                    {property.priceLabel}
                  </span>
                  {property.verified && (
                    <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                      <Shield className="w-3.5 h-3.5" />
                      <span>RERA</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Image */}
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedProperty.images?.[0] || selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </button>
                <div className="absolute bottom-4 left-4">
                  {selectedProperty.badge && (
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${badgeColors[selectedProperty.badge]}`}>
                      {selectedProperty.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedProperty.title}
                    </h2>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1">
                      <MapPin className="w-4 h-4 mr-1 text-primary-500" />
                      <span>{selectedProperty.locality}, {selectedProperty.city}</span>
                    </div>
                  </div>
                  <span className="font-display text-2xl font-bold text-primary-700 dark:text-primary-400">
                    {selectedProperty.priceLabel}
                  </span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {selectedProperty.bhk > 0 && (
                    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-3 text-center">
                      <Bed className="w-5 h-5 mx-auto mb-1 text-primary-500" />
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">{selectedProperty.bhk} BHK</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Bedrooms</p>
                    </div>
                  )}
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-3 text-center">
                    <Bath className="w-5 h-5 mx-auto mb-1 text-primary-500" />
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{selectedProperty.bathrooms}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Bathrooms</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-3 text-center">
                    <Maximize className="w-5 h-5 mx-auto mb-1 text-primary-500" />
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{selectedProperty.area.toLocaleString()}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Sq. ft.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-3 text-center">
                    <Star className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">{selectedProperty.rating}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Rating</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{selectedProperty.furnishing}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{selectedProperty.facing} Facing</span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{selectedProperty.type}</span>
                  {selectedProperty.reraApproved && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">RERA Approved</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedProperty.description}
                </p>

                {/* Developer & Date */}
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
                  <span>By <span className="font-semibold text-slate-700 dark:text-slate-200">{selectedProperty.developer}</span></span>
                  <span>Posted {selectedProperty.postedOn}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-primary-500/20 transition-all">
                    <Phone className="w-4 h-4" />
                    <span>Contact Agent</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat</span>
                  </button>
                  <button className="flex items-center justify-center px-3 py-3 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProperties;
