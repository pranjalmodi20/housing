import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Building2 } from 'lucide-react';

const offices = [
  { city: 'Mumbai', address: 'Level 12, Lodha Excelus, NM Joshi Marg, Lower Parel, Mumbai 400013', phone: '+91 22 6842 0000' },
  { city: 'Bangalore', address: 'WeWork Galaxy, Residency Rd, Ashok Nagar, Bangalore 560025', phone: '+91 80 4953 0000' },
  { city: 'Delhi NCR', address: 'One Horizon Center, Golf Course Road, Sector 43, Gurgaon 122002', phone: '+91 124 417 0000' },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary-900 via-primary-800 to-indigo-900 pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden text-white text-center">
        <div className="absolute top-10 right-10 w-80 h-80 bg-primary-500/15 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold text-primary-300 bg-primary-500/15 border border-primary-500/20 rounded-full">
              Get in Touch
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
              We'd Love to <span className="bg-gradient-to-r from-primary-300 to-indigo-300 bg-clip-text text-transparent">Hear From You</span>
            </h1>
            <p className="text-base text-primary-200/80 max-w-xl mx-auto mt-4">
              Have a question, feedback, or partnership inquiry? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          
          {/* Form */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-slate-800 dark:text-white">Message Sent!</h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">Thank you for reaching out. Our team will respond within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="px-6 py-2.5 bg-primary-700 hover:bg-primary-600 text-white font-semibold text-sm rounded-xl shadow-md transition-colors mt-4">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-primary-500" />
                    <span>Send Us a Message</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Fill out the form below and we'll get back to you.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Email</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="9876543210" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Subject</label>
                    <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="General Inquiry" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Message</label>
                  <textarea rows="4" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help you?" className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-750 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 resize-none" />
                </div>
                <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-600 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                  <Mail className="w-4.5 h-4.5 text-primary-500 mt-0.5 shrink-0" />
                  <div><p className="font-bold text-slate-800 dark:text-white">support@homeverse.in</p><p className="text-xs text-slate-400">General queries & support</p></div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                  <Phone className="w-4.5 h-4.5 text-primary-500 mt-0.5 shrink-0" />
                  <div><p className="font-bold text-slate-800 dark:text-white">1800-200-5577</p><p className="text-xs text-slate-400">Mon-Sat, 9 AM – 7 PM IST</p></div>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                  <Clock className="w-4.5 h-4.5 text-primary-500 mt-0.5 shrink-0" />
                  <div><p className="font-bold text-slate-800 dark:text-white">Office Hours</p><p className="text-xs text-slate-400">Monday - Saturday: 9 AM - 7 PM</p></div>
                </div>
              </div>
            </div>

            {/* Office addresses */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-primary-500" />
                <span>Our Offices</span>
              </h3>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {offices.map((o, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0">
                    <h4 className="font-display font-bold text-sm text-primary-600 dark:text-primary-400">{o.city}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{o.address}</p>
                    <p className="text-xs text-slate-400 mt-0.5 font-semibold">{o.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
