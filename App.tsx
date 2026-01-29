
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PrivacyPolicy from './components/PrivacyPolicy';
import Support from './components/Support';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section id="support" className="bg-white py-24">
          <Support />
        </section>
        <section id="privacy" className="bg-slate-50 py-24 border-t border-slate-200">
          <PrivacyPolicy />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
