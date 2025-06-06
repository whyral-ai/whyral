import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';
import Header from '../components/homepage/Header';
import Hero from '../components/homepage/Hero';
import Brands from '../components/homepage/Brands';
import Layout from '../Layout';
import MobileScreen from '../components/homepage/MobileScreen';


const Home = () => {
  return (
    
    <div>
      <Layout>
      <Header />
        <Hero />
        <Brands />
        <MobileScreen />
      </Layout>
      
      
    </div>
  );
};

export default Home;
