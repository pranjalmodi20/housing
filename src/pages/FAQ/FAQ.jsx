import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

const faqs = [
  { q: 'How do I search for properties on HomeVerse?', a: 'Use the search bar on the homepage or any category page (Buy, Rent, Commercial, etc.) to enter your preferred city, locality, or project name. You can further refine results using BHK, budget, and property type filters.' },
  { q: 'Are all properties verified on HomeVerse?', a: 'We verify listings through a multi-step process including RERA cross-checks, owner documentation validation, and on-ground site inspections for premium listings. Look for the green "Verified" badge on property cards.' },
  { q: 'How do I create a digital rent agreement?', a: 'Navigate to Services → Rent Agreement from the footer or directly visit /services/rent-agreement. Fill in landlord/tenant details, review, e-sign, and pay the stamp paper fee. The legally binding document is generated instantly.' },
  { q: 'Is there any brokerage fee on HomeVerse?', a: 'HomeVerse operates on a zero-brokerage model for most residential listings. For premium and commercial properties, a nominal service charge may apply which is always disclosed upfront.' },
  { q: 'How does the EMI Calculator work?', a: 'Our EMI Calculator uses the standard reducing balance formula. Input your loan amount, interest rate, and tenure to instantly see your monthly installment, total interest payable, and a visual principal vs interest breakdown.' },
  { q: 'Can I save properties and get notifications?', a: 'Yes! Create a free account and click the heart icon on any property card to save it. You\'ll receive push notifications and email alerts whenever there\'s a price change or new similar listing.' },
  { q: 'How do I contact a property owner or developer?', a: 'Click the "Contact" button on any property card or use the enquiry form on the property details page. Your details are shared securely with the advertiser who will reach out within 24 hours.' },
  { q: 'What cities does HomeVerse cover?', a: 'We currently cover 500+ cities across India including Mumbai, Delhi NCR, Bangalore, Pune, Hyderabad, Chennai, Kolkata, Ahmedabad, Jaipur, Lucknow, and many more tier-2 and tier-3 cities.' },
  { q: 'How can I list my property on HomeVerse?', a: 'Click the "Add Property" button in the navigation bar. Fill in your property details, upload high-quality photos, set your price, and submit. Our team will verify and publish your listing within 24 hours.' },
  { q: 'Is my personal data safe on HomeVerse?', a: 'Absolutely. We use 256-bit AES encryption for all data transmission, follow GDPR-compliant privacy policies, and never share your contact details with third parties without explicit consent.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-indigo-900 pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden text-white text-center">
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-primary-300 bg-primary-500/15 border border-primary-500/20 rounded-full">
              Help Center
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-primary-300 to-indigo-300 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-base text-primary-200/80 max-w-xl mx-auto mt-4">
              Find quick answers to common questions about HomeVerse services, listings, and features.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + FAQs */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQ topics..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 shadow-sm"
            />
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display font-bold text-sm text-slate-800 dark:text-white pr-6">{faq.q}</span>
                  <ChevronDown className={`w-4.5 h-4.5 text-slate-400 shrink-0 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-sm text-slate-400">No matching questions found. Try a different search term.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
