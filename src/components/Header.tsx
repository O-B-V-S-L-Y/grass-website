import React from 'react';
import GrassIcon from './GrassIcon';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-50 py-4 backdrop-blur-lg bg-white/70 shadow-custom-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <GrassIcon width={40} height={40} />
          <span className="text-2xl font-bold text-grass-600">Grass</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-grass-500 transition-colors">Features</a>
          <a href="#about" className="text-gray-700 hover:text-grass-500 transition-colors">About</a>
          <a href="#pricing" className="text-gray-700 hover:text-grass-500 transition-colors">Pricing</a>
        </nav>
        
        <button 
          onClick={() => scrollToSection('cta')}
          className="button-secondary py-2 px-4"
        >
          Try Grass
        </button>
      </div>
    </header>
  );
};

export default Header; 