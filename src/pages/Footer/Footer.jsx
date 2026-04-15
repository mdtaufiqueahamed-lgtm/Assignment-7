import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* লোগো এবং ডেসক্রিপশন */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-2xl text-indigo-400">
            {/* লোগো ইমেজের জন্য জায়গা */}
            <img src="/assets/logo.png" alt="Logo" className="w-8 h-8" /> 
            <span>KeenKeeper</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Keep your friendships thriving. Track your last contact and never lose touch with the people who matter most.
          </p>
        </div>

        {/* কুইক লিংকস */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/timeline" className="hover:text-indigo-400 transition">Timeline</a></li>
            <li><a href="/stats" className="hover:text-indigo-400 transition">Statistics</a></li>
          </ul>
        </div>

        {/* সোশ্যাল মিডিয়া ইমেজের জন্য জায়গা */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            {/* এখানে তোমার assets এর ইমেজগুলো বসাও */}
            <a href="#" className="hover:opacity-80 transition">
              <img src="/assets/github.png" alt="Github" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src="/assets/twitter.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src="/assets/linkedin.png" alt="Linkedin" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">support@keenkeeper.com</p>
        </div>
      </div>

      {/* কপিরাইট অংশ */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;