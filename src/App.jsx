import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
