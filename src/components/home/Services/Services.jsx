import React from 'react';
import { motion } from 'framer-motion';
import { Percent, FileText, Truck, Palette, TrendingUp, Wrench, ArrowRight } from 'lucide-react';
import { services } from '../../../data/dummyData';

const iconMap = { Percent, FileText, Truck, Palette, TrendingUp, Wrench };

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Everything You Need
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto">
            End-to-end real estate solutions designed to simplify your journey
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-7 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-5 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                  {service.desc}
                </p>
                <button className="flex items-center space-x-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                  <span>{service.action}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
