import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Headphones, Zap } from 'lucide-react';
import { stats } from '../../../data/dummyData';

const features = [
  { icon: ShieldCheck, title: '100% Verified Listings', desc: 'Every property is physically verified and RERA-checked by our team.' },
  { icon: Award, title: 'Award-Winning Platform', desc: 'Recognized as India\'s most trusted proptech solution since 2020.' },
  { icon: Headphones, title: '24/7 Expert Support', desc: 'Our real estate advisors are available round the clock to guide you.' },
  { icon: Zap, title: 'Instant Digital Process', desc: 'Complete documentation, loan approvals, and agreements online.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-primary-200 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-indigo-400 rounded-full mx-auto mb-16" />

        {/* Features Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Why Choose HomeVerse?
          </h2>
          <p className="text-primary-200 mt-3 max-w-md mx-auto">
            We go the extra mile to ensure your real estate journey is seamless
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-primary-200 leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
