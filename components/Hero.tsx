
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="aspect-[1000/1000] w-[80rem] bg-gradient-to-tr from-indigo-400 to-violet-600" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Turn Your Memories <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                into Real Puzzles.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              The easiest way to create printable jigsaw puzzles from your own photos. 
              No waiting for shipping—just print and play.
            </p>
            
            <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              {/* Apple Store Button */}
              <a href="#" className="flex items-center bg-black text-white px-8 py-3 rounded-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-semibold leading-none">Download on the</p>
                  <p className="text-xl font-bold leading-none mt-1">App Store</p>
                </div>
              </a>
              
              {/* Google Play Button */}
              <a href="#" className="flex items-center bg-black text-white px-8 py-3 rounded-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-semibold leading-none">Get it on</p>
                  <p className="text-xl font-bold leading-none mt-1">Google Play</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="mt-20 lg:mt-0 relative">
            <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
              <img 
                src="https://picsum.photos/seed/puzzle-hero/800/1000" 
                alt="App Interface" 
                className="rounded-3xl shadow-2xl border-8 border-slate-900 transform rotate-2 lg:rotate-6 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full flex items-center justify-center -z-10 animate-pulse">
                <div className="w-32 h-32 bg-indigo-200 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
