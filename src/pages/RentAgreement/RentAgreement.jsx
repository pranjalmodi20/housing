import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, User, Home, PenTool, CheckCircle2, ShieldCheck, Download, CreditCard, ChevronRight } from 'lucide-react';

const RentAgreement = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    landlordName: '',
    landlordPhone: '',
    tenantName: '',
    tenantPhone: '',
    propertyAddress: '',
    monthlyRent: '',
    depositAmount: '',
    agreementDuration: '11'
  });

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-650 dark:text-purple-400 text-xs font-bold border border-purple-100 dark:border-purple-800">
            <FileText className="w-4 h-4" />
            <span>Premium Online Services</span>
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800 dark:text-white mt-4">
            Create Online Rent Agreements
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto mt-2">
            Legally valid, custom rent agreements with digital e-stamping and signatures in 5 minutes.
          </p>
        </div>

        {/* Multi-step progress tracker */}
        <div className="flex justify-between items-center mb-10 max-w-md mx-auto relative px-6">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-xs shadow-md transition-all ${
                step >= s 
                  ? 'bg-primary-700 text-white border-2 border-primary-100' 
                  : 'bg-slate-100 dark:bg-slate-850 text-slate-400 border-2 border-transparent'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Wizard Form Wrapper */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-3xl p-6 sm:p-10 shadow-sm relative">
          
          <AnimatePresence mode="wait">
            
            {/* Step 1: Form details */}
            {step === 1 && (
              <motion.form 
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleNext}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-850 dark:text-white flex items-center space-x-2">
                    <User className="w-5 h-5 text-primary-500" />
                    <span>Step 1: Party & Property Details</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Enter landlord, tenant, and property details to draft the agreement template.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div>
                    <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Landlord Full Name</label>
                    <input 
                      type="text" required value={formData.landlordName} 
                      onChange={(e) => setFormData({ ...formData, landlordName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Landlord Mobile</label>
                    <input 
                      type="tel" required value={formData.landlordPhone} 
                      onChange={(e) => setFormData({ ...formData, landlordPhone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Tenant Full Name</label>
                    <input 
                      type="text" required value={formData.tenantName} 
                      onChange={(e) => setFormData({ ...formData, tenantName: e.target.value })}
                      placeholder="e.g. Pranjal Modi"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Tenant Mobile</label>
                    <input 
                      type="tel" required value={formData.tenantPhone} 
                      onChange={(e) => setFormData({ ...formData, tenantPhone: e.target.value })}
                      placeholder="e.g. 9911223344"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Full Property Address</label>
                    <input 
                      type="text" required value={formData.propertyAddress} 
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      placeholder="e.g. Flat 302, Lodha Heights, Bandra West, Mumbai"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Monthly Rent (₹)</label>
                    <input 
                      type="number" required value={formData.monthlyRent} 
                      onChange={(e) => setFormData({ ...formData, monthlyRent: e.target.value })}
                      placeholder="e.g. 25000"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Security Deposit (₹)</label>
                    <input 
                      type="number" required value={formData.depositAmount} 
                      onChange={(e) => setFormData({ ...formData, depositAmount: e.target.value })}
                      placeholder="e.g. 50000"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100" 
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button 
                    type="submit" 
                    className="px-8 py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-650 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center space-x-2"
                  >
                    <span>Proceed to Sign</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}

            {/* Step 2: Sign and Pay */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-850 dark:text-white flex items-center space-x-2">
                    <PenTool className="w-5 h-5 text-primary-500" />
                    <span>Step 2: Sign Agreement & Pay Fees</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">Review the details and e-sign. A digital stamp paper fee of ₹499 applies.</p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-100 dark:border-slate-850 space-y-4 text-sm text-slate-650 dark:text-slate-350">
                  <div className="grid grid-cols-2 gap-4">
                    <div><span className="text-[10px] uppercase font-bold text-slate-400">Landlord</span><p className="font-bold text-slate-800 dark:text-white">{formData.landlordName}</p></div>
                    <div><span className="text-[10px] uppercase font-bold text-slate-400">Tenant</span><p className="font-bold text-slate-800 dark:text-white">{formData.tenantName}</p></div>
                    <div className="col-span-2"><span className="text-[10px] uppercase font-bold text-slate-400">Premises Address</span><p className="font-medium text-slate-700 dark:text-slate-200">{formData.propertyAddress}</p></div>
                    <div><span className="text-[10px] uppercase font-bold text-slate-400">Monthly Rent</span><p className="font-bold text-slate-800 dark:text-white">₹{Number(formData.monthlyRent).toLocaleString()} / month</p></div>
                    <div><span className="text-[10px] uppercase font-bold text-slate-400">Deposit amount</span><p className="font-bold text-slate-800 dark:text-white">₹{Number(formData.depositAmount).toLocaleString()}</p></div>
                  </div>
                </div>

                {/* Signature box */}
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center bg-white dark:bg-slate-950 flex flex-col items-center justify-center min-h-[140px] cursor-pointer">
                  <PenTool className="w-8 h-8 text-slate-400 mb-2" />
                  <p className="text-xs text-slate-405 font-bold">Draw/Type Signature Here</p>
                  <span className="text-[10px] text-slate-400/70 mt-1">This will be dynamically placed on page 4 of the contract.</span>
                </div>

                <div className="flex justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <button 
                    onClick={handlePrev}
                    className="px-6 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-xl text-xs font-bold text-slate-650 dark:text-slate-350 transition-colors"
                  >
                    Back to Edit
                  </button>
                  <button 
                    onClick={handleNext}
                    className="px-8 py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-650 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center space-x-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay stamp fee (₹499)</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Complete */}
            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-800 dark:text-white">
                    Agreement Successfully Created!
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 max-w-sm mx-auto">
                    Your digital stamp rental contract is active. Copies have been sent to both parties via SMS and email.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button 
                    onClick={() => {}} 
                    className="px-8 py-3.5 bg-primary-750 hover:bg-primary-650 text-white font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Contract</span>
                  </button>
                  <button 
                    onClick={() => { setStep(1); setFormData({ landlordName: '', landlordPhone: '', tenantName: '', tenantPhone: '', propertyAddress: '', monthlyRent: '', depositAmount: '', agreementDuration: '11' }); }}
                    className="px-6 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold text-slate-650 dark:text-slate-350 transition-colors"
                  >
                    Create Another
                  </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl max-w-md mx-auto text-left text-xs text-slate-400 leading-relaxed border border-slate-100 dark:border-slate-850 flex items-start space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>The document is encrypted under 256-bit AES protocols with legal stamps verified by state e-stamp authorities.</span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default RentAgreement;
