import React from 'react';
import youtube from '../../assets/youtube.png';
import amazon from '../../assets/insagram.png';
import facebook from '../../assets/facebook.png';

const Brands = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full  max-w-4xl flex items-center">

        <div className="flex-grow h-0.5 bg-gray-300"></div>


        <div className="flex space-x-6 mx-6 bg-white/70 rounded-full">
          {[youtube, amazon, facebook].map((img, index) => (
            <div
              key={index}
              className="p-4 rounded-full hover:scale-105 transition-transform duration-300"
            >
              <img src={img} alt="brand" className="w-full h-10" />
            </div>
          ))}
        </div>


        <div className="flex-grow h-0.5 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Brands;
