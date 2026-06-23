import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { properties } from '../../data/dummyData';
import PropertyCard from '../../components/common/PropertyCard';
import { User, Mail, Phone, LogOut, Heart, Bell, Settings, Award, Edit3, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: user?.name || 'Pranjal Modi',
    email: user?.email || 'pranjal@example.com',
    phone: user?.phone || '9876543210'
  });

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Mock profile data if user is not logged in (to prevent crashes on direct routing)
  const displayUser = user || {
    name: 'Pranjal Modi',
    email: 'pranjal@example.com',
    phone: '9876543210',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    role: 'Premium Buyer'
  };

  // Wishlist items
  const wishlistProperties = properties.slice(1, 3);

  // Mock notifications
  const notifications = [
    { id: 1, title: 'Price Drop Alert', msg: 'Lodha World Tower in Mumbai has seen a price drop of ₹15 Lakhs!', date: 'Today, 10:30 AM' },
    { id: 2, title: 'New Listing Near You', msg: 'A premium 3 BHK apartment has been listed in Whitefield, Bangalore.', date: 'Yesterday' },
    { id: 3, title: 'Enquiry Received', msg: 'Developer Prestige Group has verified your rental enquiry request.', date: '3 days ago' }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Navigation Sidebar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 rounded-3xl shadow-sm text-center">
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-50">
              <img src={displayUser.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-display font-extrabold text-lg text-slate-800 dark:text-white leading-tight">
              {profileData.name}
            </h2>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 text-[10px] font-bold uppercase tracking-wider mt-2.5">
              <Award className="w-3.5 h-3.5" />
              <span>{displayUser.role}</span>
            </span>

            {/* Navigation links */}
            <div className="mt-8 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-6">
              {[
                { id: 'profile', label: 'My Profile', icon: User },
                { id: 'wishlist', label: 'Wishlist', icon: Heart },
                { id: 'notifications', label: 'Notifications', icon: Bell }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-primary-700 text-white shadow-md shadow-primary-500/10'
                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-semibold text-red-500 hover:bg-red-500/10 transition-all mt-4 border-t border-slate-100 dark:border-slate-800"
              >
                <LogOut className="w-4.5 h-4.5 shrink-0" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Details Content */}
          <div className="lg:col-span-3">
            
            {activeTab === 'profile' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-slate-800 dark:text-white">Profile Details</h3>
                    <p className="text-xs text-slate-400">View or update your account information</p>
                  </div>
                  {!editMode && (
                    <button 
                      onClick={() => setEditMode(true)}
                      className="px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold text-slate-650 dark:text-slate-350 transition-colors flex items-center space-x-1.5"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                  )}
                </div>

                {saveSuccess && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs p-3.5 rounded-xl font-semibold flex items-center space-x-2">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                    <span>Profile updated successfully!</span>
                  </div>
                )}

                <form onSubmit={handleSave} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1.5 block">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          disabled={!editMode}
                          value={profileData.name}
                          onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 disabled:opacity-60"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1.5 block">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          disabled={!editMode}
                          value={profileData.email}
                          onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 disabled:opacity-60"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1.5 block">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          disabled={!editMode}
                          value={profileData.phone}
                          onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 disabled:opacity-60"
                        />
                      </div>
                    </div>
                  </div>

                  {editMode && (
                    <div className="flex space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-primary-700 hover:bg-primary-600 text-white font-semibold text-xs rounded-xl shadow-md transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditMode(false)}
                        className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-350 hover:bg-slate-200 font-semibold text-xs rounded-xl transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </form>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 rounded-3xl shadow-sm">
                  <h3 className="font-display font-extrabold text-xl text-slate-800 dark:text-white">Saved Properties</h3>
                  <p className="text-xs text-slate-400">Properties you have liked or saved for updates</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {wishlistProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-800 dark:text-white">Latest Notifications</h3>
                  <p className="text-xs text-slate-400">Stay updated on matching listings and pricing shifts</p>
                </div>
                
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {notifications.map((n) => (
                    <div key={n.id} className="py-4 first:pt-0 last:pb-0 flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/20 text-purple-600 flex items-center justify-center shrink-0">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start flex-wrap gap-1">
                          <h4 className="font-display font-bold text-sm text-slate-800 dark:text-slate-200">{n.title}</h4>
                          <span className="text-[10px] text-slate-400 font-semibold">{n.date}</span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{n.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
