import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';
import Header from '../components/homepage/Header';
import Hero from '../components/homepage/Hero';
import Brands from '../components/homepage/Brands';
import Layout from '../Layout';
import MobileScreen from '../components/homepage/MobileScreen';
import Test from '../components/homepage/test';


const Home = () => {
  return (
    
    <div>
      <Layout>
      <Header />
        <Hero />
        <Brands />
        <MobileScreen />
      </Layout>
      <Test />
      
      
    </div>
  );
};

export default Home;
