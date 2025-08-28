import React from "react";
import { FiTrendingUp, FiStar, FiGlobe, FiHeart } from "react-icons/fi";
import { FaPaintBrush, FaGem } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-bgSoft text-bgLight px-6 py-16 border-b border-bgMuted">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-heading text-highlight text-center mb-8">
          About ZANTETSU
        </h1>

        {/* Intro */}
        <p className="text-lg font-body text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          At <span className="text-accentGold font-semibold">ZANTETSU</span>, we
          believe fashion is more than clothing—it’s power, style, and identity.  
          Our designs are inspired by the raw energy of manga, street culture, and
          modern minimalism, crafted to make you stand out with confidence.
        </p>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="bg-bgMuted p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-subheading text-accentGold mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 font-body leading-relaxed">
              To become a global brand that represents bold individuality and
              artistic expression, where every piece tells a story of strength and
              creativity.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-bgMuted p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
            <h2 className="text-2xl font-subheading text-accentGold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 font-body leading-relaxed">
              We craft high-quality, limited-edition fashion inspired by anime and
              urban life. Our mission is to empower dreamers, creators, and rebels
              to wear their true identity with pride.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-heading text-highlight text-center mb-6">
            Our Core Values
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <li className="bg-bgMuted p-6 rounded-xl shadow-md font-body text-gray-300 flex flex-col items-center gap-2">
              <FiTrendingUp className="text-accentGold text-3xl" />
              Bold Creativity
            </li>
            <li className="bg-bgMuted p-6 rounded-xl shadow-md font-body text-gray-300 flex flex-col items-center gap-2">
              <FiStar className="text-accentGold text-3xl" />
              Premium Quality
            </li>
            <li className="bg-bgMuted p-6 rounded-xl shadow-md font-body text-gray-300 flex flex-col items-center gap-2">
              <FaGem className="text-accentGold text-3xl" />
              Limited Editions
            </li>
            <li className="bg-bgMuted p-6 rounded-xl shadow-md font-body text-gray-300 flex flex-col items-center gap-2">
              <FiGlobe className="text-accentGold text-3xl" />
              Global Influence
            </li>
            <li className="bg-bgMuted p-6 rounded-xl shadow-md font-body text-gray-300 flex flex-col items-center gap-2">
              <FaPaintBrush className="text-accentGold text-3xl" />
              Artistic Freedom
            </li>
            <li className="bg-bgMuted p-6 rounded-xl shadow-md font-body text-gray-300 flex flex-col items-center gap-2">
              <FiHeart className="text-accentGold text-3xl" />
              Community First
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
