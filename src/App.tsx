import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
          <Hero />
          <Features />
          <About />
          <Pricing />
          <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
