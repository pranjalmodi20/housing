import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../../data/dummyData';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-lg mx-auto">
            Join millions of satisfied customers who found their dream home with us
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 sm:p-12 relative shadow-sm border border-slate-100 dark:border-slate-700"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 opacity-10">
                <Quote className="w-16 h-16 text-primary-500" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonials[current].rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-slate-200 text-slate-200 dark:fill-slate-600 dark:text-slate-600'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {testimonials[current].rating}
                </span>
              </div>

              {/* Quote Text */}
              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-8 relative z-10 italic">
                "{testimonials[current].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-primary-100 dark:ring-primary-900/30"
                />
                <div>
                  <p className="font-display font-semibold text-slate-800 dark:text-white">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-8 h-3 bg-primary-600'
                      : 'w-3 h-3 bg-slate-300 dark:bg-slate-600 hover:bg-primary-300 dark:hover:bg-primary-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
