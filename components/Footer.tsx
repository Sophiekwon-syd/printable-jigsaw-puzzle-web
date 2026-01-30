
import React from 'react';

import logo from './printablejigsawpuzzle_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded flex items-center justify-center overflow-hidden bg-[#FD7979]">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-semibold text-slate-900">Printable Jigsaw Puzzle</span>
          </div>

          <p>© skwon{new Date().getFullYear()} All rights reserved. Made for puzzle enthusiasts.</p>

          <div className="flex gap-8">
            <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#support" className="hover:text-indigo-600 transition-colors">Support</a>
            <a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
