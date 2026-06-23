import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp, Heart, Globe, MapPin, Building2 } from 'lucide-react';
import { stats } from '../../data/dummyData';

const values = [
  { icon: Shield, title: 'Trust & Transparency', desc: 'Every listing is RERA-verified with clear documentation and no hidden charges.' },
  { icon: Users, title: 'Customer First', desc: 'Our dedicated support team assists you at every step from search to possession.' },
  { icon: Award, title: 'Quality Assurance', desc: 'We partner only with top-rated developers and verified property owners.' },
  { icon: TrendingUp, title: 'Market Intelligence', desc: 'Real-time pricing data and locality insights to help you make informed decisions.' },
];

const team = [
  { name: 'Arjun Mehta', role: 'CEO & Co-Founder', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Priya Sharma', role: 'CTO', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
  { name: 'Rahul Deshmukh', role: 'Head of Product', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Sneha Patel', role: 'VP Marketing', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
];

const About = () => {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-indigo-900 pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden text-white text-center">
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-primary-300 bg-primary-500/15 border border-primary-500/20 rounded-full">
              Our Story
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              Redefining How India <span className="bg-gradient-to-r from-primary-300 to-indigo-300 bg-clip-text text-transparent">Finds Homes</span>
            </h1>
            <p className="text-base sm:text-lg text-primary-200/80 max-w-2xl mx-auto mt-4">
              HomeVerse is India's fastest-growing real estate platform, connecting millions of buyers, renters, and investors with verified properties across 500+ cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="text-center bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary-700 dark:text-primary-400">{stat.value}</h3>
                <p className="text-xs text-slate-400 font-semibold mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-6">Making Real Estate Simple, Transparent & Accessible</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              We believe finding a home should be joyful, not stressful. Our platform combines cutting-edge technology with deep local market expertise to deliver a seamless property discovery experience.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              From AI-powered search recommendations to legally verified listings and zero-brokerage services, every feature is designed with you in mind.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="About us" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">What Drives Us</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-950/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">Meet Our Team</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mx-auto object-cover mb-4 border-4 border-white dark:border-slate-800 shadow-md" />
                <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white">{t.name}</h3>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-0.5">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
