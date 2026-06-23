import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CityCard = ({ city }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/city/${city.id || city.name.toLowerCase()}`);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
      className="group relative h-48 sm:h-52 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0"
    >
      {/* Background Image */}
      <img
        src={city.image || 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80'}
        alt={city.name}
        className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-500"
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

      {/* Info details */}
      <div className="absolute inset-x-0 bottom-0 p-4.5 text-white flex flex-col justify-end">
        <h3 className="font-display text-lg font-bold tracking-wide">{city.name}</h3>
        <p className="text-xs text-slate-300 mt-0.5">{city.propertiesCount || '10,000+ Listings'}</p>
        <div className="h-0 group-hover:h-6 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-300">
          <p className="text-[10px] text-primary-300 font-bold flex items-center mt-1">
            <span>Explore Properties</span>
            <ChevronRight className="w-3 h-3 ml-0.5" />
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CityCard;
