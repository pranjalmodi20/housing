import React from 'react';
import {
  Hero,
  Categories,
  FeaturedProperties,
  PopularLocalities,
  PropertyCollections,
  Services,
  WhyChooseUs,
  Testimonials,
  AppDownload,
} from '../../components/home';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProperties />
      <PopularLocalities />
      <PropertyCollections />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <AppDownload />
    </>
  );
};

export default Home;
