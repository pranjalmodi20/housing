import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Star, ChevronRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BuilderCard = ({ builder }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/builder/${builder.id || 1}`);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
      className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Builder Header Logo & Title */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 flex items-center justify-center border border-primary-100/30 font-bold text-lg font-display">
            {builder.logoText || builder.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-slate-800 dark:text-white group-hover:text-primary-600 transition-colors">
              {builder.name}
            </h3>
            <div className="flex items-center space-x-1.5 mt-1">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-350">{builder.rating || '4.8'}</span>
              <span className="text-slate-300 dark:text-slate-650">•</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-450 font-medium">{builder.experience || '15+ Years Exp.'}</span>
            </div>
          </div>
        </div>

        {/* Stats metrics */}
        <div className="grid grid-cols-2 gap-4 py-3 border-t border-b border-slate-100 dark:border-slate-700/50 mb-5 text-center">
          <div>
            <p className="text-xs font-semibold text-slate-800 dark:text-white">{builder.totalProjects || '24'}</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase mt-0.5">Total Projects</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">{builder.ongoingProjects || '8'}</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase mt-0.5">Under Const.</p>
          </div>
        </div>
      </div>

      {/* Footer link details */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-primary-700 dark:text-primary-400 font-bold hover:underline flex items-center">
          <span>View Developer Projects</span>
          <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); }}
          className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-650 dark:hover:text-primary-400 transition-colors"
        >
          <Phone className="w-4 h-4 text-slate-500 hover:text-primary-600" />
        </button>
      </div>
    </motion.div>
  );
};

export default BuilderCard;
