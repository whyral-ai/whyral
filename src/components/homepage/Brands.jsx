import React from 'react';
import youtube from '../../assets/youtube.png';
import amazon from '../../assets/insagram.png';
import facebook from '../../assets/facebook.png';

const Brands = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-0">
      <div className="w-full max-w-4xl flex items-center">

        <div className="flex-grow h-0.5 bg-gray-300"></div>

        <div className="flex space-x-4 sm:space-x-6 mx-4 sm:mx-6 bg-white/70 rounded-full px-4 py-2 sm:px-6 sm:py-3">
          {[youtube, amazon, facebook].map((img, index) => (
            <div
              key={index}
              className="p-2 sm:p-4 rounded-full hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt="brand"
                className="h-6 w-auto sm:h-10 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="flex-grow h-0.5 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Brands;
