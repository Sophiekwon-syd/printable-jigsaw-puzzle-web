
import React from 'react';

import logo from './printablejigsawpuzzle_logo.png';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden bg-[#FD7979]">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Printable Jigsaw</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How It Works</a>
            <a href="#support" className="hover:text-indigo-600 transition-colors">Support</a>
            <a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy</a>
          </nav>
          <div>
            <a
              href="#download"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200"
            >
              Get App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
