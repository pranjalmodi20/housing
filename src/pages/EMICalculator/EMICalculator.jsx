import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee, Percent, Calendar, RefreshCw } from 'lucide-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000); // Default 50 Lakhs
  const [interestRate, setInterestRate] = useState(8.5); // Default 8.5%
  const [tenure, setTenure] = useState(20); // Default 20 Years

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    // Formula: EMI = [P x R x (1+R)^N]/[((1+R)^N)-1]
    const P = loanAmount;
    const r = interestRate / 12 / 100; // monthly rate
    const n = tenure * 12; // monthly tenure

    if (r === 0) {
      setEmi(P / n);
      setTotalPayment(P);
      setTotalInterest(0);
      return;
    }

    const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayCalc = emiCalc * n;
    const totalIntCalc = totalPayCalc - P;

    setEmi(Math.round(emiCalc));
    setTotalPayment(Math.round(totalPayCalc));
    setTotalInterest(Math.round(totalIntCalc));
  }, [loanAmount, interestRate, tenure]);

  const interestPercentage = totalPayment > 0 ? ((totalInterest / totalPayment) * 100).toFixed(1) : 0;
  const principalPercentage = totalPayment > 0 ? ((loanAmount / totalPayment) * 100).toFixed(1) : 0;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-650 dark:text-purple-400 text-xs font-bold border border-purple-100 dark:border-purple-800">
            <Calculator className="w-4 h-4" />
            <span>Interactive Financial Tools</span>
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800 dark:text-white mt-4">
            Home Loan EMI Calculator
          </h1>
          <p className="text-sm text-slate-400 max-w-lg mx-auto mt-2">
            Calculate your monthly home loan installments and view detailed interest splits instantly.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-3xl p-6 sm:p-10 shadow-sm grid md:grid-cols-2 gap-10 items-start">
          
          {/* Sliders Input */}
          <div className="space-y-6">
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase">Loan Amount</span>
                <span className="font-display font-bold text-slate-800 dark:text-white text-base">
                  ₹{(loanAmount / 100000).toFixed(1)} Lakhs
                </span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="500000"
                  max="100000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>₹5 Lakhs</span>
                <span>₹10 Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase">Interest Rate (% p.a.)</span>
                <span className="font-display font-bold text-slate-800 dark:text-white text-base">
                  {interestRate}%
                </span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase">Loan Tenure (Years)</span>
                <span className="font-display font-bold text-slate-800 dark:text-white text-base">
                  {tenure} Years
                </span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-slate-50 dark:bg-slate-950/65 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between border border-slate-100 dark:border-slate-850">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Monthly Installment (EMI)</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-700 dark:text-primary-400 mt-2">
                ₹{emi.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ month</span>
              </h2>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-500">Principal Amount</span>
                <span className="text-xs font-extrabold text-slate-700 dark:text-slate-200">
                  ₹{loanAmount.toLocaleString()} ({principalPercentage}%)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-500">Interest Payable</span>
                <span className="text-xs font-extrabold text-slate-700 dark:text-slate-200">
                  ₹{totalInterest.toLocaleString()} ({interestPercentage}%)
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-800 pt-3">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-350">Total Amount Payable</span>
                <span className="text-sm font-extrabold text-slate-850 dark:text-white">
                  ₹{totalPayment.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Split Visualizer */}
            <div className="relative pt-4">
              <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                <div 
                  className="bg-primary-600 h-full transition-all duration-300"
                  style={{ width: `${principalPercentage}%` }}
                />
                <div 
                  className="bg-yellow-400 h-full transition-all duration-300"
                  style={{ width: `${interestPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-2">
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 bg-primary-600 rounded-full inline-block" />
                  <span>Principal</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full inline-block" />
                  <span>Interest</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
