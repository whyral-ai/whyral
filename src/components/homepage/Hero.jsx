import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const platforms = ["whyral.ai", "YouTube", "Instagram", "Facebook", "TikTok"];

const Hero = () => {
  const [loopedPlatforms, setLoopedPlatforms] = useState([]);

  useEffect(() => {
    setLoopedPlatforms([...platforms, ...platforms]);
  }, []);

  const totalItems = loopedPlatforms.length;
  const itemHeight = 80;
  const durationPerItem = 1;
  const pauseOnWhyral = 9;
  const scrollHeight = -(totalItems * itemHeight) / 2;

  return (
    <section className="relative bg-white/10 py-24 px-4 sm:px-6 md:px-28 mx-universal rounded-3xl text-white overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 sm:mb-8">
          Build Your Empire on{" "}
          <span className="inline-block relative h-[48px] sm:h-[60px] w-full sm:w-[400px] max-w-full overflow-hidden align-middle">
            <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md border border-white/20 shadow-inner" />
            <motion.div
              animate={{ y: [0, scrollHeight] }}
              transition={{
                duration: totalItems * durationPerItem + pauseOnWhyral,
                ease: "linear",
                repeat: Infinity,
              }}
              className="absolute top-0 left-0 w-full text-center"
            >
              {loopedPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className={`h-[80px] flex justify-center items-center text-4xl sm:text-5xl md:text-6xl ${
                    platform === "whyral.ai" ? "text-brand" : "text-brand"
                  }`}
                >
                  {platform}
                </div>
              ))}
            </motion.div>
          </span>
        </h1>

        <p className="text-lg sm:text-2xl font-medium sm:font-semibold mt-4 sm:mt-6">
          One system. Endless growth.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg sm:rounded-l-lg w-full sm:w-80 md:w-96 text-black text-sm sm:text-base"
          />
          <button className="bg-brand text-black p-3 w-full sm:w-auto sm:rounded-r-lg rounded-lg font-semibold text-sm sm:text-base">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
