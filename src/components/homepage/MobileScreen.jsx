import React from "react";

const MobileScreen = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-transparent">
      <div className="relative z-10 w-[360px] h-[740px] rounded-[2.5rem] border-[8px] border-[#c16b24]">
        <div className="relative w-full h-full bg-white/10 rounded-[2rem] overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-1">
            <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white/50 rounded-full" />
            </div>
            <div className="w-2 h-2 bg-gray-700 rounded-full" />
          </div>

          <div className="p-2">
            <div className="flex items-center space-x-4 rounded-xl p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyjG6_xI361bJFK-7Z3xBEH7NhtkoUrTAcQ&s"
                alt="Logo"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-white">Dinesh Pawar</h2>
                <p className="text-sm font-bold text-white">867k</p>
                <p className="text-sm text-white">Total subscribers</p>
              </div>
            </div>

            <h1 className="text-white font-bold px-4">Channel Analytics</h1>

            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col items-center bg-white/10 px-12 py-2 rounded-lg">
                <p className="text-white font-bold">1.2M</p>
                <p className="text-sm text-white">Views</p>
              </div>
              <div className="flex flex-col items-center bg-white/10 px-9 py-2 rounded-lg">
                <p className="text-white font-bold">500k</p>
                <p className="text-sm text-white">Subscribers</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-4">
              <div className="flex flex-col items-center bg-white/10 px-12 py-2 rounded-lg">
                <p className="text-white font-bold">1.2M</p>
                <p className="text-sm text-white">Views</p>
              </div>
              <div className="flex flex-col items-center bg-white/10 px-9 py-2 rounded-lg">
                <p className="text-white font-bold">500k</p>
                <p className="text-sm text-white">Subscribers</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
