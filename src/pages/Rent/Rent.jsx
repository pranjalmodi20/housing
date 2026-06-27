import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Key } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../../components/common/PropertyCard';
import LocalityCard from '../../components/common/LocalityCard';
import SearchBox from '../../components/common/SearchBox/SearchBox';

const rentCities = ['Mumbai', 'Bangalore', 'Delhi NCR', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad'];
const rentPropertyTypes = ['Apartment', 'Independent House', 'Villa', 'PG / Co-Living', 'Penthouse'];
const rentBhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];
const rentBudgetOptions = [
  'Under 10,000',
  '10,000 - 20,000',
  '20,000 - 40,000',
  '40,000 - 70,000',
  '70,000 - 1 Lakh',
  '1 Lakh+'
];

const rentCollections = [
  {
    id: 1,
    title: 'Fully Furnished Homes',
    subtitle: 'Move-in ready rental apartments with all appliances',
    count: '8,400+ Properties',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
    color: 'from-purple-900/80 to-transparent'
  },
  {
    id: 2,
    title: 'Zero Deposit Properties',
    subtitle: 'Rent homes without paying huge security deposit advances',
    count: '4,210+ Properties',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
    color: 'from-blue-900/80 to-transparent'
  },
  {
    id: 3,
    title: 'Gated Society Apartments',
    subtitle: 'Secure housing complexes with pool, gym and security',
    count: '12,500+ Properties',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
    color: 'from-green-900/80 to-transparent'
  },
  {
    id: 4,
    title: 'Pet Friendly Rentals',
    subtitle: 'Apartments and villas welcoming your furry friends',
    count: '3,100+ Properties',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    color: 'from-orange-900/80 to-transparent'
  }
];

const rentLocalities = [
  { id: 1, name: 'Whitefield', city: 'Bangalore', priceRange: '₹18,000 - ₹35,000/mo', trend: 'up', percentage: '+9.4% YoY', rating: 4.8 },
  { id: 2, name: 'Bandra West', city: 'Mumbai', priceRange: '₹45,000 - ₹90,000/mo', trend: 'up', percentage: '+14.2% YoY', rating: 4.9 },
  { id: 3, name: 'Gurgaon Sec 54', city: 'Delhi NCR', priceRange: '₹25,000 - ₹55,050/mo', trend: 'up', percentage: '+7.1% YoY', rating: 4.7 },
  { id: 4, name: 'Koregaon Park', city: 'Pune', priceRange: '₹20,000 - ₹42,000/mo', trend: 'up', percentage: '+8.3% YoY', rating: 4.8 },
  { id: 5, name: 'Gachibowli', city: 'Hyderabad', priceRange: '₹15,000 - ₹30,000/mo', trend: 'up', percentage: '+11.2% YoY', rating: 4.6 },
  { id: 6, name: 'OMR Road', city: 'Chennai', priceRange: '₹12,000 - ₹24,000/mo', trend: 'down', percentage: '-2.1% YoY', rating: 4.3 },
  { id: 7, name: 'Koramangala', city: 'Bangalore', priceRange: '₹22,000 - ₹45,000/mo', trend: 'up', percentage: '+10.5% YoY', rating: 4.9 },
  { id: 8, name: 'Salt Lake Sec V', city: 'Kolkata', priceRange: '₹14,000 - ₹28,000/mo', trend: 'up', percentage: '+4.0% YoY', rating: 4.5 }
];

const rentProperties = [
  {
    id: 101,
    title: 'Prestige Boulevard Apartment',
    price: 32000,
    priceLabel: '₹32,000 / mo',
    bhk: 2,
    type: 'Apartment',
    locality: 'Whitefield',
    city: 'Bangalore',
    area: 1250,
    badge: 'Verified',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'],
    verified: true,
    reraApproved: false,
    bathrooms: 2,
    furnishing: 'Semi-Furnished',
    facing: 'East',
    description: 'Beautiful 2 BHK rent apartment inside Prestige Boulevard complex with 24x7 security and modern clubhouse facilities.'
  },
  {
    id: 102,
    title: 'Sunset Sea View Penthouse',
    price: 85000,
    priceLabel: '₹85,000 / mo',
    bhk: 3,
    type: 'Penthouse',
    locality: 'Bandra West',
    city: 'Mumbai',
    area: 2100,
    badge: 'Exclusive',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'],
    verified: true,
    reraApproved: false,
    bathrooms: 3,
    furnishing: 'Fully Furnished',
    facing: 'West',
    description: 'Fabulous fully-furnished sea facing 3 BHK penthouse with private terrace located at Bandra West.'
  },
  {
    id: 103,
    title: 'DLF phase 5 Modern Flat',
    price: 45000,
    priceLabel: '₹45,000 / mo',
    bhk: 3,
    type: 'Apartment',
    locality: 'Sector 54',
    city: 'Delhi NCR',
    area: 1750,
    badge: 'Newly Listed',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'],
    verified: true,
    reraApproved: false,
    bathrooms: 3,
    furnishing: 'Semi-Furnished',
    facing: 'North-East',
    description: 'Spacious flat with modular kitchen and private balcony. Clean family society environment near DLF Golf course.'
  },
  {
    id: 104,
    title: 'Marvel Bounty Cozy Villa',
    price: 65000,
    priceLabel: '₹65,000 / mo',
    bhk: 4,
    type: 'Villa',
    locality: 'Koregaon Park',
    city: 'Pune',
    area: 3200,
    badge: 'Verified',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'],
    verified: true,
    reraApproved: false,
    bathrooms: 4,
    furnishing: 'Unfurnished',
    facing: 'South',
    description: 'Huge 4 BHK duplex villa with a private garden compound. Perfect for large families seeking quiet residential green space.'
  },
  {
    id: 105,
    title: 'Phoenix Gated Society Flat',
    price: 25000,
    priceLabel: '₹25,000 / mo',
    bhk: 2,
    type: 'Apartment',
    locality: 'Gachibowli',
    city: 'Hyderabad',
    area: 1150,
    badge: 'Popular',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'],
    verified: false,
    reraApproved: false,
    bathrooms: 2,
    furnishing: 'Semi-Furnished',
    facing: 'North-East',
    description: 'Lovely rent house for small families or working professionals close to Gachibowli IT hub corridor.'
  },
  {
    id: 106,
    title: 'Hiranandani Signature Studio',
    price: 18000,
    priceLabel: '₹18,000 / mo',
    bhk: 1,
    type: 'Apartment',
    locality: 'Powai',
    city: 'Mumbai',
    area: 550,
    badge: 'Verified',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'],
    verified: true,
    reraApproved: false,
    bathrooms: 1,
    furnishing: 'Fully Furnished',
    facing: 'East',
    description: 'Fully functional modern 1 BHK studio unit in Powai with direct security gates and power backup.'
  }
];

const Rent = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      {/* Hero / Search Section */}
      <section className="relative bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-950 pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-indigo-500/25 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/20 rounded-full backdrop-blur-sm">
              32,000+ Verified Rental Listings
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Find Your Perfect <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Home to Rent</span>
            </h1>
            <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mx-auto">
              Search verified rental apartments, villas, PG properties and independent houses with zero hidden fees.
            </p>
          </motion.div>

          {/* Reusable Search Box Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="w-full"
          >
            <SearchBox />
          </motion.div>
        </div>
      </section>

      {/* Featured Properties for Rent */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="flex justify-between items-end mb-12"
          >
            <div>
              <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">Top Rentals</span>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-2">Featured Homes for Rent</h2>
            </div>
            <button 
              onClick={() => navigate('/search?tab=rent')}
              className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline flex items-center"
            >
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentProperties.map((property, idx) => (
              <motion.div 
                key={property.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.05 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Brokerage / Rent Agreements Promo */}
      <section className="py-12 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-800 to-indigo-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-500/25 text-purple-200 text-xs font-semibold mb-4 border border-purple-500/20">
                <Key className="w-3.5 h-3.5" />
                <span>Zero Brokerage Premium</span>
              </span>
              <h3 className="font-display text-3xl font-bold mb-4">Create Online Rent Agreements Hassle-Free</h3>
              <p className="text-purple-200/80 text-sm sm:text-base mb-6">
                Legally binding digital agreements with e-stamping and instant delivery. Safe, secured, and zero brokerage support.
              </p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
                <span className="flex items-center space-x-1.5"><ShieldCheck className="w-4 h-4 text-green-400" /><span>100% Legally Binding</span></span>
                <span className="flex items-center space-x-1.5"><Zap className="w-4 h-4 text-yellow-400" /><span>Created in 5 Mins</span></span>
              </div>
            </div>
            <button 
              onClick={() => navigate('/services/rent-agreement')}
              className="relative z-10 shrink-0 px-8 py-4 bg-white hover:bg-slate-50 text-purple-900 font-bold text-sm sm:text-base rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Generate Agreement
            </button>
          </div>
        </div>
      </section>

      {/* Top Localities for Rent */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">Top Destinations</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Popular Localities to Rent</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentLocalities.map((l, idx) => (
              <motion.div 
                key={l.id} 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.05 }}
              >
                <LocalityCard locality={l} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent Collections */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-12"
          >
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">Curated Selections</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Rent Collections</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentCollections.map((col, idx) => (
              <motion.div 
                key={col.id} 
                onClick={() => navigate(`/search?tab=rent&collection=${col.id}`)}
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.06 }} 
                whileHover={{ y: -5 }} 
                className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg"
              >
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${col.color}`} />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display font-bold text-lg leading-tight">{col.title}</h3>
                  <p className="text-[11px] text-white/70 mt-1 line-clamp-2">{col.subtitle}</p>
                  <p className="text-[10px] text-purple-300 font-bold mt-2.5 uppercase tracking-wider">{col.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rent;
