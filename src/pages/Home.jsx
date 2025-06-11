import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';
import Header from '../components/homepage/Header';
import Hero from '../components/homepage/Hero';
import Brands from '../components/homepage/Brands';
import Layout from '../Layout';
import MobileScreen from '../components/homepage/MobileScreen';
import Test from '../components/homepage/Test';
import WhyVideoViral from '../components/homepage/features/WhyVideoViral';
import RealTimeFeatures from '../components/homepage/features/RealTimeFeatures';
import Testimonials from '../components/homepage/Testimonials';
import Footer from '../components/homepage/Footer';

const Home = () => {
  return (
    
    <div>
      <Layout>
      <Header />
        <Hero />
        <Brands />
        <MobileScreen />
        <Test />
      </Layout>
      <WhyVideoViral />
      <RealTimeFeatures />
      <Testimonials />
      <Footer />
      
      
    </div>
  );
};

export default Home;
