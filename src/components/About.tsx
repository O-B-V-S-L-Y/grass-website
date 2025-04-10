import React from 'react';
import GrassIcon from './GrassIcon';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Email handled. Life reclaimed.
          </h2>
          <p className="text-xl text-gray-600">
            We built Grass with one mission: Give people back the time that email steals from them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="frosted-glass rounded-2xl p-8 shadow-custom">
              <div className="mb-4 flex items-center justify-center">
                <GrassIcon width={64} height={64} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Grass started when our team realized we were spending more time managing our inboxes than actually doing our jobs. 
              </p>
              <p className="text-gray-600 mb-4">
                We couldn't find a tool that truly valued our time and attention the way we did. So we built one.
              </p>
              <p className="text-gray-600">
                Our guiding principle is simple: Email should be a tool, not a task. It should enable your productivity, not consume it.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="frosted-glass rounded-2xl p-6 shadow-custom">
              <h4 className="text-xl font-bold mb-2 text-grass-600">Ruthlessly Efficient</h4>
              <p className="text-gray-600">
                Every feature in Grass is designed to maximize speed and minimize mental overhead.
              </p>
            </div>
            
            <div className="frosted-glass rounded-2xl p-6 shadow-custom">
              <h4 className="text-xl font-bold mb-2 text-grass-600">Beautifully Simple</h4>
              <p className="text-gray-600">
                Complex problems don't need complex solutions. Grass helps you cut through the noise without adding more of its own.
              </p>
            </div>
            
            <div className="frosted-glass rounded-2xl p-6 shadow-custom">
              <h4 className="text-xl font-bold mb-2 text-grass-600">Privacy First</h4>
              <p className="text-gray-600">
                Your emails contain your life. We built Grass with robust privacy protections and transparent data practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 