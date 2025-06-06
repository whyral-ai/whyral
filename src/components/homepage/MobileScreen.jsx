import React from 'react';

const MobileScreen = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">

      <div className="w-[360px] h-[740px] rounded-[2.5rem] bg-[#c16b24] p-2 shadow-xl relative">

        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          

          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex justify-center items-center space-x-1">

            <div className="w-4 h-4 bg-black rounded-full"></div>

            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
          </div>


          <div className="h-full overflow-y-auto p-4 space-y-4 hide-scrollbar">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="bg-blue-100 p-4 rounded-lg shadow text-sm">
                This is card #{i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
