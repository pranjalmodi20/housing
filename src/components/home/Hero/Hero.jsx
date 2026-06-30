import React from 'react';
import { motion } from 'framer-motion';
import SearchBox from '../../common/SearchBox/SearchBox';

const Hero = () => {
  return (
    <section className="relative min-h-0 sm:min-h-[92vh] flex items-center justify-center overflow-hidden py-24 sm:py-0">
      {/* Background — 99acres-inspired light cream with architectural silhouettes */}
      <div className="absolute inset-0 bg-[#F5F4F1] overflow-hidden">
        {/* Soft layered gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF8] via-[#F5F4F1] to-[#EDE9E3]" />
        {/* Secondary subtle diagonal gradient to add color complexity */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/[0.02] via-transparent to-indigo-500/[0.02] mix-blend-multiply pointer-events-none" />

        {/* Floating abstract blurred blobs for depth */}
        <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] rounded-full bg-primary-500/[0.02] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-indigo-500/[0.03] blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-700/[0.015] blur-[160px] pointer-events-none" />

        {/* Curved decorative arc — top */}
        <div className="absolute top-0 left-0 right-0 h-[50%]">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none" style={{ opacity: 0.05 }}>
            <path d="M0,192 C360,320 1080,64 1440,192 L1440,320 L0,320 Z" fill="#1F4D3D" />
          </svg>
        </div>

        {/* Curved decorative arc — middle flowing curve */}
        <div className="absolute top-0 left-0 right-0 h-[60%] pointer-events-none">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none" style={{ opacity: 0.02 }}>
            <path d="M0,100 C400,280 1040,120 1440,240 L1440,320 L0,320 Z" fill="#1F4D3D" />
          </svg>
        </div>

        {/* Curved decorative arc — bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%]">
          <svg viewBox="0 0 1440 320" className="absolute top-0 w-full" preserveAspectRatio="none" style={{ opacity: 0.03 }}>
            <path d="M0,128 C480,0 960,256 1440,128 L1440,0 L0,0 Z" fill="#6E8B74" />
          </svg>
        </div>

        {/* Architectural city skyline silhouette — centered bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full transition-opacity duration-500"
          viewBox="0 0 1440 220"
          preserveAspectRatio="xMidYMax meet"
          style={{ opacity: 0.05, filter: 'url(#city-blur)' }}
        >
          <defs>
            <filter id="city-blur">
              <feGaussianBlur stdDeviation="0.8" />
            </filter>
          </defs>
          <rect x="50" y="130" width="35" height="90" rx="2" fill="#1F4D3D" />
          <rect x="95" y="25" width="24" height="195" rx="2" fill="#1F4D3D" />
          <rect x="130" y="100" width="50" height="120" rx="2" fill="#1F4D3D" />
          <rect x="190" y="65" width="28" height="155" rx="2" fill="#1F4D3D" />
          <rect x="228" y="140" width="45" height="80" rx="2" fill="#1F4D3D" />
          <rect x="285" y="35" width="32" height="185" rx="2" fill="#1F4D3D" />
          <rect x="328" y="115" width="55" height="105" rx="2" fill="#1F4D3D" />
          <rect x="395" y="85" width="22" height="135" rx="2" fill="#1F4D3D" />
          <rect x="428" y="60" width="38" height="160" rx="2" fill="#1F4D3D" />
          <rect x="478" y="125" width="50" height="95" rx="2" fill="#1F4D3D" />
          <rect x="540" y="30" width="26" height="190" rx="2" fill="#1F4D3D" />
          <rect x="578" y="110" width="42" height="110" rx="2" fill="#1F4D3D" />
          <rect x="630" y="70" width="30" height="150" rx="2" fill="#1F4D3D" />
          <rect x="670" y="135" width="48" height="85" rx="2" fill="#1F4D3D" />
          <rect x="730" y="40" width="28" height="180" rx="2" fill="#1F4D3D" />
          <rect x="770" y="100" width="50" height="120" rx="2" fill="#1F4D3D" />
          <rect x="830" y="25" width="24" height="195" rx="2" fill="#1F4D3D" />
          <rect x="865" y="115" width="38" height="105" rx="2" fill="#1F4D3D" />
          <rect x="915" y="75" width="28" height="145" rx="2" fill="#1F4D3D" />
          <rect x="955" y="130" width="45" height="90" rx="2" fill="#1F4D3D" />
          <rect x="1010" y="45" width="32" height="175" rx="2" fill="#1F4D3D" />
          <rect x="1052" y="105" width="52" height="115" rx="2" fill="#1F4D3D" />
          <rect x="1115" y="70" width="25" height="150" rx="2" fill="#1F4D3D" />
          <rect x="1150" y="125" width="40" height="95" rx="2" fill="#1F4D3D" />
          <rect x="1200" y="35" width="26" height="185" rx="2" fill="#1F4D3D" />
          <rect x="1238" y="110" width="48" height="110" rx="2" fill="#1F4D3D" />
          <rect x="1295" y="70" width="30" height="150" rx="2" fill="#1F4D3D" />
          <rect x="1335" y="140" width="44" height="80" rx="2" fill="#1F4D3D" />
          <rect x="105" y="13" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="299" y="23" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="551" y="18" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="742" y="28" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="840" y="13" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="1024" y="33" width="4" height="12" rx="1" fill="#1F4D3D" />
          <rect x="1211" y="23" width="4" height="12" rx="1" fill="#1F4D3D" />
        </svg>

        {/* Soft radial glow — upper left */}
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-primary-500/[0.04] blur-3xl" />

        {/* Soft radial glow — lower right */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.03] blur-3xl" />

        {/* Very faint dotted grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(31,77,61,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Subtle premium paper texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.006] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center w-full">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary-800 bg-primary-500/10 border border-primary-500/15 rounded-full">
            India's #1 Premium Property Portal
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-[-0.02em] max-w-3xl mx-auto">
            Discover Your{' '}
            <span className="bg-gradient-to-r from-primary-700 to-indigo-600 bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>
          <p className="text-base sm:text-lg font-medium text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Explore 100,000+ verified properties across 500+ cities. Buy, rent, or invest with confidence.
          </p>
        </motion.div>

        {/* Reusable Search Box Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="w-full max-w-3xl mx-auto px-0.5 sm:px-0"
        >
          <SearchBox />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
