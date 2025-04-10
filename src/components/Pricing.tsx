import React from 'react';

const Pricing: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const backgroundImage = 'https://images.unsplash.com/photo-1686664219282-a1787f057706?q=80&w=2535&auto=format';

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
            <div className="relative overflow-hidden">
              {/* Background with aerial grass photo */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${backgroundImage})`,
                  filter: "brightness(0.95) contrast(1.1)"
                }}
              />
              <div className="absolute inset-0 z-[1] bg-black/20 backdrop-blur-[2px]" />
              <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent to-black/80" />

              {/* Noise overlay */}
              <div className="absolute inset-0 z-[3] opacity-30" 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: "200px 200px"
                }}
              />
              
              <div className="py-6 px-8 relative z-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">Grass Premium</h3>
                  <div className="bg-white/20 rounded-full py-1 px-3 text-white text-sm font-medium">
                    500 mails/day
                  </div>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-white">$8</span>
                  <span className="text-xl text-white/80 ml-1">/month</span>
                </div>
                <p className="mt-2 text-white/90">Billed monthly or $80/year</p>
              </div>
            </div>
            
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Unlimited email accounts (Gmail only)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered quick email replies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="flex items-center">
                    <span className="text-gray-700">Intelligent email categorization</span>
                    <div className="ml-2 bg-grass-500/90 text-white rounded-full py-0.5 px-2 text-xs font-bold uppercase tracking-wider shadow-sm">
                      Soon
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered email summaries</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-grass-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Priority customer support</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <button onClick={() => scrollToSection('cta')} className="button-primary w-full py-4">
                  Get Started
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Try free for 10 swipes. Cancel anytime.
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