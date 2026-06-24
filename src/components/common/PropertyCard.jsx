import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Bed, Bath, Maximize, Shield, Star, Phone, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleCardClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={handleCardClick}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700/60 transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Cover Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
        <img
          src={property.image || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5">
          {property.verified && (
            <span className="flex items-center space-x-1 px-2.5 py-0.5 rounded-lg bg-emerald-500 text-white text-[9px] font-bold tracking-wide uppercase shadow-sm">
              <Shield className="w-2.5 h-2.5 fill-white" />
              <span>VERIFIED</span>
            </span>
          )}
          {property.reraApproved && (
            <span className="px-2.5 py-0.5 rounded-lg bg-primary-600 text-white text-[9px] font-bold tracking-wide uppercase shadow-sm">
              RERA
            </span>
          )}
        </div>

        {/* Like Button */}
        <motion.button
          onClick={handleLike}
          whileTap={{ scale: 0.8 }}
          className="absolute top-3.5 right-3.5 w-8.5 h-8.5 rounded-full bg-white/95 dark:bg-slate-800/95 flex items-center justify-center shadow-md text-slate-500 hover:text-slate-800 transition-colors"
        >
          <Heart className={`w-4 h-4 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </motion.button>

        {/* Rating */}
        {property.rating && (
          <div className="absolute bottom-3 left-3.5 flex items-center space-x-1 bg-black/45 backdrop-blur-sm px-2 py-0.5 rounded-md text-white text-[10px] font-bold">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{property.rating}</span>
          </div>
        )}
      </div>

      {/* Details info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider bg-primary-50 dark:bg-primary-950/30 px-2.5 py-1 rounded-md mb-2 inline-block">
            {property.type}
          </span>
          <h3 className="font-display font-bold text-base text-slate-800 dark:text-white truncate group-hover:text-primary-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3.5">
            <MapPin className="w-3.5 h-3.5 text-primary-500 mr-1 flex-shrink-0" />
            <span className="truncate">{property.locality}, {property.city}</span>
          </div>

          {/* Configuration details */}
          <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">
            {property.bhk > 0 && (
              <span className="flex items-center space-x-1">
                <Bed className="w-3.5 h-3.5 text-slate-400" />
                <span>{property.bhk} BHK</span>
              </span>
            )}
            {property.bathrooms > 0 && (
              <span className="flex items-center space-x-1">
                <Bath className="w-3.5 h-3.5 text-slate-400" />
                <span>{property.bathrooms} Bath</span>
              </span>
            )}
            {property.area > 0 && (
              <span className="flex items-center space-x-1">
                <Maximize className="w-3.5 h-3.5 text-slate-400" />
                <span>{property.area.toLocaleString()} sqft</span>
              </span>
            )}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wide leading-none font-semibold">Total Price</p>
            <span className="font-display font-extrabold text-lg text-primary-750 dark:text-primary-400 mt-1 inline-block">
              {property.priceLabel || `₹${(property.price / 10000000).toFixed(2)} Cr`}
            </span>
          </div>
          <div className="flex space-x-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); }}
              className="p-2.5 border border-slate-200 dark:border-slate-650 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-650 dark:text-slate-300 rounded-xl transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); }}
              className="px-4 py-2.5 bg-primary-700 hover:bg-primary-600 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
