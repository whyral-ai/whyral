import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';
import Header from '../components/homepage/Header';
import Hero from '../components/homepage/Hero';


const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-40">
        <Hero />
      </div>
      
      
    </div>
  );
};

export default Home;
