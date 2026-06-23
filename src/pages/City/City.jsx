import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../../data/dummyData';
import PropertyCard from '../../components/common/PropertyCard';
import LocalityCard from '../../components/common/LocalityCard';
import { motion } from 'framer-motion';
import { MapPin, Building2, TrendingUp, HelpCircle, Star, ArrowRight } from 'lucide-react';

const cityMockData = {
  bangalore: {
    name: 'Bangalore',
    tagline: 'India\'s Silicon Valley & High Growth Tech Hub',
    avgPrice: '₹8,500/sqft',
    listingsCount: '15,400+',
    rentIndex: 'Highly Active',
    localities: [
      { id: 1, name: 'Whitefield', city: 'Bangalore', priceRange: '₹18,000 - ₹35,000/mo', trend: 'up', percentage: '+9.4% YoY', rating: 4.8 },
      { id: 7, name: 'Koramangala', city: 'Bangalore', priceRange: '₹22,000 - ₹45,000/mo', trend: 'up', percentage: '+10.5% YoY', rating: 4.9 }
    ],
    bgImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80'
  },
  mumbai: {
    name: 'Mumbai',
    tagline: 'The Financial Capital with Premium Real Estate Yields',
    avgPrice: '₹26,000/sqft',
    listingsCount: '24,200+',
    rentIndex: 'Very High Rent',
    localities: [
      { id: 2, name: 'Bandra West', city: 'Mumbai', priceRange: '₹45,000 - ₹90,000/mo', trend: 'up', percentage: '+14.2% YoY', rating: 4.9 },
      { id: 6, name: 'Powai', city: 'Mumbai', priceRange: '₹28,000 - ₹50,000/mo', trend: 'up', percentage: '+8.1% YoY', rating: 4.7 }
    ],
    bgImage: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=80'
  },
  'delhi-ncr': {
    name: 'Delhi NCR',
    tagline: 'Rapidly Growing Integrated Townships & Corporate Hubs',
    avgPrice: '₹11,200/sqft',
    listingsCount: '18,900+',
    rentIndex: 'Active',
    localities: [
      { id: 3, name: 'Gurgaon Sec 54', city: 'Delhi NCR', priceRange: '₹25,000 - ₹55,000/mo', trend: 'up', percentage: '+7.1% YoY', rating: 4.7 },
      { id: 8, name: 'Noida Sec 62', city: 'Delhi NCR', priceRange: '₹14,000 - ₹26,000/mo', trend: 'up', percentage: '+5.0% YoY', rating: 4.5 }
    ],
    bgImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80'
  },
  pune: {
    name: 'Pune',
    tagline: 'Cultural Hub & Massive IT Park Expansion Zone',
    avgPrice: '₹7,400/sqft',
    listingsCount: '11,200+',
    rentIndex: 'Stable',
    localities: [
      { id: 4, name: 'Koregaon Park', city: 'Pune', priceRange: '₹20,000 - ₹42,000/mo', trend: 'up', percentage: '+8.3% YoY', rating: 4.8 },
      { id: 5, name: 'Hinjewadi', city: 'Pune', priceRange: '₹14,000 - ₹25,000/mo', trend: 'up', percentage: '+6.2% YoY', rating: 4.6 }
    ],
    bgImage: 'https://images.unsplash.com/photo-1601962174828-97e37604ccff?auto=format&fit=crop&w=1200&q=80'
  }
};

const City = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [cityData, setCityData] = useState(null);
  const [cityListings, setCityListings] = useState([]);

  useEffect(() => {
    // Standardise search criteria or fall back to Bangalore
    const key = cityName && cityMockData[cityName.toLowerCase()] ? cityName.toLowerCase() : 'bangalore';
    const activeCity = cityMockData[key];
    setCityData(activeCity);

    // Filter properties listed in this city name
    const matches = properties.filter((p) => p.city.toLowerCase() === activeCity.name.toLowerCase());
    setCityListings(matches);
  }, [cityName]);

  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-slate-50 dark:bg-slate-950">
        <div className="text-center text-slate-500">Loading City insights...</div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* City Hero Billboard */}
        <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-md mb-12">
          <img src={cityData.bgImage} alt={cityData.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white z-10">
            <span className="text-primary-350 font-bold uppercase tracking-wider text-xs flex items-center mb-1">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              City Spotlight
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">{cityData.name}</h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl font-medium">{cityData.tagline}</p>
          </div>
        </div>

        {/* City Stats Widget */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-850 shadow-sm mb-12">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Avg Property Price</span>
            <p className="font-display font-extrabold text-xl text-primary-750 dark:text-primary-400 mt-1">{cityData.avgPrice}</p>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verified Listings</span>
            <p className="font-display font-extrabold text-xl text-slate-800 dark:text-white mt-1">{cityData.listingsCount}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Rental Activity index</span>
            <p className="font-display font-extrabold text-xl text-emerald-600 mt-1 flex items-center space-x-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>{cityData.rentIndex}</span>
            </p>
          </div>
        </div>

        {/* Popular Localities to Invest */}
        <section className="mb-16">
          <div className="text-center md:text-left mb-8">
            <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">Top Localities in {cityData.name}</h2>
            <p className="text-xs text-slate-500 mt-1">High-demand regions based on user search patterns and price trends</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityData.localities.map((loc) => (
              <LocalityCard key={loc.id} locality={loc} />
            ))}
          </div>
        </section>

        {/* Available Listings Grid */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">Featured Properties in {cityData.name}</h2>
              <p className="text-xs text-slate-500 mt-1">Top-rated apartments and villas currently listed on HomeVerse</p>
            </div>
            <button 
              onClick={() => navigate(`/search?city=${cityData.name}`)}
              className="text-primary-700 dark:text-primary-400 text-xs font-bold hover:underline flex items-center"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {cityListings.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityListings.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-100 dark:border-slate-850">
              <Building2 className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-600 dark:text-slate-400">No properties matching filters in this city yet.</p>
              <p className="text-xs text-slate-400 mt-1">Select other localities or adjust filters to view properties nearby.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default City;
