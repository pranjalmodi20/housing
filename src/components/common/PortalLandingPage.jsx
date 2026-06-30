import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
} from 'lucide-react';
import SearchBox from './SearchBox/SearchBox';
import { portalCities } from '../../data/portalPages';

const PortalLandingPage = ({ page, showSearchBox = true }) => {
  const navigate = useNavigate();
  const [openGuide, setOpenGuide] = useState(0);
  const [city, setCity] = useState(portalCities[0]);

  const goToSearch = (query = '') => {
    const params = new URLSearchParams();
    params.set('tab', page.tab);
    params.set('city', city);
    if (query) params.set('location', query);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 transition-colors">
      <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#F5F4F1] dark:bg-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/95 to-transparent dark:from-slate-950 dark:via-slate-950/95 dark:to-transparent" />
        <img
          src={page.heroImage}
          alt=""
          className="absolute inset-y-0 right-0 hidden lg:block w-[46%] h-full object-cover z-10"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10" />

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 z-20">
          <div className="grid lg:grid-cols-[1fr_0.72fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-700/10 border border-primary-700/15 text-primary-800 dark:text-primary-300 text-xs font-bold uppercase tracking-wide">
                <BadgeCheck className="w-3.5 h-3.5" />
                {page.eyebrow}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-5 leading-tight max-w-4xl">
                {page.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 mt-4 sm:mt-5 max-w-2xl leading-relaxed">
                {page.description}
              </p>

              <div className="mt-5 sm:mt-7 flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 bg-white/85 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-sm">
                  <MapPin className="w-4 h-4 text-primary-700" />
                  <select
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="bg-transparent text-sm font-bold text-slate-800 dark:text-slate-100 focus:outline-none"
                  >
                    {portalCities.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => goToSearch()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary-700 hover:bg-primary-600 text-white text-sm font-bold shadow-lg shadow-primary-700/20 transition-colors"
                >
                  <Search className="w-4 h-4" />
                  Explore Listings
                </button>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {page.stat}
                </span>
              </div>
            </motion.div>

            {showSearchBox && (
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:pt-10"
              >
                <SearchBox />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="relative -mt-4 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm p-3 sm:p-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mr-1">
                <SlidersHorizontal className="w-4 h-4" />
                Popular filters
              </span>
              {page.quickFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => goToSearch(filter)}
                  className="px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-primary-300 hover:text-primary-700 transition-colors"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-primary-700 dark:text-primary-400 text-xs font-bold uppercase tracking-wider">Browse by type</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Start with what you need
              </h2>
            </div>
            <Link to={`/search?tab=${page.tab}`} className="hidden sm:inline-flex items-center gap-1 text-sm font-bold text-primary-700 hover:text-primary-600">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {page.types.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.label}
                  type="button"
                  onClick={() => goToSearch(item.label)}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="text-left bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800 transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-primary-700/10 text-primary-700 dark:text-primary-300 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white">{item.label}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.count} options</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-primary-700 dark:text-primary-400 text-xs font-bold uppercase tracking-wider">Featured inventory</span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Listings people are viewing now
              </h2>
            </div>
            <Link to={`/search?tab=${page.tab}`} className="inline-flex items-center gap-1 text-sm font-bold text-primary-700 hover:text-primary-600">
              See more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {page.listings.map((listing, index) => (
              <motion.article
                key={listing.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <button type="button" onClick={() => navigate(`/property/${listing.id}`)} className="block w-full text-left">
                  <div className="relative h-52 overflow-hidden">
                    <img src={listing.image} alt={listing.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 text-primary-800 text-[10px] font-black uppercase shadow-sm">
                      {listing.badge}
                    </span>
                    <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 text-slate-500 flex items-center justify-center shadow-sm">
                      <Heart className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-extrabold text-slate-900 dark:text-white truncate">
                      {listing.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">{listing.meta}</p>
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="font-display text-lg font-extrabold text-primary-750 dark:text-primary-300">{listing.price}</span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{listing.detail}</span>
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_0.8fr] gap-8">
          <div>
            <span className="text-primary-700 dark:text-primary-400 text-xs font-bold uppercase tracking-wider">Locality discovery</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 mb-5">
              Popular localities and collections
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {page.localities.map((locality) => (
                <button
                  key={locality}
                  type="button"
                  onClick={() => goToSearch(locality)}
                  className="flex items-center justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-4 py-3 text-left hover:border-primary-200 transition-colors"
                >
                  <span>
                    <span className="block text-sm font-bold text-slate-800 dark:text-white">{locality}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{city} property options</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary-700" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white mb-4">Curated collections</h3>
            <div className="grid grid-cols-2 gap-3">
              {page.collections.map((collection) => (
                <button
                  key={collection}
                  type="button"
                  onClick={() => goToSearch(collection)}
                  className="min-h-24 rounded-2xl bg-primary-700/5 border border-primary-700/10 p-4 text-left hover:bg-primary-700/10 transition-colors"
                >
                  <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">{collection}</span>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-1">Handpicked matches</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="text-primary-700 dark:text-primary-400 text-xs font-bold uppercase tracking-wider">Insights</span>
                <h2 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Market updates</h2>
              </div>
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {page.marketUpdates.map((item) => (
                <div key={item} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4">
                  <p className="text-sm font-bold text-slate-800 dark:text-white">{item}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Demo trend card using HomeVerse sample data.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm">
            <h2 className="font-display text-xl font-extrabold mb-4">Services you may need</h2>
            <div className="space-y-3">
              {page.services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link key={service.path} to={service.path} className="flex items-center justify-between rounded-2xl bg-white/8 hover:bg-white/12 px-4 py-3 transition-colors">
                    <span className="flex items-center gap-3 text-sm font-bold">
                      <Icon className="w-4 h-4 text-primary-300" />
                      {service.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-primary-700 dark:text-primary-400 text-xs font-bold uppercase tracking-wider">Guides</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Helpful before you enquire
            </h2>
          </div>
          <div className="space-y-3">
            {page.guides.map((guide, index) => {
              const isOpen = openGuide === index;
              return (
                <div key={guide} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenGuide(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between text-left px-5 py-4"
                  >
                    <span className="text-sm font-extrabold text-slate-800 dark:text-white">{guide}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-primary-700" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Use listing details, locality trends, seller history, and verified documents together before making a decision. This section is demo guidance for the frontend experience.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortalLandingPage;
