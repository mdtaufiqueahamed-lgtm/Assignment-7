import React from 'react';
import facebookImg from '../../assets/facebook.png'
import igImg from '../../assets/instagram.png'
import xImg from '../../assets/twitter.png'

const Footer = () => {
  return (
    <footer className="bg-[#1a3c34] text-white py-12 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        
        {/* লোগো: আগের মতো রাখা হয়েছে */}
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">
          KeenKeeper
        </h2>
        
        {/* ডেসক্রিপশন: এক লাইনে করা হয়েছে */}
        <p className="text-gray-200 text-base md:text-lg lg:text-xl mb-8 whitespace-nowrap overflow-hidden text-ellipsis">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* সোশ্যাল লিংক সেকশন */}
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-gray-300">
            Social Links
          </h3>
          <div className="flex justify-center items-center gap-4">
            <img src={facebookImg} alt="FB" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-2 cursor-pointer hover:bg-emerald-400 transition-colors" />
            <img src={igImg} alt="IG" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-2 cursor-pointer hover:bg-emerald-400 transition-colors" />
            <img src={xImg} alt="X" className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-2 cursor-pointer hover:bg-emerald-400 transition-colors" />
          </div>
        </div>

        {/* পলিসি লিংকস: গ্যাপ কমিয়ে আনা হয়েছে */}
        <div className="flex justify-center gap-6 text-sm md:text-base text-gray-300 mb-8">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
        
        {/* কপিরাইট */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-gray-400 text-sm md:text-base">
            © 2026 KeenKeeper. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;