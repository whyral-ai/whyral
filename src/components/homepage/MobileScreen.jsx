import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown, FaChevronUp, FaArrowCircleUp
} from "react-icons/fa";
import { MdOutlineAttachMoney, MdOutlineInsertComment } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import data from "../../data/homeData.json";

const StatCard = ({ title, value }) => (
  <div className="flex flex-col justify-between bg-white/10 px-5 py-4 rounded-xl w-[48%] shadow-md border border-white/10">
    <p className="text-xs text-gray-400">{title}</p>
    <div className="flex items-center space-x-2 text-white font-semibold text-lg mt-1">
      <span>{value}</span>
      <FaArrowCircleUp className="text-green-400 text-sm" />
    </div>
  </div>
);

const VideoCard = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/10 p-4 rounded-xl shadow-md mb-4">
      <div className="flex justify-between items-start mb-2">
        <img src={video.thumbnail} alt="Thumbnail" className="w-20 h-12 object-cover rounded" />
        <div className="flex-1 mx-2">
          <h3 className="text-sm font-semibold line-clamp-1">{video.title}</h3>
          <p className="text-xs text-gray-400">{video.timestamp}</p>
        </div>
      </div>

      <div className="border-t border-gray-700 my-3" />

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1 text-green-400">
            <MdOutlineAttachMoney />
          </div>
          <div className="flex items-center space-x-1">
            <GoGraph className="h-4 w-4" />
            <span>{video.views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BiLike className="h-4 w-4" />
            <span>{video.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MdOutlineInsertComment className="h-4 w-4" />
            <span>{video.comments}</span>
          </div>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:opacity-80">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-4 text-sm text-gray-300 space-y-3 border-t border-gray-700 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-2">Ranking by Views</h4>
            <div className="flex justify-between">
              <span>Views</span>
              <span className="flex items-center space-x-1">
                <span>{video.extraMetrics.views}</span>
                <FaArrowCircleUp className="text-green-400 text-base" />
              </span>
            </div>
            <div className="flex justify-between">
              <span>Impression CTR</span>
              <span className="flex items-center space-x-1">
                <span>{video.extraMetrics.ctr}</span>
                <FaArrowCircleUp className="text-green-400 text-base" />
              </span>
            </div>
            <div className="flex justify-between">
              <span>Avg View Duration</span>
              <span className="flex items-center space-x-1">
                <span>{video.extraMetrics.avgDuration}</span>
                <FaArrowCircleUp className="text-green-400 text-base" />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileScreen = () => {
  const { channelInfo, analytics, videos } = data;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black mx-universal">

      <div className="absolute -bottom-10 z-0 w-full h-44 bg-white/10 rounded-2xl items-center px-4 hidden md:flex">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white text-7xl font-bold">
            Don’t be busy
          </h1>
          <h1 className="text-white text-7xl font-bold text-right">
            be productive
          </h1>
        </div>
      </div>

      <div className="relative z-10 w-[360px] h-[740px] rounded-[2.5rem] bg-black border-[8px] border-[#c16b24] shadow-2xl overflow-hidden">
        <div className="w-full h-full rounded-[2rem] overflow-y-auto pt-10 px-4 pb-6 hide-scrollbar">

          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center w-full justify-center space-x-1">
            <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white/50 rounded-full" />
            </div>
            <div className="w-2 h-2 bg-gray-500 rounded-full" />
          </div>

          <div className="flex items-center space-x-4 rounded-xl p-4 mb-5 bg-[#1c1c1c] shadow-inner">
            <img
              src={channelInfo.avatar}
              alt="Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">{channelInfo.name}</h2>
              <p className="text-sm font-bold text-white">{channelInfo.subscribers}</p>
              <p className="text-sm text-gray-400">{channelInfo.description}</p>
            </div>
          </div>

          <h1 className="text-white font-bold text-lg mb-3 px-1">Channel Analytics</h1>
          <div className="flex flex-wrap justify-between gap-y-4">
            {analytics.map((item, idx) => (
              <StatCard key={idx} title={item.title} value={item.value} />
            ))}
          </div>

          <div className="mt-6 text-white rounded-md">
            <h2 className="text-lg font-bold mb-4">Latest Published Content</h2>
            {videos.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileScreen;
