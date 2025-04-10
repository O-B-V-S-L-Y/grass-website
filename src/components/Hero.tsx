import React, { useState } from 'react';
import GrassIcon from './GrassIcon';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up with:', email);
    // In a real app, you would handle the signup process here
    setEmail('');
    alert('Thanks for signing up! We will contact you soon.');
  };

  const backgroundImage = 'https://images.unsplash.com/photo-1686664219282-a1787f057706?q=80&w=2535&auto=format';

  return (
    <section className="relative pt-24 pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="md:border md:border-white/20 md:bg-white/5 md:backdrop-blur-sm md:rounded-3xl md:shadow-custom md:px-8 py-12 md:mt-8 md:overflow-hidden md:clip-border">
                {/* Background with aerial grass photo */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.95) contrast(1.1)"
        }}
      />
      <div className="absolute inset-0 -z-10 bg-black/20 backdrop-blur-[2px]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/80" />

      {/* Noise overlay */}
      <div className="absolute inset-0 -z-10 opacity-30" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px"
        }}
      />
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block mb-6">
              <GrassIcon width={96} height={96} />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white/60">
              Grass.<br/>
              <span className="text-3xl md:text-4xl font-medium text-white/80">The inbox, reinvented. Again.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/80 leading-relaxed">
              Remember when email was useful? Before it devoured your day, your focus, your sanity? Those days are back.
            </p>
            
            <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto">
              Grass is the fastest, simplest, most cathartic way to cut through your inbox. Swipe effortlessly, triage instantly, respond intelligently.
            </p>
            
            <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
              <div className="relative w-full frosted-glass rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-pill pr-32 text-black placeholder:text-black/60"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 button-primary py-2 px-4"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 