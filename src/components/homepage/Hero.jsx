import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const platforms = [
  'YouTube',
  'Instagram',
  'Facebook',
  'LinkedIn',
  'Threads',
  'TikTok',
  'Quora',
  'X Platform',
  'with whyral.ai',
];

const Hero = () => {
  const [loopedPlatforms, setLoopedPlatforms] = useState([]);

  useEffect(() => {
    setLoopedPlatforms([...platforms, ...platforms]);
  }, []);

  const totalItems = loopedPlatforms.length;
  const itemHeight = 60; 
  const durationPerItem = 0.2;
  const pauseOnWhyral = 3;

  const totalHeight = totalItems * itemHeight;
  const scrollHeight = -(totalHeight / 2); 

  return (
    <section className="relative bg-white/10 py-28 px-28 mx-9 rounded-3xl text-white overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Build Your Empire on{' '}
          <span className="inline-block h-[70px] w-[400px] overflow-hidden align-middle relative">
            <motion.div
              animate={{
                y: [0, scrollHeight],
              }}
              transition={{
                duration: totalItems * durationPerItem + pauseOnWhyral,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="absolute top-0 left-0"
            >
              {loopedPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className={` flex items-end text-yellow-400 text-7xl ${
                    platform === 'with whyral.ai' ? 'text-white font-bold' : ''
                  }`}
                >
                  {platform}
                </div>
              ))}
            </motion.div>
          </span>
        </h1>

        <p className="text-2xl font-semibold">
          Your system for consistent content creation
        </p>

        <div className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg w-64 sm:w-80 md:w-96 text-black"
          />
          <button className="bg-yellow-500 text-black p-3 rounded-r-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
