import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, IndianRupee, Sparkles, TrendingUp, HelpCircle, CheckCircle2, ChevronRight, Info, ShieldCheck } from 'lucide-react';

const citiesLocalities = {
  Mumbai: [
    { name: 'Bandra West', basePrice: 35000, rentFactor: 0.03 },
    { name: 'Andheri West', basePrice: 22000, rentFactor: 0.028 },
    { name: 'Powai', basePrice: 25000, rentFactor: 0.03 }
  ],
  Bangalore: [
    { name: 'Whitefield', basePrice: 9500, rentFactor: 0.035 },
    { name: 'Koramangala', basePrice: 15000, rentFactor: 0.034 },
    { name: 'Indiranagar', basePrice: 16500, rentFactor: 0.035 }
  ],
  'Delhi NCR': [
    { name: 'Gurgaon Sec 54', basePrice: 14000, rentFactor: 0.031 },
    { name: 'Noida Sector 62', basePrice: 7500, rentFactor: 0.032 },
    { name: 'Dwarka', basePrice: 8500, rentFactor: 0.03 }
  ],
  Pune: [
    { name: 'Koregaon Park', basePrice: 11000, rentFactor: 0.033 },
    { name: 'Hinjewadi', basePrice: 7200, rentFactor: 0.034 },
    { name: 'Baner', basePrice: 8000, rentFactor: 0.032 }
  ]
};

const PropertyValuation = () => {
  const [city, setCity] = useState('Bangalore');
  const [locality, setLocality] = useState(citiesLocalities['Bangalore'][0].name);
  const [area, setArea] = useState(1200);
  const [bhk, setBhk] = useState(2);
  const [age, setAge] = useState('1-3'); // 'New', '1-3', '3-5', '5-10', '10+'
  const [furnishing, setFurnishing] = useState('Semi-Furnished');
  const [parking, setParking] = useState(true);
  const [pool, setPool] = useState(false);
  const [security, setSecurity] = useState(true);

  const [valRange, setValRange] = useState(null);
  const [rentVal, setRentVal] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Find locality details
      const locList = citiesLocalities[city] || [];
      const locDetail = locList.find((l) => l.name === locality) || { basePrice: 8000, rentFactor: 0.03 };

      let pricePerSqft = locDetail.basePrice;

      // Adjust based on BHK
      if (bhk === 1) pricePerSqft *= 0.95;
      else if (bhk === 3) pricePerSqft *= 1.05;
      else if (bhk >= 4) pricePerSqft *= 1.1;

      // Adjust based on Age
      if (age === 'New') pricePerSqft *= 1.1;
      else if (age === '3-5') pricePerSqft *= 0.9;
      else if (age === '5-10') pricePerSqft *= 0.8;
      else if (age === '10+') pricePerSqft *= 0.7;

      // Adjust based on Furnishing
      if (furnishing === 'Fully Furnished') pricePerSqft += 800;
      else if (furnishing === 'Unfurnished') pricePerSqft -= 400;

      // Adjust for amenities
      if (parking) pricePerSqft += 200;
      if (pool) pricePerSqft += 300;
      if (security) pricePerSqft += 150;

      const exactValue = pricePerSqft * area;
      const minVal = Math.round(exactValue * 0.95);
      const maxVal = Math.round(exactValue * 1.05);

      // Rent Estimation: Valuation * rentFactor / 12 months
      const annualRentFactor = locDetail.rentFactor;
      const baseRent = (exactValue * annualRentFactor) / 12;
      const minRent = Math.round(baseRent * 0.92 / 100) * 100;
      const maxRent = Math.round(baseRent * 1.08 / 100) * 100;

      setValRange({ min: minVal, max: maxVal });
      setRentVal({ min: minRent, max: maxRent });
      setLoading(false);
    }, 900);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    const locList = citiesLocalities[selectedCity] || [];
    if (locList.length > 0) {
      setLocality(locList[0].name);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-24 pb-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-650 dark:text-purple-400 text-xs font-bold border border-purple-100 dark:border-purple-800">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Valuation Machine AI</span>
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800 dark:text-white mt-4">
            Instant Property Valuation
          </h1>
          <p className="text-sm text-slate-405 max-w-lg mx-auto mt-2">
            Get automated pricing estimates and rental rates based on neighborhood sales history and real estate algorithms.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Inputs Panel */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-6">Property Profile</h3>
            
            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Select City</label>
                  <select
                    value={city} onChange={handleCityChange}
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 cursor-pointer appearance-none"
                  >
                    {Object.keys(citiesLocalities).map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-405 uppercase mb-1.5 block">Select Locality</label>
                  <select
                    value={locality} onChange={(e) => setLocality(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 cursor-pointer appearance-none"
                  >
                    {(citiesLocalities[city] || []).map((l) => <option key={l.name} value={l.name}>{l.name}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-450 uppercase mb-1.5 block">Super Area (sqft)</label>
                  <input
                    type="number" required value={area} onChange={(e) => setArea(Number(e.target.value))}
                    placeholder="e.g. 1200"
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-450 uppercase mb-1.5 block">Configuration</label>
                  <select
                    value={bhk} onChange={(e) => setBhk(Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 cursor-pointer appearance-none"
                  >
                    {[1, 2, 3, 4].map((b) => <option key={b} value={b}>{b} BHK</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-450 uppercase mb-1.5 block">Construction Age</label>
                  <select
                    value={age} onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 cursor-pointer appearance-none"
                  >
                    <option value="New">Under Construction / Brand New</option>
                    <option value="1-3">1 - 3 Years Old</option>
                    <option value="3-5">3 - 5 Years Old</option>
                    <option value="5-10">5 - 10 Years Old</option>
                    <option value="10+">10+ Years Old</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-450 uppercase mb-1.5 block">Quality/Furnishing</label>
                  <select
                    value={furnishing} onChange={(e) => setFurnishing(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-750/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-slate-100 cursor-pointer appearance-none"
                  >
                    <option value="Unfurnished">Unfurnished</option>
                    <option value="Semi-Furnished">Semi-Furnished</option>
                    <option value="Fully Furnished">Fully Furnished</option>
                  </select>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide block mb-3">Amenities available</span>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-650 dark:text-slate-350">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" checked={parking} onChange={(e) => setParking(e.target.checked)} className="rounded text-primary-700 w-4.5 h-4.5 focus:ring-0" />
                    <span>Dedicated Parking Slot</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" checked={pool} onChange={(e) => setPool(e.target.checked)} className="rounded text-primary-700 w-4.5 h-4.5 focus:ring-0" />
                    <span>Swimming Pool Access</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" checked={security} onChange={(e) => setSecurity(e.target.checked)} className="rounded text-primary-700 w-4.5 h-4.5 focus:ring-0" />
                    <span>24x7 Gated Security</span>
                  </label>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  type="submit" disabled={loading}
                  className="px-8 py-3.5 bg-gradient-to-r from-primary-700 to-indigo-700 hover:from-primary-600 hover:to-indigo-650 text-white font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center space-x-2"
                >
                  <span>{loading ? 'Analyzing Data...' : 'Calculate Valuation'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Outputs Panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-tr from-primary-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md border border-primary-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-pulse" />
              
              <h3 className="font-display font-bold text-base border-b border-white/10 pb-4">Estimate Results</h3>

              <AnimatePresence mode="wait">
                {valRange ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Property valuation (Estimated Market Value)</span>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-primary-305 mt-2">
                        ₹{(valRange.min / 100000).toFixed(1)}L - ₹{(valRange.max / 100000).toFixed(1)}L
                      </h2>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated monthly rental yield</span>
                      <h3 className="font-display font-extrabold text-xl text-yellow-300 mt-1">
                        ₹{rentVal.min.toLocaleString()} - ₹{rentVal.max.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ mo</span>
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2 text-xs bg-white/5 border border-white/10 p-3 rounded-xl">
                      <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-300 leading-normal">High demand zone. Average price has appreciated by +8.4% in the last 12 months.</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center text-slate-400 space-y-3"
                  >
                    <Calculator className="w-12 h-12 text-slate-500 mx-auto" />
                    <p className="text-xs">Fill the details on the left and click calculate to estimate property rates.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-105 dark:border-slate-850 p-6 rounded-3xl shadow-sm text-xs leading-relaxed text-slate-500 dark:text-slate-400 flex items-start space-x-2.5">
              <Info className="w-4.5 h-4.5 text-primary-550 shrink-0 mt-0.5" />
              <span>Valuations are algorithmic approximations based on historical data. They do not constitute official property inspections.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyValuation;
