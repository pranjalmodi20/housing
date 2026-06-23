import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, IndianRupee, ShieldCheck, CheckCircle2, Building2, Landmark, HelpCircle, FileText, ArrowRight } from 'lucide-react';

const bankPartners = [
  { name: 'State Bank of India', rate: '8.40% - 9.10% p.a.', maxTenure: '30 Years', processingFee: '0.17% of loan value', rating: 4.8 },
  { name: 'HDFC Bank', rate: '8.50% - 9.30% p.a.', maxTenure: '30 Years', processingFee: 'Up to ₹3,000 + GST', rating: 4.7 },
  { name: 'ICICI Bank', rate: '8.55% - 9.40% p.a.', maxTenure: '30 Years', processingFee: '0.5% or ₹3,000 (higher)', rating: 4.7 },
  { name: 'Axis Bank', rate: '8.60% - 9.60% p.a.', maxTenure: '30 Years', processingFee: '1% of loan amount', rating: 4.6 },
  { name: 'LIC Housing Finance', rate: '8.45% - 9.20% p.a.', maxTenure: '30 Years', processingFee: '₹10,000 flat rate', rating: 4.5 }
];

const requiredDocs = [
  { title: 'Proof of Identity', items: ['Aadhaar Card', 'PAN Card', 'Passport / Voter ID'] },
  { title: 'Proof of Income', items: ['Latest 3 Months Salary Slips', 'Form 16 / ITR details', '6 Months Bank Statements'] },
  { title: 'Property Documents', items: ['Allotment Letter / Buyer Agreement', 'Sale Deed copy', 'NOC from Builder/Society'] }
];

const HomeLoan = () => {
  // Eligibility Calculator state
  const [monthlyIncome, setMonthlyIncome] = useState(75000);
  const [otherEmi, setOtherEmi] = useState(10000);
  const [tenureYears, setTenureYears] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);

  const [eligibleLoan, setEligibleLoan] = useState(0);
  const [expectedEmi, setExpectedEmi] = useState(0);
  const [applied, setApplied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', bank: bankPartners[0].name });

  useEffect(() => {
    // Standard rule: 50% FOIR (Fixed Obligation to Income Ratio)
    // Monthly disposable income for loan = (Income * 0.5) - other EMIs
    const maxMonthlyPayable = Math.max(0, (monthlyIncome * 0.5) - otherEmi);
    
    // Formula to back-calculate principal from EMI:
    // P = EMI / [ R * (1+R)^N / ((1+R)^N - 1) ]
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (maxMonthlyPayable === 0 || r === 0) {
      setEligibleLoan(0);
      setExpectedEmi(0);
      return;
    }

    const emiFactor = (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const calculatedPrincipal = maxMonthlyPayable / emiFactor;

    setEligibleLoan(Math.round(calculatedPrincipal));
    setExpectedEmi(Math.round(maxMonthlyPayable));
  }, [monthlyIncome, otherEmi, tenureYears, interestRate]);

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="relative rounded-3xl bg-gradient-to-b from-indigo-950 via-primary-950 to-slate-950 py-16 px-6 sm:px-12 text-center text-white overflow-hidden shadow-xl mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-500/15 border border-primary-500/20 text-primary-300 text-xs font-semibold mb-4">
              <Landmark className="w-4 h-4 text-primary-400" />
              <span>15+ Banking Partners Connected</span>
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight">
              Home Loans Made <span className="bg-gradient-to-r from-primary-300 to-indigo-300 bg-clip-text text-transparent">Simple & Fast</span>
            </h1>
            <p className="text-sm sm:text-base text-primary-200/80 mt-4 leading-relaxed">
              Compare premium rates from top nationalized banks, verify eligibility in minutes, and submit single-click digital documents.
            </p>
          </div>
        </section>

        {/* Eligibility Calculator */}
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-105 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h2 className="font-display font-bold text-xl text-slate-800 dark:text-white flex items-center mb-6">
              <Calculator className="w-5 h-5 text-primary-500 mr-2" />
              Check Your Loan Eligibility
            </h2>

            <div className="space-y-6">
              {/* Monthly Income */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Gross Monthly Income</span>
                  <span className="font-display font-bold text-slate-800 dark:text-white">₹{monthlyIncome.toLocaleString()}</span>
                </div>
                <input
                  type="range" min="10000" max="500000" step="5000"
                  value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-650"
                />
              </div>

              {/* Existing EMIs */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Other Monthly EMIs</span>
                  <span className="font-display font-bold text-slate-800 dark:text-white">₹{otherEmi.toLocaleString()}</span>
                </div>
                <input
                  type="range" min="0" max="200000" step="2000"
                  value={otherEmi} onChange={(e) => setOtherEmi(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-650"
                />
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Loan Tenure</span>
                  <span className="font-display font-bold text-slate-800 dark:text-white">{tenureYears} Years</span>
                </div>
                <input
                  type="range" min="5" max="30" step="1"
                  value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-650"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Expected Rate of Interest (% p.a.)</span>
                  <span className="font-display font-bold text-slate-800 dark:text-white">{interestRate}%</span>
                </div>
                <input
                  type="range" min="5" max="15" step="0.1"
                  value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-650"
                />
              </div>
            </div>
          </div>

          {/* Eligibility Results & Action */}
          <div className="bg-gradient-to-tr from-primary-850 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-primary-800">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Estimated Loan Limit</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-300 mt-2">
                ₹{eligibleLoan >= 10000000 ? `${(eligibleLoan / 10000000).toFixed(2)} Cr` : eligibleLoan >= 100000 ? `${(eligibleLoan / 100000).toFixed(2)} Lakhs` : eligibleLoan.toLocaleString()}
              </h2>
            </div>

            <div className="border-t border-white/10 pt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Max Monthly EMI</span>
                <span className="font-bold">₹{expectedEmi.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tenure Requested</span>
                <span className="font-bold">{tenureYears} Years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Calculated Rate</span>
                <span className="font-bold">{interestRate}%</span>
              </div>
            </div>

            <div className="pt-2">
              <a href="#loan-apply-form" className="block text-center w-full py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-xl shadow-md transition-colors">
                Apply Online Now
              </a>
            </div>
          </div>
        </div>

        {/* Banking Partner Table */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Compare Bank Offers</h2>
            <p className="text-xs text-slate-500 mt-1">Real-time interest rates updated daily by lending partners</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                <thead className="bg-slate-50 dark:bg-slate-800 text-[10px] uppercase font-bold text-slate-450 tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Lender</th>
                    <th className="px-6 py-4">Interest Rate</th>
                    <th className="px-6 py-4">Tenure Limit</th>
                    <th className="px-6 py-4">Processing Fees</th>
                    <th className="px-6 py-4">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {bankPartners.map((bank) => (
                    <tr key={bank.name} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800 dark:text-white flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-primary-500 shrink-0" />
                        <span>{bank.name}</span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-primary-650 dark:text-primary-400">{bank.rate}</td>
                      <td className="px-6 py-4">{bank.maxTenure}</td>
                      <td className="px-6 py-4 text-xs">{bank.processingFee}</td>
                      <td className="px-6 py-4 font-bold text-yellow-500">★ {bank.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Required Documents Section */}
        <section className="mb-16 grid md:grid-cols-3 gap-6">
          {requiredDocs.map((doc, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display font-bold text-base text-slate-800 dark:text-white flex items-center mb-4">
                <FileText className="w-5 h-5 text-primary-500 mr-2" />
                {doc.title}
              </h3>
              <ul className="space-y-2.5">
                {doc.items.map((item, idy) => (
                  <li key={idy} className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Application Form Form */}
        <section id="loan-apply-form" className="max-w-xl mx-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-6">Quick Loan Application</h2>

            {applied ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 p-6 rounded-2xl text-center space-y-3"
              >
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base">Application Received!</h4>
                <p className="text-xs text-emerald-600/80">
                  Our loan specialist will verify your eligibility constraints and call you in 2 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-450 uppercase mb-1 block">Full Name</label>
                  <input
                    type="text" required placeholder="e.g. John Doe"
                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-450 uppercase mb-1 block">Email Address</label>
                    <input
                      type="email" required placeholder="name@example.com"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-450 uppercase mb-1 block">Phone Number</label>
                    <input
                      type="tel" required placeholder="e.g. 9876543210"
                      value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-450 uppercase mb-1 block">Preferred Bank</label>
                  <select
                    value={formData.bank} onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-105 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 appearance-none cursor-pointer"
                  >
                    {bankPartners.map((b) => <option key={b.name} value={b.name}>{b.name}</option>)}
                  </select>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-650 text-white font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2">
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeLoan;
