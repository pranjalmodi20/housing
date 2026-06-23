import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CheckCircle, Send, Bell, Shield, Zap } from 'lucide-react';

const AppDownload = () => {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    setError('');
    if (!phone.trim() || phone.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setSent(true);
    setPhone('');
    setTimeout(() => setSent(false), 4000);
  };

  const features = [
    { icon: Bell, text: 'Instant property alerts' },
    { icon: Shield, text: 'Verified listings only' },
    { icon: Zap, text: 'Lightning-fast search' },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-700 via-primary-800 to-indigo-900 rounded-3xl overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 items-center gap-12 p-8 sm:p-12 lg:p-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary-200 bg-white/10 border border-white/10 rounded-full">
                Available on iOS & Android
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Download the HomeVerse App
              </h2>
              <p className="text-primary-200 mb-8 leading-relaxed">
                Get real-time property alerts, save your favorite listings, and explore homes on the go. Experience the best property search experience in your pocket.
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-8">
                {features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary-300" />
                      </div>
                      <span className="text-sm text-white/80">{feat.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* SMS Link Form */}
              <form onSubmit={handleSend} className="flex gap-3 max-w-md">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-white/50">+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setError(''); }}
                    placeholder="Enter mobile number"
                    maxLength={10}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-5 py-3.5 bg-white hover:bg-slate-100 text-primary-800 font-semibold rounded-xl shadow-lg transition-all text-sm whitespace-nowrap"
                >
                  {sent ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Get Link</span>
                    </>
                  )}
                </button>
              </form>
              {error && <p className="text-xs text-red-300 mt-2">{error}</p>}

              {/* Store Badges */}
              <div className="flex items-center space-x-4 mt-6">
                <a href="#" className="flex items-center space-x-2 px-4 py-2.5 bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.51-3.23 0-1.44.63-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-white/60 leading-tight">Download on</p>
                    <p className="text-sm font-semibold text-white leading-tight">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center space-x-2 px-4 py-2.5 bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.382.218-.726.61-.92zm10.89 9.586l2.72-2.72 6.07 3.5c.67.39.67 1.02 0 1.4l-6.07 3.5-2.72-2.72L18.44 12l-3.94-2.6zM5.27.38L15.44 6.24 12.53 9.15 5.27.38zM5.27 23.62l7.26-8.77 2.91 2.91L5.27 23.62z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-white/60 leading-tight">Get it on</p>
                    <p className="text-sm font-semibold text-white leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-64 h-[520px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-700">
                  <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden relative">
                    {/* Status bar */}
                    <div className="h-10 bg-primary-700 flex items-center justify-center">
                      <div className="w-20 h-5 bg-black rounded-full" />
                    </div>
                    {/* App content mock */}
                    <div className="p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="font-display font-bold text-sm text-slate-800">HomeVerse</span>
                      </div>
                      <div className="w-full h-8 bg-slate-100 rounded-lg mb-3" />
                      <div className="space-y-3">
                        <div className="w-full h-28 bg-gradient-to-br from-primary-50 to-indigo-50 rounded-xl" />
                        <div className="flex space-x-2">
                          <div className="w-1/2 h-20 bg-slate-100 rounded-xl" />
                          <div className="w-1/2 h-20 bg-slate-100 rounded-xl" />
                        </div>
                        <div className="w-full h-24 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-primary-500/20 rounded-[4rem] blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
