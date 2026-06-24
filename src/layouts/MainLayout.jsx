import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Subtle layout radial backgrounds for visual depth */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#FAFAF8]/30 via-[#F5F4F1]/10 to-transparent dark:from-[#0E1412]/30 dark:via-[#141D1A]/10 dark:to-transparent pointer-events-none -z-10" />
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-primary-500/[0.012] blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[25%] right-[-15%] w-[650px] h-[650px] rounded-full bg-indigo-500/[0.012] blur-[150px] pointer-events-none -z-10" />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
