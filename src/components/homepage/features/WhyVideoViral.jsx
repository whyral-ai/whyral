import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaTags, FaBrain, FaRocket  } from 'react-icons/fa';


export default function WhyVideoViral() {
  return (
    <div className="flex items-center justify-center mx-universal">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full bg-white/10 rounded-xl shadow-xl overflow-hidden"
      >
        <div className="flex-1 p-8 space-y-6">
          <p className="text-sm text-brand uppercase tracking-wide font-semibold">
            magic
          </p>
          <h2 className="text-3xl font-bold text-white">
            Why this video goes viral
          </h2>
          <p className="text-white">
            Just paste the link and find out why this video <br />
            is going viral, and get magical insights.<br />
          </p>

          <button className="flex items-center gap-2 bg-brand text-black px-5 py-2 rounded-md transition">
            Try for Free <FiArrowRight />
          </button>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <FaBrain   className="text-brand text-xl mt-1" />
              <p className="text-white">Get a full-stack idea for the next video just from the link.</p>
            </div>
            <div className="flex items-start gap-3">
              <FaTags   className="text-brand text-xl mt-1" />
              <p className="text-white">Get tags, titles, and scripts on similar topics.</p>
            </div>
            <div className="flex items-start gap-3">
              <FaRocket  className="text-brand text-xl mt-1" />
              <p className="text-white">AI insights that explain why the video is going viral.</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 bg-cover bg-center min-h-[300px] md:min-h-[400px] "
          style={{
            backgroundImage:
              "url('https://template.canva.com/EAFijA-Es8I/2/0/1600w-GYC6pgjsZrM.jpg')",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
