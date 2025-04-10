import React from 'react';

const features = [
  {
    title: 'Inbox zero, made effortless.',
    description: 'Emails aren\'t your job—they\'re just getting in your way. Grass clears that path with ruthless efficiency. Swipe left, right, up—archive the noise, flag the essentials, dismiss the distractions. Fast AF.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    )
  },
  {
    title: 'Stop managing email. Start managing life.',
    description: 'Inspired by the Eisenhower Matrix, Grass brings clarity to chaos. Every swipe is intentional: Archive irrelevant items, defer non-urgent tasks, prioritize important matters. Your inbox, triaged in seconds. Your attention, freed forever.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    title: 'Intelligent replies, instant relief.',
    description: 'Grass doesn\'t just clear the clutter; it tackles replies too. AI-crafted responses ready in a tap—polished, precise, profoundly you. Respond faster, reclaim your brain.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Your inbox is lying to you.</h2>
          <p className="text-xl text-gray-600">
            Emails scream urgency when they're anything but. Grass sees through it all, empowering you to silence fake emergencies with a swipe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="frosted-glass rounded-2xl p-8">
              <div className="text-grass-500 mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-32 text-center">
          <div className="inline-block p-6 max-w-2xl">
            <ul className="text-left space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-grass-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Because your boss's "gentle ping" isn't your crisis.
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-grass-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Because you shouldn't reply "Thanks!" twenty times a day.
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-grass-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Because Slack already owns your soul.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 