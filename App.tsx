import React from 'react';
import Hero from './components/Hero';
import HouseList from './components/HouseList';
import PhotoGallery from './components/PhotoGallery';
import Location from './components/Location';
import Footer from './components/Footer';
import GeminiConcierge from './components/GeminiConcierge';
import TheBeach from './components/TheBeach';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-sand-100 min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-white font-serif font-bold text-xl tracking-wider drop-shadow-md">
                  SUNSET VILLAS
              </div>
              
              <a href="#houses" className="bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-sunset-100 transition-colors">
                  RESERVAR
              </a>
          </div>
      </header>

      <main className="flex-grow">
        <Hero />
        <HouseList />
        <TheBeach />
        <Location />
        <PhotoGallery />
      </main>

      <Footer />
      <GeminiConcierge />
    </div>
  );
}

export default App;