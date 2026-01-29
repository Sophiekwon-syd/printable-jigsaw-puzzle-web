
import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; step: string; icon: React.ReactNode }> = ({ title, description, step, icon }) => (
  <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
    <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">
      {step}
    </div>
    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{title}</h3>
    <p className="text-slate-600 leading-relaxed relative z-10">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Create your customized puzzle in three simple steps. No design skills required.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            step="01"
            title="Pick Your Photo"
            description="Choose any image from your gallery. Whether it's a family portrait, a pet photo, or a vacation shot."
            icon={(
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            )}
          />
          <FeatureCard 
            step="02"
            title="Instant Generation"
            description="Our smart engine converts your photo into high-resolution puzzle pieces ready for paper."
            icon={(
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
          />
          <FeatureCard 
            step="03"
            title="Print & Cut"
            description="Print directly from your phone to any AirPrint/home printer. Grab scissors and start assembling!"
            icon={(
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
