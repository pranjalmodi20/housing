import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../../data/dummyData';
import ImageCarousel from '../../components/common/ImageCarousel';
import GalleryModal from '../../components/common/GalleryModal';
import { MapPin, Shield, Star, Phone, MessageSquare, Heart, Share2, CheckCircle2, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock additional listings to support full routing lookup
const extraSearchListings = [
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
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    bathrooms: 2,
    furnishing: 'Semi-Furnished',
    facing: 'East',
    description: 'Beautiful 2 BHK rent apartment inside Prestige Boulevard complex with 24x7 security and modern clubhouse facilities.',
    developer: 'Prestige Group',
    postedOn: 'Yesterday'
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
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    bathrooms: 3,
    furnishing: 'Fully Furnished',
    facing: 'West',
    description: 'Fabulous fully-furnished sea facing 3 BHK penthouse with private terrace located at Bandra West.',
    developer: 'Lodha Group',
    postedOn: '3 days ago'
  },
  {
    id: 501,
    title: 'DLF The Crest New Phase',
    price: 31000000,
    priceLabel: '₹3.10 Cr',
    bhk: 3,
    type: 'Apartment',
    locality: 'Sector 54',
    city: 'Delhi NCR',
    area: 2400,
    badge: 'New Launch',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    bathrooms: 3,
    furnishing: 'Unfurnished',
    facing: 'South',
    description: 'A new phase residential launch with premium apartments, landscaped open spaces, clubhouse amenities, and strong road connectivity.',
    developer: 'DLF Group',
    postedOn: 'Today'
  },
  {
    id: 601,
    title: 'Prestige Lakeside Project',
    price: 48500000,
    priceLabel: '₹4.85 Cr onwards',
    bhk: 4,
    type: 'Project',
    locality: 'Whitefield',
    city: 'Bangalore',
    area: 4200,
    badge: 'Project',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
    ],
    verified: true,
    bathrooms: 4,
    furnishing: 'Semi-Furnished',
    facing: 'East',
    description: 'A project-led villa community with curated amenities, multiple configuration choices, and developer-backed inventory information.',
    developer: 'Prestige Group',
    postedOn: 'This week'
  }
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    msg: 'I am interested in this property. Please contact me with more details.'
  });

  useEffect(() => {
    const allListings = [...properties, ...extraSearchListings];
    const found = allListings.find((p) => p.id === parseInt(id));
    if (found) {
      setProperty(found);
    }
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Property not found</p>
          <button 
            onClick={() => navigate('/')} 
            className="px-6 py-2 bg-primary-700 hover:bg-primary-600 text-white rounded-xl font-bold"
          >
            Back Home
          </button>
        </div>
      </div>
    );
  }

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const imgs = property.images && property.images.length > 0 
    ? property.images 
    : [property.image || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumbs & Action bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-white leading-tight">
              {property.title}
            </h1>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-2">
              <MapPin className="w-4 h-4 text-primary-500 mr-1.5 shrink-0" />
              <span>{property.locality}, {property.city}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button 
              onClick={() => setIsLiked(!isLiked)} 
              className={`p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors flex items-center justify-center ${isLiked ? 'text-red-500' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500' : ''}`} />
            </button>
            <button className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:text-slate-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 relative h-96 sm:h-[450px] overflow-hidden rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer" onClick={() => setGalleryOpen(true)}>
            <img 
              src={imgs[0]} 
              alt={property.title} 
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors" />
            
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {property.verified && (
                <span className="flex items-center space-x-1 px-3 py-1 rounded-xl bg-emerald-500 text-white text-[10px] font-bold uppercase shadow-md">
                  <Shield className="w-3.5 h-3.5 fill-white" />
                  <span>Verified Property</span>
                </span>
              )}
            </div>
            
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-black/60 backdrop-blur-md text-white font-bold text-xs rounded-xl shadow-lg hover:bg-black/85 transition-colors">
              View All Photos ({imgs.length})
            </button>
          </div>

          <div className="hidden lg:grid grid-rows-2 gap-6 h-[450px]">
            {imgs.slice(1, 3).map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setGalleryOpen(true)}
                className="relative overflow-hidden rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer"
              >
                <img 
                  src={img} 
                  alt="" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/25 transition-colors" />
              </div>
            ))}
            {imgs.length < 3 && (
              <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex items-center justify-center">
                <p className="text-slate-400 text-sm font-semibold">Premium Real Estate Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview / Price Section */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
              <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800 pb-6">
                <div>
                  <span className="text-[11px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest bg-primary-50 dark:bg-primary-950/40 px-3 py-1 rounded-lg">
                    {property.type}
                  </span>
                  <h2 className="font-display font-extrabold text-2xl text-slate-800 dark:text-white mt-3">
                    ₹{property.price >= 10000000 ? `${(property.price / 10000000).toFixed(2)} Cr` : property.price >= 100000 ? `${(property.price / 100000).toFixed(2)} Lakhs` : property.price.toLocaleString()}
                    {property.priceLabel?.includes('/ mo') ? ' / Month' : ''}
                  </h2>
                </div>

                {property.rating && (
                  <div className="flex items-center space-x-1 px-3 py-1 rounded-xl bg-yellow-400 text-slate-900 text-xs font-bold shadow-sm">
                    <Star className="w-4 h-4 fill-yellow-600 text-yellow-600" />
                    <span>{property.rating} / 5.0</span>
                  </div>
                )}
              </div>

              {/* Core Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase">Super Area</p>
                  <p className="font-display font-bold text-slate-800 dark:text-white mt-1">{property.area} sqft</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase">Configuration</p>
                  <p className="font-display font-bold text-slate-800 dark:text-white mt-1">{property.bhk} BHK</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase">Furnishing</p>
                  <p className="font-display font-bold text-slate-800 dark:text-white mt-1">{property.furnishing || 'Semi-Furnished'}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase">Facing</p>
                  <p className="font-display font-bold text-slate-800 dark:text-white mt-1">{property.facing || 'East'}</p>
                </div>
              </div>
            </div>

            {/* Description Block */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm">
              <h3 className="font-display font-bold text-lg text-slate-850 dark:text-white mb-4">Property Description</h3>
              <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm">
              <h3 className="font-display font-bold text-lg text-slate-850 dark:text-white mb-6">World-Class Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'Gymnasium',
                  '24/7 Security Support',
                  'Kids Play Compound',
                  'Swimming Pool',
                  '100% Power Backup',
                  'Reserved Parking Slots',
                  'Elevator/Lift Access',
                  'Water Filtration Hub'
                ].map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Builder / Developer Info */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm">
              <h3 className="font-display font-bold text-lg text-slate-850 dark:text-white mb-6">Developer & Poster Details</h3>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-950 flex items-center justify-center rounded-2xl text-primary-700 dark:text-primary-400 font-extrabold text-lg">
                    {property.developer?.charAt(0) || 'O'}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 dark:text-white text-base">{property.developer || 'Property Owner'}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">RERA Registered Developer Partner</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-semibold">Posted On</p>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-0.5">{property.postedOn || '2 days ago'}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Seller Sticky Column */}
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm">
              <h3 className="font-display font-bold text-lg text-slate-850 dark:text-white mb-4">Contact Agent / Developer</h3>
              
              {contactSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 p-6 rounded-2xl text-center space-y-3"
                >
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-base">Enquiry Sent!</h4>
                  <p className="text-xs text-emerald-600/80">
                    The advertiser has been notified. They will contact you shortly via email or phone.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-450 uppercase mb-1.5 block">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-450 uppercase mb-1.5 block">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-450 uppercase mb-1.5 block">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-450 uppercase mb-1.5 block">Message</label>
                    <textarea 
                      rows="3"
                      value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 resize-none" 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-650 text-white font-bold text-sm rounded-xl shadow-lg transition-all"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-xl" />
              <h4 className="font-display font-bold text-base mb-2">Need a Home Loan?</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Compare rates and check eligibility with over 15+ top banking partners starting at 8.4% p.a.
              </p>
              <button 
                onClick={() => navigate('/services/home-loan')}
                className="w-full py-2 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                Apply for Loan
              </button>
            </div>
          </div>

        </div>
      </div>

      <GalleryModal 
        images={imgs} 
        isOpen={galleryOpen} 
        onClose={() => setGalleryOpen(false)} 
        startIndex={0} 
      />
    </div>
  );
};

export default PropertyDetails;
