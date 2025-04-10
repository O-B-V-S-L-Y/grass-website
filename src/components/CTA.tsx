import React, { useState } from 'react';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up with:', email);
    setEmail('');
    alert('Thanks for signing up! We will contact you soon.');
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-grass-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto frosted-glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Swipe. Triage. Done.
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Close your laptop. Feel the sun. Touch actual grass. This is email management redefined—finally simple, astonishingly fast, unapologetically human.
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-grass-700">Get early access</h3>
            <p className="text-lg text-gray-700">Join our waiting list for exclusive beta access</p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
            <div className="relative w-full frosted-glass rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-pill pr-32"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 button-primary py-2 px-6"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA; 