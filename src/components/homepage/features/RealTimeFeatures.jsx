import React from "react";
import { motion } from "framer-motion";

const RealTimeFeatures = () => {
  return (
    <motion.div
      className="bg-white/10 rounded-lg flex flex-col p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h1 className="text-2xl text-brand font-bold mb-2">AI AGENT</h1>
      <h2 className="text-xl font-semibold mb-4 text-white">
        Real Time Tags & Title Updation
      </h2>
      <p className="text-white mb-6 leading-relaxed text-sm sm:text-base">
        AI ke help se aapke old and latest video ko tags and titles ko updates karne ke
        suggestion diye jayenge jisase video aur viral hone me help hogi.
      </p>
      <button className="bg-brand text-black px-5 py-2 w-40 rounded hover:bg-hover mb-6 transition">
        Try for Free
      </button>
      <img
        src="https://template.canva.com/EAFijA-Es8I/2/0/1600w-GYC6pgjsZrM.jpg"
        alt="AI Agent Illustration"
        className="w-36 h-36 object-cover mx-auto"
      />
    </motion.div>
  );
};

export default function TwoCards() {
  return (
    <div className="flex flex-col sm:flex-row justify-start gap-8 mx-universal mt-9">
      <RealTimeFeatures />
      <RealTimeFeatures />
    </div>
  );
}
