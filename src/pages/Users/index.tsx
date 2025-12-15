'use client'

import React, { useEffect } from 'react';
import Hero from '../../components/PageComponents/Hero';
import About from '../../components/PageComponents/About';
import HowItWorks from '../../components/PageComponents/HowItWorks';
import Features from '../../components/PageComponents/Features';

const Home: React.FC = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.setAttribute('style', 'background: #FFF!important;');
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
    </>
  );
};

export default Home;
