import React from "react";

const RealTimeFeatures = ({ label, title, description, buttonText, imgUrl }) => {
  return (
    <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-start justify-between space-y-4">
      <p className="text-xs text-yellow-400 uppercase tracking-widest font-medium">
        {label}
      </p>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-white text-sm leading-relaxed sm:text-base">
        {description}
      </p>
      <button className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-300 transition-colors text-sm font-semibold">
        {buttonText}
      </button>
      <div className="w-full flex justify-center">
        <img
          src={imgUrl}
          alt="Illustration"
          className="w-44 h-44 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default function TwoCards() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:mx-universal py-10">
      <RealTimeFeatures
        label="AI Agent"
        title="Real-Time Tags & Title Updation"
        description="Leverage AI to receive actionable suggestions for updating tags and titles on both old and new videos, enhancing their potential to go viral."
        buttonText="Try for Free"
        imgUrl="https://template.canva.com/EAFijA-Es8I/2/0/1600w-GYC6pgjsZrM.jpg"
      />
      <RealTimeFeatures
        label="Content Hunting"
        title="High-Viral Video Suggestions for Our Members"
        description="Access a curated feed of trending video ideas based on real-time insights from YouTube to stay consistently ahead of content trends."
        buttonText="Hunt Now"
        imgUrl="https://template.canva.com/EAFijA-Es8I/2/0/1600w-GYC6pgjsZrM.jpg"
      />
    </div>
  );
}
