import React from 'react';

const Pricing: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-grass-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Simple pricing. No surprises.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One plan. Everything you need to reclaim your time and attention.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="frosted-glass rounded-3xl overflow-hidden shadow-custom">
            <div className="bg-gradient-to-r from-grass-600 to-grass-500 py-6 px-8">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">Grass Premium</h3>
                <div className="bg-white/20 rounded-full py-1 px-3 text-white text-sm font-medium">
                  No limits
                </div>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">$8</span>
                <span className="text-xl text-white/80 ml-1">/month</span>
              </div>
              <p className="mt-2 text-white/90">Billed monthly or $80/year</p>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Unlimited email accounts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered email responses</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Intelligent email categorization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority customer support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Early access to new features</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <button onClick={() => scrollToSection('cta')} className="button-primary w-full py-4">
                  Get Started
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Try free for 14 days. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 