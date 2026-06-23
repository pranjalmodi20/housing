import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../../data/dummyData';
import PropertyCard from '../../components/common/PropertyCard';
import { motion } from 'framer-motion';
import { Building2, Award, Star, Phone, MessageSquare, MapPin, CheckCircle } from 'lucide-react';

const mockBuilders = {
  'prestige-group': {
    name: 'Prestige Group',
    years: '35 Years',
    projectsCount: 142,
    rating: 4.8,
    desc: 'Established in 1986, Prestige Group has built a strong reputation as one of the most reliable and premium real estate developers in India, delivering iconic residential, commercial, and retail developments.',
    logo: 'P',
    headquarters: 'Bangalore, India',
    reraNo: 'PRM/KA/RERA/1251/310/PR/170915/000234'
  },
  'lodha-group': {
    name: 'Lodha Group',
    years: '40 Years',
    projectsCount: 210,
    rating: 4.7,
    desc: 'Lodha Group is one of India\'s largest real estate developers by residential sales. Best known for building premium landmark properties like World One Tower in Mumbai and extensive luxury developments.',
    logo: 'L',
    headquarters: 'Mumbai, India',
    reraNo: 'PRM/MH/RERA/4250/202/PR/181122/000452'
  },
  'dlf': {
    name: 'DLF',
    years: '75 Years',
    projectsCount: 320,
    rating: 4.9,
    desc: 'DLF has a track record of over 75 years of real estate development, shaping landscapes in NCR, Gurgaon, and cities nationwide with premium integrated township spaces and grade-A corporate offices.',
    logo: 'D',
    headquarters: 'Gurgaon, India',
    reraNo: 'PRM/HR/RERA/0081/405/PR/190820/000109'
  }
};

const Builder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [builder, setBuilder] = useState(null);
  const [builderProjects, setBuilderProjects] = useState([]);
  const [contacted, setContacted] = useState(false);

  useEffect(() => {
    // Normalise ID or fall back to Prestige Group
    const key = id && mockBuilders[id.toLowerCase()] ? id.toLowerCase() : 'prestige-group';
    const builderData = mockBuilders[key];
    setBuilder(builderData);

    // Filter properties listed under this developer name
    const matches = properties.filter((p) => 
      p.developer?.toLowerCase().includes(builderData.name.toLowerCase()) || 
      (key === 'prestige-group' && p.title.toLowerCase().includes('prestige')) ||
      (key === 'lodha-group' && p.title.toLowerCase().includes('lodha')) ||
      (key === 'dlf' && p.title.toLowerCase().includes('dlf'))
    );
    setBuilderProjects(matches);
  }, [id]);

  if (!builder) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-slate-50 dark:bg-slate-950">
        <div className="text-center text-slate-500">Loading Builder Profile...</div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-10 rounded-3xl shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-950/45 rounded-2xl flex items-center justify-center text-primary-750 dark:text-primary-400 font-extrabold text-3xl shrink-0 shadow-inner">
                {builder.logo}
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-white leading-tight">
                  {builder.name}
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-2 text-xs font-semibold text-slate-400">
                  <span className="flex items-center space-x-1"><MapPin className="w-3.5 h-3.5 text-primary-500" /><span>{builder.headquarters}</span></span>
                  <span>•</span>
                  <span>{builder.years} Active</span>
                  <span>•</span>
                  <span className="text-yellow-500 flex items-center space-x-0.5">★ <span>{builder.rating} Rating</span></span>
                </div>
                <p className="text-xs text-slate-405 dark:text-slate-500 mt-2 font-mono">RERA: {builder.reraNo}</p>
              </div>
            </div>

            <div className="shrink-0 flex space-x-3 w-full md:w-auto">
              {contacted ? (
                <div className="w-full text-center py-2.5 px-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>Callback Requested</span>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => setContacted(true)} 
                    className="flex-1 md:flex-initial px-6 py-2.5 bg-primary-700 hover:bg-primary-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact Developer</span>
                  </button>
                  <button className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-650 transition-colors flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 mt-8 pt-6">
            <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mb-2">About Developer</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
              {builder.desc}
            </p>
          </div>
        </div>

        {/* Listings Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">Active Projects by {builder.name}</h2>
              <p className="text-xs text-slate-500 mt-1">Verified residential properties ready to purchase or rent</p>
            </div>
            <span className="text-xs font-bold text-slate-400">{builderProjects.length} Projects found</span>
          </div>

          {builderProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {builderProjects.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-850">
              <Building2 className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-605 dark:text-slate-400">No projects currently listed online.</p>
              <p className="text-xs text-slate-400 mt-1">Contact the developer directly using the button above for offline catalog details.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default Builder;
