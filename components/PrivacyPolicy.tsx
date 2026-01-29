
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h2>
        <p className="text-slate-500 mb-8 font-medium italic">Last Updated: January 29, 2026</p>
        
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Overview</h3>
            <p>We respect your privacy. This app allows you to generate jigsaw puzzles from your personal photos. We do not collect, store, or share your personal data.</p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Photos and Camera Data</h3>
            <p className="mb-4">Our app requires access to your device's photo library to function. This access is strictly limited to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Allowing you to select a specific image for puzzle generation.</li>
              <li>Processing that image to create the puzzle outline.</li>
            </ul>
            <p className="mt-4 p-4 bg-indigo-50 border-l-4 border-indigo-500 text-indigo-900 italic font-medium">
              Important: All image processing is performed locally on your device. We do not upload your photos to any external server, and we do not view or store your images.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Data Collection</h3>
            <p className="mb-4">We do not collect any personally identifiable information (PII).</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900">Usage Data:</h4>
                <p>We may collect anonymous, aggregate usage statistics (e.g., app crashes) via third-party services to improve app stability.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Advertising:</h4>
                <p>We may display non-personalized advertisements provided by third-party networks.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">4. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@yourdomain.com" className="text-indigo-600 font-semibold underline decoration-indigo-200 underline-offset-4">support@yourdomain.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
