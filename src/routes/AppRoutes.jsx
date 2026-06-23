import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home, Buy, Rent, Commercial, Plots, PG,
  SearchResults, PropertyDetails,
  EMICalculator, RentAgreement,
  Login, Register, Profile,
  About, Contact, FAQ,
  HomeLoan, PropertyValuation,
  Builder, City, Locality, Collections,
  NotFound
} from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/plots" element={<Plots />} />
      <Route path="/pg" element={<PG />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/services/emi-calculator" element={<EMICalculator />} />
      <Route path="/services/rent-agreement" element={<RentAgreement />} />
      <Route path="/services/home-loan" element={<HomeLoan />} />
      <Route path="/services/property-valuation" element={<PropertyValuation />} />
      <Route path="/builder/:id" element={<Builder />} />
      <Route path="/city/:cityName" element={<City />} />
      <Route path="/locality/:localityName" element={<Locality />} />
      <Route path="/collections/:colId" element={<Collections />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

